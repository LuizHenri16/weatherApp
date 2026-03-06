import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";

import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchIcon from "../../assets/icons/search-icon.svg";
import { CardWeather } from "../components/cardWeather";
import { IconWeather } from "../components/iconWeather";
import { WeatherInfos } from "../components/weatherInfos";
import getWeather from "../services/api/weatherAPI";
import { WeatherData } from "../services/types/weatherData";
import { styles } from "../style/style";

export default function Home() {

    const [location, setLocation] = useState<string | null>("São Paulo");
    const [weather, setWeather] = useState<WeatherData | null>(null);

    const forecast = weather?.forecast.forecastday[0].hour.map((hour) => {
        return {
            time: hour.time.split(' ')[1],
            condition: hour.condition,
            temp_c: hour.temp_c,
            is_day: hour.is_day,
            code: hour.condition.code,
        }
    })

    async function loadWeather() {
        const data = await getWeather(location!);
        setWeather(data);
    }

    useEffect(() => {
        loadWeather();
    }, []);

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View>
                <View style={styles.searchContainer} >
                    <TextInput placeholder="Digite o nome da cidade" style={styles.searchTextInput} placeholderTextColor={"#fff"} onChangeText={setLocation} />
                    <TouchableOpacity style={styles.searchButton} onPress={loadWeather}>
                        <SearchIcon width={26} height={26} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.weatherContainer}>
                <View style={styles.weatherInfo}>
                    <Text style={styles.weatherInfoCity}>{weather?.location?.name}</Text>
                    <Text style={styles.weatherInfoCountry}>, {weather?.location?.country}</Text>
                </View>
                <IconWeather width={240} height={240} code={weather?.current?.condition?.code ?? ""} isDay={weather?.current.is_day ?? 1} />
                <Text style={styles.weatherInfoTemperature}>{weather?.current.temp_c}°C</Text>
                <View>
                    <WeatherInfos day={weather?.current.is_day ?? 1} humidity={weather?.current.humidity ?? 0} wind={weather?.current.wind_kph ?? 0} />
                </View>
                <FlatList
                    style={styles.forecastList}
                    data={forecast}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <CardWeather day={item.time} code={item.condition.code} isDay={item.is_day} temp={item.temp_c} />
                    )}
                    keyExtractor={(item) => item.time}
                />
            </View>

        </SafeAreaView>
    );
}
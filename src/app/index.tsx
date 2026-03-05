import { Text, TextInput, TouchableOpacity, View } from "react-native";

import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchIcon from "../../assets/icons/search-icon.svg";
import { IconWeather } from "../components/iconWeather";
import getWeather from "../services/api/weatherAPI";
import { WeatherData } from "../services/types/weatherData";
import { styles } from "../style/style";

export default function Home() {

    const [location, setLocation] = useState<string | null>("São Paulo");
    const [weather, setWeather] = useState<WeatherData | null>(null);


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
            </View>
            <View>

            </View>
        </SafeAreaView>
    );
}
import { View } from "react-native";

import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconWeather } from "../components/iconWeather";
import getWeather from "../services/api/weatherAPI";
import { WeatherData } from "../services/types/weatherData";

export default function Home() {

    const [weather, setWeather] = useState<WeatherData | null>(null);

    useEffect(() => {
        async function loadWeather() {
            const data = await getWeather("");
            setWeather(data);
        }
        loadWeather();
    }, []);


    return (
        <SafeAreaView>
            <View>
                <IconWeather code={weather?.current?.condition?.code ?? ""} idDay={true} />
            </View>
        </SafeAreaView>
    );
}
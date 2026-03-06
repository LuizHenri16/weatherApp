import { Text, View } from "react-native";
import { styles } from "../style/style";
import { IconWeather } from "./iconWeather";

interface CardWeatherProps {
    day: string;
    code: string | number;
    isDay: number;
    temp: number;
}

export const CardWeather = ({ day, code, isDay, temp }: CardWeatherProps) => {
    return (
        <View style={styles.cardWeather}>
            <IconWeather width={52} height={52} code={code} isDay={isDay} />
            <Text style={styles.cardWeatherText}>{day}</Text>
            <Text style={styles.cardWeatherTemp}>{temp}°C</Text>
        </View>
    );
}
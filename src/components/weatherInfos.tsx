import { Text, View } from "react-native";
import HumidityIcon from "../../assets/icons/humidity_icon.svg";
import WindIcon from "../../assets/icons/weather/weather_breeze.svg";
import MoonIcon from "../../assets/icons/weather/weather_moon.svg";
import SunIcon from "../../assets/icons/weather/weather_sunny.svg";
import { styles } from "../style/style";

interface WeatherInfosProps {
    day: number;
    humidity: number;
    wind: number;
}

export const WeatherInfos = ({ day, humidity, wind }: WeatherInfosProps) => {
    return (
        <View style={styles.weatherInfos}>
            <View style={styles.weatherInfosItem}>
                <WindIcon width={48} height={48} />
                <Text style={styles.weatherInfosItemText}>{wind}</Text>
            </View>
            <View style={styles.weatherInfosItem}>
                <HumidityIcon width={48} height={48} />
                <Text style={styles.weatherInfosItemText}>{humidity}</Text>
            </View>
            <View style={styles.weatherInfosItem}>
                {day === 1 ? <SunIcon width={42} height={42} /> : <MoonIcon width={42} height={42} />}
                <Text style={styles.weatherInfosItemText}>{day === 1 ? "Dia" : "Noite"}</Text>
            </View>
        </View>
    );
};
import { getWeatherIcon } from "../services/util/weatherUtils";

import Blizzard from "../../assets/icons/weather/weather_blizzard.svg";
import Breeze from "../../assets/icons/weather/weather_breeze.svg";
import MoonCloudy from "../../assets/icons/weather/weather_cloudy-night.svg";
import Cloudy from "../../assets/icons/weather/weather_cloudy.svg";
import Fog from "../../assets/icons/weather/weather_fog.svg";
import Hail from "../../assets/icons/weather/weather_hail.svg";
import Moon from "../../assets/icons/weather/weather_moon.svg";
import RainSnow from "../../assets/icons/weather/weather_rain-snow.svg";
import RainThunderstorm from "../../assets/icons/weather/weather_rain-thunderstorm.svg";
import Rain from "../../assets/icons/weather/weather_rain.svg";
import Snow from "../../assets/icons/weather/weather_snow.svg";
import SunnyCloudy from "../../assets/icons/weather/weather_sunny-clouds.svg";
import Sunny from "../../assets/icons/weather/weather_sunny.svg";
import Thunderstorm from "../../assets/icons/weather/weather_thunderstorm.svg";


// Criando um objeto para mapear os Icones e achar pelo nome
const icons: Record<string, React.ComponentType<any>> = {
    Sunny,
    SunnyCloudy,
    Cloudy,
    Rain,
    RainThunderstorm,
    RainSnow,
    Snow,
    Thunderstorm,
    Fog,
    Hail,
    Moon,
    MoonCloudy,
    Blizzard,
    Breeze,
}

interface IconWeatherProps {
    code: string | number;
    idDay: boolean;
}

export const IconWeather = ({ code, idDay }: IconWeatherProps) => {
    const iconName = getWeatherIcon(code, idDay);
    const IconComponent = icons[iconName] || icons.Sunny;
    return (
        <IconComponent width={50} height={50} />
    );
};
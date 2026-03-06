export const getWeatherIcon = (code: number | string, isDay = true) => {
    const c = Number(code);

    // Mapeamento por grupos (Engenharia de Software: agrupamento por afinidade)
    const mapping: Record<number, string> = {
        // --- CÉU LIMPO ---
        1000: isDay ? 'Sunny' : 'Moon',

        // --- NUVENS ---
        1003: isDay ? 'SunnyCloudy' : 'MoonCloudy',
        1006: 'Cloudy', // Cloudy
        1009: 'Cloudy', // Overcast

        // --- NÉVOA E FOG ---
        1030: 'Fog', // Mist
        1135: 'Fog', // Fog
        1147: 'Fog', // Freezing fog

        // --- CHUVA / GAROA ---
        1063: 'Rain', // Patchy rain possible
        1150: 'Rain', // Patchy light drizzle
        1153: 'Rain', // Light drizzle
        1180: 'Rain', // Patchy light rain
        1183: 'Rain', // Light rain
        1186: 'Rain', // Moderate rain at times
        1189: 'Rain', // Moderate rain
        1192: 'Rain', // Heavy rain at times
        1195: 'Rain', // Heavy rain
        1240: 'Rain', // Light rain shower
        1243: 'Rain', // Moderate or heavy rain shower
        1246: 'Rain', // Torrential rain shower

        // --- TEMPESTADE ---
        1087: 'Thunderstorm',     // Thundery outbreaks possible
        1273: 'RainThunderstorm', // Patchy light rain with thunder
        1276: 'RainThunderstorm', // Moderate or heavy rain with thunder

        // --- NEVE ---
        1066: 'Snow', // Patchy snow possible
        1114: 'Snow', // Blowing snow
        1210: 'Snow', // Patchy light snow
        1213: 'Snow', // Light snow
        1216: 'Snow', // Patchy moderate snow
        1219: 'Snow', // Moderate snow
        1222: 'Snow', // Patchy heavy snow
        1225: 'Snow', // Heavy snow
        1255: 'Snow', // Light snow showers
        1258: 'Snow', // Moderate or heavy snow showers

        // --- CHUVA COM NEVE / GEADA (SLEET) ---
        1069: 'RainSnow', // Patchy sleet possible
        1072: 'RainSnow', // Patchy freezing drizzle possible
        1168: 'RainSnow', // Freezing drizzle
        1171: 'RainSnow', // Heavy freezing drizzle
        1198: 'RainSnow', // Light freezing rain
        1201: 'RainSnow', // Moderate or heavy freezing rain
        1204: 'RainSnow', // Light sleet
        1207: 'RainSnow', // Moderate or heavy sleet
        1249: 'RainSnow', // Light sleet showers
        1252: 'RainSnow', // Moderate or heavy sleet showers

        // --- GRANIZO (ICE PELLETS) ---
        1237: 'Hail', // Ice pellets
        1261: 'Hail', // Light showers of ice pellets
        1264: 'Hail', // Moderate or heavy showers of ice pellets

        // --- BLIZZARD / CONDIÇÕES EXTREMAS ---
        1117: 'Blizzard', // Blizzard
        1279: 'Blizzard', // Patchy light snow with thunder
        1282: 'Blizzard', // Moderate or heavy snow with thunder
    };

    return mapping[c] || 'Cloudy';
}
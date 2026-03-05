export interface WeatherData {
    location: {
        name: string;
        region: string;
        country: string;
    };
    current: {
        temp_c: number;
        condition: {
            code: number;
        };
        is_day: number;
        wind_kph: number;
        humidity: number;
    };

}
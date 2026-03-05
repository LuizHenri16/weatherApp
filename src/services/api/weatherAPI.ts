async function getWeather(city: string) {
    const API_KEY = "b1a6478de72b4693be4182747260601";
    const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

    try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export default getWeather;

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    safeAreaView: {
        flex: 1,
    },

    LinearGradient: {
        flex: 1,
        paddingVertical: 24,
        paddingHorizontal: 12,
    },

    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 18,
        paddingVertical: 8,
        borderRadius: 24,
        backgroundColor: '#52638dff',
        borderColor: '#5c73adff',
        borderWidth: 1.5,
        elevation: 6,
    },

    searchTextInput: {
        fontSize: 18,
        fontWeight: '600',
        color: '#ffffffff',
    },

    searchButton: {
        padding: 8,
    },

    weatherContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 60,

    },

    weatherInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 18,
        paddingVertical: 4,
        fontWeight: 'bold',
        color: '#ffffffff',
        marginBottom: 32,
    },

    weatherInfoCity: {
        fontSize: 28,
        color: '#ffffffff',
    },

    weatherInfoCountry: {
        fontSize: 16,
        color: '#ffffffff',
    },

    weatherInfoTemperature: {
        fontSize: 74,
        fontWeight: 'bold',
        color: '#ffffffff',
    },

    weatherInfos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 42,
        color: '#ffffffff',
        marginTop: 52
    },

    weatherInfosItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 6,
    },

    weatherInfosItemText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#ffffffff',
    },

    cardWeatherContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 12,
    },

    cardWeather: {
        width: 120,
        height: 140,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 6,

        backgroundColor: '#4E5A79',
        borderColor: '#5e6d92ff',
        borderWidth: 1.5,
        elevation: 4,
        borderRadius: 24,
        padding: 18,
        marginTop: 18,
        marginLeft: 10,
    },

    cardWeatherText: {
        fontSize: 16,
        fontWeight: '400',
        color: '#ffffffff',
    },

    cardWeatherTemp: {
        fontSize: 16,
        fontWeight: '600',
        color: '#ffffffff',

    },

    forecastList: {
        paddingHorizontal: 5,
    },

});
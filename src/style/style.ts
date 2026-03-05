import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    safeAreaView: {
        flex: 1,
        backgroundColor: '#34497F',
        padding: 32,
    },

    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 18,
        paddingVertical: 8,
        borderRadius: 24,
        borderWidth: 0,
        backgroundColor: '#92929246',
    },

    searchTextInput: {
        fontSize: 16,
        fontWeight: '600',
        color: '#ffffffff',
    },

    searchButton: {
        padding: 8,
    },

    weatherContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 64,
    },

    weatherInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 18,
        paddingVertical: 8,
        fontWeight: 'bold',
        color: '#ffffffff',
        marginBottom: 32,
    },

    weatherInfoCity: {
        fontSize: 26,
        color: '#ffffffff',
    },

    weatherInfoCountry: {
        fontSize: 18,
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
        marginTop: 60
    },

    weatherInfosItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    weatherInfosItemText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#ffffffff',
    },
});
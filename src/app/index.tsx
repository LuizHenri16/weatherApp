import { View } from "react-native";


import { SafeAreaView } from "react-native-safe-area-context";

// Import do Icone teste
import Icon from "../../assets/icons/sidebar-home-icon.svg";

export default function Home() {
    return (
        <SafeAreaView>
            <View>
                <Icon width={48} height={24} />
            </View>
        </SafeAreaView>
    );
}
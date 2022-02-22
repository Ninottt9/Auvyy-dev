import { StyleSheet, View, StatusBar, Text } from "react-native";
import SplashScreen from "react-native-splash-screen";

import { useEffect } from "react";

import colors from "../config/colors";

const WelcomeScreen = ({ navigation }) => {
    useEffect(() => {
        SplashScreen.hide();
    });

    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            <Text>Welcome</Text>
        </View>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
    }
});
import { Text, StyleSheet, StatusBar, View } from "react-native";
import colors from "../config/colors";

const MainScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            <Text>Points</Text>
        </View>
    );
};

export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
    }
});
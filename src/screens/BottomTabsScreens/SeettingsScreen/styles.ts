import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    userNameWrapper: {
        height: 60,
        marginTop: 20,
        borderRadius: 5,
        backgroundColor: "rgba(134,133,133,0.25)",
        justifyContent:"center",
        alignItems:"center"
    },
    userNameText: {
        textAlign: "center",
        fontSize: 22,
        fontWeight:"bold",
        color: '#000000'
    },
    resetBtn: {
        backgroundColor: "red",
        marginTop: "auto",
        marginBottom: 30
    }
})
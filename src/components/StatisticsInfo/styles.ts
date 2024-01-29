import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 16,
        margin: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    infoSection: {
        flexDirection: "row",
        alignItems: "center",
        margin: 10
    },
    infoSectionTitle: {
        fontSize: 18
    },
    infoSectionValue: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: "bold"
    }
})
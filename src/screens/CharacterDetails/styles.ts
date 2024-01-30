import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container:{
        marginHorizontal: 15,
        marginVertical: 20,
        paddingBottom: 30,
        flex: 1
    },
    title: {
        fontFamily:"Roboto",
        fontSize: 22,
        fontWeight: "bold",
    },
    propertyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    propertyLabel: {
        fontFamily:"Roboto",
        fontWeight: 'bold',
        marginRight: 8,
        color: '#333',
    },
    propertyValue: {
        fontFamily:"Roboto",
        color: '#666',
    },
    propertyWrapper: {
        marginTop: 15,
        marginBottom: 30
    },
    downloadBtnWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    downloadBtn: {
        width: 150,
        height: 42
    },
    additionalInfoBlock: {
        marginVertical: 20
    }
})
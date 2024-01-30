import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
        margin: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        height: 130
    },
    name: {
        fontFamily:"Roboto",
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
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
    isFavouritesWrapper:{
        justifyContent:"center",
        alignItems:"center",
        width: "40%"
    },
    isFavouritesText: {
        fontFamily:"Roboto",
       fontStyle: "italic",
       fontWeight: "bold",
       textAlign:"center",
       fontSize: 15,
       marginTop: 10
    }
})
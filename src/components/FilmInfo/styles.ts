import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    filmContainer:{
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

})
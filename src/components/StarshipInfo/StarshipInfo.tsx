import {Text, View} from "react-native";
import {IStarship} from "../../types/interfaces.ts";
import { styles } from "./styles.ts";

interface IStarshipInfoProps {
    starship: IStarship
}
export default function StarshipInfo({starship}:IStarshipInfoProps){

    return(
        <View style={styles.container}>

            <View style={styles.propertyContainer}>
                <Text style={styles.propertyLabel}>Name:</Text>
                <Text style={styles.propertyValue}>{starship.name}</Text>
            </View>

            <View style={styles.propertyContainer}>
                <Text style={styles.propertyLabel}>Model:</Text>
                <Text style={styles.propertyValue}>{starship.model}</Text>
            </View>

            <View style={styles.propertyContainer}>
                <Text style={styles.propertyLabel}>Cost in credits:</Text>
                <Text style={styles.propertyValue}>{starship.cost_in_credits}</Text>
            </View>

            <View style={styles.propertyContainer}>
                <Text style={styles.propertyLabel}>Manufacturer:</Text>
                <Text style={styles.propertyValue}>{starship.manufacturer}</Text>
            </View>
        </View>
    )
}
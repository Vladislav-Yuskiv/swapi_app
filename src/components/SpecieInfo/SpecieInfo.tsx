import {Text, View} from "react-native";
import {ISpecie} from "../../types/interfaces.ts";
import { styles } from "./styles.ts";

interface ISpecieInfoProps {
    specie: ISpecie
}
export default function SpecieInfo({specie}:ISpecieInfoProps){

    return(
        <View style={styles.container}>

            <View style={styles.propertyContainer}>
                <Text style={styles.propertyLabel}>Name:</Text>
                <Text style={styles.propertyValue}>{specie.name}</Text>
            </View>

            <View style={styles.propertyContainer}>
                <Text style={styles.propertyLabel}>Classification:</Text>
                <Text style={styles.propertyValue}>{specie.classification}</Text>
            </View>

            <View style={styles.propertyContainer}>
                <Text style={styles.propertyLabel}>Designation:</Text>
                <Text style={styles.propertyValue}>{specie.designation}</Text>
            </View>

            <View style={styles.propertyContainer}>
                <Text style={styles.propertyLabel}>Average Lifespan:</Text>
                <Text style={styles.propertyValue}>{specie.average_lifespan}</Text>
            </View>
        </View>
    )
}
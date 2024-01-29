import {Text, View} from "react-native";
import {IVehicle} from "../../types/interfaces.ts";
import { styles } from "./styles.ts";

interface IVehicleInfoProps {
    vehicle: IVehicle
}
export default function VehicleInfo({vehicle}:IVehicleInfoProps){

    return(
        <View style={styles.container}>

            <View style={styles.propertyContainer}>
                <Text style={styles.propertyLabel}>Name:</Text>
                <Text style={styles.propertyValue}>{vehicle.name}</Text>
            </View>

            <View style={styles.propertyContainer}>
                <Text style={styles.propertyLabel}>Model:</Text>
                <Text style={styles.propertyValue}>{vehicle.model}</Text>
            </View>

            <View style={styles.propertyContainer}>
                <Text style={styles.propertyLabel}>Vehicle Class:</Text>
                <Text style={styles.propertyValue}>{vehicle.vehicle_class}</Text>
            </View>

            <View style={styles.propertyContainer}>
                <Text style={styles.propertyLabel}>Manufacturer:</Text>
                <Text style={styles.propertyValue}>{vehicle.manufacturer}</Text>
            </View>
        </View>
    )
}
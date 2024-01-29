import {Text, View} from "react-native";
import {IFilm} from "../../types/interfaces.ts";
import { styles } from "./styles.ts";

interface IFilmInfoProps {
    film: IFilm
}
export default function FilmInfo({film}:IFilmInfoProps){

    return(
        <View style={styles.filmContainer}>

            <View style={styles.propertyContainer}>
                <Text style={styles.propertyLabel}>Title:</Text>
                <Text style={styles.propertyValue}>{film.title}</Text>
            </View>

            <View style={styles.propertyContainer}>
                <Text style={styles.propertyLabel}>Director:</Text>
                <Text style={styles.propertyValue}>{film.director}</Text>
            </View>

            <View style={styles.propertyContainer}>
                <Text style={styles.propertyLabel}>Producer:</Text>
                <Text style={styles.propertyValue}>{film.producer}</Text>
            </View>

            <View style={styles.propertyContainer}>
                <Text style={styles.propertyLabel}>Release date:</Text>
                <Text style={styles.propertyValue}>{film.release_date}</Text>
            </View>
        </View>
    )
}
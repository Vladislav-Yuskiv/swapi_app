import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import {RootNavigatorScreenProps} from "../../types/screenTypes.ts";
import {styles} from "./styles.ts";
import {useState} from "react";
import {IFilm, ISpecie, IStarship, IVehicle} from "../../types/interfaces.ts";
import {Button} from "@ant-design/react-native";
import FilmInfo from "../../components/FilmInfo";
import VehicleInfo from "../../components/VehicleInfo";
import StarshipInfo from "../../components/StarshipInfo";
import SpecieInfo from "../../components/SpecieInfo";

export default function CharacterDetails({route}:RootNavigatorScreenProps<"CharacterDetails">){
    const {character} = route.params

    const [films, setFilms] = useState<IFilm[] | []>([])
    const [isFilmsLoading, setFilmsLoading] = useState(false)

    const [vehicles, setVehicles] = useState<IVehicle[] | []>([])
    const [isVehiclesLoading, setVehiclesLoading] = useState(false)

    const [starships, setStartShips] = useState<IStarship[] | []>([])
    const [isStarshipsLoading, setStarshipsLoading] = useState(false)

    const [species, setSpecies] = useState<ISpecie[] | []>([])
    const [isSpeciesLoading, setSpeciesLoading] = useState(false)

    async function downloadInfo <T>(array: string[]): Promise<T[]>  {
        try{
            const promises = array.map(async (url) => {
                const response = await fetch(url);
                const data: T = await response.json();
                return data;
            });

            return await Promise.all(promises)
        }catch (e) {
            console.log("Error in downloadInfo", e)
            return []
        }
    }

    return(
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
        >
            <Text style={styles.title}>{character.name}</Text>

            <View style={styles.propertyWrapper}>
                <View style={styles.propertyContainer}>
                    <Text style={styles.propertyLabel}>Birth Year:</Text>
                    <Text style={styles.propertyValue}>{character.birth_year}</Text>
                </View>

                <View style={styles.propertyContainer}>
                    <Text style={styles.propertyLabel}>Eye color:</Text>
                    <Text style={styles.propertyValue}>{character.eye_color}</Text>
                </View>

                <View style={styles.propertyContainer}>
                    <Text style={styles.propertyLabel}>Gender: </Text>
                    <Text style={styles.propertyValue}>{character.gender}</Text>
                </View>

                <View style={styles.propertyContainer}>
                    <Text style={styles.propertyLabel}>Mass:</Text>
                    <Text style={styles.propertyValue}>{character.mass}</Text>
                </View>

                <View style={styles.propertyContainer}>
                    <Text style={styles.propertyLabel}>Height:</Text>
                    <Text style={styles.propertyValue}>{character.height}</Text>
                </View>

                <View style={styles.propertyContainer}>
                    <Text style={styles.propertyLabel}>Skin color:</Text>
                    <Text style={styles.propertyValue}>{character.skin_color}</Text>
                </View>

                <View style={styles.propertyContainer}>
                    <Text style={styles.propertyLabel}>Hair color:</Text>
                    <Text style={styles.propertyValue}>{character.hair_color}</Text>
                </View>
            </View>


            {
                character.films.length > 0 && (
                    <View style={styles.additionalInfoBlock}>
                        <View style={styles.downloadBtnWrapper}>
                            <Text style={styles.propertyLabel}>{`Films with ${character.name}:`}</Text>

                            {
                                films.length === 0 && (
                                    <Button
                                        style={styles.downloadBtn}
                                        loading={isFilmsLoading}
                                        disabled={isFilmsLoading}
                                        onPress={async() => {
                                            setFilmsLoading(true)
                                            const films =  await downloadInfo<IFilm>(character.films)
                                            setFilms(films)
                                            setFilmsLoading(false)
                                        }}
                                    >
                                        View Films
                                    </Button>
                                )
                            }

                        </View>
                        <View>
                            {films.map(film => {
                                return (
                                    <FilmInfo key={film.episode_id} film={film}/>
                                )
                            })}
                        </View>
                    </View>
                )
            }

            {
                character.vehicles.length > 0 && (
                    <View style={styles.additionalInfoBlock}>
                        <View style={styles.downloadBtnWrapper}>
                            <Text style={styles.propertyLabel}>{`${character.name} vehicles:`}</Text>

                            {
                                vehicles.length === 0 && (
                                    <Button
                                        style={styles.downloadBtn}
                                        loading={isVehiclesLoading}
                                        disabled={isVehiclesLoading}
                                        onPress={async() => {
                                            setVehiclesLoading(true)
                                            const vehicles =  await downloadInfo<IVehicle>(character.vehicles)
                                            setVehicles(vehicles)
                                            setVehiclesLoading(false)
                                        }}
                                    >
                                        View Vehicles
                                    </Button>
                                )
                            }

                        </View>
                        <View>
                            {vehicles.map(vehicle => {
                                return (
                                    <VehicleInfo key={vehicle.model} vehicle={vehicle}/>
                                )
                            })}
                        </View>
                    </View>
                )
            }

            {
                character.starships.length > 0 && (
                    <View style={styles.additionalInfoBlock}>
                        <View style={styles.downloadBtnWrapper}>
                            <Text style={styles.propertyLabel}>{`${character.name} starships:`}</Text>

                            {
                                starships.length === 0 && (
                                    <Button
                                        style={styles.downloadBtn}
                                        loading={isStarshipsLoading}
                                        disabled={isStarshipsLoading}
                                        onPress={async() => {
                                            setStarshipsLoading(true)
                                            const starships =  await downloadInfo<IStarship>(character.starships)
                                            setStartShips(starships)
                                            setStarshipsLoading(false)
                                        }}
                                    >
                                        View starships
                                    </Button>
                                )
                            }

                        </View>
                        <View>
                            {starships.map(starship => {
                                return (
                                    <StarshipInfo key={starship.model} starship={starship}/>
                                )
                            })}
                        </View>
                    </View>
                )
            }

            {
                character.species.length > 0 && (
                    <View style={styles.additionalInfoBlock}>
                        <View style={styles.downloadBtnWrapper}>
                            <Text style={styles.propertyLabel}>{`${character.name} species:`}</Text>

                            {
                                species.length === 0 && (
                                    <Button
                                        style={styles.downloadBtn}
                                        loading={isSpeciesLoading}
                                        disabled={isSpeciesLoading}
                                        onPress={async() => {
                                            setSpeciesLoading(true)
                                            const species =  await downloadInfo<ISpecie>(character.species)
                                            setSpecies(species)
                                            setSpeciesLoading(false)
                                        }}
                                    >
                                        View species
                                    </Button>
                                )
                            }

                        </View>
                        <View>
                            {species.map(specie => {
                                return (
                                    <SpecieInfo key={specie.name} specie={specie}/>
                                )
                            })}
                        </View>
                    </View>
                )
            }


        </ScrollView>
    )
}
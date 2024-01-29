import {ActivityIndicator, Pressable, Text, TouchableOpacity, View} from "react-native";
import {ICharacter} from "../../types/interfaces.ts";
import { styles } from "./styles.ts";
import { Icon } from "@ant-design/react-native";
import {useStarWarsApp} from "../../hooks/useStarWarsApp.tsx";
import {useState} from "react";

interface ICharacterCardPops {
    character: ICharacter
    isFavourite?: boolean
    navigate: () => void
}
export default function CharacterCard({character,isFavourite = false,navigate}: ICharacterCardPops){

    const {addToFavorite,deleteFromFavorite} = useStarWarsApp();

    const [processLoading, setProcessLoading] = useState(false)

    const handleAddToFavourites = async () => {
        setProcessLoading(true)
        await addToFavorite(character)
        setProcessLoading(false)
    }

    const handleRemoveFromFavourites = async () => {
        setProcessLoading(true)
        await deleteFromFavorite(character)
        setProcessLoading(false)
    }
    return(
        <TouchableOpacity
            style={styles.container}
            onPress={navigate}
        >
            <View>
                <Text style={styles.name}>{character.name}</Text>

                <View style={styles.propertyContainer}>
                    <Text style={styles.propertyLabel}>Birth Year:</Text>
                    <Text style={styles.propertyValue}>{character.birth_year}</Text>
                </View>

                <View style={styles.propertyContainer}>
                    <Text style={styles.propertyLabel}>Gender:</Text>
                    <Text style={styles.propertyValue}>{character.gender}</Text>
                </View>

                <View style={styles.propertyContainer}>
                    <Text style={styles.propertyLabel}>Eye Color:</Text>
                    <Text style={styles.propertyValue}>{character.eye_color}</Text>
                </View>
            </View>

            <Pressable
                style={styles.isFavouritesWrapper}
                onPress={() => {
                      isFavourite ? handleRemoveFromFavourites() : handleAddToFavourites()
                }}
            >
                        {
                            processLoading ? (
                                <ActivityIndicator
                                    size={"small"}
                                />
                            ) : (
                                <>
                                    <Icon name={"account-book"} color={"red"}/>

                                    <Text
                                        style={styles.isFavouritesText}
                                    >
                                        {
                                            isFavourite
                                                ? "Remove from favourites"
                                                : "Add to favourites"
                                        }
                                    </Text>
                                </>
                            )
                        }

            </Pressable>
        </TouchableOpacity>
    )
}
import {FlatList, View} from "react-native";
import { styles } from "./styles";
import StatisticsInfo from "../../../components/StatisticsInfo";
import {useStarWarsApp} from "../../../hooks/useStarWarsApp.tsx";
import CharacterCard from "../../../components/CharacterCard";
import EmptyState from "../../../components/EmptyState";
import {useCallback, useState} from "react";
import {ICharacter} from "../../../types/interfaces.ts";
import Loader from "../../../components/Loader";
import {BottomTabsScreenProps} from "../../../types/screenTypes.ts";

export default function FavouritesScreen({navigation}:BottomTabsScreenProps<"Favourites">){

    const {favorites,loading} = useStarWarsApp();

    const [currentCharacters, setCurrentCharacters] = useState<ICharacter[] |  []>(favorites)


    const renderItem = useCallback( ({item}: {item: ICharacter}) => {
        return (
            <CharacterCard
                character={item}
                isFavourite={true}
                navigate={() => navigation.navigate("CharacterDetails",{character: item })}
            />
        )
    }, [favorites]);


    return(
        <View style={styles.container}>

            <StatisticsInfo
                title={"Favourites info"}
                setCurrent={(data) => {
                    setCurrentCharacters(data)
                }}
                data={favorites}
                disabled={loading && currentCharacters.length === 0}
            />

            {
                loading && favorites.length === 0 ? (
                    <Loader size={"large"}/>
                ) : (
                    <FlatList
                        data={currentCharacters}
                        keyExtractor={(item, index) => item.name}
                        maxToRenderPerBatch={4}
                        removeClippedSubviews={true}
                        getItemLayout={(data, index) => (
                            //I set the height  of CharacterCard
                            {length: 120 , offset: 120 * index, index}
                        )}
                        windowSize={5}
                        updateCellsBatchingPeriod={100}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        ListEmptyComponent={() => {
                            return (
                                <EmptyState message={"List is  empty"}/>
                            )
                        }}
                        renderItem={renderItem}
                    />
                )
            }

        </View>
    )
}
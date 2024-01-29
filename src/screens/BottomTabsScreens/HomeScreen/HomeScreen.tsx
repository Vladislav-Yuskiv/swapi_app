import { FlatList, View} from "react-native";
import {useStarWarsApp} from "../../../hooks/useStarWarsApp.tsx";
import CharacterCard from "../../../components/CharacterCard";
import { styles } from "./styles.ts";
import StatisticsInfo from "../../../components/StatisticsInfo";
import EmptyState from "../../../components/EmptyState";
import {useCallback, useState} from "react";
import {ICharacter} from "../../../types/interfaces.ts";
import Loader from "../../../components/Loader";
import {BottomTabsScreenProps} from "../../../types/screenTypes.ts";

export default function HomeScreen({navigation}:BottomTabsScreenProps<"Home">){

    const {
        people,
        favorites,
        loading,
        isMoreLoading,
        loadMore
    } = useStarWarsApp()

    const [currentCharacters, setCurrentCharacters] = useState<ICharacter[] | []>(  people)
    const [downloadMore, setDownloadMore] = useState(  true)


    const handleEndReached = async () => {
        if(!downloadMore)  return
        await loadMore()
    }

    const renderListFooter = useCallback(
        () => (isMoreLoading ? <Loader size={"large"}/> : null),
        [isMoreLoading],
    )

    const renderItem = useCallback( ({item}: {item: ICharacter}) => {
        const isFavourite = favorites.some(favorite => favorite.name === item.name);

        return (
            <CharacterCard
                character={item}
                isFavourite={isFavourite}
                navigate={() => navigation.navigate("CharacterDetails",{character: item })}
            />
        )
    }, [favorites]);


    return(
        <View style={styles.container}>
            <StatisticsInfo
                title={"Star Wars characters info"}
                setCurrent={(data) => setCurrentCharacters(data)}
                data={people}
                disabled={loading && currentCharacters.length === 0 }
                setDownloadMore={(value) => setDownloadMore(value)}
            />
            {
                loading && currentCharacters.length === 0  ? (
                    <Loader size={"large"}/>
                ) : (
                    <FlatList
                        data={currentCharacters}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        onEndReached={handleEndReached}
                        removeClippedSubviews={true}
                        maxToRenderPerBatch={6}
                        getItemLayout={(data, index) => (
                            //I set the height  of CharacterCard
                            {length: 120 , offset: 120 * index, index}
                        )}
                        windowSize={11}
                        updateCellsBatchingPeriod={100}
                        onEndReachedThreshold={0.1}
                        ListFooterComponent={renderListFooter}
                        ListEmptyComponent={() => {
                            return (
                                <EmptyState message={"List is empty"}/>
                            )
                        }}
                        renderItem={renderItem}
                    />
                )
            }
        </View>
    )
}
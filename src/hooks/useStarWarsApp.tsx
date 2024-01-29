import {IItemsFromStorage, ICharacter} from "../types/interfaces.ts";
import {
    Context,
    createContext,
    PropsWithChildren,
    useContext,
    useLayoutEffect,
    useState
} from "react";
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import {BASE_URL} from "../utils";
import fetchPeople from "../services/fetchPeople.ts";

interface IStarWarsAppContext {
    people: ICharacter[] ,
    favorites: ICharacter[],
    userName: string,
    loading: boolean,
    isMoreLoading:  boolean,
    saveUserName: (name: string | undefined) => Promise<void>
    addToFavorite: (character: ICharacter) => Promise<void>,
    deleteFromFavorite: (character: ICharacter) => Promise<void>
    resetToDefaultSettings: () => Promise<void>,
    loadMore: () => Promise<void>,
}

const defaultValue: IStarWarsAppContext = {
    people: [],
    loading: false,
    userName: "",
    isMoreLoading: false,
    favorites: [],
    saveUserName:async () => undefined,
    resetToDefaultSettings: async () => undefined,
    addToFavorite: async () => undefined,
    loadMore: async () => undefined,
    deleteFromFavorite:async () => undefined
}

const DynamicValueContext: Context<IStarWarsAppContext> =
    createContext<IStarWarsAppContext>(defaultValue);

export const useStarWarsApp: () => IStarWarsAppContext = () =>
    useContext<IStarWarsAppContext>(DynamicValueContext);

function StarWarsAppProvider (props: PropsWithChildren<any>){

    const [people,  setPeople] = useState<ICharacter[] | []>([]);
    const [loading,  setLoading] = useState(false);
    const [isMoreLoading,  setMoreloading] = useState(false);
    const [nextUrl , setNextUrl] =  useState("");
    const [favorites, setFavorites] = useState<ICharacter[] | []>([]);
    const [userName, setUserName] = useState("Your name here");
    //I decided to use AsyncStorage to simulate the working of a database.
    const { getItem, setItem } = useAsyncStorage('@config');


    useLayoutEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true)
                const data = await fetchPeople(`${BASE_URL}/people`)

                if(data){
                    setPeople(data.results)
                    setNextUrl(data.next)
                }
                //Get config from storage
                const storedItems: IItemsFromStorage | null = await readItemFromStorage();

                if (!storedItems) {
                    //User opens the app for the first time or something went wrong
                    setFavorites([]);

                    const defaultItems:IItemsFromStorage = {
                        userName: "",
                        favorites: [],
                    };
                    await saveItemToStorage(defaultItems);

                } else {
                    setFavorites(storedItems.favorites);
                    setUserName(storedItems.userName)
                }
                setLoading(false)
            } catch (error) {
                console.error('Error loading config:', error);
                setLoading(false)
                setPeople([])
            }
        };

        loadData()
    }, []);


    async function readItemFromStorage(): Promise<IItemsFromStorage | null>{
        try {
            const item = await getItem();
            //If item is null, I will assume that the  user opens the app for  the first time
            return item ? JSON.parse(item) : null;
        } catch (error) {
            console.error('Error in readItemFromStorage:', error);
            return null;
        }
    };

    async function saveItemToStorage (value: IItemsFromStorage) {
        try {
            await setItem(JSON.stringify(value));
        } catch (error) {
            console.error('Error in saveItemToStorage:', error);
        }
    };


    async  function addToFavorite (character: ICharacter){

       const favouritesToSave  = new Set(favorites)

        favouritesToSave.add(character)

        const arrFavorites = Array.from(favouritesToSave)
        setFavorites(arrFavorites)

        await saveItemToStorage({
            userName,
            favorites: arrFavorites,
        })

    }

    async  function deleteFromFavorite (character: ICharacter){
        const favouritesToSave  = new Set(favorites)

        favouritesToSave.delete(character)

        const arrFavorites = Array.from(favouritesToSave)
        setFavorites(arrFavorites)

        await saveItemToStorage({
            userName,
            favorites: arrFavorites,
        })
    }

    async  function saveUserName (name: string | undefined){
        const userSave = name || ""
        setUserName(userSave)

        await saveItemToStorage({
            userName: userSave,
            favorites
        })
    }


    async  function resetToDefaultSettings ()  {
        setFavorites([])
        setUserName("Your name here")

        const  defaultItems:IItemsFromStorage = {
            userName: "Your name here",
            favorites: [],
        }
        await saveItemToStorage(defaultItems)
    }

    async  function loadMore ()  {
        try {
            setMoreloading(true)
            const moreData = await fetchPeople(nextUrl)

            if(moreData){
                setPeople([...people, ...moreData.results])
                setNextUrl(moreData.next)
            }
            setMoreloading(false)
        }catch (e) {
            console.log("Error in loadMore",  e)
            setMoreloading(false)
        }
    }

    return (
        <DynamicValueContext.Provider
            value={{
              loading,
               userName,
              isMoreLoading,
              saveUserName,
              people,
              favorites,
              addToFavorite,
              resetToDefaultSettings,
              deleteFromFavorite,
              loadMore
            }}
        >
            {props.children}
        </DynamicValueContext.Provider>
    )
}

export const withStarWarsAppProvider = (Component: any) => (p: any) =>
    (
        <StarWarsAppProvider>
            <Component {...p} />
        </StarWarsAppProvider>
    );
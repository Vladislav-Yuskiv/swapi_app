import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {BottomTabsParamList} from "../../types/screenTypes.ts";
import HomeScreen from "../../screens/BottomTabsScreens/HomeScreen";
import FavouritesScreen from "../../screens/BottomTabsScreens/FavouritesScreen";
import SettingsScreen from "../../screens/BottomTabsScreens/SeettingsScreen";

const BottomTab = createBottomTabNavigator<BottomTabsParamList>();

export default function BottomTabs(){
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name={"Home"} component={HomeScreen}/>
            <BottomTab.Screen name={"Favourites"} component={FavouritesScreen}/>
            <BottomTab.Screen name={"Settings"} component={SettingsScreen}/>
        </BottomTab.Navigator>
    )
}
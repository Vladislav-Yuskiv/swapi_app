import {RootNavigatorParamsList} from "../types/screenTypes.ts";
import BottomTabs from "./BottomTabs";
import CharacterDetails from "../screens/CharacterDetails";
import {createNativeStackNavigator, NativeStackNavigationOptions} from "@react-navigation/native-stack";
import {Text, View} from "react-native";

const Stack = createNativeStackNavigator<RootNavigatorParamsList>();

const screenOptions:NativeStackNavigationOptions  = {
    gestureEnabled: false,
    animation: "slide_from_bottom",
    presentation: 'card',
};

export default function (){
    return (
        <Stack.Navigator
            initialRouteName={"BottomTabs"}
            screenOptions={{
                ...screenOptions
            }}
        >
            <Stack.Screen
                name={"BottomTabs"}
                component={BottomTabs}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name={"CharacterDetails"}
                component={CharacterDetails}
                options={{
                    headerBackTitle: "Back"
                }}
            />
        </Stack.Navigator>
    )
}
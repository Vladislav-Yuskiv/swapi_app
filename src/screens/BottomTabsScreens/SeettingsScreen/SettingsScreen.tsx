import {Alert, Text, View} from "react-native";
import {useStarWarsApp} from "../../../hooks/useStarWarsApp.tsx";
import { styles } from "./styles.ts";
import {Button} from "@ant-design/react-native";
import {BottomTabsScreenProps} from "../../../types/screenTypes.ts";

export default function SettingsScreen({navigation}:BottomTabsScreenProps<"Settings">){

    const {resetToDefaultSettings , userName,saveUserName} = useStarWarsApp()

    return(
        <View style={styles.container}>

            <Button
                style={styles.userNameWrapper}
                onPress={() => {
                    Alert.prompt(
                        "Enter your name",
                        "",
                        [
                            {
                                text: "Cancel",
                                onPress: () => console.log("Cancel Pressed"),
                                style: "cancel"
                            },
                            {
                                text: "OK",
                                onPress: name => saveUserName(name)
                            }
                        ],
                        "plain-text"
                    );
                }}
            >
                <Text style={styles.userNameText}>{userName}</Text>
            </Button>

            <Button
                style={styles.resetBtn}
                onPress={() => {
                    Alert.alert("Are you sure?", "All data will be deleted", [
                        {
                            text: "Cancel",
                            onPress: () => console.log("Cancel"),
                            style: "cancel"
                        },
                        {
                            text: "Reset",
                            onPress: async () => {
                                await  resetToDefaultSettings()
                                navigation.navigate("Home")
                            },
                            style: "destructive",
                        },
                    ])
                }}
            >
                Reset
            </Button>
        </View>
    )
}
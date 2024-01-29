import {Text, View} from "react-native";
import {styles} from "./styles.ts";
import { Icon } from "@ant-design/react-native";
interface IEmptyStateProps{
    message: string
}
export default function EmptyState({message}:IEmptyStateProps){

    return(
        <View style={styles.container}>
            <Icon name={"info-circle"} color={'rgb(10, 132, 255)'}/>
            <Text style={{
               ...styles.messageText,
                color:  "#000000"
            }}>
                {message}
            </Text>
        </View>
    )
}
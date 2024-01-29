import {Text, View} from "react-native";
import { styles } from "./styles";
import {Button} from "@ant-design/react-native";

export default function ErrorScreen(props: any){

    const handleReset = () => {
        props.resetError();

    };
    return(
        <View style={styles.container}>
            <Text style={styles.errorText}>Ops..! Something went wrong!!</Text>

            <Button
                onPress={handleReset}
                style={styles.resetBtn}
            >
                Cancel
            </Button>
        </View>
    )
}
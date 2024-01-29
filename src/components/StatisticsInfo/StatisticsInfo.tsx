import {Text, View} from "react-native";
import {styles} from "./styles.ts";
import {  List, Radio } from '@ant-design/react-native'
import {ICharacter} from "../../types/interfaces.ts";
import {useEffect, useState} from "react";
import {OnGroupChangeParams} from "@ant-design/react-native/es/radio/PropsType";


interface IStatisticsInfoProps{
   title: string
   data: ICharacter[]
   disabled: boolean
   setCurrent: (data: ICharacter[]) => void
   setDownloadMore?: (value: boolean) => void
}

type GenderUnion = "all" | "male" | "female" | "n/a" | "hermaphrodite"

export default function StatisticsInfo({data,title,disabled = false, setCurrent,setDownloadMore }:IStatisticsInfoProps){

    const [currentTotal, setTotal] = useState(data.length || 0);
    const [value , setValue] = useState<GenderUnion>("all")

    useEffect(() => {
        handleChangeValue({target: {value}})
    }, [data]);
    const handleChangeValue = (e: OnGroupChangeParams) => {

        if(e.target.value === "all"){
            setTotal(data.length)
            if(setDownloadMore) setDownloadMore(true) //I  added because faced with some bugs and it was the fastest  way to fix it
            setCurrent(data)
        }else{
            const newData = data.filter(item => item.gender === e.target.value)
            if(setDownloadMore)  setDownloadMore(false)
            setTotal(newData.length)
            setCurrent(newData)
        }

        setValue(e.target.value as GenderUnion)
    }


    return(
        <View style={styles.container}>
            <List renderHeader={title}>
                <Radio.Group
                    onChange={(e) => handleChangeValue(e)}
                    disabled={disabled}
                    value={value}
                    style={{
                        flexDirection: 'row',
                        flexWrap: "wrap",
                        justifyContent: 'center',
                        paddingVertical: 6,
                    }}>
                    <Radio value={"all"}>All</Radio>
                    <Radio value={"male"}>Male</Radio>
                    <Radio value={"female"}>Female</Radio>
                    <Radio value={"hermaphrodite"}>Hermaphrodite</Radio>
                    <Radio value={"none"}>None</Radio>
                    <Radio value={"n/a"}>N/A</Radio>
                </Radio.Group>
            </List>

            <View style={styles.infoSection}>
                <Text style={styles.infoSectionTitle}>Total characters:</Text>
                <Text style={styles.infoSectionValue}>{currentTotal}</Text>
            </View>

        </View>
    )
}
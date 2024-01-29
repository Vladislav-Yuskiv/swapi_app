import { NavigatorScreenParams } from '@react-navigation/native';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { StackScreenProps } from '@react-navigation/stack'
import { NativeStackScreenProps} from "react-native-screens/native-stack";
import {ICharacter} from "./interfaces.ts";

export type RootNavigatorParamsList = {
    BottomTabs: NavigatorScreenParams<BottomTabsParamList>
    CharacterDetails: {
        character: ICharacter
    }
}

export type BottomTabsParamList = {
    Home:  undefined;
    Favourites: undefined
    Settings: undefined
}

export type RootNavigatorScreenProps<T extends keyof RootNavigatorParamsList> = NativeStackScreenProps<RootNavigatorParamsList, T>;

export type BottomTabsScreenProps<T extends keyof BottomTabsParamList> = CompositeScreenProps<
    BottomTabScreenProps<BottomTabsParamList, T>,
    StackScreenProps<RootNavigatorParamsList>
>;
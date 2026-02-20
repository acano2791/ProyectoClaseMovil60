import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { RootStackParamList } from "../navigation/StackNavigator";
import { TabsParamList } from "../navigation/TabsNavigator";
import TabsNavigator from "../navigation/TabsNavigator";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({route}: Props){
    //destructuring de parametro de ruta: sacando una propiedad de un objeto
    const {email} = route.params

    return(
        
        <TabsNavigator/>
    );
}
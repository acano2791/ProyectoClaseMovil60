import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, Button } from "react-native";
import { RootStackParamList } from "../navigation/StackNavigator";
import { TabsParamList } from "../navigation/TabsNavigator";
import { useLanguage } from "../contexts/LanguageContext";
import TabsNavigator from "../navigation/TabsNavigator";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({route}: Props){
    //destructuring de parametro de ruta: sacando una propiedad de un objeto
    const {email} = route.params
    const { changeLanguage, language } = useLanguage();

    return(
        <View>
            <Text>Bienvenido a home</Text>
            <Text>Tu idioma actual es: {language} </Text>
            <Button title="EN" onPress={() => changeLanguage('en')} />
            <Button title="ES" onPress={() => changeLanguage('es')} />
            <Button title="DE" onPress={() => changeLanguage('de')} />
            <Button title="FR" onPress={() => changeLanguage('fr')} />
        </View>
    );
}
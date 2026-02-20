import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";


export type TabsParamList = {
    //Home: {email: string};
    Profile: undefined;
    Settings: undefined;
}

const Tab = createBottomTabNavigator<TabsParamList>();

export default function TabsNavigator () {

    return(
        
        <Tab.Navigator>         
            <Tab.Screen 
                name = "Profile"
                component = {ProfileScreen}
            />
            <Tab.Screen 
                name = "Settings"
                component = {SettingsScreen}
            />
            {/*<Tab.Screen 
                name = "Home"
                component = {HomeScreen}
            />*/}
        </Tab.Navigator>
    );
}
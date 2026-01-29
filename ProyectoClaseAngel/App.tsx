import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  CustomButton  from './src/components/CustomButton'

export default function App() {
const handleOnLogin = () => {
console.log("Prueba desde app");
alert("Alerta login desde app");

  }

  const handleOnLogout = () => {
    alert("Alerta logout desde app");
  }

  return (
    <View style={styles.container}>
      <Text>Open up App</Text>
      <StatusBar style="auto" />
      <CustomButton 
        title={'Login'} 
        onClick={handleOnLogin}/>
      <CustomButton 
        title={'Salir'} 
        onClick={handleOnLogout}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

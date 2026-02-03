import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  CustomButton  from './src/components/CustomButton'
import CustomImput from './src/components/CustomInput';

export default function App() { /*Componente principal APP */
const handleOnLogin = () => { /*Funcion para Login */
console.log("Prueba desde app Login"); /*Imprime en la consola el mensaje que esta entre "" - util para ver si el evento funciona */
alert("Alerta login desde app"); /*muestra una alerta en el telefono con el mensaje que esta entre "" */
  }

  const handleOnLogout = () => { /*Funcion para Logout */
    console.log("Prueba desde app Logout"); /*Imprime en la consola el mensaje que esta entre "" - util para ver si el evento funciona */
    alert("Alerta logout desde app"); /*muestra una alerta en el telefono con el mensaje que esta entre "" */
  }

  const handleForgotPassword = () => {
    console.log("Prueba desde app ForgotPassword")
    alert("Olvidé mi contraseña");
  }

  return (  /*Render (lo que se muestra en la pantalla) */
    <View style={styles.container}> 
      <View style={styles.card}>  
        <Text>Open up App</Text>
        <StatusBar style="auto" /> 
        <View style={styles.buttonsWrapper} >
        <CustomButton 
         title={'Login'} 
          onClick={handleOnLogin}/>
        <CustomButton 
          title={'Salir'} 
         onClick={handleOnLogout}
          variant={'secondary'}/>        
        <CustomButton 
        title={'¿Olvidaste tu contraseña?'} 
        onClick={handleForgotPassword}
        variant={'tertiary'}/>
        <CustomImput/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({  /*Crea un objeto de estilos optimizados */
  container: {  /** */
    flex: 1, /* ocupa toda la pantalla */
    alignItems: 'center', /*centra horizontalmente */
    justifyContent: 'center', /*centra verticalmente */
  },
  card:{ /*Tarjeta grande en toda la pantalla */
    width: "80%", /* 80% de Alto de la pantalla */
    height: "80%",/* 80% de Ancho en toda la pantalla */
    borderRadius: 15, /* Bordes redondeados */
    backgroundColor: '#f3f4f6', /* color gris claro */
  },
  buttonsWrapper:{ /* Zona donde van los botoness */
    backgroundColor: 'white', /* Color del fondo donde van los botones */
    marginTop: 15, /* Separacion de arriba */
    height: "30%", /* Ocupa el 30% del alto de la tarjeta */
    alignItems: "center", /* centra los botones orizontalmente */
    justifyContent : "space-around"
    /*alignContent: "space-around",  consultar al inge cual usar si justifContent o alingnContent */
  },
});

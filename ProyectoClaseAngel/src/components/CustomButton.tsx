import { StyleSheet, Text, TouchableOpacity, View } from "react-native"; /* Iporta StyleSheet, Text, TouchableOpacity, View  */

interface CustomButtonProps {  /*Define que propiedades acepta el componente */
    title: string; /* Obligatorio texto del boton */
    onClick:()=> void; /* Obligatorio funcion sin parametros que no retorna nada */
    variant?: "primary" | "secondary" | "tertiary"; /*se le agregaga ? para indicar que la variant no es una variable obligatoria e indica que solo puede ser primaria o secundaria*/
}
export default function CustomButton ({ /* Componente CustomButton */
    title,
    onClick,
    variant = "primary"  /* variant = "primary" significa: que si no me envian variant, por defecto es "primary" */
}: CustomButtonProps){  
    const styles = getstyles(variant); /* Genera estilos en función del variant. */

    return(       /* Render del boton */
        <TouchableOpacity 
        onPress={onClick}  /* onPress={onClick}: cuando lo presionas, ejecuta la función que mandó el padre. */
        style={styles.container}
        activeOpacity={0.7}> 
            <Text
                style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity> /* Cierra el boton */
    );
}

const getstyles = (variant: 'primary' | 'secondary' | 'tertiary' ) =>   /* Funcion que crea estilos dinamicos */
    StyleSheet.create({
    container:{
        paddingVertical: variant === "tertiary" ? 8 : 15, /* padding arriba y abajo. */
        alignItems: 'center', /* centra el texto dentro. */
        width: "80%",         /* el botón mide 80% del ancho de su contenedor padre. */  
        backgroundColor: /* Operador ternario Si variant es "primary" → fondo azul oscuro. Si no → fondo blanco.: */
            variant === "primary" ? "#2e4566" : variant === "secondary" ? "#2596be" : "transparent" ,  /*el === es una validacion que sea igual a primary el simbolo ? significa si es verdadero se coloca lo que esta dentro de "" y luego : significa si es falso*/
        borderRadius: 8,  /* Bordes redondeados */
        borderWidth: 1,   /* Borde de 1px */     
        borderColor: variant === "primary" ? "#f3f4f6" : "black",  /* Color del borde: primario: gris clarito secundario: negro */
    },
    text:{   /* Estilo de texto */
        color: 
            variant === "primary" ? "white" : variant === "secondary" ? "black" : "#2e4566" ,  /* Color del Texto blanco en botón primario, negro en secundario */
        fontSize: variant === "tertiary" ? 14 : 18, /* Tamaño 18 */
        fontWeight: variant === "tertiary" ? "400" : "500"  /* peso medio */
    }
});
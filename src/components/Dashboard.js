import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity } from 'react-native';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
            <View style={styles.element1}>
                <Text style={styles.periodoText}>Julio</Text>
                <Text style={styles.montoText}>$2,000</Text>
                <TouchableOpacity style={styles.botonIngresos}>
                    <Text> Agregar Ingresos
                    </Text>
                </TouchableOpacity>    
            </View>
            <View style={styles.element2}>
                <Text>asdf</Text>
            </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    },
    element1: {
        flex: 3,
        backgroundColor:'#ECEFF1',
        //borderWidth:1,
        justifyContent:'center',
        padding: 5,
        width: '100%',
        alignItems: 'center'

    },
    element2: {
        flex: 5,
        borderWidth:1,
        justifyContent:'center',
        marginTop: 10,
        width: '100%',
        alignItems: 'center'
    },
    periodoText: {
        fontSize: 50,
        fontWeight: 'normal',

    },
    montoText: {
        color:'#03A9F4',
        fontSize:50,
        padding:5,

    },
    botonIngresos:{
        backgroundColor:'#FFB74D',
        padding: 10,
        borderRadius: 10,
    }
});
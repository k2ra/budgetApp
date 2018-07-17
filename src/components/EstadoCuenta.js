import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View 
} from 'react-native';
export default class EstadoCuenta extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.saldoText}>$0.00 </Text>
        </View>
        <View style={styles.content}>
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
    },
    saldoText:{
        fontSize:16,
        color:'white',
        fontWeight: "bold",
        padding: 10,
        
    },
    header:{
        backgroundColor:'#455A64',
        flex:1,
        width: 300,
        //borderWidth:1,
        marginTop:10,
        justifyContent: 'center',
        alignItems:'center',
        
    },
    content:{
        flex:5,
        borderWidth:1,
    }
});
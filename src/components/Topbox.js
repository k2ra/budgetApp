import React from 'react';
import { 
    StyleSheet,
    Text, 
    View,
    TouchableOpacity, } from 'react-native';
import AddBudget from './AddBudget';
import { createStackNavigator  } from 'react-navigation';

export default class TopBox extends React.Component {
    constructor(props){
        super(props)
        this.state={
            ingreso:2000,
            showScreen:false,
        }
        this.showAddBudget = this.showAddBudget.bind(this);
        this.navigateTo= this.navigateTo.bind(this);
    }
 

    showAddBudget(){
        this.setState({showScreen:true})
    }

    navigateTo(page){
        this.props.navigation.navigate(page)
    }

    render() {
        return (
            
            <View style={styles.element1}>
            {console.log("Topbox " + JSON.stringify(this.props))}
                <Text style={styles.periodoText}>Julio</Text>
                <Text style={styles.montoText}>{this.props.presupuesto}</Text>
                <TouchableOpacity style={styles.botonIngresos}
                    onPress={() =>this.navigateTo('AddBudget')}
                   
                >
                    <Text> Agregar Ingresos
                    </Text>
                </TouchableOpacity> 
      
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
    element1: {
        flex: 3,
        backgroundColor:'#ECEFF1',
        //borderWidth:1,
        justifyContent:'center',
        padding: 5,
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
    },
});

 
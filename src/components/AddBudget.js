import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput 
} from 'react-native';
import { Button,FormLabel, FormInput, FormValidationMessage,CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class AddBudget extends React.Component {
    constructor(props){
        super(props);
    }
  render() {
        return (
            <View style={styles.container}>
                    <FormLabel>Ingresos</FormLabel>
                    <FormInput containerStyle={styles.input} onChangeText={()=> console.log('a')}/>
                    
                    
                    <FormLabel>Descripcion</FormLabel>
                    <FormInput containerStyle={styles.input} onChangeText={()=> console.log('a')}/>
                    
                    <CheckBox
                        //center
                        title='Quincenal'
                        //checkedIcon='dot-circle'
                        //uncheckedIcon='circle'
                        checked={true}
                    />
                    <CheckBox
                        //center
                        title='Mensual'
                        //checkedIcon='dot-circle'
                        //uncheckedIcon='circle'
                        checked={true}
                    />
                    
                    <Button
                        title='GUARDAR'
                        icon={{name: 'done'}}
                    />
            </View>
        );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#ECEFF1',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    input:{
        backgroundColor:'rgba(255,255,255,0.3)',
        padding:20,
        borderStyle: 'solid',
        width:250,
        justifyContent:'center',
        marginBottom:5,
      }
    
});
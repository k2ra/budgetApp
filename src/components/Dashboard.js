import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity,
    TouchableHighlight,
    FlatList,
    Modal,
    Dimensions,
    TextInput } from 'react-native';
import { List, ListItem} from 'react-native-elements';    
import Icon from 'react-native-vector-icons/MaterialIcons';

const gastos=[{articulo:'galleta', costo:'$0.55'}];

var screen = Dimensions.get('window');
export default class App extends React.Component {
  
    constructor(props){
        super(props);
        
        this.state={
            modalVisible:false,
            sample:[],
            articulo:'',
            costo:'',
            ingreso:2000,
        };
        
        
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }

    _addReplay(){
      //  const {gastos} = this.state.sample;
       this.state.sample.unshift({articulo:this.state.articulo, costo:this.state.costo});

        this.setState({sample:this.state.sample.slice(0), ingreso: this.state.ingreso -this.state.costo})
    }

    _keyExtractor = (item, index) => item.articulo;

      
  render() {
    return (
      <View style={styles.container}>

        <Modal 
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
        }}>
            <View style={styles.modalView}>
                <TouchableOpacity style={{alignItems:"flex-start"}}
                    onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                    }}>
                     <Icon size={30}
                    name='close'
                     />
                </TouchableOpacity>
                <View style={styles.modalViewIn}>
            
                    <Text style={styles.textTitle}>Agregar Gasto</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Descripcion"
                        underlineColorAndroid="transparent"
                        onChangeText ={(articulo) => this.setState({articulo})}
                        value={this.state.articulo}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Costo"
                        underlineColorAndroid="transparent"
                        onChangeText ={(costo) => this.setState({costo})}
                        value={this.state.costo}
                    />

                    <TouchableOpacity style={styles.botonIngresarGastos}
                    onPress={this._addReplay.bind(this)}
                    >
                    <Text>Agregar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
            <View style={styles.element1}>
                <Text style={styles.periodoText}>Julio</Text>
                <Text style={styles.montoText}>{this.state.ingreso}</Text>
                <TouchableOpacity style={styles.botonIngresos}
                    onPress={()=>this.setState({ingreso:(this.state.ingreso)+1})}
                >
                    <Text> Agregar Ingresos
                    </Text>
                </TouchableOpacity>    
            </View>
            <View style={styles.element2}>
                <List style={styles.listaContenedor}> 
                    <FlatList
                        data ={this.state.sample}
                        renderItem={({item}) =>(
                            <ListItem
                                title={item.articulo}
                                rightTitle= {item.costo}
                            />
                        )}
                        keyExtractor={this._keyExtractor}
                    />
                </List>
            </View>
            <View style={styles.floatButtonContainer}>
                <TouchableOpacity activeOpacity={0.5} style= {styles.floatButton} onPress={() => { this.setModalVisible(true);}}//onPress={this._addReplay.bind(this)}
                >
                <Icon size={25}
                    name='add'
                   />
                </TouchableOpacity>
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
        //borderWidth:1,
        //justifyContent:'center',
        //marginTop: 10,
        width: '100%',
        //alignItems: 'center',
       //padding:5
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
    listaContenedor: {
        width:'100%',
        borderWidth:1,
    },
    listaGastos: {
        fontSize:20,
        padding: 5,
        color:'black',
        borderWidth:1,
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'black',
        shadowOpacity: 2.0,
        width: '100%',
        marginTop:2,
    },
    floatButton:{
        backgroundColor:'#03A9F4',
        //position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
       // borderWidth:1,
        borderRadius:50,
        //right: 30,
        bottom: 30,
       // left:150,
        

    },
    floatButtonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width:'100%',
        padding:'2%',
        marginRight:'8%',
        //borderWidth:1,
       // backgroundColor : '#ECEFF1',
        
    },
    textFloatButton:{
        fontSize:50,
        color :'#9E9E9E',
        justifyContent:'flex-end',
        padding: 5,
    },
    modalView:{
        backgroundColor:'rgba(158, 158, 158, 0.4)',
        justifyContent:'center',
        alignItems:'center',
        width: '100%',
        height:'100%',
        borderWidth:1,
        
    },
    modalViewIn:{
        backgroundColor:'white',
        justifyContent:'center',
        width: screen.width-80,
        alignItems:'center',
        padding:20,
    },
    input:{
        padding:10,
        fontSize: 16,
        width:'70%',
        backgroundColor:'rgba(158,158,158,0.5)',
        justifyContent:'center',
        color:'#ffffff',
        margin: 10,
        borderRadius: 5,
    },
    textTitle:{
        fontSize:24,
        fontFamily: 'monserrat',
        padding:5,
        color:'black',
    },
    botonIngresarGastos:{
        backgroundColor:'#4caf50',
        padding: 10,
        borderRadius: 5,
    },

    
});
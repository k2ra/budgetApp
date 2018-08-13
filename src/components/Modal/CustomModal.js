import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Modal,
  TouchableOpacity,
} from 'react-native';
export default class CustomModal extends React.Component {
  constructor(props){
    super(props);
    const modal= this.props.modal;
    this.state={
      modalVisible:modal,
    }
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal 
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert('Modal has been closed.'); }}
        >
          <View style={styles.modalView}>
            <View style={styles.modalViewIn}>
              <TouchableOpacity style={styles.botonIngresarGastos}
                    onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <Text>Hide Modal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
      width: '70%',
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
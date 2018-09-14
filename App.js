/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
//import EstadoCuenta  from './src/components/EstadoCuenta';
import Dashboard from './src/components/Dashboard';
import Topbox from './src/components/Topbox';
import AddBudget from './src/components/AddBudget';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const Route = createStackNavigator(
  {
    
    Dashboard: { screen: Dashboard},
    Topbox:{ screen: Topbox},
    AddBudget: {screen: AddBudget}
  },
  {
    initialRouteName: 'Dashboard',
  }
)
export default class App extends Component {
  render() {
    return (
      <Route navigation={this.props.navigation} style={styles.container}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

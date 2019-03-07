import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  MainViewContainer  from './components/main_view_container'

import { StatusBar } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar/>
        <MainViewContainer/>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignSelf: "stretch",
    justifyContent: 'center',
  },
});

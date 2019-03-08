import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  MainViewContainer  from './components/main_view_container'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native';
import deckReducer from "./reducers"
import applyMiddleware from "./utilities/reduxLogger"
import combineReducers from './reducers/index'

export default class App extends React.Component {
  render() {
    return (
        <Provider store={createStore(combineReducers, applyMiddleware)}>
          <View style={styles.container}>
            <StatusBar/>
            <MainViewContainer/>


          </View>
        </Provider>
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

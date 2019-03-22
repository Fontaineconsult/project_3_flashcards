import React from 'react';
import {View} from 'react-native';
import  MainViewContainer  from './components/main_view_container'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import applyMiddleware from "./utilities/reduxLogger"
import combineReducers from './reducers/index'
import {SafeAreaView} from 'react-navigation'

export default class App extends React.Component {
  render() {
    return (
        <Provider store={createStore(combineReducers, applyMiddleware)}>

        <View style={{flex:1}}>

            <MainViewContainer/>

          </View>

        </Provider>
    );
  }
}


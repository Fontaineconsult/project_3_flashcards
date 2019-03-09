// main view is the primary view, contains list of all the decks
import {createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddDeckView from './add_deck_view'
import DeckListView from './deck_list_container'
import IndividualDeckView from "./individual_deck_view";
import AddCardView from "./add_card_view"

const Hello = () => (<View><Text>Hello</Text></View>)
const Goodbye = () => (<View><Text>Goodbye</Text></View>)

const NavTab = createBottomTabNavigator({
    Decks: DeckListView,
    AddDeck: AddDeckView

})



const Stack = createStackNavigator({

    Home:{
        screen: NavTab,

    },
    IndividualDeckView: {
        screen:IndividualDeckView
    },
    AddCardView:{
        screen:AddCardView
    }

})


const App = createAppContainer(Stack)







export default class MainViewContainer extends React.Component {

    render() {
        return(
            <View stle={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>

                <Text>TEXT fds fsdf d fd sfsd fdsssddsfs dsdfdsfdsfsdfsdfsdfsdffsdfs fs</Text>
                <App stle={{ flex: 2, justifyContent: 'center', alignItems: 'stretch', alignSelf:"stretch" }}/>
            </View>
    )
    }


}


// main view is the primary view, contains list of all the decks
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddDeckView from './add_deck_view'
import DeckListView from './deck_list_container'


const Hello = () => (<View><Text>Hello</Text></View>)
const Goodbye = () => (<View><Text>Goodbye</Text></View>)

const NavTab = createBottomTabNavigator({
    Decks: DeckListView,
    AddDeck: AddDeckView

})



const App = createAppContainer(NavTab)

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


// main view is the primary view, contains list of all the decks
import {createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddDeckView from './add_deck_view'
import DeckListView from './deck_list_container'
import IndividualDeckView from "./individual_deck_view";
import AddCardView from "./add_card_view"
import QuizViewContainer from "./quiz_view_container"
import {getAllDecks} from "../utilities/storage"

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
    },
    QuizView:{
       screen: QuizViewContainer
    }

})


const App = createAppContainer(Stack)



export default class MainViewContainer extends React.Component {


    componentDidMount() {

        getAllDecks()
    }

    render() {
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>

                <Text>TEXT fds fsdf d fd sfsd fdsssddsfs dsdfdsfdsfsdfsdfsdfsdffsdfs fs</Text>
                <App style={{ flex: 2, justifyContent: 'center', alignItems: 'stretch', alignSelf:"stretch" }}/>
            </View>
    )
    }


}


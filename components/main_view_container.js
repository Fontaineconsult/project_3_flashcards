// main view is the primary view, contains list of all the decks
import {createBottomTabNavigator, createAppContainer, createStackNavigator, SafeAreaView} from 'react-navigation'
import React from 'react';
import {StatusBar, StyleSheet, Text, View, Platform, Animated} from 'react-native';
import AddDeckView from './add_deck_view'
import DeckListView from './deck_list_container'
import IndividualDeckView from "./individual_deck_view";
import AddCardView from "./add_card_view"
import QuizViewContainer from "./quiz_view_container"
import {loadDecksFromStorage} from "../actions/shared"
import { connect } from 'react-redux'
import {clearAsyncStorage} from "../utilities/storage"
import {setLocalNotification, clearLocalNotification} from "../utilities/deckObject"


const NavTab = createBottomTabNavigator({
    Decks: DeckListView,
    AddDeck: AddDeckView

})



const Stack = createStackNavigator(
    {
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
        },
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions:{
            headerStyle: {
                backgroundColor: '#f4511e',
                height: 30

            }

        }
    }




    );


const App = createAppContainer(Stack)



class MainViewContainer extends React.Component {

    height = (Platform.OS === 'android') ? 20 : 15


    componentDidMount() {
        let all_decks = loadDecksFromStorage();
        setLocalNotification();
        this.props.dispatch(all_decks)

    }

    render() {
        return(

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', height: this.height }}>
                <StatusBar/>
                <View style={{height: this.height}}/>
                <Text style={styles.textTitle}> Your Cool Guy Decks </Text>
                <App/>
            </View>

    )
    }


}


const styles = StyleSheet.create({
    textTitle: {
        paddingTop: 15,
        textAlign: 'center',
        fontSize: 18,
        borderBottomColor: '#2a2722'



    }


});





function mapStateToProps({state}) {
    return{state}
}

export default connect(mapStateToProps)(MainViewContainer)
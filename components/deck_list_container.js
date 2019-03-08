import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux'
import { createStackNavigator } from 'react-navigation';
import {IndividialDeckView} from './individual_deck_view'

class DeckListItem extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>{this.props.deck.deck_name}</Text>
                <Button title={"Go To Deck"} onPress={() => navigation.navigate()}/>
            </View>
        )

    }

}


class DeckListView extends React.Component {


    render() {
        console.log("DEERRPPP", this.props.decks)
        return(
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                {Object.keys(this.props.decks).map((id) =>(
                    <DeckListItem key={this.props.decks[id].deck_id} deck={this.props.decks[id]}  />
                ))}
                <Text>FARTS</Text>

            </View>

        )
    }


}


const Stack = createStackNavigator({

    Home:{
        screen: DeckListView,

    },
    Dashboard: {
        screen:IndividialDeckView
    }

})




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9c9c9c',
        alignItems: 'center',
        alignSelf: "stretch",
        justifyContent: 'flex-start',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor:'#2a2722',
        maxHeight: 80
    },
});


function mapStateToProps({decks}) {
    return {
        decks
    }

}

export default connect(mapStateToProps)(DeckListView)
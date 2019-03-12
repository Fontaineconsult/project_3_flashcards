// view contains deck title, number of cards in the deck, button to start quiz, button to add new question
import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';



function AddCardButton(props) {

    return(
        <View>
            <Button title={"Add Card"} onPress={() => props.props.navigation.navigate("AddCardView", { entryId: props.props.navigation.state.params.entryId})}/>
        </View>
    )

}

function GoToQuizButton(props) {
    return(
        <View>
            <Button title={"Go To Quiz"} onPress={() => props.props.navigation.navigate("QuizView", { entryId: props.props.navigation.state.params.entryId})}/>
        </View>
    )


}


function CardsInDeckCounter(props) {

    const DeckSize = props.deck.cards.length
    return(
        <View>
            <Text>Cards: {DeckSize}</Text>
        </View>
    )

}


class IndividualDeckView extends React.Component {

    render() {

        return(
            <View>
                <Text>Deck view</Text>
                <Text>{this.props.decks[this.props.navigation.state.params.entryId].deck_name}</Text>
                <AddCardButton props={this.props}/>
                <GoToQuizButton props={this.props}/>
                <CardsInDeckCounter deck={this.props.decks[this.props.navigation.state.params.entryId]}/>
            </View>

        )
    }


}


function mapStateToProps({decks}) {

    return({
        decks
    })
}



export default connect(mapStateToProps)(IndividualDeckView)
// view contains deck title, number of cards in the deck, button to start quiz, button to add new question
import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';



function AddCardButton(props) {

    return(
        <View style={ {marginBottom: 5}}>
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

    const styles = StyleSheet.create({
        container: {
            marginTop:10,
            marginBottom:10
        },
        text: {
            textAlign: 'center',
        }

    });
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Cards: {DeckSize}</Text>
        </View>
    )


}


class IndividualDeckView extends React.Component {

    render() {
        return(
            <View style={styles.deckContainer}>

                <Text style={styles.deckTitle}>{this.props.decks[this.props.navigation.state.params.entryId].deck_name}</Text>
                <View style={styles.deckSize}>
                    <CardsInDeckCounter deck={this.props.decks[this.props.navigation.state.params.entryId]}/>
                </View>
                <View style={styles.button} >
                    <View style={{marginRight: 5, marginLeft: 5, marginBottom: 15}}>
                        <AddCardButton  props={this.props}/>

                    </View>

                    <View style={{marginRight: 5, marginLeft: 5}}>
                        <GoToQuizButton  props={this.props}/>

                    </View>

                </View>

            </View>

        )
    }


}


const styles = StyleSheet.create({
    deckContainer: {
        flex:1,
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 15,
        marginRight: 15,
        borderWidth: 1,
        borderColor: "#4c3223",

        alignItems: 'stretch',
        borderRadius: 3,

    },

    deckTitle: {
        textAlign: 'center',
        fontSize: 22,
        backgroundColor: '#d0cdcd',
        marginTop: 50
    },

    button: {
        flexDirection: "column",
        flex: 0.3,
        justifyContent: 'center',
        backgroundColor: '#b2afaf'

    },

    deckSize: {


    }



});

function mapStateToProps({decks}) {

    return({
        decks
    })
}



export default connect(mapStateToProps)(IndividualDeckView)
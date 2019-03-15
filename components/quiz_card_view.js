// possibly contains question, hidden answer, button to show answer. Is an endpoint, won't interact with redux or other components


import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { YatesShuffle } from "../utilities/deckObject";
import  CardAtIndex  from  "./card_at_index_view"




class QuizView extends React.Component {
    state = {
        index:0,
        givenAnswer: '',
        correctAnswer: 0,
        incorrectAnswer: 0

    };

    incrementIndex = () => {

        if (this.state.index === this.props.deckLength) {
            console.log("Deck at max length")

        } else {
            this.setState({
                index: this.state.index + 1

            })

        }



    };
    updateQuestionInput = (input) => {

        this.setState(() => ({
            givenAnswer:input

        }))
    };
    answerCorrect = () => {

        this.setState({
            correctAnswer: this.state.correctAnswer + 1

        })


    };
    answerIncorrect = () => {
        this.setState(() => ({
            incorrectAnswer: this.state.incorrectAnswer + 1

        }))

    };

    render(){

        return(
            <View>
                <Text>Quiz View</Text>
                <CardAtIndex card={this.props.shuffledDeck[this.state.index]}/>
                <Button title={"Next Card"} onPress={this.incrementIndex}/>
                <TextInput
                    value={this.state.givenAnswer}
                    onChangeText={this.updateQuestionInput}
                />
                <Button title={"Correct"} onPress={this.state.answerCorrect}/>
                <Button title={"Incorrect"} onPress={this.state.answerIncorrect}/>
            </View>


        )
    }



}


function mapStateToProps({decks}, ownProps) {
    const shuffledDeck = YatesShuffle(decks[ownProps.deck_id].cards);
    const deckLength = decks[ownProps.deck_id].cards.length
    console.log(ownProps)
    return ({shuffledDeck, deckLength})
}


export default connect(mapStateToProps)(QuizView)
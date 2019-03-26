// possibly contains question, hidden answer, button to show answer. Is an endpoint, won't interact with redux or other components


import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { YatesShuffle } from "../utilities/deckObject";
import  CardAtIndex  from  "./card_at_index_view"
import FinalScoreView from "./final_score_view"
import {clearLocalNotification} from "../utilities/deckObject"


class QuizView extends React.Component {

    state = {
        index:0,
        givenAnswer: '',
        correctAnswer: 0,
        incorrectAnswer: 0,
        deckAtEOL: false,
        showFinalScoreView: false,
        deck: []
    };

    incrementIndex = () => {
        if (this.state.index === this.props.deckLength - 1) {

            this.setState({
                deckAtEOL: true
            })

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

        if (this.state.givenAnswer.length > 0) {

            this.incrementIndex()
            this.setState({
                correctAnswer: this.state.correctAnswer + 1,
                givenAnswer: ''
            })


        } else {
            Alert.alert("Provide an Answer","Enter Something!!")

        }



    };
    answerIncorrect = () => {

        if (this.state.givenAnswer.length > 0) {
            this.incrementIndex();
            this.setState(() => ({
                incorrectAnswer: this.state.incorrectAnswer + 1,
                givenAnswer: ''

            }))


        } else {
            Alert.alert("Provide an Answer","Enter Something!!")


        }



    };
    toggleFinalScoreView = () => {
        clearLocalNotification();
        this.setState({
            showFinalScoreView: true

        })

    }
    resetQuiz = () => {

        this.setState({
            index:0,
            givenAnswer: '',
            correctAnswer: 0,
            incorrectAnswer: 0,
            deckAtEOL: false,
            showFinalScoreView: false,
            deck: YatesShuffle(this.state.deck)

        })

    }


    componentDidMount() {

        this.setState({
            deck: YatesShuffle(this.props.shuffledDeck)
        })
    }

    render(){

        return(

            <View>
                <Text style={styles.textHeader}>Take Er' Qerrz</Text>
                {!this.state.showFinalScoreView && (<Text style={styles.textHeader}>{this.props.deckLength - (this.state.correctAnswer + this.state.incorrectAnswer)}  Cards Remaining</Text>)}
                {!this.state.deckAtEOL && (<CardAtIndex card={this.props.shuffledDeck[this.state.index]}/>)}
                {this.state.deckAtEOL && (<Button title={"Show Score"} onPress={this.toggleFinalScoreView}/>)}


                {!this.state.deckAtEOL && (<TextInput
                    style={styles.textHeader}
                    value={this.state.givenAnswer}
                    onChangeText={this.updateQuestionInput}
                    placeholder="Enter Answer"
                />)}
                {this.state.showFinalScoreView && (<FinalScoreView correct={this.state.correctAnswer}
                                                                   incorrect={this.state.incorrectAnswer}/>)}
                {this.state.showFinalScoreView && (<Button title={"Restart Quiz"} onPress={this.resetQuiz}/>)}
                {this.state.showFinalScoreView && (<Button title={"Back to Deck"} onPress={() => this.props.navigation.navigate("IndividualDeckView", { entryId: this.props.deck_id})}/>)}

                <View style={styles.answerButtons}>
                    {!this.state.deckAtEOL && (<Button title={"Correct"} onPress={this.answerCorrect}/>)}
                    {!this.state.deckAtEOL && (<Button title={"Incorrect"} onPress={this.answerIncorrect}/>)}
                </View>
            </View>



        )
    }


}


const styles = StyleSheet.create({

    container: {},
    textHeader: {
        textAlign: 'center'
    },
    answerInput: {
        textAlign: 'center',
        fontSize: 18,

    },
    buttons: {},
    answerButtons: {
        flexDirection: "row",
        justifyContent: "space-around"

    }



})



function mapStateToProps({decks}, ownProps) {
    const shuffledDeck = decks[ownProps.deck_id].cards;
    const deckLength = decks[ownProps.deck_id].cards.length;

    return ({shuffledDeck, deckLength})
}


export default connect(mapStateToProps)(QuizView)
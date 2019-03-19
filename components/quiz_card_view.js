// possibly contains question, hidden answer, button to show answer. Is an endpoint, won't interact with redux or other components


import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { YatesShuffle } from "../utilities/deckObject";
import  CardAtIndex  from  "./card_at_index_view"
import FinalScoreView from "./final_score_view"



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
            console.log("Gooiingg Uppp", this.state.index)
            this.setState({
                deckAtEOL: true
            })

        } else {
            console.log("Gooiingg Uppp", this.state.index)
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
        this.incrementIndex()
        this.setState({
            correctAnswer: this.state.correctAnswer + 1

        })


    };
    answerIncorrect = () => {
        this.incrementIndex()
        this.setState(() => ({
            incorrectAnswer: this.state.incorrectAnswer + 1

        }))

    };
    toggleFinalScoreView = () => {

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
        console.log("DECKLENGTH", this.props.deckLength)
        return(

            <View>
                <Text>Quiz View</Text>


                {!this.state.deckAtEOL && (<CardAtIndex card={this.props.shuffledDeck[this.state.index]}/>)}
                {this.state.deckAtEOL && (<Button title={"Show Score"} onPress={this.toggleFinalScoreView}/>)}
                {!this.state.deckAtEOL && (<TextInput
                    value={this.state.givenAnswer}
                    onChangeText={this.updateQuestionInput}
                />)}

                {this.state.showFinalScoreView && (<FinalScoreView correct={this.state.correctAnswer}
                                                                   incorrect={this.state.incorrectAnswer}/>)}

                {this.state.showFinalScoreView && (<Button title={"Reset Quiz"} onPress={this.resetQuiz}/>)}
                {!this.state.deckAtEOL && (<Button title={"Correct"} onPress={this.answerCorrect}/>)}
                {!this.state.deckAtEOL && (<Button title={"Incorrect"} onPress={this.answerIncorrect}/>)}
            </View>


        )
    }



}


function mapStateToProps({decks}, ownProps) {
    const shuffledDeck = decks[ownProps.deck_id].cards
    const deckLength = decks[ownProps.deck_id].cards.length
    console.log(ownProps)
    return ({shuffledDeck, deckLength})
}


export default connect(mapStateToProps)(QuizView)
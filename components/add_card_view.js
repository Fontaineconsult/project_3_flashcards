// contains form to add question card. Question and Answer
import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import dispatchAddCard from "../actions/shared"



class AddCardView extends React.Component {

    state = {
        question: "",
        answer: "",


    };

    updateQuestionInput = (input) => {

        this.setState(() => ({
            question: input

        }))
    };
    updateAnswerInput = (input) => {

        this.setState(() => ({
            answer:input

        }))
    };

    addCard = () => {

      this.props.dispatch(dispatchAddCard())
    };


    render() {
        console.log("ERPEORER", this.props)
        return(
            <View>
                <Text>Card View</Text>
                <Text>{this.props.decks[this.props.navigation.state.params.entryId].deck_name}</Text>
                <TextInput
                    value={this.state.question}
                    onChangeText={this.updateQuestionInput}
                />
                <TextInput
                    value={this.state.answer}
                    onChangeText={this.updateAnswerInput}
                />
                <Button title="Add Card" onPress={this.addDeck}/>


            </View>

        )
    }


}



function mapStateToProps({decks}) {

    return({
        decks
    })
}



export default connect(mapStateToProps)(AddCardView)
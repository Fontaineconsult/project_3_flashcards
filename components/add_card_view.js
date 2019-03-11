// contains form to add question card. Question and Answer
import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {dispatchAddCard} from "../actions/shared"



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
      const card = {deck_id:this.props.navigation.state.params.entryId,
                    question:this.state.question,
                    answer: this.state.answer}

      this.props.dispatch(dispatchAddCard(card))
    };


    render() {

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
                <Button title="Add Card" onPress={this.addCard}/>


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
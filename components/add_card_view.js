// contains form to add question card. Question and Answer
import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
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

        if (this.state.question === "" || this.state.answer === "") {
            Alert.alert("Form Incomplete", "Please Complete the card form")
        } else {
            const card = {deck_id:this.props.navigation.state.params.entryId,
                question:this.state.question,
                answer: this.state.answer}
            this.props.dispatch(dispatchAddCard(card))
            this.setState(() => ({
                question: "",
                answer: "",

            }))
        }

    };


    render() {

        return(
            <View style={styles.deckContainer}>
                <Text style={styles.textHeader}>Add a New Card For</Text>
                <Text style={styles.deckTitle}>{this.props.decks[this.props.navigation.state.params.entryId].deck_name}</Text>
                <TextInput
                    style={styles.textInput}
                    value={this.state.question}
                    onChangeText={this.updateQuestionInput}
                    placeholder="Enter Question"
                />
                <TextInput
                    style={styles.textInput}
                    value={this.state.answer}
                    onChangeText={this.updateAnswerInput}
                    placeholder="Enter Answer"
                />
                <Button title="Add Card" onPress={this.addCard}/>
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


    textInput :{
        borderWidth: 1,
        borderColor: "#1c2223",
        marginBottom: 5

    },
    deckTitle:{
        textAlign: 'center',
        fontSize: 18,
        backgroundColor: '#d0cdcd',


    },
    textHeader: {
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: '#d0cdcd',



    }




})


function mapStateToProps({decks}) {

    return({
        decks
    })
}



export default connect(mapStateToProps)(AddCardView)
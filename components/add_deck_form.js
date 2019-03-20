import React from "react";
import {dispatchAddDeck} from "../actions/shared";
import {Button, TextInput, View} from "react-native";
import { connect } from 'react-redux'
import IndividualDeckView from './individual_deck_view'
import { generateUID } from '../utilities/deckObject'


class AddDeckForm extends React.Component {

    state = {
        input: 'Enter a deck name',


    };

    updateTextInput = (input) => {

        this.setState(() => ({
            input

        }))
    };
    addDeck = () => {
        let deck_id = generateUID()
        console.log("FIRSTDECKIDDD", deck_id)
        this.props.dispatch(dispatchAddDeck(this.state.input, deck_id))
        this.props.props.navigation.navigate("IndividualDeckView", { entryId: deck_id})

    };



    render() {
        console.log("DERRPPP", this.props)
        return (

            <View>
                <TextInput
                    value={this.state.input}
                    onChangeText={this.updateTextInput}
                />
                <Button title="Add Deck" onPress={this.addDeck}/>
            </View>
        )

    }
}


function mapStateToProps(state) {
    return {
        state
    }
}



export default connect(mapStateToProps)(AddDeckForm)
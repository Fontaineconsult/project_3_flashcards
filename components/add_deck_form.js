import React from "react";
import {dispatchAddDeck} from "../actions/shared";
import {Button, TextInput, View} from "react-native";
import { connect } from 'react-redux'


class AddDeckForm extends React.Component {

    state = {
        input: 'Enter a deck name'

    };

    updateTextInput = (input) => {

        this.setState(() => ({
            input

        }))
    };
    addDeck = () => {

        this.props.dispatch(dispatchAddDeck(this.state.input))

    };

    render() {

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
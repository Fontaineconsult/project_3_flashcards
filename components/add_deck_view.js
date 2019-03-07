// contains form to add new deck, routes to new deck after created

import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {dispatchAddDeck}from "../actions/shared"



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

        dispatchAddDeck(this.state.input)

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




export default class AddDeckView extends React.Component {

    render() {
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Add Deck View</Text>
                <AddDeckForm/>
            </View>

        )
    }


}


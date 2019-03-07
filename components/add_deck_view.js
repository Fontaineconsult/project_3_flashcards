// contains form to add new deck, routes to new deck after created

import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';




class AddDeckForm extends React.Component {

    state = {
        input: 'Enter a deck name'

    };

    updateTextInput = (input) => {

      this.setState(() => ({
          input

      }))
    };

    render() {
        return (
            <View>
                <TextInput
                    value={this.state.input}
                    onChangeText={this.updateTextInput}
                />
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


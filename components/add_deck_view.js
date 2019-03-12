// contains form to add new deck, routes to new deck after created

import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux'
import AddDeckForm from './add_deck_form'




class AddDeckView extends React.Component {

    render() {

        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Add Deck View</Text>
                <AddDeckForm props={this.props}/>
            </View>

        )
    }


}

function mapStateToProps({decks}) {
    return {

        decks
    }
}



export default connect(mapStateToProps)(AddDeckView)
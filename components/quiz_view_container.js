// master container hosting quiz feature
// current score, total score when finished, buttons to restart quiz or go back to deck view

import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


class QuizViewContainer extends React.Component {

    render(){
        return(
            <View>
                <Text>Quiz View Container</Text>
            </View>

        )

    }


}


function mapStateToProps({decks}) {
    return ({decks})
}


export default connect(mapStateToProps)(QuizViewContainer)
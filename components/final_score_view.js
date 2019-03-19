import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default class FinalScoreView extends React.Component {

    render() {
        return(
            <View>
                <Text>FINAL SCORE VIEW</Text>
                <Text>Total Correct {this.props.correct}</Text>
                <Text>Total Incorrect {this.props.incorrect}</Text>
            </View>


        )
    }


}
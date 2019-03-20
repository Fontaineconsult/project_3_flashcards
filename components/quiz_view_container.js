// master container hosting quiz feature
// current score, total score when finished, buttons to restart quiz or go back to deck view

import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import QuizView from './quiz_card_view'

class QuizViewContainer extends React.Component {

    state = {
        ShowQuiz:false

    }

    StartQuiz = () => {this.setState({ShowQuiz:true})}


    render(){
        console.log("DEPREREPEREER", this.props)
        return(
            <View>
                <Text>Quiz View Container</Text>
                <Text>{this.props.decks[this.props.navigation.state.params.entryId].deck_name}</Text>
                <Button title={"Start"} onPress={this.StartQuiz}/>
                <QuizView navigation={this.props.navigation} deck_id={this.props.navigation.state.params.entryId}/>


            </View>

        )

    }


}


function mapStateToProps({decks}) {
    return ({decks})
}


export default connect(mapStateToProps)(QuizViewContainer)
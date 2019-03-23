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

        return(
            <View style={styles.deckContainer}>

                <Text style={styles.textHeader}>Take a quiz</Text>
                <Text style={styles.deckTitle}>{this.props.decks[this.props.navigation.state.params.entryId].deck_name}</Text>
                <Button title={"Start Quiz"} onPress={this.StartQuiz}/>

                {this.state.ShowQuiz ? <QuizView navigation={this.props.navigation} deck_id={this.props.navigation.state.params.entryId}/>
                    :
                    <View><Text>Click To Start Quiz</Text></View>
                }




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


    deckTitle: {
        textAlign: 'center',
        fontSize: 18,
        backgroundColor: '#d0cdcd',
    },
    textHeader: {
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: '#d0cdcd',



    }





});


function mapStateToProps({decks}) {
    return ({decks})
}


export default connect(mapStateToProps)(QuizViewContainer)
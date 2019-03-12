// possibly contains question, hidden answer, button to show answer. Is an endpoint, won't interact with redux or other components


import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { YatesShuffle } from "../utilities/deckObject";



function CardAtIndex(props) {
    console.log("CARD PROPS", props)
    let key_obj = Object.keys(props.card);
    let key = key_obj[0];
    console.log("THEKEY", key)
    return(
        <View>
            <Text>{props.card[key].card_question}</Text>
        </View>


        )



}




class QuizView extends React.Component {
    state = {
        index:0

    };

    incrementIndex = () => {
        this.setState({
            index: this.state.index + 1

        })

    };

    render(){
        console.log("THESHUFFLEDECK",this.props.shuffledDeck)
        return(
            <View>
                <Text>Quiz View</Text>
                <CardAtIndex card={this.props.shuffledDeck[this.state.index]}/>
                <Button title={"Next Card"} onPress={this.incrementIndex}/>


            </View>


        )
    }



}


function mapStateToProps({decks}, ownProps) {
    const shuffledDeck = YatesShuffle(decks[ownProps.deck_id].cards);

    console.log(ownProps)
    return ({shuffledDeck})
}


export default connect(mapStateToProps)(QuizView)
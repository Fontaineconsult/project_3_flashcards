import {Button, Text, TextInput, View} from "react-native";
import React from "react";



export default class CardAtIndex extends React.Component {


    state = {
        answerVisible:false,
        givenAnswer:''


    };

    toggleShowAnswer = () => {

      this.setState({
          answerVisible: !this.state.answerVisible

      })
    };


    render() {


        return(
            <View>
                <Text>{this.props.card[Object.keys(this.props.card)[0]].card_question}</Text>
                {this.state.answerVisible && (<Text>{this.props.card[Object.keys(this.props.card)[0]].card_answer}</Text>)}
                {!this.state.answerVisible && (<Text>Answer Hidden</Text>)}
                <Button title={ this.state.answerVisible === false ? "Show Answer" : "Hide Answer"} onPress={this.toggleShowAnswer}/>
            </View>


        )

    }




}
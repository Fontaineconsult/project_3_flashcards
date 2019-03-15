import {Button, Text, TextInput, View} from "react-native";
import React from "react";



export default class CardAtIndex extends React.Component {


    state = {
        answerVisible:false,
        givenAnswer:''


    }

    key_obj = Object.keys(this.props.card);
    key = this.key_obj[0];

    toggleShowAnswer = () => {

      this.setState({
          answerVisible: !this.state.answerVisible

      })
    };


    render() {
        return(
            <View>
                <Text>{this.props.card[this.key].card_question}</Text>
                {this.state.answerVisible && (<Text>{this.props.card[this.key].card_answer}</Text>)}
                {!this.state.answerVisible && (<Text>Answer Hidden</Text>)}
                <Button title={"Show Answer"} onPress={this.toggleShowAnswer}/>


            </View>


        )

    }




}
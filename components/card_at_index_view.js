import {Button, Text, TextInput, View, StyleSheet, Animated} from "react-native";
import React from "react";



export default class CardAtIndex extends React.Component {


    state = {
        answerVisible:false,
        givenAnswer:'',
        bounceValue: new Animated.Value(1)


    };

    toggleShowAnswer = () => {

      this.setState({
          answerVisible: !this.state.answerVisible

      })
    };

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevProps.card !== this.props.card) {

            Animated.sequence([
                Animated.timing(this.state.bounceValue, {duration: 300, toValue:1.06}),
                Animated.spring(this.state.bounceValue, { toValue:1, friction: 4})
            ]).start()


        }




    }

    render() {


        return(
            <View styles={styles.container}>
                <Animated.Text style={[styles.questionHeader, {transform:[ {scale:this.state.bounceValue} ]}]}>Question</Animated.Text>



                <Text style={styles.question}>{this.props.card[Object.keys(this.props.card)[0]].card_question}</Text>

                <Animated.Text style={[styles.questionHeader, {transform:[ {scale:this.state.bounceValue} ]}]}>Answer</Animated.Text>
                {this.state.answerVisible && (<Text style={styles.questionHeader}>{this.props.card[Object.keys(this.props.card)[0]].card_answer}</Text>)}
                {!this.state.answerVisible && (<Text style={styles.questionHeader}>Answer Hidden</Text>)}
                <View style={styles.showAnswer}>
                    <Button  title={ this.state.answerVisible === false ? "Show Answer" : "Hide Answer"} onPress={this.toggleShowAnswer}/>
                </View>
            </View>



        )

    }




}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'stretch',
        justifyContent: 'center'

    },


    questionHeader: {
        textAlign: 'center',
        marginTop: 20,
    },
    question: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 30,
    },
    answer: {},
    showAnswer:{
        marginRight: 50,
        marginLeft: 50

    }




})
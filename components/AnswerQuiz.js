import React, {Component} from "react";
import {View, Text, TouchableOpacity, StyleSheet, Button} from "react-native";
import {white, gray, darkBlue, red, blue, orange} from '../utils/colors'
import FlipCard from 'react-native-flip-card'
export default class AnswerQuiz extends Component {
    state = {
        cardSide: 'question'
    }
    flipCard() {
        this.state.cardSide === "question"
            ? this.setState({cardSide: "answer"})
            : this.setState({cardSide: "question"});
    }
    render() {
        return (
            <View style={styles.container}>
                <Text
                    style={{
                    padding: 10,
                    alignSelf: "flex-start",
                    fontSize: 20
                }}>
                    Abc
                </Text>
                <FlipCard
                    style={{
                    marginTop: 0,
                    paddingBottom: 50,
                    margin: 0,
                    padding: 0,
                    width: 400,
                    alignSelf: "center"
                }}
                    friction={6}
                    alignHeight={true}
                    perspective={500}
                    flipHorizontal={true}
                    flipVertical={false}
                    flip={this.state.cardSide === "question"
                    ? false
                    : true}
                    clickable={false}
                    onFlipEnd={isFlipEnd => {
                    console.log("isFlipEnd", isFlipEnd);
                }}>
                    {/* Face Side */}
                    <View
                        style={{
                        flex: 1,
                        marginBottom: 50,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text
                            style={{
                            fontSize: 25,
                            marginBottom: 50
                        }}>
                            Question
                        </Text>
                    </View>
                    {/* Back Side */}
                    <View
                        style={{
                        flex: 1,
                        marginBottom: 50,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text
                            style={{
                            fontSize: 25,
                            marginBottom: 50
                        }}>
                            Answer
                        </Text>
                    </View>
                </FlipCard>
                <TouchableOpacity
                    style={styles.answerbutton}
                    onPress={() => {
                    this.flipCard();
                }}>
                    <Text style={styles.buttonText}>
                        Answer
                    </Text>
                </TouchableOpacity>
                <View style={styles.buttonsView}>
                    <TouchableOpacity style={styles.correctbutton}>
                        <Text style={styles.buttonText}>
                            Correct
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.wrongbutton}>
                        <Text style={styles.buttonText}>
                            Wrong
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    card: {
        width: 500,
        height: 200
    },
    questionAnswer: {
        fontSize: 15
    },
    face: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    back: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    answerbutton: {
        padding: 10,
        backgroundColor: red,
        alignSelf: 'center',
        borderRadius: 5,
        margin: 20
    },
    buttonText: {
        color: white,
        fontSize: 20
    }, 
    buttonsView: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    correctbutton: {
        padding: 10,
        backgroundColor: blue,
        alignSelf: 'center',
        borderRadius: 5,
        margin: 20
    },
    wrongbutton: {
        padding: 10,
        backgroundColor: orange,
        alignSelf: 'center',
        borderRadius: 5,
        margin: 20
    }
});
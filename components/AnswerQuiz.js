import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import { white, gray, darkBlue, red, blue, orange } from '../utils/colors'
import FlipCard from 'react-native-flip-card';
import { getDeckById } from '../utils/api'
export default class AnswerQuiz extends Component {
    state = {
        cardSide: 'question',
        questionIndex: 0,
        correctCount: 0,
        questions: []
    }
    componentDidMount() {
        const deckId = this.props.navigation.state.params.id;
        getDeckById(deckId).then(response => {
            this.setState(() => ({
                questions: response.questions
            }))
        });
    }
    restartQuiz() {
        this.setState(() => ({
            cardSide: 'question',
            questionIndex: 0,
            correctCount: 0,
        }))
    }
    flipCard() {
        this.state.cardSide === "question"
            ? this.setState({ cardSide: "answer" })
            : this.setState({ cardSide: "question" });
    }
    handleSubmit(flag) {
        this.setState((state) => ({
            questionIndex: state.questionIndex + 1,
            cardSide: 'question',
            correctCount: flag ? state.correctCount + 1 : state.correctCount
        }))
    }
    render() {
        const { questions, cardSide, questionIndex, correctCount } = this.state;
        const { navigate } = this.props.navigation;
        const deckId = this.props.navigation.state.params.id;
        if (questions.length === 0) {
            return null;
        }
        // If all questions are answered 
        if (questionIndex === questions.length) {
            return (
                <View style={styles.container}>
                    <Text style={styles.head}>
                        Congratulations on answering all the questions
                    </Text>
                    <Text style={styles.content}>
                        You marked {correctCount} questions as correct
                    </Text>
                    <Text style={styles.content}>
                        You marked {questions.length - correctCount} questions as wrong
                    </Text>
                    <View style={styles.buttonsView}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigate('CardDetail', { id: deckId })}>
                            <Text style={styles.buttonText}>
                                Back to Deck
                        </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}
                            onPress={() => this.restartQuiz()}>
                            <Text style={styles.buttonText}>
                                Restart Quiz
                        </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
        const { question, answer } = questions[questionIndex];
        return (
            <View style={styles.container}>
                <Text
                    style={{
                        padding: 10,
                        alignSelf: "flex-start",
                        fontSize: 20
                    }}>
                    {questionIndex + 1 + '/' + questions.length}
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
                            {question}
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
                            {answer}
                        </Text>
                    </View>
                </FlipCard>
                <TouchableOpacity
                    style={styles.answerbutton}
                    onPress={() => {
                        this.flipCard();
                    }}>
                    <Text style={styles.buttonText}>
                        {cardSide === 'answer' ? 'Question' : 'Answer'}
                    </Text>
                </TouchableOpacity>
                <View style={styles.buttonsView}>
                    <TouchableOpacity style={styles.correctbutton}
                        onPress={() => this.handleSubmit(true)}>
                        <Text style={styles.buttonText}>
                            Correct
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.wrongbutton}
                        onPress={() => this.handleSubmit(false)}>
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
    }, head: {
        fontSize: 28,
        backgroundColor: 'transparent',
        padding: 10,
        color: red
    }, content: {
        fontSize: 20,
        color: gray,
        textAlign: 'center'
    }, button: {
        padding: 10,
        backgroundColor: darkBlue,
        alignSelf: 'center',
        borderRadius: 5,
        margin: 20
    }
});
import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { white, gray, darkBlue } from '../utils/colors'
//import {addCard} from '../utils/api'
import { createCard } from '../actions/decks'

class AddCard extends Component {
    state = {
        question: '',
        answer: ''
    }
    handleInputChange(name, value) {
        this.setState(() => ({
            [name]: value
        }));
    }
    handleSubmit() {
        const deckId = this.props.navigation.state.params.id;
        this.props.dispatch(createCard(deckId, this.state))
        this.setState(() => ({
            question: '',
            answer: ''
        }))
    }
    render() {
        const { question, answer } = this.state
        return (
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>
                    Please enter question in first box followed by answer in the second
                </Text>
                <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Question"
                    value={this.state.question}
                    placeholderTextColor="#9a73ef"
                    name="question"
                    onChangeText={this.handleInputChange.bind(this, 'question')}
                    autoCapitalize="none" />
                <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Answer"
                    placeholderTextColor="#9a73ef"
                    value={this.state.answer}
                    onChangeText={this.handleInputChange.bind(this, 'answer')}
                    name="answer"
                    autoCapitalize="none" />
                <TouchableOpacity disabled={question === "" || answer === ""}
                    style={question === "" || answer === "" ? styles.buttonDisabled : styles.button}
                    onPress={() => this.handleSubmit()}>
                    <Text style={styles.buttonText}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default connect()(AddCard)
const styles = StyleSheet.create({
    headingContainer: {
        flex: 1
    },
    heading: {
        fontSize: 20,
        textAlign: 'center',
        color: gray,
        marginTop: 10
    },
    input: {
        margin: 10,
        textAlign: 'center',
        height: 50,
        borderWidth: 2,
        borderColor: darkBlue,
        borderRadius: 20,
        backgroundColor: "#FFFFFF"
    },
    button: {
        padding: 10,
        backgroundColor: darkBlue,
        alignSelf: 'center',
        borderRadius: 5,
        margin: 20
    },
    buttonDisabled: {
        padding: 10,
        backgroundColor: darkBlue,
        alignSelf: 'center',
        borderRadius: 5,
        margin: 20,
        opacity:0.6
    },
    buttonText: {
        color: white,
        fontSize: 20
    }
})
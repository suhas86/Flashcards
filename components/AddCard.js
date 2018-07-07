import React, {Component} from "react";
import {View, Text, TouchableOpacity,TextInput, StyleSheet} from "react-native";
import {white, gray, darkBlue} from '../utils/colors'
import {addCard} from '../utils/api'

export default class AddCard extends Component {
    state = {
        question:'',
        answer:''
    }
    handleInputChange(name,value) {
        this.setState(() => ({
          [name]: value
        }));
      }
      handleSubmit() {
        const deckId = this.props.navigation.state.params.id;
          addCard(deckId,this.state).then(response => console.log(response));
          this.setState(()=> ({
              question:'',
              answer:''
          }))
      }
    render() {    
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
                    onChangeText = {this.handleInputChange.bind(this,'question')}
                    autoCapitalize="none"/>
                <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Answer"
                    placeholderTextColor="#9a73ef"
                    value={this.state.answer}
                    onChangeText = {this.handleInputChange.bind(this,'answer')}
                    name="answer"
                    autoCapitalize="none"/>
                <TouchableOpacity style={styles.button}
                onPress={() => this.handleSubmit()}>
                    <Text style={styles.buttonText}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
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
    buttonText: {
        color: white,
        fontSize: 20
    }
})
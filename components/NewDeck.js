import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { gray, darkBlue, white } from '../utils/colors'
//import {addDeck,getDecks} from '../utils/api'
import { createDeck } from "../actions/decks"
class NewDeck extends Component {
    state = {
        name: ''
    }
    handleSubmit() {
        const { name } = this.state;
        if (name !== '') {
            this.props.createDeck(name)
            this.setState(() => ({
                name: ''
            }))
            setTimeout(() => {
                this.props.navigation.navigate('CardDetail', { id: name })
            },3000)
        }
    }
    handleChange = name => {
        this.setState({ name });
    }
    render() {
        return (
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>
                    What is the title of the new deck?
                </Text>
                <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Enter Deck Title"
                    placeholderTextColor="#9a73ef"
                    value={this.state.name}
                    onChangeText={name => { this.handleChange(name) }}
                    autoCapitalize="none" />
                <TouchableOpacity disabled={this.state.name === ''}
                    style={this.state.name === '' ? styles.disabledButton : styles.button}
                    onPress={() => this.handleSubmit()}>
                    <Text style={styles.buttonText}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createDeck: deck => dispatch(createDeck(deck))
    }
}
export default connect(null, mapDispatchToProps)(NewDeck);
const styles = StyleSheet.create({
    headingContainer: {
        flex: 1
    },
    heading: {
        fontSize: 35,
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
    disabledButton: {
        padding: 10,
        backgroundColor: darkBlue,
        alignSelf: 'center',
        borderRadius: 5,
        margin: 20,
        opacity: 0.5
    },
    buttonText: {
        color: white,
        fontSize: 20
    },
})
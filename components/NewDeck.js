import React, {Component} from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";
import {gray, darkBlue, white} from '../utils/colors'
export default class NewDeck extends Component {
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
                    autoCapitalize="none"/>
                <TouchableOpacity style={styles.button}>
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
    buttonText: {
        color: white,
        fontSize: 20
    },
})
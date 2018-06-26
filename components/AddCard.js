import React, {Component} from "react";
import {View, Text, TouchableOpacity,TextInput, StyleSheet} from "react-native";
import {white, gray, darkBlue} from '../utils/colors'

export default class AddCard extends Component {
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
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"/>
                <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Answer"
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
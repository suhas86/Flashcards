import React, {Component} from "react";
import {View, Text, TouchableOpacity, StyleSheet, Platform} from "react-native";
import {white, gray, darkBlue} from '../utils/colors'

class CardDetail extends Component {
    // TOOD: Header text dynamically
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.conatiner}>
                <Text style={styles.title}>Content</Text>
                <Text style={styles.content}>3 Cards</Text>
                <View style={styles.buttonsView}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigate('AddCard', {name: 'Jane'})}>
                        <Text style={styles.buttonText}>
                            Add Card
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                    onPress={() => navigate('AnswerQuiz', {name: 'Jane'})}>
                        <Text style={styles.buttonText}>
                            Start Quiz
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        justifyContent: 'center'
    },
    buttonsView: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    title: {
        fontSize: 38,
        backgroundColor: 'transparent',
        textAlign: 'center'
    },
    content: {
        fontSize: 20,
        color: gray,
        textAlign: 'center'
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
export default CardDetail;
import React, {Component} from "react";
import {View, Text, TouchableOpacity, StyleSheet, Platform} from "react-native";
import {white, gray, darkBlue} from '../utils/colors'
import {getDeckById} from '../utils/api'

class CardDetail extends Component {
    // TOOD: Header text dynamically
    state = {
        deck:{}
    }
    componentDidMount() {
        const deckId = this.props.navigation.state.params.id;
        getDeckById(deckId).then(response => {
            this.setState(() => ({
                deck:response
            }))
        });
    }
    render() {
        const {navigate} = this.props.navigation;
        const {deck}=this.state;
        const deckId = this.props.navigation.state.params.id;
        return (
            <View style={styles.conatiner}>
                <Text style={styles.title}>{deck.name}</Text>
                {deck.questions ? (<Text style={styles.content}>{deck.questions.length} Cards</Text>):(<Text style={styles.content}>0 Cards</Text>)}
                
                <View style={styles.buttonsView}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigate('AddCard', {id: deckId})}>
                        <Text style={styles.buttonText}>
                            Add Card
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                    onPress={() => navigate('AnswerQuiz', {id: deckId})}>
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
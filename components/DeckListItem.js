import React, {Component} from "react";
import {View, Text, TouchableOpacity, StyleSheet, Platform} from "react-native";
import {white, gray} from '../utils/colors'
class DeckListItem extends Component {
    render() {
        const {navigate} = this.props;
        return (
            <View style={styles.item}>
                <TouchableOpacity
                    onPress={() => navigate.navigate('CardDetail', {name: 'Jane'})}>
                    <Text style={styles.title}>Content</Text>
                    <Text style={styles.content}>3 Cards</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
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
    item: {
        backgroundColor: white,
        borderRadius: Platform.OS === 'ios'
            ? 16
            : 2,
        padding: 20,
        margin: 10,
        justifyContent: 'center',
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        }
    }
});

export default DeckListItem;
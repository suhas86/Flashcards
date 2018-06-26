import React, {Component} from "react";
import {ScrollView, StyleSheet} from "react-native";
import DecKListItem from './DeckListItem'
import {gray} from '../utils/colors'
export default class Decks extends Component {
    render() {
        return (
            <ScrollView>
                <DecKListItem navigate={this.props.navigation}/>
                <DecKListItem navigate={this.props.navigation}/>
                <DecKListItem navigate={this.props.navigation}/>
                <DecKListItem navigate={this.props.navigation}/>
                <DecKListItem navigate={this.props.navigation}/>
                <DecKListItem navigate={this.props.navigation}/>
                <DecKListItem navigate={this.props.navigation}/>
                <DecKListItem navigate={this.props.navigation}/>
                <DecKListItem navigate={this.props.navigation}/>
                <DecKListItem navigate={this.props.navigation}/>
                <DecKListItem navigate={this.props.navigation}/>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: gray
    }
})

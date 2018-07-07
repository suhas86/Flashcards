import React, {Component} from "react";
import {ScrollView, StyleSheet} from "react-native";
import DecKListItem from './DeckListItem'
import {gray} from '../utils/colors'
import {getDecks} from '../utils/api'
export default class Decks extends Component {

    state = {
        decks:[]
    }
    componentDidMount() {
        getDecks().then(result=> {
            result.map(r => {
                console.log(r);
            })
            this.setState({decks:result});
        })
    }
    render() {
        const {decks}=this.state
        return (
            <ScrollView>
                {decks.map((deck) => 
                    (<DecKListItem key={deck.id} navigate={this.props.navigation} deck ={deck}/>)
                )}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: gray
    }
})

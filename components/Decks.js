import React, {Component} from "react";
import { connect } from "react-redux";
import {ScrollView, StyleSheet} from "react-native";
import DecKListItem from './DeckListItem'
import {gray} from '../utils/colors'
import {getDecks} from "../actions/decks"
 class Decks extends Component {

    state = {
        decks:[]
    }
    componentDidMount() {
        this.props.dispatch(getDecks())
    }
    /** Pass values to deck list item which is a reusable component */
    render() {
        const {decks}=this.props
        return (
            <ScrollView>
                {decks.map((deck) => 
                    (<DecKListItem key={deck.id} navigate={this.props.navigation} deck ={deck}/>)
                )}
            </ScrollView>
        )
    }
}
function mapStateToProps (decks) {
    return {decks}
}
export default connect(mapStateToProps)(Decks)
const styles = StyleSheet.create({
    background: {
        backgroundColor: gray
    }
})

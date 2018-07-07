import {AsyncStorage} from 'react-native'
import {formatObjectToArray, guid} from './helper'
const DECK_KEY = 'flashcards2:decks';

/** Function to get decks */
export function getDecks() {
    return AsyncStorage
        .getItem(DECK_KEY)
        .then(decks => {
            decks = JSON.parse(decks);
            let decksResult = formatObjectToArray(decks);
            return decksResult;
        })
}

export const clearAll = () => {
    AsyncStorage.clear()
      .then(() => {})
      .catch(e => {
        console.log(e)
      })
  }

/**
 *  Get Deck by id      
 */  
export function getDeckById(id) {
    return AsyncStorage.getItem(DECK_KEY)
    .then( decks => {
        decks = JSON.parse(decks);
        return decks[id];
    });
}
/**
 * Add Deck
 * Merge if present else
 * set deck to asyncstorage
 */
export function addDeck(name) {
    let deck = {
        name,
        id: guid(),
        creationDate: new Date(),
        questions:[]
    }

    getDecks().then(decks => {
        if (decks) {
            return AsyncStorage.mergeItem(DECK_KEY, JSON.stringify({
                [deck.id]: deck
            }))
        } else {
            return AsyncStorage.setItem(DECK_KEY, JSON.stringify({
                [deck.id]: deck
            }))
        }
    })
}
/** Add Card to deck */
export function addCard(id, card) {
  return  AsyncStorage
        .getItem(DECK_KEY)
        .then(decks => {
            decks = JSON.parse(decks);
            if(decks[id].questions) {
                decks[id].questions.push(card);
            } else {
                decks[id].questions = []
                decks[id].questions.push(card);
            }
            console.log("DECKS",decks);
            return AsyncStorage.mergeItem(DECK_KEY, JSON.stringify({
                [id]:decks[id]
            }))
        });
}
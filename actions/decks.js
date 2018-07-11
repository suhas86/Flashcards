import * as api from "../utils/api"

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const NEW_DECK = 'NEW_DECK'
export const NEW_CARD = 'NEW_CARD'

export const deckList = (decks) => ({
    type:RECEIVE_DECKS,
    decks
})
export const addDeck = (decks) => ({
    type:NEW_DECK,
    decks
})
export const addCard = (decks) => ({
    type:NEW_DECK,
    decks
})
/** API to get list of decks */
export const getDecks = () => dispatch => {
    api.getDecks().then(decks => {
        dispatch(deckList(decks))
    })
}
/** API call to create Deck */
export const createDeck = (name) => dispatch => {
    api.addDeck(name).then(deck => {
        api.getDecks().then(decks => {
            dispatch(addDeck(decks))
        })
    })
}
/** API to add card */
export const createCard =(id,card) => dispatch => {
    api.addCard(id,card).then((card) => {
        api.getDecks().then(decks => {
            dispatch(addCard(decks))
        })
    })
}
import { RECEIVE_DECKS, NEW_DECK, NEW_CARD } from "../actions/decks"

function commonReducer(state = [], action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return action.decks
        case NEW_DECK:
            return action.decks
        case NEW_DECK:
            return action.decks
        default:
            return state;
    }
}

export default commonReducer
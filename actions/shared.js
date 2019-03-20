import { addDeck, addCard } from './actions'
import {saveDeckToAsync} from '../utilities/storage'

export function loadDecksFromStorage() {


}

export function dispatchAddDeck(deck, deck_id) {

    let deck_obj = {[deck_id]: {deck_id:deck_id, deck_name:deck, cards:[]}}
    saveDeckToAsync(deck_obj, deck_id)
    return(dispatch) => {
        dispatch(addDeck(deck_obj, deck_id))

    }

}

export function dispatchAddCard(card) {
    console.log("CARD TO ADD", card)
    return(dispatch) => {
        dispatch(addCard(card))
    }

}
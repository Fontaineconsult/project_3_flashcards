import { addDeck, addCard } from './actions'


export function loadDecksFromStorage() {


}

export function dispatchAddDeck(deck) {
    console.log(deck)
    return(dispatch) => {
        dispatch(addDeck(deck))

    }

}

export function dispatchAddCard(card) {
    console.log("CARD TO ADD", card)
    return(dispatch) => {
        dispatch(addCard(card))
    }

}
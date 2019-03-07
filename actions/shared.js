import { addDeck } from './actions'


export function loadDecksFromStorage() {


}

export function dispatchAddDeck(deck) {
    console.log(deck)
    return(dispatch) => {
        dispatch(addDeck(deck))

    }

}
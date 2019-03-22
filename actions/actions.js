export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'
export const LOAD_DECKS = "LOAD_DECKS"



export  function addDeck (deck_obj, deck_id) {


    return {
        type: ADD_DECK,
        deck: {[deck_id]: {deck_id:deck_id, deck_name:deck_obj[deck_id].deck_name, cards:[]}},

    }

}


export function addCard(deck_id, card) {



    return {
        type: ADD_CARD,
        deck: deck_id,
        card: card

    }
    
}

export function loadDecks(decks) {

    return {
        type: LOAD_DECKS,
        decks: decks


    }

}
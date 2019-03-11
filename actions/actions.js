export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}


export  function addDeck (new_deck) {

    let deck_id = generateUID()

    return {
        type: ADD_DECK,
        deck: {[deck_id]: {deck_id:deck_id, deck_name:new_deck, cards:[]}},

    }

}


export function addCard(card) {

    let card_id = generateUID()

    return {
        type: ADD_CARD,
        deck: card.deck_id,
        card: {[card_id]: {card_id:card_id, card_question: card.question, card_answer: card.answer} }

    }
    
}
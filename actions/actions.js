export const ADD_DECK = 'ADD_DECK'


export  function addDeck (new_deck) {

    return {
        type: ADD_DECK,
        new_deck,

    }

}

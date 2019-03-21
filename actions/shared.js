import { addDeck, addCard } from './actions'
import {saveDeckToAsync, queryStorage, saveCardToStorage, getAllDecks} from '../utilities/storage'
import {generateUID} from "../utilities/deckObject";


export function loadDecksFromStorage() {

    const decks = getAllDecks();
    console.log("DECKS TO LOAD", decks)


}

export function dispatchAddDeck(deck, deck_id) {

    let deck_obj = {[deck_id]: {deck_id:deck_id, deck_name:deck, cards:[]}};

    saveDeckToAsync(deck_obj, deck_id);

    queryStorage()
    return(dispatch) => {
        dispatch(addDeck(deck_obj, deck_id))

    }

}

export function dispatchAddCard(card) {


    let card_id = generateUID();
    let deck_key = card.deck_id;
    let card_obj = {[card_id]: {card_id:card_id, card_question: card.question, card_answer: card.answer}};

    saveCardToStorage(deck_key, card_obj);
    return(dispatch) => {
        dispatch(addCard(deck_key, card_obj))
    }

}
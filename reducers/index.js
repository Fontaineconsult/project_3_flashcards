import { ADD_DECK, ADD_CARD, LOAD_DECKS } from '../actions/actions'

import {combineReducers} from "redux";

function decksReducer (state={}, action) {


    switch (action.type) {

        case ADD_DECK:

            return {
                ...state,
                ...action.deck

            };


        case ADD_CARD:
            return {
                ...state,
                [action.deck]: {...state[action.deck], cards: state[action.deck].cards.concat(action.card)}


            };

        case LOAD_DECKS:

            return {
                ...state,
                ...action.decks

            };

        default: return state


    }




}





export default combineReducers({

    decks: decksReducer,

})
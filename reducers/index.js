import { ADD_DECK, ADD_CARD } from '../actions/actions'

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


        default: return state


    }




}





export default combineReducers({

    decks: decksReducer,

})
import { ADD_DECK, ADD_CARD } from '../actions/actions'

import {combineReducers} from "redux";

function decksReducer (state={}, action) {


    switch (action.type) {

        case ADD_DECK:
            console.log("hit add deck reducer", action)
            return {
                ...state,
                ...action.deck

            };


        case ADD_CARD:
            return state


        default: return state


    }




}





export default combineReducers({

    decks: decksReducer,

})
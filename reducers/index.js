import { ADD_DECK } from '../actions/actions'

export default function deckReducer (state={}, action) {


    switch (action.type) {

        case ADD_DECK:

            return {
                ...state,
                ...action.new_deck

            }

    }




}
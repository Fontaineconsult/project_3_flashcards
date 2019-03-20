import { AsyncStorage } from 'react-native';
const ASYNC_STORAGE_KEY = "FlashCards:deck";



export function saveDeckToAsync (deck, key) {

    return AsyncStorage.mergeItem(ASYNC_STORAGE_KEY, JSON.stringify({
        [key]: deck
    }))

    
}

export function addCard() {



}
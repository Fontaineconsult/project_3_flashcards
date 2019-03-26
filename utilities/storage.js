import { AsyncStorage } from 'react-native';
const ASYNC_STORAGE_KEY = "FlashCards:deck";



export async function getAllDecks() {

        let value = await AsyncStorage.getItem("FlashCards:deck").then(value => {
            console.log("DAT RAW VALUES", JSON.parse(value))
            return JSON.parse(value)
        })

        return value



}



export function saveDeckToAsync (deck, key) {

    return AsyncStorage.getItem(ASYNC_STORAGE_KEY).then((results) => {
        const data = JSON.parse(results);
        console.log("DECKS LOADED", data)
        data[ key ] = deck;
        AsyncStorage.setItem(ASYNC_STORAGE_KEY, JSON.stringify( data ))

    });


    
}

export function saveCardToStorage(deck_key, card) {

    return AsyncStorage.getItem(ASYNC_STORAGE_KEY).then((results) => {

        const data = JSON.parse(results);
        data[deck_key][deck_key].cards.push(card);
        AsyncStorage.setItem(ASYNC_STORAGE_KEY, JSON.stringify( data ))


        return true
    }).catch(console.log("Isn't Right"))




}

export function queryStorage() {

    //https://stackoverflow.com/questions/38570188/react-native-how-to-see-whats-stored-in-asyncstorage
    AsyncStorage.getAllKeys((err, keys) => {
        AsyncStorage.multiGet(keys, (error, stores) => {
            stores.map((result, i, store) => {
                return true;
            });
        });
    });
}


export function clearAsyncStorage() {

    AsyncStorage.clear();

}
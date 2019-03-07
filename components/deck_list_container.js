import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



class DeckListItem extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>Deck 1</Text>
                

            </View>

        )

    }


}





export default class DeckListView extends React.Component {


    render() {
        return(
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                <DeckListItem/>
            </View>

        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9c9c9c',
        alignItems: 'center',
        alignSelf: "stretch",
        justifyContent: 'flex-start',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor:'#2a2722',
        maxHeight: 80
    },
});

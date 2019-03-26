import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { connect } from 'react-redux'


class DeckListItem extends React.Component {
    render(){

        return(
            <View style={styles.deckListItem}>
                <Text style={styles.deckListTitleText}>{this.props.deck.deck_name}</Text>
                <Text>{this.props.deck.cards.length} Cards in Deck</Text>
                <Button title={"Go To Deck"} onPress={() => this.props.navProp.navigate('IndividualDeckView', { entryId: this.props.deck.deck_id})}/>
            </View>
        )

    }

}




class DeckListView extends React.Component {


    render() {

        return(
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {Object.keys(this.props.decks).map((id) =>(
                    <DeckListItem
                        key={this.props.decks[id].deck_id} deck={this.props.decks[id]}
                        navProp={this.props.navigation}
                    />
                ))}
            </ScrollView>

        )
    }


}






const styles = StyleSheet.create({
    scrollContainer: {
        paddingVertical: 20


    },

    deckListItem: {
        flex: 1.2,
        backgroundColor: '#dcdcd7',
        alignItems: 'center',
        alignSelf: "stretch",
        justifyContent: 'flex-start',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor:'#696367',
        maxHeight: 100,
        marginBottom: 5,
        marginLeft: 4,
        marginRight: 4,
        shadowColor: '#0e0b09',
        shadowOffset: {width:5, height: 5},
        paddingBottom: 25
    },
    deckListTitleText: {
        marginBottom: 5,
        marginTop: 5
    }

});


function mapStateToProps({decks}) {

    return {
        decks
    }

}

export default connect(mapStateToProps)(DeckListView)
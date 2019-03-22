import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux'


class DeckListItem extends React.Component {
    render(){

        return(
            <View style={styles.deckListItem}>
                <Text style={styles.deckListTitleText}>{this.props.deck.deck_name}</Text>

                <Button title={"Go To Deck"} onPress={() => this.props.navProp.navigate('IndividualDeckView', { entryId: this.props.deck.deck_id})}/>
            </View>
        )

    }

}




class DeckListView extends React.Component {


    render() {

        return(
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                {Object.keys(this.props.decks).map((id) =>(
                    <DeckListItem
                        key={this.props.decks[id].deck_id} deck={this.props.decks[id]}
                        navProp={this.props.navigation}
                    />
                ))}


            </View>

        )
    }


}






const styles = StyleSheet.create({
    deckListItem: {
        flex: 1,
        backgroundColor: '#dcdcd7',
        alignItems: 'center',
        alignSelf: "stretch",
        justifyContent: 'flex-start',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor:'#696367',
        maxHeight: 80,
        marginBottom: 5,
        marginLeft: 4,
        marginRight: 4,
        shadowColor: '#0e0b09',
        shadowOffset: {width:5, height: 5},
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
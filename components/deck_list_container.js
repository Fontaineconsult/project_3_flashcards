import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux'


class DeckListItem extends React.Component {
    render(){

        return(
            <View style={styles.container}>
                <Text>{this.props.deck.deck_name}</Text>
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
                <Text>FARTS</Text>

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


function mapStateToProps({decks}) {
    console.log("DAAAA DEERRRKSSS", decks)
    return {
        decks
    }

}

export default connect(mapStateToProps)(DeckListView)
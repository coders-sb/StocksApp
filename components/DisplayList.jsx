import React, {useContext} from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from 'react-native';
import SearchListItem from './SearchListItem';
import { StockContext } from '../App';

export default function SearchList() {
    const context = useContext(StockContext);
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {context.selectedStocks.length > 0 ? (context.selectedStocks.map((stock) => 
                    <TouchableOpacity key={stock.symbol} >
                        <SearchListItem stock={stock} />
                    </TouchableOpacity>
                )) : (<Text styles = {styles2}>No stocks have been selected</Text>)
                }

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flexGrow: 1
    }
})
const styles2 = StyleSheet.create({
    color: 'white',
    alignItems: 'center',
    justifyContent:'center'

})
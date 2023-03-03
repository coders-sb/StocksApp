import React, {useContext} from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import SearchListItem from './SearchListItem';
import { StockContext } from '../App';

export default function SearchList() {
    const context = useContext(StockContext);
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {context.filteredStocks.map((stock) => 
                    <TouchableOpacity key={stock.symbol} onPress={()=>{
                        context.setSelectedStock(stock);
                }}>
                        <SearchListItem stock={stock} />
                    </TouchableOpacity>
                )}
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
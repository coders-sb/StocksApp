import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import SearchListItem from './SearchListItem';
import Axios from 'axios';

export default function SearchList({filteredStocks, handleOnPress}) {
    const getData = async (symbol) => {
        const API_KEY = "cfvd6jhr01qtdvl3nbogcfvd6jhr01qtdvl3nbp0";
        const url = "https://finnhub.io/api/v1/quote?symbol=" + symbol + "&token=" + API_KEY;
        const result = await Axios.get(url);
        result.data["symbol"] = symbol;
        handleOnPress(result.data);
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {filteredStocks.map((stock) => 
                    <TouchableOpacity key={stock.symbol} onPress={() => getData(stock.symbol)}>
                        <SearchListItem stock={stock}/>
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
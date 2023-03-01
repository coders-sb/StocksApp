import React, { useState } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SearchBar from '../components/SearchBar';
import SearchList from '../components/SearchList';
import StockData from '../components/StockData';
import sample_data from '../sample/sample_data';
import theme from '../style/theme.style';
export default function SearchScreen() {
    const [state, setState] = useState({
        searchText: "",
        filteredStocks: [],
        stockData: {},
    })

    function handleChangeSearchText(text){
        let stockList = sample_data.stocks;
        let stocksFiltered = stockList.filter((stock) => (stock.name.toLowerCase().includes(text.toLowerCase()) || stock.symbol.toLowerCase().includes(text.toLowerCase())));
        setState((prev) => ({
            ...prev,
            searchText: text,
            filteredStocks: stocksFiltered
        }))
    }

    function handleOnPress(data) {
        setState((prev) => ({
            ...prev,
            stockData: data,
        }))
    }

    return (
        <View style={styles.container}>
            <SearchBar searchText={state.searchText} handleChangeSearchText={(text) => handleChangeSearchText(text)}/>
            <SearchList filteredStocks={state.filteredStocks} handleOnPress={(data) => handleOnPress(data)}/>
            <StockData stockData={state.stockData}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.BACKGROUND_COLOR
    }
})
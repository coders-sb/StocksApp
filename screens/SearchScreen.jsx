import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import SearchBar from '../components/SearchBar';
import SearchList from '../components/SearchList';
import sample_data from '../sample/sample_data';
import theme from '../style/theme.style';
export default function SearchScreen() {
    const [state, setState] = useState({
        searchText: "",
        filteredStocks: []
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
    return (
        <View style={styles.container}>
            <SearchBar searchText={state.searchText} handleChangeSearchText={(text) => handleChangeSearchText(text)}/>
            <SearchList filteredStocks={state.filteredStocks}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.BACKGROUND_COLOR
    }
})
import React, {useContext, useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import theme from '../style/theme.style';
import { StockContext } from '../App';
import Axios from 'axios';

export default function StockData() {
    const [stockData, setStockData] = useState({});

    const context = useContext(StockContext);

    const getData = async (symbol) => {
        console.log(symbol);
        const API_KEY = "cfvesu1r01qtdvl3o0b0cfvesu1r01qtdvl3o0bg";
        const url = "https://finnhub.io/api/v1/quote?symbol=" + symbol + "&token=" + API_KEY;
        const result = await Axios.get(url);
        result.data["symbol"] = symbol;
        setStockData(result.data);
    }
    
    useEffect(() => {
        getData(context.currentStock);
    }, [context.currentStock])

    return (
        <View style={[styles.stockData]}>
            <Text style={{
                color: "white",
                textAlign: "begin",
            }}>
                {stockData.symbol}{"\n"}
                Current: {stockData.c}{"\n"}
                <Text style={{
                    backgroundColor: stockData.d > 0 ? "green" : "red",
                    width: "25%",
                }}>
                    Change: {stockData.dp}%{"\n"}
                </Text>
                High: {stockData.h}{"\n"}
                Low: {stockData.l}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    stockData: {
        padding: 10,
    }
})
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import theme from '../style/theme.style';

export default function StockData({stockData}) {
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
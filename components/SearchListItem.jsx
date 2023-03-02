import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import theme from '../style/theme.style';
<<<<<<< HEAD
export default function SearchListItem({stock}) {
=======

export default function SearchListItem({stock}) {

>>>>>>> StocksApp2/main
    return (
        <View style={styles.listItemContainer}>
            <Text style={styles.symbolText}>
                {stock.symbol}
            </Text>
            <Text style={styles.nameText}>
                {stock.name}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItemContainer: {
        height: 50,
        borderBottomWidth: 0.5,
        borderColor: theme.ACCENT_COLOR_DARK
    },
    symbolText: {
        fontSize: theme.FONT_SIZE_LARGE,
        color: theme.TEXT_COLOR
    },
    nameText: {
        fontSize: theme.FONT_SIZE_SMALL,
        color: theme.TEXT_COLOR
    }
})
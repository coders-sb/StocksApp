<<<<<<< HEAD
import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import theme from '../style/theme.style';

export default function SearchBar({searchText, handleChangeSearchText}) {

=======
import React,{useContext} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import theme from '../style/theme.style';
import { StockContext } from '../App';

export default function SearchBar() {
    const context = useContext(StockContext)
>>>>>>> StocksApp2/main
    return (
        <View style={styles.searchBarContainer}>
            <Ionicons 
                style={styles.searchIcon}
                name='search'
                color={'#FFF'}
            />
            <TextInput
                style={styles.searchBarText}
<<<<<<< HEAD
                value={searchText}
                onChangeText={(text) => handleChangeSearchText(text)}
=======
                value={context.searchText}
                onChangeText={(text) => context.handleChangeSearchText(text)}
>>>>>>> StocksApp2/main
                placeholder='Search'
                placeholderTextColor={theme.TEXT_COLOR}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    searchBarContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: theme.ACCENT_COLOR_DARK,
        padding: 12
    },
    searchIcon: {
        color: theme.TEXT_COLOR,
        fontSize: theme.FONT_SIZE_LARGE
    },
    searchBarText: {
        color: theme.TEXT_COLOR,
        fontSize: theme.FONT_SIZE_LARGE
    }
});
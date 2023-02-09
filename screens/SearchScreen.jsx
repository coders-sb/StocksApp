import React from 'react';
import {StyleSheet, View} from 'react-native';
import SearchBar from '../components/SearchBar';
import SearchList from '../components/SearchList';
import theme from '../style/theme.style';

export default function SearchScreen() {
    return (
        <View style={styles.container}>
            <SearchBar />
            <SearchList />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.BACKGROUND_COLOR
    }
})
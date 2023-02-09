import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import theme from '../style/theme.style';
import DisplayList from '../components/DisplayList'

export default function WatchListScreen({ }) {
    return (
        <View style={styles.container}>
            <DisplayList />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.BACKGROUND_COLOR
    }
})
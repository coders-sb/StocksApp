import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const searchName = 'Search';
const watchName = 'Watch'
const Tab = createBottomTabNavigator();
import WatchListScreen from './WatchListScreen'
import SearchScreen from './SearchScreen';

export const StockContext = React.createContext();

export default function HomeScreen() {
    
    return (
        <SafeAreaView style={styles.container}>
          <Tab.Navigator 
          initialRouteName='searchName'
          screenOptions={({ route }) => ({
              activeTintColor: 'tomato',
              inactiveTintColor: 'grey',
              labelStyle: { paddingBottom: 10, fontSize: 10 },
              style: { padding: 10, height: 70},
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                let rn = route.name;
                if (rn === searchName) {
                  iconName = focused ? 'search' : 'search-outline';
    
                } else if (rn === watchName) {
                  iconName = focused ? 'trending-up' : 'trending-up-outline';
    
                } 
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
          >
            <Tab.Screen name={searchName} component={SearchScreen} />
            <Tab.Screen name={watchName} component={WatchListScreen} />
          </Tab.Navigator>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    viewVisible: {
      borderWidth: 1,
      borderStyle: "dotted",
      width: 50,
      height: 50
    },
    scrollViewContainer: {
      height: 50,
      borderWidth: 1
    },
    textInput: {
      borderWidth: 1
    },
    tinyLogo: {
      width: 50,
      height: 50
    }
  });
  
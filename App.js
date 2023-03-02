<<<<<<< HEAD
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import SearchScreen from './screens/SearchScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SearchScreen/>
    </SafeAreaView>
=======
import React, { useState} from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import sample_data from './sample/sample_data';

import WatchListScreen from './screens/WatchListScreen'
import SearchScreen from './screens/SearchScreen';

const searchName = 'Search';
const watchName = 'Watch'
const Tab = createBottomTabNavigator();

export const StockContext = React.createContext();

export default function App() {
  const initialState = {
    searchText: "",
    filteredStocks: [],
    selectedStocks: []  
  }
  const [state, setState] = useState(initialState);

  function setSelectedStock(text){
    if(!state.selectedStocks.find(e => e===text)){
      setState((prev)=>({
        ...prev,
        selectedStocks: [...state.selectedStocks, text]
      })
      )
    }
  }

  function handleChangeSearchText(text){
    const stockList = sample_data.stocks;
    const stocksFiltered = stockList.filter((stock) => (stock.name.toLowerCase().includes(text.toLowerCase()) || stock.symbol.toLowerCase().includes(text.toLowerCase())));
    setState((prev) => ({
        ...prev,
        searchText: text,
        filteredStocks: stocksFiltered
    }))
  }
  const contextSetters = {
    setSelectedStock,
    handleChangeSearchText
  }
  return (
    <StockContext.Provider value={{...state, ...contextSetters}}>
    <SafeAreaView style={styles.container}>
    <NavigationContainer>
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
    </NavigationContainer>
    </SafeAreaView>
    </StockContext.Provider>
>>>>>>> StocksApp2/main
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

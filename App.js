import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import RegistrationScreen from './screens/RegistrationScreen'
import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }
import { getAuth, onAuthStateChanged } from "firebase/auth";
import sample_data from './sample/sample_data.js';

const Stack = createStackNavigator();

export const StockContext = React.createContext();
const firebaseConfig = {
  apiKey: "AIzaSyBSxVP2Tu1SAt7eOCc34QRp7bnBDZRdEOM",
  authDomain: "coderssb-stocksapp.firebaseapp.com",
  projectId: "coderssb-stocksapp",
  storageBucket: "coderssb-stocksapp.appspot.com",
  messagingSenderId: "365453688644",
  appId: "1:365453688644:web:ab0ead9510f5cb2f40e111",
  measurementId: "G-V3T0GQDYBQ"
};

export default function App() {
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)
  console.log("h33");
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
    <NavigationContainer>
      <StockContext.Provider value={{...state, ...contextSetters}}>
      <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Registration" component={RegistrationScreen} />
          <Stack.Screen name="Home" component = {HomeScreen} />
      </Stack.Navigator>
      </StockContext.Provider>
    </NavigationContainer>
  );

}


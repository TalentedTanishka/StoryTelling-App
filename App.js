import React from 'react';
import  {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './Navigations/DrawerNavigator';
import LoginScreen from './screens/LoginScreen';
import LoadingScreen from './screens/LoadingScreen';
import DashBordScreen from './screens/DashBordScreen';
import{createSwitchNavigator , createAppContainer} from "react-navigation";
const SwitchNavigator = createSwitchNavigator({
  LoadingScreen:LoadingScreen,
   LoginScreen:LoginScreen , 
   DashBordScreen:DashBordScreen})
const AppContainer = createAppContainer(SwitchNavigator)
import {firebaseConfig } from './config';
import *as firebase from "firebase";

if(!firebase.apps.length)
{
  firebase.initializeApp(firebaseConfig)
}
else{
  firebase.app()
}
export default function App() {
  return (
    <AppContainer/>
    
  );
}


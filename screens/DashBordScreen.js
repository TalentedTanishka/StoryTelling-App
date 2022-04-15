import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import DrawerNavigator from "../Navigations/DrawerNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function DashBordScreen() { 
         return(
            <NavigationContainer>
                <DrawerNavigator/>
            </NavigationContainer> 
         );
 
}
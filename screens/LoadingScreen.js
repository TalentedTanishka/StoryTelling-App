import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import *as firebase from "firebase";

export default class LoadingScreen  extends Component {

    cheakIfLoggedIn = async()=>{
        firebase.auth().onAuthStateChanged(user =>{
            if(user)
            {
                this.props.navigation.navigate("DashBordScreen")
            }
            else
{
    this.props.navigation.navigate("LoginScreen")
}        })
    }

    componentDidMount(){
        this.cheakIfLoggedIn()
    }
    render(){
         return(
             <View>
                 <Text>
                 Loading_Screen 
                 </Text>
             </View>
         );
    }

}
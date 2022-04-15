import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Platform,
  StatusBar,
  Image,
  SafeAreaView
} from "react-native";
import * as Google from 'expo-google-app-auth';
import * as firebase from "firebase";

export default class LogOut extends Component 
{

    componentDidMount()
    {
        firebase.auth().signOut()
    }
    render(){
        return (
            <View style={styles.container}>
                <Text>
                    Log Out
                </Text>
            </View>
        );
    }
} 

const styles = StyleSheet.create({
    container: {
        justifyContent:"center",
        alignItems:"center",
      flex: 1,
      backgroundColor: "red"
    },
})

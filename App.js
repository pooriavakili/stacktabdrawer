/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,SafeAreaView,ScrollView,Image} from 'react-native';
import Screen1 from './screen1'
import Screen2 from './screen2'
import {DrawerItems,createMaterialTopTabNavigator,createStackNavigator,createSwitchNavigator,createDrawerNavigator} from 'react-navigation'
import Icon from 'react-elements'
import StackHome from './Screen/Stack'
import Drawer from './Screen/Drawer'
import Tab from  './Screen/Tab'
import Mix from './Screen/Mix'
const CustomComponent=(props)=>(

    <SafeAreaView
        style={{
          flex:1,

        }}

    >
      <View style={{height:150,backgroundColor:"white",alignItems: "center",justifyContent: "center"}}>
        <Image source={require('./img/Home.png')} style={{width:120,height:120,borderRadius:160,alignItems:'center',justifyContent:'center'}}/>
      </View>
      <ScrollView>
        <DrawerItems {...props}/>
       <Icon name='home'/>



        <View
            style={{left:120,

            }}
        >


        </View>
      </ScrollView>
    </SafeAreaView>

)


export default class App extends Component {
  render() {
    return (
<Mix/>
    );
  }
}


const Draw=createDrawerNavigator({

  screen1:{screen:Screen1},
  screen2:{screen:Screen2}
},{
    navigationOptions: {
        contentComponent: CustomComponent,

    }
},{
    drawerPosition:"right"
})



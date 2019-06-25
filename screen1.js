import React, {Component} from 'react';

import {View, Text, StyleSheet} from 'react-native'
import {Header, Left} from "native-base";
import {Icon} from "react-native-elements";
export  default class screen1 extends Component {
    render() {
        return (
            <View style={Style.container}>

                <Header style={Style.Header
                }>
                    <Left style={Style.Right}>

                        <Icon onPress={()=>
                            this.props.navigation.openDrawer()}
                              style={Style.Img}
                              name='menu'
                              color='white'
                        />



                    </Left>




                </Header>
            </View>
        );
    }
}



const Style=StyleSheet.create({
    container:{
        flex:1
    },
    Header:{
        backgroundColor:'#03022c',
        top:-10

    },
    Right:{
        right:-210
    },
    Img:{
        height:60,
        width:60,


    },
})

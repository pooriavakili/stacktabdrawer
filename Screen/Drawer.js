import React from 'react'
import {createDrawerNavigator, } from 'react-navigation'
import Screen1 from './../screen1'
import Screen2 from './../screen2'
import Screen3 from './../screen3'




export default Drawer=createDrawerNavigator({
    screen1:{screen:Screen1},
    screen2:{screen:Screen2},
    screen3:{screen:Screen3}
})


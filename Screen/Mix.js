import {DrawerNavigator,TabNavigator,StackNavigator} from 'react-navigation'



import Screen1 from "../screen1";
import Screen2 from "../screen2";
import Screen3 from "../screen3";

const TabNav=TabNavigator({

    screen1:{screen:Screen1},
    screen2:{screen:Screen2},
    screen3:{screen:Screen3}
},{
    tabBarPosition:"bottom"
})
export default Draw=DrawerNavigator({

    TabNav:{
        screen:TabNav
    },
    screen1:{screen:Screen1},
    screen2:{screen:Screen2},
    screen3:{screen:Screen3}
})

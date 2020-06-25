import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging56703Navigator from '../features/Messaging56703/navigator';
import Messaging6687Navigator from '../features/Messaging6687/navigator';
import CalendarView6686Navigator from '../features/CalendarView6686/navigator';
import EmailAuth6685Navigator from '../features/EmailAuth6685/navigator';
import BlankScreen46684Navigator from '../features/BlankScreen46684/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Messaging56703: { screen: Messaging56703Navigator },
Messaging6687: { screen: Messaging6687Navigator },
CalendarView6686: { screen: CalendarView6686Navigator },
EmailAuth6685: { screen: EmailAuth6685Navigator },
BlankScreen46684: { screen: BlankScreen46684Navigator },
Messenger: { screen: MessengerNavigator },
Calendar: { screen: CalendarNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

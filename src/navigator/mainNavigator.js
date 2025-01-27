import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging26734Navigator from '../features/Messaging26734/navigator';
import Messaging36733Navigator from '../features/Messaging36733/navigator';
import Messaging46732Navigator from '../features/Messaging46732/navigator';
import Messaging26706Navigator from '../features/Messaging26706/navigator';
import Messaging36705Navigator from '../features/Messaging36705/navigator';
import Messaging46704Navigator from '../features/Messaging46704/navigator';
import Messaging6687Navigator from '../features/Messaging6687/navigator';
import CalendarView6686Navigator from '../features/CalendarView6686/navigator';
import EmailAuth6685Navigator from '../features/EmailAuth6685/navigator';
import BlankScreen46684Navigator from '../features/BlankScreen46684/navigator';
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
Messaging26734: { screen: Messaging26734Navigator },
Messaging36733: { screen: Messaging36733Navigator },
Messaging46732: { screen: Messaging46732Navigator },
Messaging26706: { screen: Messaging26706Navigator },
Messaging36705: { screen: Messaging36705Navigator },
Messaging46704: { screen: Messaging46704Navigator },
Messaging6687: { screen: Messaging6687Navigator },
CalendarView6686: { screen: CalendarView6686Navigator },
EmailAuth6685: { screen: EmailAuth6685Navigator },
BlankScreen46684: { screen: BlankScreen46684Navigator },
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

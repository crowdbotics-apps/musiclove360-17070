import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile46520Navigator from '../features/UserProfile46520/navigator';
import Tutorial46519Navigator from '../features/Tutorial46519/navigator';
import NotificationList46491Navigator from '../features/NotificationList46491/navigator';
import Settings46490Navigator from '../features/Settings46490/navigator';
import Settings46482Navigator from '../features/Settings46482/navigator';
import UserProfile46480Navigator from '../features/UserProfile46480/navigator';
import UserProfile46449Navigator from '../features/UserProfile46449/navigator';
import Tutorial46448Navigator from '../features/Tutorial46448/navigator';
import NotificationList46420Navigator from '../features/NotificationList46420/navigator';
import Settings46419Navigator from '../features/Settings46419/navigator';
import Settings46411Navigator from '../features/Settings46411/navigator';
import UserProfile46409Navigator from '../features/UserProfile46409/navigator';
import UserProfile46372Navigator from '../features/UserProfile46372/navigator';
import Tutorial46371Navigator from '../features/Tutorial46371/navigator';
import NotificationList46343Navigator from '../features/NotificationList46343/navigator';
import Settings46342Navigator from '../features/Settings46342/navigator';
import Settings46334Navigator from '../features/Settings46334/navigator';
import UserProfile46332Navigator from '../features/UserProfile46332/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile46520: { screen: UserProfile46520Navigator },
Tutorial46519: { screen: Tutorial46519Navigator },
NotificationList46491: { screen: NotificationList46491Navigator },
Settings46490: { screen: Settings46490Navigator },
Settings46482: { screen: Settings46482Navigator },
UserProfile46480: { screen: UserProfile46480Navigator },
UserProfile46449: { screen: UserProfile46449Navigator },
Tutorial46448: { screen: Tutorial46448Navigator },
NotificationList46420: { screen: NotificationList46420Navigator },
Settings46419: { screen: Settings46419Navigator },
Settings46411: { screen: Settings46411Navigator },
UserProfile46409: { screen: UserProfile46409Navigator },
UserProfile46372: { screen: UserProfile46372Navigator },
Tutorial46371: { screen: Tutorial46371Navigator },
NotificationList46343: { screen: NotificationList46343Navigator },
Settings46342: { screen: Settings46342Navigator },
Settings46334: { screen: Settings46334Navigator },
UserProfile46332: { screen: UserProfile46332Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
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

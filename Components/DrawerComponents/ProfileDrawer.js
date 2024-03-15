import { createDrawerNavigator, DrawerToggleButton } from '@react-navigation/drawer';
import ProfileScreen from '../../Screens/ProfileScreen';
import LoginScreen from '../../Screens/LoginScreen';
import Info from './Info';
import DrawerStyles from './DrawerStyles';

const Drawer = createDrawerNavigator();

function ProfileDrawer() {
  return (
    <Drawer.Navigator 
    screenOptions={{
      drawerPosition: 'right',
      headerLeft: false,
      headerRight: () => <DrawerToggleButton />,
    drawerStyle: DrawerStyles.drawerContainer}}
    >
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="My Information" component={Info} />
    </Drawer.Navigator>
  );
}

export default ProfileDrawer;

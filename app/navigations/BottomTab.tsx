import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashBoardScreen from '../screens/bottomtab/DashBoardScreen';
import {BottomTabRoots} from '../lib/Constants';
import WatchScreen from '../screens/bottomtab/WatchScreen';
import MediaLibraryScreen from '../screens/bottomtab/MediaLibraryScreen';
import MoreScreen from '../screens/bottomtab/MoreScreen';
import {getFontSize} from '../lib';
import {Colors} from '../theme';
import DashBoardIconSvg from '../assets/svg/DashBoardIconSvg';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.White,
        tabBarInactiveTintColor: Colors.Slate,
        tabBarLabelStyle: {
          fontSize: getFontSize(12),
        },
        tabBarStyle: {
          backgroundColor: Colors.Charcoal,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
          borderTopEndRadius: 27,
          borderTopStartRadius: 27,
          position: 'absolute',
        },
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name={BottomTabRoots.dashboard}
        component={DashBoardScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size, focused}) => (
            <DashBoardIconSvg width={size} height={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name={BottomTabRoots.watch} component={WatchScreen} />
      <Tab.Screen
        name={BottomTabRoots.mediaLibrary}
        component={MediaLibraryScreen}
      />
      <Tab.Screen name={BottomTabRoots.more} component={MoreScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;

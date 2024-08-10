import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashBoardScreen from '../screens/bottomtab/DashBoardScreen';
import BottomTab from './BottomTab';
import {RootStackRoots} from '../lib/Constants';
const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={RootStackRoots.bottomTab}
          component={BottomTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

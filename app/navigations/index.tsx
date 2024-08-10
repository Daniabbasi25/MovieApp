import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashBoardScreen from '../screens/bottomtab/DashBoardScreen';
const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={DashBoardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

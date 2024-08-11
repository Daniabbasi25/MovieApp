import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashBoardScreen from '../screens/bottomtab/DashBoardScreen';
import BottomTab from './BottomTab';
import {RootStackRoots} from '../lib/Constants';
import MovieDetailScreen from '../screens/MovieDetailScreen';
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
        <Stack.Screen
          // options={{
          //   headerShown: false,
          // }}
          name={RootStackRoots.movieDetail}
          component={MovieDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

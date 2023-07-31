import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from '../helpers/screenConstant';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Screens.login}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Screens.login} component={LoginScreen} />
    </Stack.Navigator>
  );
};
export default MainNavigation;

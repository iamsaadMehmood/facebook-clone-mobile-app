import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from '../helpers/screenConstant';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignupScreen';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Screens.login}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Screens.login} component={LoginScreen} />
      <Stack.Screen name={Screens.signUp} component={SignUpScreen} />
    </Stack.Navigator>
  );
};
export default MainNavigation;

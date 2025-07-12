import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { SetUserNamePage } from './screens/SetUseName';
import { DetailPage } from './screens/Detail';
import { HomePage } from './screens/Home';


const Stack = createNativeStackNavigator();

export const AppRoutes = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name="home" component={HomePage} />
        <Stack.Screen name="detail" component={DetailPage} />
        <Stack.Screen name="setUserName" component={SetUserNamePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

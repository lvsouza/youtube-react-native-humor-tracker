import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationContainer, RouteProp } from '@react-navigation/native';

import { SetUserNamePage } from './screens/SetUseName';
import { DetailPage } from './screens/Detail';
import { HomePage } from './screens/Home';



type TScreenDefinitions = {
  home: undefined;
  setUserName: undefined;
  detail: { rate: number };
}

const Stack = createNativeStackNavigator<TScreenDefinitions>();

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


export type TNavigationScreenProps = NativeStackNavigationProp<TScreenDefinitions>;

export type TRouteProps<T extends keyof TScreenDefinitions> = RouteProp<TScreenDefinitions, T>

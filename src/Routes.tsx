import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
      <Stack.Navigator
        initialRouteName='home'
        screenOptions={{ headerShown: false }}
        screenLayout={({ children }) => <SafeAreaView>{children}</SafeAreaView>}
      >
        <Stack.Screen name="home" component={HomePage} />

        <Stack.Group
          screenOptions={{
            sheetCornerRadius: 24,
            presentation: 'formSheet',
          }}
        >
          <Stack.Screen
            name="detail"
            component={DetailPage}
            options={{ sheetAllowedDetents: [0.8, 0.95] }}
          />
          <Stack.Screen
            name="setUserName"
            component={SetUserNamePage}
            options={{ sheetAllowedDetents: [0.4, 0.6] }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export type TNavigationScreenProps = NativeStackNavigationProp<TScreenDefinitions>;

export type TRouteProps<T extends keyof TScreenDefinitions> = RouteProp<TScreenDefinitions, T>

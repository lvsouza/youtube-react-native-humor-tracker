import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { SetUserNamePage } from './screens/SetUseName';
import { DetailPage } from './screens/Detail';
import { theme } from './shared/themes/Theme';
import { HomePage } from './screens/Home';



type TScreenDefinitions = {
  setUserName: undefined;
  detail: { rate: number };
  home: { newName: string } | undefined;
}

const Stack = createNativeStackNavigator<TScreenDefinitions>();

export const AppRoutes = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='home'
        screenLayout={({ children }) => (
          <SafeAreaView style={{ flex: 1 }} edges={['top', 'left', 'right']}>
            {children}
          </SafeAreaView>
        )}
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: theme.colors.background,
          },
        }}
      >
        <Stack.Screen name="home" component={HomePage} />

        <Stack.Group
          screenOptions={{
            sheetCornerRadius: 24,
            presentation: 'formSheet',
            contentStyle: {
              height: '100%'
            }
          }}
          screenLayout={({ children }) => (
            <SafeAreaView
              edges={['left', 'right']}
              style={{
                flex: 1,
                padding: 16,
                backgroundColor: theme.colors.paper,
              }}
            >
              {children}
            </SafeAreaView>
          )}
        >
          <Stack.Screen
            name="detail"
            component={DetailPage}
            options={{ sheetAllowedDetents: [0.8] }}
          />
          <Stack.Screen
            name="setUserName"
            component={SetUserNamePage}
            options={{ sheetAllowedDetents: [0.4] }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export type TNavigationScreenProps = NativeStackNavigationProp<TScreenDefinitions>;

export type TRouteProps<T extends keyof TScreenDefinitions> = RouteProp<TScreenDefinitions, T>

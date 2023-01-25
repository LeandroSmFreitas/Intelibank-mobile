import * as React from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
  Route,
} from '@react-navigation/native';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import Splash, { SplashScreenName } from '../Splash';
import { RootStackParamList } from './config';
import { defaultScreenOptions } from 'infrastructure/utils/NavigationUtils';

enableScreens(true);

const Stack = createStackNavigator();

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const RootStack = createStackNavigator<RootStackParamList>();

const AppNavigation = (): JSX.Element => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={Splash}
        screenOptions={defaultScreenOptions}>
        <Stack.Screen name={SplashScreenName} component={Splash} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

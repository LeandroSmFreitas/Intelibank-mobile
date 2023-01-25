import {
  HeaderStyleInterpolators,
  TransitionPresets,
} from '@react-navigation/stack';

export const hideHeader = {
  headerShown: false,
};

export const horizontalTransition = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',
};

export const gestureEnabledFalse = {
  gestureEnabled: false,
};

export const defaultScreenOptions = {
  ...hideHeader,
  ...gestureEnabledFalse,
  // ...horizontalTransition,
  // ...defaultTransitionSpec,
  ...TransitionPresets.SlideFromRightIOS,
};

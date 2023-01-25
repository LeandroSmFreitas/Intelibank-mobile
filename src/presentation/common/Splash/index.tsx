import React, { useEffect } from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import * as S from './styles';

const Splash = () => {
  const splashAnimation = useSharedValue(0);

  const LogoStyleAnimated = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 25, 50], [0, 0.3, 1]),
      transform: [
        {
          translateX: interpolate(
            splashAnimation.value,
            [0, 50],
            [-50, 0],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });

  const startApp = () => {};

  useEffect(() => {
    splashAnimation.value = withTiming(
      50,
      {
        duration: 1000,
      },
      () => {
        'worklet';
        runOnJS(startApp)();
      },
    );
  }, []);

  return (
    <S.Container>
      <Animated.View style={[LogoStyleAnimated]}>
        <S.Title>Intelibank</S.Title>
      </Animated.View>
    </S.Container>
  );
};

export default Splash;
export const SplashScreenName = 'Splash';

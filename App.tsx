import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';
import themes from './src/infrastructure/themes';
import RootContainer from './src/presentation/common/root/RootContainer';

function App(): JSX.Element {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'Inter-Bold': require('./src/infrastructure/themes/fonts/Inter-Bold.ttf'),
          'Inter-SemiBold': require('./src/infrastructure/themes/fonts/Inter-Medium.ttf'),
          'Inter-Regular': require('./src/infrastructure/themes/fonts/Inter-Regular.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    void prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <ThemeProvider theme={themes}>
      <SafeAreaProvider>
        <RootContainer />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;

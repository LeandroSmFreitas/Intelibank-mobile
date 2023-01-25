import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from 'styled-components/native';
import themes from './src/infrastructure/themes';
import RootContainer from './src/presentation/common/root/RootContainer';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={themes}>
      <SafeAreaProvider>
        <RootContainer />
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

export default App;

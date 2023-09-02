import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {NativeBaseProvider, extendTheme} from 'native-base';
import NavigationUtils from './src/utitlities/navigation';
import {UserStateContextProvider} from './src/contexts/user-state-context';

const App = () => {
  // changing the theme
  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: '#f0fdfa',
        100: '#ccfbf1',
        200: '#99f6e4',
        300: '#5eead4',
        400: '#2dd4bf',
        500: '#14b8a6',
        600: '#0d9488',
        700: '#0f766e',
        800: '#115e59',
        900: '#134e4a',
      },
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <UserStateContextProvider>
          <NavigationUtils />
        </UserStateContextProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;

import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import MainNavigation from './app/navigation/MainNavigation';
import {navigationRef} from './app/services/navigation.service';
function App(): JSX.Element {
  return (
    <NativeBaseProvider>
      <NavigationContainer ref={navigationRef}>
        <MainNavigation />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;

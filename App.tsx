import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store, persistor } from './src/store';
import { RootStackParamList } from './src/types';
import CityListScreen from './src/screens/CityListScreen';
import WeatherDetailScreen from './src/screens/WeatherDetailScreen';
import HistoricalScreen from './src/screens/HistoricalScreen';
import LoadingScreen from './src/components/LoadingScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingScreen />} persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="CityList" component={CityListScreen} />
              <Stack.Screen
                name="WeatherDetail"
                component={WeatherDetailScreen}
              />
              <Stack.Screen name="Historical" component={HistoricalScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

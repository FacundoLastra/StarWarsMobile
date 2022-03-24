import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {QueryClient, QueryClientProvider} from 'react-query';

import StarwarsStackScreens from './navigator/starwars-stack-screens';

const queryClient = new QueryClient();

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <QueryClientProvider client={queryClient}>
        <StatusBar hidden />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="StarWarsStackScreens"
              component={StarwarsStackScreens}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

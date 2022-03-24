import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CharacterList from '../screens/character-list';
import CharacterDetail from '../screens/character-detail';

const Stack = createNativeStackNavigator();

const StarwarsStackScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="characterList" component={CharacterList} />
      <Stack.Screen name="detail" component={CharacterDetail} />
    </Stack.Navigator>
  );
};

export default StarwarsStackScreens;

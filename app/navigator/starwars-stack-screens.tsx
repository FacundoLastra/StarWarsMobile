import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CharacterList from '../screens/character-list';
import CharacterDetail from '../screens/character-detail';
import {LogoTitle} from '../components/logo-title';

const Stack = createNativeStackNavigator();

const StarwarsStackScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        name="CharacterList"
        component={CharacterList}
        options={{
          headerTitle: props => <LogoTitle {...props} />,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="CharacterDetail"
        component={CharacterDetail}
        options={{
          headerTitle: props => <LogoTitle {...props} />,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default StarwarsStackScreens;

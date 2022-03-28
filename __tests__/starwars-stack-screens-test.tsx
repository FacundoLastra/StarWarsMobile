import 'react-native';
import React from 'react';
import StarwarsStackScreens from '../app/navigator/starwars-stack-screens';
import {NavigationContainer} from '@react-navigation/native';

import renderer from 'react-test-renderer';
import {useFetchCharacters} from '../app/helpers/useFetchCharacters';

jest.mock('../app/helpers/useFetchCharacters', () => ({
  useFetchCharacters: jest.fn(),
}));

jest.mock('../app/helpers/useFetchFromUrlArray', () => ({
  useFetchFromUrlArray: jest.fn(),
}));
const wrapWithNavegationContainer = (component: any) => {
  return <NavigationContainer>{component}</NavigationContainer>;
};
describe('starwars-stack-screens-test', () => {
  beforeEach(() => {
    useFetchCharacters.mockImplementation(() => ({}));
  });
  it('renders correctly', () => {
    const render = renderer.create(
      wrapWithNavegationContainer(<StarwarsStackScreens />),
    );
    expect(render).not.toBeNull();
  });
});

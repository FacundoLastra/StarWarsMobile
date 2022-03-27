import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import {useFetchFromUrlArray} from '../app/helpers/useFetchFromUrlArray';
import CharacterDetail from '../app/screens/character-detail';
import {ICharacter} from '../app/models/character';

jest.mock('../app/helpers/useFetchFromUrlArray', () => ({
  useFetchFromUrlArray: jest.fn(),
}));

const mockedCharacter: ICharacter = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  homeworld: 'https://swapi.dev/api/planets/1/',
  films: [],
  species: [],
  vehicles: [],
  starships: [],
  created: '2014-12-09T13:50:51.644000Z',
  edited: '2014-12-20T21:17:56.891000Z',
  url: 'https://swapi.dev/api/people/1/',
};

const mockedRouteParam = {params: {character: mockedCharacter}};

describe('character-detail', () => {
  beforeEach(() => {
    useFetchFromUrlArray.mockImplementation(() => []);
  });
  it('should render character Item component', () => {
    const renderTest = render(<CharacterDetail route={mockedRouteParam} />);
    expect(renderTest).not.toBeNull();
  });
});

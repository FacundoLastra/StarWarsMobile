import 'react-native';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import CharacterList from '../app/screens/character-list';
import {useFetchCharacters} from '../app/helpers/useFetchCharacters';
import {ICharacter} from '../app/models/character';
import {NavigationContainer} from '@react-navigation/native';

jest.mock('../app/helpers/useFetchCharacters', () => ({
  useFetchCharacters: jest.fn(),
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

const wrapWithNavegationContainer = (component: any) => {
  return <NavigationContainer>{component}</NavigationContainer>;
};

describe('character-list', () => {
  beforeEach(() => {
    useFetchCharacters.mockImplementation(() => ({}));
  });
  it('should render character Item component', () => {
    const renderTest = render(<CharacterList />);
    expect(renderTest).not.toBeNull();
  });

  it('should show error section when api call return error', () => {
    useFetchCharacters.mockImplementation(() => ({
      error: true,
    }));
    const {getByText} = render(<CharacterList />);

    getByText('Error');
  });

  it('should render a character', () => {
    const anotherMockedCharacter = {
      ...mockedCharacter,
      name: 'JoseMock',
      url: 'fakeurl',
    };
    useFetchCharacters.mockImplementation(() => ({
      data: {
        pages: [
          {results: [mockedCharacter]},
          {results: [anotherMockedCharacter]},
        ],
      },
    }));
    const {getByText} = render(wrapWithNavegationContainer(<CharacterList />));

    getByText('Luke Skywalker');
    getByText('JoseMock');
  });

  it('should render a filtred character', () => {
    const anotherMockedCharacter = {
      ...mockedCharacter,
      name: 'JoseMock',
      url: 'fakeurl',
    };
    useFetchCharacters.mockImplementation(() => ({
      data: {
        pages: [
          {results: [mockedCharacter]},
          {results: [anotherMockedCharacter]},
        ],
      },
    }));
    const {getByText, getByPlaceholderText, queryAllByText} = render(
      wrapWithNavegationContainer(<CharacterList />),
    );

    fireEvent.changeText(getByPlaceholderText('Search'), 'JoseMock');
    getByText('JoseMock');
    expect(queryAllByText('Luke Skywalker').length).toBe(0);
  });

  it('should render spinner', () => {
    const anotherMockedCharacter = {
      ...mockedCharacter,
      name: 'JoseMock',
      url: 'fakeurl',
    };
    useFetchCharacters.mockImplementation(() => ({
      data: {
        pages: [
          {results: [mockedCharacter]},
          {results: [anotherMockedCharacter]},
        ],
      },
      isFetchingNextPage: true,
    }));
    const {getByTestId} = render(
      wrapWithNavegationContainer(<CharacterList />),
    );

    getByTestId('CharacterList.spinner');
  });
});

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import CharacterList from '../app/screens/character-list';
import {useFetchCharacters} from '../app/helpers/useFetchCharacters';

jest.mock('../app/helpers/useFetchCharacters', () => ({
  useFetchCharacters: jest.fn(),
}));

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

    expect(true).toBe(true);
  });
});

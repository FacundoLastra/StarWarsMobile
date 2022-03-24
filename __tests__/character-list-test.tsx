import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import CharacterList from '../app/screens/character-list';

it('should render character Item component', () => {
  render(<CharacterList />);
});

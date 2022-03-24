import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import {LogoTitle} from '../app/components/logo-title';

it('should render Logo Title', () => {
  render(<LogoTitle />);
});

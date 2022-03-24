import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import CharacterList from '../app/screens/character-list';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';

export function useCustomHook() {
  return useQuery('customHook', () => 'Hello');
}
const queryClient = new QueryClient();

export function renderWithClient(client: QueryClient, ui: any) {
  const {rerender, ...result} = render(
    <QueryClientProvider client={client}>{ui}</QueryClientProvider>,
  );
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(
        <QueryClientProvider client={client}>{rerenderUi}</QueryClientProvider>,
      ),
  };
}

it('should render character Item component', () => {
  return render(renderWithClient(queryClient, <CharacterList />));
});

import 'react-native';
import {useFetchCharacters} from '../app/helpers/useFetchCharacters';
import {useInfiniteQuery} from 'react-query';

jest.mock('react-query', () => ({
  useInfiniteQuery: jest.fn(),
}));
describe('useFetchCharacters', () => {
  beforeEach(() => {
    useInfiniteQuery.mockImplementation(() => ({
      data: [],
      error: true,
      fetchNextPage: () => {},
      hasNextPage: false,
      isFetchingNextPage: false,
    }));
  });
  it('should return variables with data', () => {
    const {data, error, fetchNextPage, hasNextPage, isFetchingNextPage} =
      useFetchCharacters();

    expect(data).toEqual([]);
    expect(error).toBeTruthy();
    expect(fetchNextPage).not.toBeUndefined();
    expect(hasNextPage).toBeFalsy();
    expect(isFetchingNextPage).toBeFalsy();
  });
});

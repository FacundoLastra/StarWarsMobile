import 'react-native';
import {useFetchFromUrlArray} from '../app/helpers/useFetchFromUrlArray';
import {useQueries} from 'react-query';

jest.mock('react-query', () => ({
  useQueries: jest.fn(),
}));
describe('useFetchFromUrlArray', () => {
  beforeEach(() => {
    useQueries.mockImplementation(() => []);
  });
  it('should return variables with data', () => {
    const mockedUrlArray = ['fakeurl'];
    const data = useFetchFromUrlArray(mockedUrlArray, 'mocked');

    expect(data).toEqual([]);
  });
});

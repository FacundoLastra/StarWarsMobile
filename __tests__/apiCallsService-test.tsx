import 'react-native';
import {fetchCharacterList, makeApiCall} from '../app/services/apiCallsService';

describe('apiCallsService-test', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            value: 'Testing something!',
          }),
      }),
    );
  });
  it('should make api call', async () => {
    const apiCallResponse = await makeApiCall('fakeUrl');
    expect(apiCallResponse).toEqual({
      value: 'Testing something!',
    });
  });

  it('should call fetchCharacterList', async () => {
    const apiCallResponse = await fetchCharacterList({});
    expect(apiCallResponse).toEqual({
      value: 'Testing something!',
    });
  });
});

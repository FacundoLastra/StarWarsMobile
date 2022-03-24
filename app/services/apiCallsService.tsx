import {API_URL} from '../constants/default';

export const makeApiCall = (url: string) => {
  return fetch(url, {
    method: 'GET',
  }).then(response => response.json());
};

export const fetchCharacterList = ({
  pageParam = `${API_URL}/people?page=1`,
}) => {
  return makeApiCall(pageParam);
};

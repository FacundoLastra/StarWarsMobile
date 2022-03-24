const API_URL = 'https://swapi.dev/api';

const makeApiCall = (url: string) => {
  return fetch(url, {
    method: 'GET',
  }).then(response => response.json());
};

export const fetchCharacterList = ({
  pageParam = `${API_URL}/people?page=1`,
}) => {
  console.log('proxima pagina', pageParam);
  return makeApiCall(pageParam);
};

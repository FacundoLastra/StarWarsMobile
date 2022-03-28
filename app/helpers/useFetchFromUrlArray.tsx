import {useQueries} from 'react-query';
import {makeApiCall} from '../services/apiCallsService';

export const useFetchFromUrlArray = (
  urlArray: string[],
  querryName: string,
) => {
  return useQueries(
    urlArray.map(filmUrl => {
      return {
        queryKey: [querryName, filmUrl],
        queryFn: () => makeApiCall(filmUrl),
      };
    }),
  );
};

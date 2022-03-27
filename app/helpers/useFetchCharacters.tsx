import {useInfiniteQuery} from 'react-query';
import {fetchCharacterList} from '../services/apiCallsService';

export const useFetchCharacters = () => {
  const {data, error, fetchNextPage, hasNextPage, isFetchingNextPage} =
    useInfiniteQuery('characters', fetchCharacterList, {
      getNextPageParam: lastPage => lastPage.next,
    });

  return {data, error, fetchNextPage, hasNextPage, isFetchingNextPage};
};

import React from 'react';
import {View, SafeAreaView, Text, FlatList} from 'react-native';
import CharacterItem from '../components/character-item';
import {ICharacterApiResponse} from '../models/character';
import {InfiniteData, useInfiniteQuery} from 'react-query';
import {fetchCharacterList} from '../services/apiCallsService';
import {ActivityIndicator, Colors} from 'react-native-paper';

const CharacterList = () => {
  const {data, error, fetchNextPage, hasNextPage, isFetchingNextPage} =
    useInfiniteQuery('characters', fetchCharacterList, {
      getNextPageParam: lastPage => lastPage.next,
    });

  const getCharacters = (dataInfo: InfiniteData<ICharacterApiResponse>) => {
    return dataInfo.pages.map(page => page.results).flat();
  };

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const renderSpinner = () => {
    return <ActivityIndicator animating={true} color={Colors.red800} />;
  };

  return (
    <SafeAreaView>
      {!error && data && (
        <>
          <FlatList
            data={getCharacters(data)}
            keyExtractor={item => item.url}
            renderItem={({item, index}) => {
              return <CharacterItem data={item} itemIndex={index} />;
            }}
            onEndReached={loadMore}
            ListFooterComponent={isFetchingNextPage ? renderSpinner : null}
          />
        </>
      )}
      {error && (
        <>
          <View>
            <Text>Error</Text>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default CharacterList;

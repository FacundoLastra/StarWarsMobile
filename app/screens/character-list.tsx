import React, {useState} from 'react';
import {View, SafeAreaView, Text, FlatList, StyleSheet} from 'react-native';
import CharacterItem from '../components/character-item';
import {ICharacterApiResponse} from '../models/character';
import {InfiniteData, useInfiniteQuery} from 'react-query';
import {fetchCharacterList} from '../services/apiCallsService';
import {ActivityIndicator, Colors, Searchbar} from 'react-native-paper';

const CharacterList = () => {
  const {data, error, fetchNextPage, hasNextPage, isFetchingNextPage} =
    useInfiniteQuery('characters', fetchCharacterList, {
      getNextPageParam: lastPage => lastPage.next,
    });

  const [searchQuery, setSearchQuery] = useState('');

  const getCharacters = (dataInfo: InfiniteData<ICharacterApiResponse>) => {
    return dataInfo.pages.map(page => page.results).flat();
  };

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const getFilteredCharacters = (
    dataInfo: InfiniteData<ICharacterApiResponse>,
  ) => {
    return getCharacters(dataInfo).filter(character =>
      character.name.includes(searchQuery),
    );
  };

  const renderSpinner = () => {
    return (
      <ActivityIndicator
        style={styles.spinner}
        animating={true}
        color={Colors.red800}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {!error && data && (
        <>
          <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
          <FlatList
            data={
              searchQuery ? getFilteredCharacters(data) : getCharacters(data)
            }
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  spinner: {
    margin: 8,
  },
});

export default CharacterList;

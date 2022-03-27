import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, BackHandler} from 'react-native';
import {Divider, Headline, List, Subheading} from 'react-native-paper';
import {useFetchFromUrlArray} from '../helpers/useFetchFromUrlArray';
import {ICharacter} from '../models/character';

const CharacterDetail = ({route}: {route: any}) => {
  const character: ICharacter = route.params.character;

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );
    return () => backHandler.remove();
  }, []);

  const filmsQueries = useFetchFromUrlArray(character.films, 'films');

  const vehiclesQueries = useFetchFromUrlArray(character.vehicles, 'vehicules');

  const starshipsQueries = useFetchFromUrlArray(
    character.starships,
    'starships',
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Headline>{character.name}</Headline>
        <Subheading>Information about character:</Subheading>
        <Subheading> Height: {character.height} cm</Subheading>
        <Subheading> Mass: {character.mass} Kg</Subheading>
        <Subheading> Hair Color: {character.hair_color}</Subheading>
        <Subheading> Skin Color: {character.skin_color}</Subheading>
        <Subheading> Eye Color: {character.eye_color}</Subheading>
        <Subheading> Gender: {character.gender}</Subheading>
        <List.Section title="Additional Information">
          <List.Accordion
            title="Films"
            left={props => <List.Icon {...props} icon="film" />}>
            {filmsQueries.map((querry, i) => {
              return <Subheading key={i}>{querry.data?.title}</Subheading>;
            })}
          </List.Accordion>
          <Divider />
          <List.Accordion
            title="Vehicules used"
            left={props => <List.Icon {...props} icon="car-estate" />}>
            {vehiclesQueries.map((querry, i) => {
              return <Subheading key={i}>{querry.data?.name}</Subheading>;
            })}
          </List.Accordion>
          <Divider />
          <List.Accordion
            title="Starships"
            left={props => <List.Icon {...props} icon="space-invaders" />}>
            {starshipsQueries.map((querry, i) => {
              return <Subheading key={i}>{querry.data?.name}</Subheading>;
            })}
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 20,
  },
  scrollView: {
    marginHorizontal: 5,
    flex: 1,
  },
});

export default CharacterDetail;

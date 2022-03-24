import React from 'react';
import {Text} from 'react-native';
import {ICharacter} from '../models/character';
import {Card, Title, Paragraph, TouchableRipple} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const CharacterItem = React.memo<{
  data: ICharacter;
  itemIndex: number;
}>(props => {
  const {data, itemIndex} = props;
  const navigation = useNavigation();
  return (
    <TouchableRipple
      onPress={() => navigation.navigate('CharacterDetail', {character: data})}
      rippleColor="rgba(0, 0, 0, .32)">
      <Card>
        <Card.Content>
          <Title>{data.name}</Title>
          <Paragraph>
            <Text>Character number: {itemIndex + 1}</Text>
          </Paragraph>
          <Paragraph>
            <Text>Height: {data.height}</Text>
          </Paragraph>
          <Paragraph>
            <Text>Mass: {data.mass} Kg</Text>
          </Paragraph>
          <Paragraph>
            <Text>Number of Films: {data.films.length}</Text>
          </Paragraph>
        </Card.Content>
      </Card>
    </TouchableRipple>
  );
});

export default CharacterItem;

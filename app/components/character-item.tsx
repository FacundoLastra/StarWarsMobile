import React from 'react';
import {Text} from 'react-native';
import {ICharacter} from '../models/character';
import {Card, Title, Paragraph} from 'react-native-paper';

const CharacterItem = React.memo<{data: ICharacter; itemIndex: number}>(
  props => {
    const {data, itemIndex} = props;
    return (
      <Card>
        <Card.Content>
          <Title>{data.name}</Title>
          <Paragraph>
            <Text>Personaje numero: {itemIndex + 1}</Text>
          </Paragraph>
          <Paragraph>
            <Text>Altura: {data.height}</Text>
          </Paragraph>
          <Paragraph>
            <Text>Peso: {data.mass} Kg</Text>
          </Paragraph>
          <Paragraph>
            <Text>Numero de Peliculas: {data.films.length}</Text>
          </Paragraph>
        </Card.Content>
      </Card>
    );
  },
);

export default CharacterItem;

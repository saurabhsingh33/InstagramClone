import React from 'react';
import { FlatList } from 'react-native';
import Story from '../Story/Story';
import Styles from './Styles';

const data = [
  {
    imageUri:
      'https://www.theportlandclinic.com/wp-content/uploads/2019/07/Person-Curtis_4x5-e1564616444404.jpg',
    name: 'Curtis',
  },
  {
    imageUri: 'https://raajratna.com/wp-content/uploads/2019/01/person2.jpg',
    name: 'XYZ',
  },
  {
    imageUri:
      'https://i.pinimg.com/736x/f4/fa/98/f4fa98e899b1f9b6e19a0c9d8166a28d.jpg',
    name: 'The Girl',
  },
  {
    imageUri:
      'https://i.pinimg.com/474x/64/76/eb/6476eb89e87258727f13ff41f348939e.jpg',
    name: 'Man',
  },
  {
    imageUri:
      'https://www.theportlandclinic.com/wp-content/uploads/2019/07/Person-Curtis_4x5-e1564616444404.jpg',
    name: 'sdvvsdbv',
  },
  {
    imageUri: 'https://raajratna.com/wp-content/uploads/2019/01/person2.jpg',
    name: 'XYdsbsvbZ',
  },
  {
    imageUri:
      'https://i.pinimg.com/736x/f4/fa/98/f4fa98e899b1f9b6e19a0c9d8166a28d.jpg',
    name: 'Thedsbvs Girl',
  },
  {
    imageUri:
      'https://i.pinimg.com/474x/64/76/eb/6476eb89e87258727f13ff41f348939e.jpg',
    name: 'Mdsvsan',
  },
];

const Stories = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={({ name }) => name}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={Styles.container}
      renderItem={({ item }) => (
        <Story imageUri={item.imageUri} name={item.name} />
      )}
    />
  );
};

export default Stories;

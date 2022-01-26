import React from 'react';
import { FlatList } from 'react-native';
import Story from '../UserStoryPreview/UserStoryPreview';
import Styles from './Styles';
import StoriesData from '../../Data/Stories';

const Stories = () => {
  return (
    <FlatList
      data={StoriesData}
      keyExtractor={({ user: { id } }) => id}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={Styles.container}
      renderItem={({ item }) => (
        <Story story={item} />
      )}
    />
  );
};

export default Stories;

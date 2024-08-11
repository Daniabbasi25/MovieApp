import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {MovieListInfoProps} from '../model';
import {getHeight} from '../lib';
import MovieListItem from './MovieListItem';

interface Props {
  data?: MovieListInfoProps[];
}
const MainFlatList: FC<Props> = ({data}) => {
  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={() => {
        return (
          <View
            style={{
              height: getHeight(2),
              width: '100%',
            }}
          />
        );
      }}
      renderItem={({item}) => {
        return <MovieListItem movie={item} />;
      }}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default MainFlatList;

const styles = StyleSheet.create({});

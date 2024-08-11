import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {FC, useCallback, useEffect, useState} from 'react';
import {MovieListInfoProps} from '../model';
import {getHeight} from '../lib';
import apiClient from '../config/axiosConfig';
import {apiKey} from '../config/constant';

interface Props {
  searchText: string;
}
const SearchList: FC<Props> = ({searchText}) => {
  const [movieList, setMovieList] = useState<
    MovieListInfoProps[] | undefined
  >();

  const searchMovies = useCallback(async () => {
    try {
      const response = await apiClient.get('/search/movie', {
        params: {
          query: searchText,
        },
      });

      setMovieList(response.data.results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  }, [searchText]);
  useEffect(() => {
    searchMovies();
  }, []);
  return (
    <View>
      <FlatList
        data={movieList}
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
          return <View />;
          //   return <MovieListItem movie={item} />;
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SearchList;

const styles = StyleSheet.create({});

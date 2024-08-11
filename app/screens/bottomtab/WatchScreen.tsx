import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {Colors} from '../../theme';
import {apiClient} from '../../config/axiosConfig';
import {MovieListInfoProps} from '../../model';
import MovieListItem from '../../components/MovieListItem';
import {getHeight} from '../../lib';
import SearchBar from '../../components/SearchBar';

const WatchScreen = () => {
  const [movieList, setMovieList] = useState<
    MovieListInfoProps[] | undefined
  >();
  const fetchMovies = useCallback(async () => {
    try {
      const response = await apiClient.get('/upcoming');
      setMovieList(response.data?.results);
    } catch (error) {
      console.error('Error fetching upcoming movies:', error);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <View style={styles.screenContainer}>
      <SearchBar />
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
          return <MovieListItem movie={item} />;
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default WatchScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.Whisper,
  },
});

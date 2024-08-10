import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {Colors} from '../../theme';
import {apiClient} from '../../config/axiosConfig';
import {MovieListInfoProps} from '../../model';
import MovieListItem from '../../components/MovieListItem';
import {getHeight} from '../../lib';

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
    <SafeAreaView style={styles.screenContainer}>
      <FlatList
        data={movieList}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{
                height: getHeight(1),
                width: '100%',
                backgroundColor: Colors.Whisper,
              }}
            />
          );
        }}
        renderItem={({item}) => {
          return <MovieListItem movie={item} />;
        }}
      />
    </SafeAreaView>
  );
};

export default WatchScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.Whisper,
  },
});

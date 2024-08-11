import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {Colors} from '../../theme';
import {apiClient} from '../../config/axiosConfig';
import {MovieListInfoProps} from '../../model';
import MovieListItem from '../../components/MovieListItem';
import {getHeight} from '../../lib';
import SearchBar from '../../components/SearchBar';
import MainFlatList from '../../components/MainFlatList';
import SearchList from '../../components/SearchList';

const WatchScreen = () => {
  const [movieList, setMovieList] = useState<
    MovieListInfoProps[] | undefined
  >();
  const [searchQuery, setSearchQuery] = useState<string | undefined>();
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const handleSearch = (query: string) => {
    if (!query) {
      setSearchQuery(undefined);
      setIsSearching(false);
      return;
    }

    setSearchQuery(query);
    setIsSearching(true);
  };

  const fetchMovies = useCallback(async () => {
    try {
      const response = await apiClient.get('/movie/upcoming');
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
      <SearchBar onChangeText={handleSearch} onclose={() => handleSearch('')} />
      {isSearching ? (
        <SearchList searchText={searchQuery ?? ''} />
      ) : (
        <MainFlatList data={movieList} />
      )}
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

import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import apiClient from '../config/axiosConfig';
import {MovieDetailProps} from '../model';
import {Colors} from '../theme';
import {imagesBaseUrl} from '../config/constant';
import {
  fontFamilies,
  getFontSize,
  getHeight,
  getRandomColor,
  getWidth,
} from '../lib';

const MovieDetailScreen = ({navigation, route}: any) => {
  const {id} = route.params;
  const [movieDetail, setMovieDetail] = useState<
    undefined | MovieDetailProps
  >();
  const fetchMovies = useCallback(async () => {
    try {
      const [movieResponse, imagesResponse] = await Promise.all([
        apiClient.get(`/${id}`),
        apiClient.get(`/${id}/images`),
      ]);

      setMovieDetail(prev => ({
        ...movieResponse.data,
        backdrop_path:
          imagesResponse.data?.backdrops[1]?.file_path ??
          movieResponse.data.backdrop_path,
      }));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [id]);

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.screenContainer}>
      <ImageBackground
        style={styles.imageContainer}
        source={{
          uri: imagesBaseUrl + movieDetail?.backdrop_path,
        }}>
        <Text>In theaters {movieDetail?.release_date}</Text>
      </ImageBackground>
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>Genres</Text>
        <View style={styles.genresContainer}>
          {movieDetail?.genres.map(item => (
            <View
              style={[
                styles.genreaItem,
                {
                  backgroundColor: getRandomColor(),
                },
              ]}
              key={item.id}>
              <Text style={styles.genreaItemText}>{item.name}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.heading}>Overview</Text>
        <Text>{movieDetail?.overview}</Text>
      </View>
    </ScrollView>
  );
};

export default MovieDetailScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  contentContainer: {
    flex: 1,
    paddingVertical: getHeight(1),
    paddingHorizontal: getWidth(10),
  },
  heading: {
    fontSize: getFontSize(16),
    fontFamily: fontFamilies.Popins.medium,
    color: Colors.TextBlack,
    fontWeight: '500',
  },
  genreaItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 16,
  },
  genresContainer: {
    flexDirection: 'row',
    gap: 10,
    padding: 20,
    borderBottomWidth: 1,
    borderColor: Colors.Gainsboro,
    flexWrap: 'wrap',
    marginBottom: 5,
  },
  genreaItemText: {
    color: Colors.White,
    fontFamily: fontFamilies.Popins.normal,
  },
});

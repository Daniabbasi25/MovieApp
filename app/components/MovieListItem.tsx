import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';
import {MovieListInfoProps} from '../model';
import {imagesBaseUrl} from '../config/constant';
import {getHeight} from '../lib';

interface Props {
  movie: MovieListInfoProps;
}
const MovieListItem: FC<Props> = ({movie}) => {
  return (
    <TouchableOpacity style={{width: '95%', alignSelf: 'center'}}>
      <ImageBackground
        source={{uri: imagesBaseUrl + movie.backdrop_path}}
        resizeMode="cover"
        style={styles.container}>
        {/* <Text>{movie.title}</Text> */}
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default MovieListItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    height: getHeight(25),
    borderRadius: 10,
    overflow: 'hidden',
    resizeMode: 'cover',
  },
});

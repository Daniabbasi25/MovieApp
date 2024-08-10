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
import {fontFamilies, getFontSize, getHeight} from '../lib';
import {Colors} from '../theme';

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
        <View
          style={[
            {flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.2)'},
            styles.container,
          ]}>
          <Text style={styles.text}>{movie.title}</Text>
        </View>
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

    justifyContent: 'flex-end',
  },
  text: {
    fontSize: getFontSize(18),
    color: Colors.White,
    fontWeight: '500',
    fontFamily: fontFamilies.Popins.normal,
    paddingLeft: 20,
    paddingBottom: 20,
  },
});

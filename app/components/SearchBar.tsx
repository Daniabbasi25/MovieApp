import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import SearchIconSvg from '../assets/svg/SearchIconSvg';
import {fontFamilies, getFontSize, getWidth} from '../lib';
import {Colors} from '../theme';
import CloseIconSvg from '../assets/svg/CloseIconSvg';

const SearchBar = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        {isActive ? (
          <View style={styles.searchContainer}>
            <SearchIconSvg height={getWidth(5)} width={getWidth(5)} />
            <TextInput
              placeholder="TV shows, movies and more"
              style={styles.textInput}
            />
            <TouchableOpacity onPress={() => setIsActive(false)}>
              <CloseIconSvg height={getWidth(5)} width={getWidth(5)} />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.contentContainer}>
            <Text style={styles.heading}>Watch</Text>
            <TouchableOpacity onPress={() => setIsActive(true)}>
              <SearchIconSvg height={getWidth(5)} width={getWidth(5)} />
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '8%',

    backgroundColor: Colors.White,
    // marginBottom: 20,
    paddingBottom: 10,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: getFontSize(16),
    fontWeight: '500',
    fontFamily: fontFamilies.Popins.medium,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.Whisper,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 30,
    gap: 10,
  },
  textInput: {
    flex: 1,
    fontFamily: fontFamilies.Popins.normal,
    color: Colors.TextBlack,
  },
});

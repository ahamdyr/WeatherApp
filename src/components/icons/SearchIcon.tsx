import React from 'react';
import { Image, StyleSheet } from 'react-native';

interface SearchIconProps {
  size?: number;
  color?: string;
}

const SearchIcon: React.FC<SearchIconProps> = ({ size = 24 }) => {
  return (
    <Image
      source={require('../../../assets/icons/page-3-6-search-24px.png')}
      style={[styles.icon, { width: size, height: size }]}
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    tintColor: '#2388C7',
  },
});

export default SearchIcon;

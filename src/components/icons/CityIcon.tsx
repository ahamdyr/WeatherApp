import React from 'react';
import { Image, StyleSheet } from 'react-native';

interface CityIconProps {
  size?: number;
  color?: string;
}

const CityIcon: React.FC<CityIconProps> = ({ size = 24 }) => {
  return (
    <Image
      source={require('../../../assets/icons/page-3-7-location_city-24px.png')}
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

export default CityIcon;

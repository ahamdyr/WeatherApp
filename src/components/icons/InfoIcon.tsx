import React from 'react';
import { Image, StyleSheet } from 'react-native';

interface InfoIconProps {
  size?: number;
  color?: string;
}

const InfoIcon: React.FC<InfoIconProps> = ({ size = 24 }) => {
  return (
    <Image
      source={require('../../../assets/icons/page-3-5-info-24px.png')}
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

export default InfoIcon;

import React from 'react';
import { View, StyleSheet } from 'react-native';

interface PlusIconProps {
  size?: number;
  color?: string;
}

const PlusIcon: React.FC<PlusIconProps> = ({ size = 24, color = '#FFFFFF' }) => {
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <View
        style={[
          styles.horizontal,
          {
            width: size * 0.7,
            height: size * 0.15,
            backgroundColor: color,
          },
        ]}
      />
      <View
        style={[
          styles.vertical,
          {
            width: size * 0.15,
            height: size * 0.7,
            backgroundColor: color,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontal: {
    position: 'absolute',
  },
  vertical: {
    position: 'absolute',
  },
});

export default PlusIcon;

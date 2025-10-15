import React from 'react';
import { View, StyleSheet } from 'react-native';

interface BackIconProps {
  size?: number;
  color?: string;
}

const BackIcon: React.FC<BackIconProps> = ({
  size = 24,
  color = '#FFFFFF',
}) => {
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <View
        style={[
          styles.arrow,
          {
            borderLeftWidth: size * 0.15,
            borderTopWidth: size * 0.15,
            borderLeftColor: color,
            borderTopColor: color,
            width: size * 0.5,
            height: size * 0.5,
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
  arrow: {
    transform: [{ rotate: '-45deg' }],
  },
});

export default BackIcon;

import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LoadingScreen: React.FC = () => {
  return (
    <LinearGradient
      colors={['#D6D3DE', '#FFFFFF']}
      angle={1}
      useAngle
      style={styles.container}
    >
      <ActivityIndicator size="large" color="#2388C7" />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingScreen;

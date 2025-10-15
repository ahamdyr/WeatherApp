import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface EmptyStateProps {
  message: string;
  subMessage?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ message, subMessage }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      {subMessage && <Text style={styles.subMessage}>{subMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  message: {
    fontSize: 18,
    fontWeight: '500',
    color: '#3D4548',
    textAlign: 'center',
    marginBottom: 8,
  },
  subMessage: {
    fontSize: 14,
    fontWeight: '400',
    color: '#3D4548',
    textAlign: 'center',
  },
});

export default EmptyState;

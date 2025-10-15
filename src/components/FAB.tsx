import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PlusIcon from './icons/PlusIcon';

interface FABProps {
  onPress: () => void;
}

const FAB: React.FC<FABProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <PlusIcon size={20} color="#FFFFFF" />
      <Text style={styles.text}>Add city</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 32,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2388C7',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 28,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  text: {
    fontSize: 14,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 1.35,
    marginLeft: 8,
    textTransform: 'uppercase',
  },
});

export default FAB;

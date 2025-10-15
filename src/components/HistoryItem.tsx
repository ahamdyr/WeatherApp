import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HistoryEntry } from '../types';
import { formatDate } from '../utils/dateFormat';
import WeatherIcon from './icons/WeatherIcon';

interface HistoryItemProps {
  entry: HistoryEntry;
  cityName: string;
}

const HistoryItem: React.FC<HistoryItemProps> = ({ entry, cityName }) => {
  return (
    <View style={styles.container}>
      <WeatherIcon size={48} color="#2388C7" icon={entry.weather.icon} />
      <View style={styles.contentContainer}>
        <Text style={styles.timestamp}>{formatDate(entry.timestamp)}</Text>
        <Text style={styles.weather}>
          {entry.weather.description}, {entry.weather.temperature}°C
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 72,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  contentContainer: {
    flex: 1,
    marginLeft: 16,
  },
  timestamp: {
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0.4,
    lineHeight: 16,
    color: '#3D4548',
    marginBottom: 4,
  },
  weather: {
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 0.1,
    lineHeight: 24,
    color: '#000000',
  },
});

export default HistoryItem;

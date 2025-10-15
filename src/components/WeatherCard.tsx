import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WeatherData } from '../types';
import WeatherIcon from './icons/WeatherIcon';

interface WeatherCardProps {
  cityName: string;
  countryCode: string;
  weather: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  cityName,
  countryCode,
  weather,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>
        {cityName}, {countryCode}
      </Text>

      <View style={styles.iconContainer}>
        <WeatherIcon size={100} color="#2388C7" icon={weather.icon} />
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Description</Text>
          <Text style={styles.detailValue}>{weather.description}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Temperature</Text>
          <Text style={styles.detailValue}>{weather.temperature}° C</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Humidity</Text>
          <Text style={styles.detailValue}>{weather.humidity}%</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Wind speed</Text>
          <Text style={styles.detailValue}>{weather.windSpeed} km/h</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 24,
    marginHorizontal: 16,
    shadowColor: 'rgba(7, 5, 48, 0.2)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  cityName: {
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 0.15,
    color: '#000000',
    marginBottom: 16,
    textAlign: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  detailsContainer: {
    marginTop: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    // borderBottomWidth: 1,
    // borderBottomColor: '#E9E9E9',
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#3D4548',
  },
  detailValue: {
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 0.15,
    color: '#2388C7',
  },
});

export default WeatherCard;

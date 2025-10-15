import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { useAppSelector, useAppDispatch } from '../hooks';
import { fetchWeather } from '../store/slices/weatherSlice';
import { formatDate } from '../utils/dateFormat';
import Header from '../components/Header';
import WeatherCard from '../components/WeatherCard';

type WeatherDetailRouteProp = RouteProp<RootStackParamList, 'WeatherDetail'>;

const WeatherDetailScreen: React.FC = () => {
  const route = useRoute<WeatherDetailRouteProp>();
  const dispatch = useAppDispatch();
  const { cityName, countryCode } = route.params;

  const weather = useAppSelector(state => state.weather.data[cityName]);
  const loading = useAppSelector(state => state.weather.loading);
  const error = useAppSelector(state => state.weather.error);

  useEffect(() => {
    if (!weather) {
      dispatch(fetchWeather(cityName));
    }
  }, [cityName, weather, dispatch]);

  const timestamp = Date.now();

  return (
    <View style={styles.container}>
      <Header title={cityName} showBackButton />
      <ImageBackground
        source={require('../../assets/icons/Group.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.content}>
          {loading && (
            <View style={styles.centerContainer}>
              <ActivityIndicator size="large" color="#2388C7" />
            </View>
          )}

          {error && (
            <View style={styles.centerContainer}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          )}

          {weather && !loading && (
            <>
              <WeatherCard
                cityName={cityName}
                countryCode={countryCode}
                weather={weather}
              />
              <Text style={styles.timestamp}>
                Weather info received on {formatDate(timestamp)}
              </Text>
            </>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  errorText: {
    fontSize: 14,
    color: '#3D4548',
    textAlign: 'center',
  },
  timestamp: {
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0.4,
    lineHeight: 16,
    color: '#3D4548',
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    textAlign: 'center',
  },
});

export default WeatherDetailScreen;

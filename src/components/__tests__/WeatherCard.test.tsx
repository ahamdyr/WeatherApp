import React from 'react';
import { render } from '@testing-library/react-native';
import WeatherCard from '../WeatherCard';
import { WeatherData } from '../../types';

describe('WeatherCard', () => {
  const mockWeather: WeatherData = {
    description: 'clear sky',
    temperature: '20.5',
    humidity: 65,
    windSpeed: 5.2,
    icon: '01d',
  };

  it('should render city name and country code', () => {
    const { getByText } = render(
      <WeatherCard
        cityName="London"
        countryCode="GB"
        weather={mockWeather}
      />,
    );

    expect(getByText('London, GB')).toBeTruthy();
  });

  it('should render weather description', () => {
    const { getByText } = render(
      <WeatherCard
        cityName="London"
        countryCode="GB"
        weather={mockWeather}
      />,
    );

    expect(getByText('clear sky')).toBeTruthy();
  });

  it('should render temperature with unit', () => {
    const { getByText } = render(
      <WeatherCard
        cityName="London"
        countryCode="GB"
        weather={mockWeather}
      />,
    );

    expect(getByText('20.5° C')).toBeTruthy();
  });

  it('should render humidity percentage', () => {
    const { getByText } = render(
      <WeatherCard
        cityName="London"
        countryCode="GB"
        weather={mockWeather}
      />,
    );

    expect(getByText('65%')).toBeTruthy();
  });

  it('should render wind speed with unit', () => {
    const { getByText } = render(
      <WeatherCard
        cityName="London"
        countryCode="GB"
        weather={mockWeather}
      />,
    );

    expect(getByText('5.2 km/h')).toBeTruthy();
  });

  it('should render all labels correctly', () => {
    const { getByText } = render(
      <WeatherCard
        cityName="London"
        countryCode="GB"
        weather={mockWeather}
      />,
    );

    expect(getByText('Description')).toBeTruthy();
    expect(getByText('Temperature')).toBeTruthy();
    expect(getByText('Humidity')).toBeTruthy();
    expect(getByText('Wind speed')).toBeTruthy();
  });
});

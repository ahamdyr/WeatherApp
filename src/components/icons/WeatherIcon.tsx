import React from 'react';
import { Image } from 'react-native';

interface WeatherIconProps {
  size?: number;
  color?: string;
  icon?: string;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({
  size = 100,
  color = '#2388C7',
  icon,
}) => {
  const imgUrl = `https://openweathermap.org/img/w/${icon}.png`;
  return (
    <Image source={{ uri: imgUrl }} style={{ width: size, height: size }} />
  );
};

export default WeatherIcon;

import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { City, RootStackParamList } from '../types';
import { useAppDispatch } from '../hooks';
import { openHistoryModal } from '../store/slices/uiSlice';
import CityIcon from './icons/CityIcon';
import InfoIcon from './icons/InfoIcon';

interface CityListItemProps {
  city: City;
}

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'CityList'>;

const CityListItem: React.FC<CityListItemProps> = ({ city }) => {
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useAppDispatch();
  const { cityName, countryCode } = city;
  const handlePress = () => {
    navigation.navigate('WeatherDetail', { cityName, countryCode });
  };

  const handleInfoPress = (e?: any) => {
    e?.stopPropagation();
    navigation.navigate('Historical', { cityName });
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <CityIcon size={24} color="#2388C7" />
      <Text style={styles.cityName}>
        {cityName}, {countryCode}
      </Text>
      <TouchableOpacity
        onPress={handleInfoPress}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        testID="info-button"
      >
        <InfoIcon size={24} color="#2388C7" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    paddingHorizontal: 16,
  },
  cityName: {
    flex: 1,
    marginLeft: 16,
    fontSize: 14,
    fontWeight: '900',
    color: '#000000',
    letterSpacing: 0.1,
  },
});

export default CityListItem;

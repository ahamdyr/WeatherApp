import React from 'react';
import { View, FlatList, StyleSheet, ImageBackground } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { useAppSelector } from '../hooks';
import Header from '../components/Header';
import HistoryItem from '../components/HistoryItem';
import EmptyState from '../components/EmptyState';

type HistoricalRouteProp = RouteProp<RootStackParamList, 'Historical'>;

const HistoricalScreen: React.FC = () => {
  const route = useRoute<HistoricalRouteProp>();
  const { cityName } = route.params;

  const history = useAppSelector(
    (state) => state.history.data[cityName] || []
  );

  return (
    <View style={styles.container}>
      <Header title={`${cityName} historical`} showBackButton />
      <ImageBackground
        source={require('../../assets/icons/Group.png')}
        style={styles.background}
        resizeMode="cover"
      >
        {history.length === 0 ? (
          <EmptyState
            message="No weather history yet"
            subMessage={`Tap on ${cityName} to fetch weather data`}
          />
        ) : (
          <FlatList
            data={history}
            renderItem={({ item }) => (
              <HistoryItem entry={item} cityName={cityName} />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContent}
          />
        )}
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
  listContent: {
    paddingBottom: 16,
  },
});

export default HistoricalScreen;

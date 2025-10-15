import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Alert,
  ImageBackground,
} from 'react-native';
import { useAppSelector, useAppDispatch } from '../hooks';
import { openAddCityModal } from '../store/slices/uiSlice';
import CityListItem from '../components/CityListItem';
import FAB from '../components/FAB';
import AddCityModal from '../components/AddCityModal';
import Header from '../components/Header';
import EmptyState from '../components/EmptyState';

const CityListScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const cities = useAppSelector(state => state.cities.list);
  const loading = useAppSelector(state => state.cities.loading);
  const error = useAppSelector(state => state.cities.error);
  if (error) {
    Alert.alert('Error', error, [{ text: 'OK', onPress: () => {} }]);
  }

  return (
    <View style={styles.container}>
      <Header title="Cities" />
      <ImageBackground
        source={require('../../assets/icons/Group.png')}
        style={styles.background}
        resizeMode="cover"
      >
        {cities.length === 0 ? (
          <EmptyState
            message="No cities added yet"
            subMessage="Tap the button below to add your first city"
          />
        ) : (
          <FlatList
            data={cities}
            renderItem={({ item }) => <CityListItem city={item} />}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.listContent}
          />
        )}
        {loading && (
          <View style={styles.centerContainer}>
            <ActivityIndicator size="large" color="#2388C7" />
          </View>
        )}
      </ImageBackground>
      <FAB onPress={() => dispatch(openAddCityModal())} />
      <AddCityModal />
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
    paddingBottom: 80, // Space for FAB
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
});

export default CityListScreen;

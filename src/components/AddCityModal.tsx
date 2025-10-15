import React, { useState } from 'react';
import {
  Modal,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useAppSelector, useAppDispatch } from '../hooks';
import { closeAddCityModal } from '../store/slices/uiSlice';
import { verifyCity } from '../store/slices/citiesSlice';
import SearchIcon from './icons/SearchIcon';

const AddCityModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector(state => state.ui.showAddCityModal);
  const [cityName, setCityName] = useState('');

  const handleClose = () => {
    dispatch(closeAddCityModal());
    setCityName('');
  };

  const handleAddCity = () => {
    if (cityName.trim()) {
      dispatch(verifyCity(cityName.trim()));
      handleClose();
    }
  };

  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="fade"
      onRequestClose={handleClose}
    >
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={handleClose}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardView}
        >
          <TouchableOpacity activeOpacity={1}>
            <View style={styles.content}>
              <View style={styles.searchRow}>
                <SearchIcon size={24} color="#2388C7" />
                <TextInput
                  style={styles.input}
                  placeholder="Search for cities"
                  placeholderTextColor="#989A9C"
                  value={cityName}
                  onChangeText={setCityName}
                  onSubmitEditing={handleAddCity}
                  autoFocus
                />
              </View>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'flex-end',
  },
  keyboardView: {
    justifyContent: 'flex-end',
  },
  content: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    minHeight: 402,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E9E9E9',
    backgroundColor: '#FFFFFF',
  },
  input: {
    flex: 1,
    marginLeft: 16,
    fontSize: 14,
    fontWeight: '900',
    color: '#000000',
  },
});

export default AddCityModal;

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CityListItem from '../CityListItem';
import { City } from '../../types';

const mockStore = configureStore([]);

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

describe('CityListItem', () => {
  const mockCity: City = {
    cityName: 'London',
    countryCode: 'GB',
  };

  let store: any;

  beforeEach(() => {
    store = mockStore({
      ui: { showHistoryModal: false },
    });
    mockNavigate.mockClear();
  });

  it('should render city name and country code', () => {
    const { getByText } = render(
      <Provider store={store}>
        <NavigationContainer>
          <CityListItem city={mockCity} />
        </NavigationContainer>
      </Provider>,
    );

    expect(getByText('London, GB')).toBeTruthy();
  });

  it('should navigate to WeatherDetail on press', () => {
    const { getByText } = render(
      <Provider store={store}>
        <NavigationContainer>
          <CityListItem city={mockCity} />
        </NavigationContainer>
      </Provider>,
    );

    fireEvent.press(getByText('London, GB'));
    expect(mockNavigate).toHaveBeenCalledWith('WeatherDetail', {
      cityName: 'London',
      countryCode: 'GB',
    });
  });

  it('should navigate to Historical on info icon press', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <NavigationContainer>
          <CityListItem city={mockCity} />
        </NavigationContainer>
      </Provider>,
    );

    const infoButton = getByTestId('info-button');
    fireEvent.press(infoButton);
    expect(mockNavigate).toHaveBeenCalledWith('Historical', {
      cityName: 'London',
    });
  });
});

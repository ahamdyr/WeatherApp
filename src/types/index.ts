// Navigation types
export type RootStackParamList = {
  CityList: undefined;
  WeatherDetail: { cityName: string; countryCode: string };
  Historical: { cityName: string };
};

// Weather types
export interface WeatherData {
  description: string;
  temperature: string;
  humidity: number;
  windSpeed: number;
  icon: string;
}

// History types
export interface HistoryEntry {
  id: string;
  timestamp: number;
  weather: WeatherData;
}

// Redux state types
export interface City {
  cityName: string;
  countryCode: string;
}
export interface CitiesState {
  list: City[];
  loading: boolean;
  error: string | null;
}

export interface WeatherState {
  data: {
    [cityName: string]: WeatherData;
  };
  loading: boolean;
  error: string | null;
}

export interface HistoryState {
  data: {
    [cityName: string]: HistoryEntry[];
  };
}

export interface UIState {
  showAddCityModal: boolean;
  showHistoryModal: boolean;
  selectedCity: string | null;
}

export interface RootState {
  cities: CitiesState;
  weather: WeatherState;
  history: HistoryState;
  ui: UIState;
}

const API_KEY = 'f5cb0b965ea1564c50c6f1b74534d823';

export const checkCityExists = async (cityName: string) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`,
    );

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('City not found. Please check the name.');
      }
      if (response.status === 401) {
        throw new Error('API key error. Please try again later.');
      }
      throw new Error('Failed to verify city. Please try again.');
    }

    const data = await response.json();

    return {
      cityName: data.name,
      countryCode: data.sys.country,
    };
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const fetchWeatherData = async (cityName: string) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`,
    );

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('City not found. Please check the name.');
      }
      if (response.status === 401) {
        throw new Error('API key error. Please try again later.');
      }
      throw new Error('Failed to fetch weather. Please try again.');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

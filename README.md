# Weather App - React Native with Redux & TypeScript

A React Native mobile application that enables users to maintain a list of cities and retrieve current weather data for each location. Built with TypeScript, Redux Toolkit, and React Navigation.

## Features

- ✅ Add and manage multiple cities with country codes
- ✅ City verification via OpenWeatherMap API
- ✅ View current weather information for each city
- ✅ Historical weather tracking with persistent storage
- ✅ Custom background image design
- ✅ Redux state management with persistence
- ✅ Cross-platform support (iOS & Android)
- ✅ TypeScript for type safety
- ✅ Comprehensive unit testing (32 tests)

## Tech Stack

- **React Native 0.82** - Cross-platform mobile framework
- **TypeScript** - Type-safe development
- **Redux Toolkit** - State management with async thunks
- **Redux Persist** - State persistence with AsyncStorage
- **React Navigation** - Native stack navigation
- **OpenWeatherMap API** - Weather data and city verification
- **Jest** - Unit testing framework
- **React Testing Library** - Component testing utilities

## Prerequisites

- Node.js >= 20.19.4
- npm or yarn
- Xcode (for iOS development)
- Android Studio (for Android development)
- CocoaPods (for iOS dependencies)

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/ahamdyr/WeatherApp.git
cd WeatherApp
```

## Installation

1. Install dependencies:

```bash
npm install
```

2. Install iOS dependencies (macOS only):

```bash
cd ios
bundle install
bundle exec pod install
cd ..
```

## Running the App

### iOS

```bash
npm run ios
```

Or open `ios/WeatherApp.xcworkspace` in Xcode and run from there.

### Android

```bash
npm run android
```

Make sure you have an Android emulator running or a device connected.

## Project Structure

```
WeatherApp/
├── src/
│   ├── components/           # Reusable components
│   │   ├── __tests__/       # Component tests
│   │   ├── icons/           # Icon components (PNG-based)
│   │   ├── AddCityModal.tsx
│   │   ├── CityListItem.tsx
│   │   ├── EmptyState.tsx
│   │   ├── FAB.tsx
│   │   ├── Header.tsx
│   │   ├── HistoryItem.tsx
│   │   ├── LoadingScreen.tsx
│   │   └── WeatherCard.tsx
│   ├── hooks/               # Custom React hooks
│   │   └── index.ts         # useAppDispatch, useAppSelector
│   ├── screens/             # Screen components
│   │   ├── CityListScreen.tsx
│   │   ├── HistoricalScreen.tsx
│   │   └── WeatherDetailScreen.tsx
│   ├── services/            # API services
│   │   └── index.ts         # OpenWeatherMap API integration
│   ├── store/               # Redux store configuration
│   │   ├── slices/
│   │   │   ├── __tests__/  # Redux slice tests
│   │   │   ├── citiesSlice.ts
│   │   │   ├── historySlice.ts
│   │   │   ├── uiSlice.ts
│   │   │   └── weatherSlice.ts
│   │   └── index.ts
│   ├── types/               # TypeScript type definitions
│   │   └── index.ts
│   └── utils/               # Utility functions
│       ├── __tests__/       # Utility tests
│       └── dateFormat.ts
├── assets/                  # Static assets
│   └── icons/              # PNG icon files
├── __tests__/              # App-level tests
├── App.tsx                 # Root component
├── jest.config.js          # Jest configuration
├── jest.setup.js           # Test setup and mocks
├── TESTING.md              # Testing documentation
└── package.json
```

## Redux State Structure

The app uses Redux Toolkit with four main slices:

- **cities**: Manages the list of cities
- **weather**: Handles weather data fetching and storage
- **history**: Stores historical weather queries (persisted)
- **ui**: Manages UI state (modals, selections)

## Features in Detail

### City Management

- Add cities via search modal with real-time verification
- Display city name with country code (e.g., "London, GB")
- Duplicate city prevention
- View list of saved cities
- Navigate to weather details for each city
- Access historical weather data per city

### Weather Display

- Current temperature in Celsius
- Humidity percentage
- Wind speed (km/h)
- Weather description
- Weather icon from OpenWeatherMap
- Timestamp of data retrieval (positioned at bottom of screen)
- Custom background image design

### Historical Data

- Automatic tracking of all weather queries
- View up to 50 historical entries per city
- Persistent storage using Redux Persist
- Chronological ordering (newest first)
- Formatted timestamps (DD.MM.YYYY. - HH:mm)

### UI/UX Design

- Custom PNG-based icons
- ImageBackground components with custom design
- Transparent overlays for better visual hierarchy
- Material Design-inspired components
- Loading states and error handling
- Empty states with helpful messages

## API Configuration

The app uses OpenWeatherMap API with the following configuration:

- API Key: `f5cb0b965ea1564c50c6f1b74534d823`
- Endpoint: `https://api.openweathermap.org/data/2.5/weather`

## Design Specifications

- **Resolution**: Optimized for 360×720 screens
- **Colors**:
  - Primary Blue: #2388C7
  - Text Colors: #000000 (primary), #3D4548 (secondary)
  - Border: #E9E9E9
- **Typography**: System default fonts with weights (400, 500, 700, 900)
- **Assets**: Custom PNG icons and background images in `assets/icons/`

## Troubleshooting

### iOS Pod Install Issues

```bash
cd ios
pod deintegrate
pod install
cd ..
```

### Metro Bundler Issues

```bash
npm start -- --reset-cache
```

### Build Errors

```bash
# Clean iOS build
cd ios && xcodebuild clean && cd ..

# Clean Android build
cd android && ./gradlew clean && cd ..
```

### TypeScript Errors

```bash
npx tsc --noEmit
```

## Development

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage

# Run specific test file
npm test -- path/to/test.test.ts
```

See [TESTING.md](./TESTING.md) for detailed testing documentation.

### Test Coverage

The app includes comprehensive unit tests:

- **32 passing tests** across 7 test suites
- Utility function tests (dateFormat)
- Redux slice tests (weatherSlice, citiesSlice)
- Component tests (WeatherCard, CityListItem, EmptyState)
- App component tests

### Linting

```bash
npm run lint
```

### Type Checking

```bash
npx tsc --noEmit
```

## Key Features Implemented

### Redux Toolkit Implementation

- ✅ Redux store with 4 slices (cities, weather, history, ui)
- ✅ Async thunks for API calls (fetchWeather, verifyCity)
- ✅ Redux Persist for data persistence
- ✅ Type-safe hooks (useAppDispatch, useAppSelector)
- ✅ Comprehensive Redux slice tests

### Code Quality

- ✅ TypeScript strict mode enabled
- ✅ Modular component structure
- ✅ Separation of concerns (services, components, screens)
- ✅ Custom hooks for Redux integration
- ✅ Reusable utility functions
- ✅ 32 unit tests with Jest and React Testing Library

### UI Implementation

- ✅ Custom background images
- ✅ PNG-based icon system
- ✅ Modal components
- ✅ Navigation between screens
- ✅ Loading and error states
- ✅ Empty state messages
- ✅ Responsive design

### Functionality

- ✅ City management with verification
- ✅ Real-time weather data fetching
- ✅ Historical data tracking (up to 50 entries per city)
- ✅ Persistent storage across app sessions
- ✅ Weather icon integration
- ✅ Formatted timestamps

### Error Handling

- ✅ API error handling with user-friendly messages
- ✅ Loading states during async operations
- ✅ Duplicate city prevention
- ✅ Network error handling
- ✅ Empty state handling

## Documentation

- [TESTING.md](./TESTING.md) - Comprehensive testing guide
- [README.md](./README.md) - This file

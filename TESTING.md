# Testing Documentation

This document describes the testing setup and tests for the Weather App.

## Test Setup

### Testing Stack
- **Jest**: Test runner and assertion library
- **React Testing Library**: Testing utilities for React Native components
- **Redux Mock Store**: Mocking Redux store for component tests

### Configuration Files
- `jest.config.js`: Jest configuration
- `jest.setup.js`: Global test setup and mocks

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage

# Run specific test file
npm test -- path/to/test/file.test.ts
```

## Test Structure

Tests are organized using the `__tests__` directory pattern:

```
src/
├── utils/
│   └── __tests__/
│       └── dateFormat.test.ts
├── store/
│   └── slices/
│       └── __tests__/
│           ├── weatherSlice.test.ts
│           └── citiesSlice.test.ts
└── components/
    └── __tests__/
        ├── WeatherCard.test.tsx
        ├── CityListItem.test.tsx
        └── EmptyState.test.tsx
```

## Test Coverage

### Utility Functions
- **dateFormat.test.ts**: Tests date formatting utility
  - Formats dates correctly
  - Handles leading zeros
  - Handles edge cases (midnight, December)

### Redux Slices

#### weatherSlice.test.ts
- Tests weather state management
- Tests `fetchWeather` async thunk
- Tests loading, success, and error states
- Tests `clearError` action

#### citiesSlice.test.ts
- Tests city list management
- Tests `verifyCity` async thunk
- Tests duplicate city prevention
- Tests loading, success, and error states
- Tests `clearError` action

### Components

#### WeatherCard.test.tsx
- Renders city name and country code
- Displays weather description
- Displays temperature with unit
- Displays humidity percentage
- Displays wind speed with unit
- Renders all labels correctly

#### CityListItem.test.tsx
- Renders city information
- Handles navigation to weather detail
- Handles navigation to historical data

#### EmptyState.test.tsx
- Renders message correctly
- Conditionally renders sub-message

## Mocked Dependencies

The following dependencies are mocked in `jest.setup.js`:

- `@react-native-async-storage/async-storage`: Storage operations
- `react-native-linear-gradient`: Linear gradient component
- `global.fetch`: Network requests

## Writing New Tests

### Example Component Test

```typescript
import React from 'react';
import { render } from '@testing-library/react-native';
import MyComponent from '../MyComponent';

describe('MyComponent', () => {
  it('should render correctly', () => {
    const { getByText } = render(<MyComponent />);
    expect(getByText('Hello')).toBeTruthy();
  });
});
```

### Example Redux Slice Test

```typescript
import myReducer, { myAction } from '../mySlice';

describe('mySlice', () => {
  it('should handle myAction', () => {
    const initialState = { value: 0 };
    const action = myAction();
    const state = myReducer(initialState, action);
    expect(state.value).toBe(1);
  });
});
```

## Test Results

Current test statistics:
- **Test Suites**: 7 passed
- **Tests**: 32 passed
- **Coverage**: Run `npm test -- --coverage` for detailed coverage report

## Continuous Integration

To integrate tests into CI/CD pipeline:

```yaml
# Example GitHub Actions workflow
- name: Run tests
  run: npm test -- --ci --coverage
```

## Troubleshooting

### Common Issues

1. **Module not found errors**: Ensure all dependencies are installed with `npm install`
2. **Transform errors**: Check `transformIgnorePatterns` in `jest.config.js`
3. **Mock issues**: Verify mocks in `jest.setup.js` are correctly defined

### Debug Mode

Run tests in debug mode:

```bash
node --inspect-brk node_modules/.bin/jest --runInBand
```

## Best Practices

1. **Test Behavior, Not Implementation**: Focus on what the component does, not how it does it
2. **Use Descriptive Test Names**: Test names should clearly describe what is being tested
3. **Keep Tests Isolated**: Each test should be independent and not rely on others
4. **Mock External Dependencies**: Mock API calls, storage, and other external dependencies
5. **Test Edge Cases**: Include tests for error states, empty states, and boundary conditions

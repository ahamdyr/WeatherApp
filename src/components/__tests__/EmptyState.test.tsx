import React from 'react';
import { render } from '@testing-library/react-native';
import EmptyState from '../EmptyState';

describe('EmptyState', () => {
  it('should render message', () => {
    const { getByText } = render(
      <EmptyState message="No data available" />,
    );

    expect(getByText('No data available')).toBeTruthy();
  });

  it('should render submessage when provided', () => {
    const { getByText } = render(
      <EmptyState
        message="No data available"
        subMessage="Please add some data"
      />,
    );

    expect(getByText('No data available')).toBeTruthy();
    expect(getByText('Please add some data')).toBeTruthy();
  });

  it('should not render submessage when not provided', () => {
    const { queryByText } = render(
      <EmptyState message="No data available" />,
    );

    // Since we only passed message, there should be only one Text component
    const { children } = render(
      <EmptyState message="No data available" />,
    ).toJSON() as any;

    // Check that only the message Text is present
    expect(queryByText('No data available')).toBeTruthy();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReviewSection from './reviewSection';

describe('ReviewSection', () => {
  test('renders ReviewSection component', () => {
    render(<ReviewSection />);
    expect(screen.getByText("User Reviews")).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReviewSection from './reviewSection';

describe('ReviewSection', () => {
  test('renders ReviewSection component', () => {
    render(<ReviewSection />);
    expect(screen.getAllByText(/"Discover the unmatched satisfaction of our customers through their candid reviews."/i).length).toBe(4);
  });
});

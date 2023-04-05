import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Welcome from './heroSection';
describe('Welcome', () => {
    test('renders Welcome component', () => {
      render(<Welcome />);
      expect(screen.getByText(/Secure Your Products With Block Theif/i)).toBeInTheDocument();
    });
  });
  
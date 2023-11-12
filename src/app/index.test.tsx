import { describe, expect, it } from 'vitest';
import { screen, render } from '@testing-library/react';
import { App } from '.';

describe('App', () => {
  it('renders app', () => {
    render(<App />);
    expect(screen.getByText('MainPage'));
  });
});

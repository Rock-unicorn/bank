import { describe, expect, it } from 'vitest';
import { screen, render } from '@testing-library/react';
import { setupStore } from 'app/store/store';
import { Provider } from 'react-redux';
import { MainWidget } from './MainWidget';

describe('MainWidget', () => {
  it('renders MainWinget', () => {
    const store = setupStore();
    render(
      <Provider store={store}>
        <MainWidget />
      </Provider>
    );
    expect(screen.getByAltText(/котик/i));
  });
});

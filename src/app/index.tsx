import { RouterProvider } from 'react-router-dom';
import './styles/index.module.scss';
import Provider from 'react-redux/es/components/Provider';
import { router } from './router/Router';
import { setupStore } from './store/store';

const store = setupStore();

export function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

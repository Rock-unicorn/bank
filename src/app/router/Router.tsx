import { Outlet, createMemoryRouter } from 'react-router-dom';

export const router = createMemoryRouter([
  {
    path: '/',
    element: (
      <div>
        <Outlet />
      </div>
    ),
    children: [
      {
        path: '/',
        element: <h2>MainPage</h2>,
      },
    ],
  },
  {
    path: '*',
    element: <div>404 Error. Not Found</div>,
  },
]);

import { Rings } from 'react-loader-spinner';
import { Outlet, createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Outlet />,
      children: [
        {
          path: '/',
          loader: () => <Rings color="black" width={200} height={200} />,
          async lazy() {
            const { MainPage } = await import('pages/Main/MainPage');
            return { Component: MainPage };
          },
        },
      ],
    },
    {
      path: '*',
      element: <div>404 Error. Not Found</div>,
    },
  ],
  { basename: '/bank' }
);

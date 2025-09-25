import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

// 1. Importamos os componentes que acabamos de criar
import App from './App.tsx';
import { Login } from './pages/Login/index.tsx';
import { Profile } from './pages/Profile/index.tsx';

// 2. Importamos nosso CSS global
import './index.css';

// 3. Criamos o nosso "mapa" de rotas
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Navigate to = "/login"/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/profile',
        element: <Profile/>
      }
    ]
  }
]);

// 4. Mandamos o React renderizar nossa aplicação com esse mapa
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>  
  </React.StrictMode>
);

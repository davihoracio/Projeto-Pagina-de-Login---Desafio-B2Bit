import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

// 1. Importando os componentes que acabei de criar
import App from './App.tsx';
import { Login } from './pages/Login/index.tsx';
import { Profile } from './pages/Profile/index.tsx';

// 2. Importando o CSS global
import './index.css';
import { PrivateRoute } from './components/PrivateRoute/index.tsx';

// 3. Criando o  "mapa" de rotas
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
        element: <PrivateRoute/>, //Adicionando segurança
        children: [
          {
            path: '/profile',
            element: <Profile/>
          }
        ]
      }
    ]
  }
]);

// 4. Mandando o React renderizar a aplicação com esse mapa
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>  
  </React.StrictMode>
);

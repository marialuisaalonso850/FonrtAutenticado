import React from 'react';
import  ReactDOM  from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Login from '../src/routes/Login';
import Signup from '../src/routes/signup'; 
import Dashboard from '../src/routes/dashboard'; 
import ProtectedRoute from '../src/routes/protectedRaute'; 
import { AuthProvider } from '../src/Autenticacion/AutProvider'; 
import Home from '../src/components/Home';
import Perfil from '../src/routes/perfil';
import ContactUs from '../src/routes/contactUs';

import Post from '../src/pages/ParqueaderoF/ParqueaderoForm';
import Posts from '../src/pages/DatosFrom/DatosForm';
import PostInfo from '../src/pages/DatosFrom/PostsInfo';
import Explicacion from '../src/routes/Explicacion';
import Reservas from '../src/routes/Reservas';
import UserReseve from './routes/UserReserve';

import ExplicacionUser from '../src/routes/ExplicacionUser';
import  NotFoundPage from './routes/NotFoundPage.jsx';

const router = createBrowserRouter([
  {
    path: "/Login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "/",
    element: <Home/>
  },
 
  {
    path: "/perfil",
    element: <Perfil />
  },
  {
    path: "/contactUs",
    element: <ContactUs />
  },
  {
    path: "/explicacion",
    element: <Explicacion />
  },
  {
    path: "/explicacionUser",
    element: <ExplicacionUser />
  },
  {
    path: "/",
    element: <ProtectedRoute/>,
    children:[
      {
        path: "/dashboard",
        element: <Dashboard/>
      },
       {
    path:"/posts",
    element:<Posts />
  },
  {
    path:"/post/:id",
    element: <Post />
  },
  {
    path: "/post/:id/info",
    element: <PostInfo />
  },
  
  {
    path: "/reservas",
    element: <Reservas />
  },
  {
    path: "/reservasUser",
    element: <UserReseve />
  },
  {
    path: "*",
    element: <NotFoundPage />
  },
      
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root') ).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)



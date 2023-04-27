import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './layous/Main.jsx';
import Home from './pages/Home.jsx';

import Category from './pages/Category.jsx';
import NewsLayout from './layous/NewsLayout.jsx';
import News from './pages/News.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        path: "/",
        element:<Home/>
      },
      {
        path: '/category/:id',
        element: <Category></Category>,
        loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
       
    }, 
    ]
  },
  {
    path:"news",
    element:<NewsLayout></NewsLayout>,
    children: [
      {
        path: ':id',
        element:<News></News>
        //loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
      }
  
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
           <RouterProvider router={router} />
    <App />

  </React.StrictMode>,
)

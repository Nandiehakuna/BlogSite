import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import Register from './pages/Register';
import Login from './pages/Login';
import EditPost from './pages/EditPost';
import CreatePosts from './pages/CreatePosts';
import Author from './pages/Author';
import DeletePost from './pages/DeletePost';
import Logout from './pages/Logout';
import Dashboard from './pages/Dashboard';
import UserProfile from './pages/UserProfile';
import AuthorsPage from './pages/AuthorsPage';
import CategoryPosts from './pages/CategoryPosts';

const router = createBrowserRouter([
  {
     path:"/",
     element:<Layout/>,
     errorElement:<errorPge/>,
     children: [
     {index:true, element:<Home/>},
     {path:"/posts/:id ", element:<PostDetail/>},
     {path:"register", element:<Register/>},
     {path:"login", element:<Login/>},
     {path:"authors", element:<Author/> },
     {path:"posts/:id/edit", element:<EditPost/>},
     {path:"create", element:<CreatePosts/>},
     {path:"/delete/:id", element:<DeletePost/>},
     {path:"posts/:id",element:<PostDetail/>},
     {path:"logout", element:<Logout/>},
     {path:"dashboard", element:<Dashboard/>},
     {path:"profile/:id", element:<UserProfile/>},
     {path:"posts/users/:id", element:<AuthorsPage/>},
     {path:"posts/categories/:id", element:<CategoryPosts/>}





     ]
      
     
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

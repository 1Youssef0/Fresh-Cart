import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Products from './components/Products'
import Register from './components/Register'
import Login from './components/Login'
const Cart = lazy(() => import('./components/Cart'));
// import Cart from './components/Cart'
import Categories from './components/Categories'
import Brands from './components/Brands'
const Wishlist = lazy(() => import('./components/Wishlist'));
// import Wishlist from './components/Wishlist'
import Notfound from './components/Notfound'
import ProtectedRoute from './components/ProtectedRoute'
import ProductDetils from './components/ProductDetils'
import CategoriesDetails from './components/CategoriesDetails';
import BrandDetails from './components/BrandDetails'
import ForgetPassword from './components/ForgetPassword'
import VerfiyPass from './components/VerfiyPass';
import ResetPassword from './components/ResetPassword'
import Loading from './components/Loading'
import ShowOrders from './components/ShowOrders'




export default function App() {


   const routes = createBrowserRouter([
    {path:'/',element:<Layout></Layout>,children:[
      {path:'/',element:<Home></Home>},
      {path:'/products',element:<Products></Products>},
      {path:'/register',element:<Register></Register>},
      {path:'/login',element:<Login></Login>},
      // {path:'/cart',element:<ProtectedRoute><Cart></Cart></ProtectedRoute>},
      {path:'/cart',element:<Suspense fallback={<Loading></Loading>}><ProtectedRoute><Cart></Cart></ProtectedRoute></Suspense>},
      {path:'/allorders',element:<Home></Home>},
      {path:'/categories',element:<Categories></Categories>},
      {path:'/wishlist',element:<Suspense fallback={<Loading></Loading>}><Wishlist></Wishlist></Suspense>},
      // {path:'/wishlist',element:<Wishlist></Wishlist>},
      {path:'/forget-password',element:<ForgetPassword></ForgetPassword>},
      {path:'/verify-pass',element:<VerfiyPass></VerfiyPass>},
      {path:'/reset-password',element:<ResetPassword></ResetPassword>},
      {path:'/categories/:id',element:<Categories></Categories>},
      {path:'/productdetails/:id/:catId',element:<ProductDetils></ProductDetils>},
      {path:'/categoriesdetails/:id',element:<CategoriesDetails></CategoriesDetails>},
      // {path:'/brands',element:<Suspense fallback={<Loading></Loading>}><Brands></Brands></Suspense>},
      {path:'/brands',element:<Brands></Brands>},
      {path:'/brandsdetails/:id',element:<BrandDetails></BrandDetails>},
      {path:'*',element:<Notfound></Notfound>},
    ]}

  ])
  


  return (
    <div >
    <RouterProvider router={routes}/>
    </div>
  )
}

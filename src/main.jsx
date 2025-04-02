import { createRoot } from 'react-dom/client'
import './global.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Category from './pages/Category.jsx'
import Product from './pages/Products.jsx'
import Login from './pages/Login.jsx'
import Card from './pages/Card.jsx'
import banner_mens from './assets/banner_mens.png'
import banner_women from './assets/banner_women.png'
import banner_kids from './assets/banner_kids.png'
import { CardContextProvider } from "./context/CardContext.jsx";

createRoot(document.getElementById('root')).render(
  <CardContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/men" element={<Category Category='men' banner={banner_mens} />} />
        <Route path="/women" element={<Category Category='women' banner={banner_women} />} />
        <Route path="/Kids" element={<Category Category='kid' banner={banner_kids} />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </BrowserRouter>
  </CardContextProvider>,
)

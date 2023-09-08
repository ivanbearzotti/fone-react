import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import CartContainer from './components/CartContainer'
import { CartProvider } from './context/CartContext'
import CheckOut from './components/CheckOut'

function App() {
  return (
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/products/:categoria" element={<ItemListContainer />} />
            <Route path="/:cart" element={<CartContainer />} />
            <Route path="/checkout" element={<CheckOut/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
  )
}

export default App

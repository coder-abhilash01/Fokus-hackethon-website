
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { CartProvider } from './context/CartContext'
import ScrollToTop from './ScrollToTop.jsx'

createRoot(document.getElementById('root')).render(
<CartProvider>
  <BrowserRouter>
  
   <App />
<ToastContainer/>
  <ScrollToTop />
  </BrowserRouter> 
  </CartProvider>
  
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import Projectspage from './components/projectspage.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <App />
    <Projectspage />
    <Footer />
  </StrictMode>,
)

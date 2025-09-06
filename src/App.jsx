import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Contact from './routes/Contact'
import About from './routes/About'   // ✅ fixed import
import Login from './routes/Login'
import Jeans from './pages/Jeans'   // ✅ fixed case
import JeansDetail from './pages/JeansDetail'
import Signup from './routes/Signup'
import BuyerDashboard from './routes/BuyerDashboard'
import SellerDashboard from './routes/SellerDashboard'


function App() {
  return(
    <>
      
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Home />} />

        {/* Other Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pages/jeans" element={<Jeans />} />
        <Route path="/pages/JeansDetail" element={<JeansDetail/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/buyerdashboard" element={<BuyerDashboard/>}/>
        <Route path="/sellerdashboard" element={<SellerDashboard/>}/>

      </Routes>
    </>
  )
}

export default App

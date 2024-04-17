import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';
import Login from './pages/Login';
import Features from './pages/Features';
import Plan from './pages/Plan';
import Footers from './component/Footer';
import PublicNavbar from './component/PublicNavbar';
import { useSelector } from 'react-redux';
import PrivateRoute from './component/PrivateRoute';
import Dashboard from './pages/Dashboard';

const App = () => {
  const {currentUser} = useSelector((state) => state.user)
  return (
    <BrowserRouter>
      
            <PublicNavbar/>
      <Routes>
          <Route >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/plans" element={<Plan />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/features" element={<Features />} />
          </Route>
          
          <Route element  = {<PrivateRoute/>}>
            <Route path='/dashboard' element = {<Dashboard/>}/>
          </Route>
      </Routes>
      <Footers/>
    </BrowserRouter>    
  )
}

export default App
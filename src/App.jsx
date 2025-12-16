import Main from './components/Main'
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import NavbarCart from './components/NavbarCart';
import Details from './components/Details';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar/>
            <Main /> 
          </>
          } 
        />
        <Route path="/cart" element=
          {
          <>
            <NavbarCart/>
            <Cart />
          </>
          } 
        />
        <Route 
          path='/details'
          element={
            <>
              <NavbarCart />
              <Details />
            </>
          }
        />
      </Routes>
    </Router>
  )
}

export default App

import Main from './components/Main'
import Cart from './components/Cart';
import Navbar from './components/Navbar';
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
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default App

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import NavLogo from '../assets/logo.png'
import CartIcon from '../assets/cart.png'

//-------------zustand iports
import useCartStore from '../store/CartSlice';


const Navbar = () => {

  const totalQuantity = useCartStore(state => state.getTotalQuantity());

  const[hasScrolled, setHasScrolled]=useState(false)

  useEffect(()=>{
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32 )
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  },[])

  return (
    <div className={`z-40 ${hasScrolled ? 'h-[30px]' : 'h-[50px]'} w-full fixed bg-transparent flex flex-row justify-between items-center ${hasScrolled ? 'backdrop-blur-[15px]' : 'bg-transparent'} transition-all duration-500`}>
      <Link to='/'> 
        <img 
          src={NavLogo} 
          alt="logo" 
          className={`m-10 ${hasScrolled ? 'h-[50px] w-[50px]' : 'h-15 w-15'} transition-all duration-700`}
        />
      </Link>
      <Link to='/cart' className="text-white flex flex-row justify-center items-center w-fit mr-[50px] object-contain">
        <img 
          src={CartIcon} 
          alt="cartIcon"
          className={`${hasScrolled ? 'h-[26px] w-[26px]' : 'h-9 w-9'} transition-all duration-700`} 
        />
        <p className={`text-black font-bold ${hasScrolled ? 'text-[20px]' : 'text-[25px]'} transition-all duration-700`}>{totalQuantity}</p>
      </Link>
    </div>
  )
}

export default Navbar

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import NavLogo from '../assets/logo.png'
import CartIcon from '../assets/cart.png'

const Navbar = () => {

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
    <div className={`z-40 ${hasScrolled ? 'h-10' : 'h-[50px]'} w-full fixed bg-transparent flex flex-row justify-between items-center ${hasScrolled ? 'backdrop-blur-[15px]' : 'bg-transparent'} transition-all duration-500`}>
      <img 
        src={NavLogo} 
        alt="logo" 
        className="h-15 w-15 m-10"
      />
      <Link to='/cart' className="text-white flex flex-col justify-center items-center border-2 border-red-400 w-fit mr-[50px] object-contain">
        <p className="text-[#392eff] font-bold text-[25px] absolute top-0 right-0">10</p>
        <img 
          src={CartIcon} 
          alt="cartIcon"
          className="h-9 w-9" 
        />
      </Link>
    </div>
  )
}

export default Navbar

import { Link } from "react-router-dom"
import NavLogo from '../assets/logo.png'
import CartIcon from '../assets/cart.png'

//-------------zustand iports
import useCartStore from '../store/CartSlice';

const NavbarCart = () => {

  const totalQuantity = useCartStore(state => state.getTotalQuantity());

  return (
    <div className="bg-[#3d3d3dab] h-10 flex flex-row justify-between items-center">
      <Link to='/'>
        <img 
          src={NavLogo} 
          alt="logo"
          className="m-5 h-15 w-15" 
        />
      </Link> 

      <div className="text-white flex flex-row justify-center items-center w-fit mr-[50px] object-contain">
        <img 
          src={CartIcon} 
          alt="cartIcon"
          className='h-9 w-9' 
        />
        <p className='text-black font-bold text-[25px]'>{totalQuantity}</p>
      </div>
    </div>
  )
}

export default NavbarCart

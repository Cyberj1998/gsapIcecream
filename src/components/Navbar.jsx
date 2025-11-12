import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='z-40 h-[50px] w-full fixed bg-amber-200 flex flex-row justify-center items-center'>
      <Link to='/cart' className="bg-black text-white">
        go to cart
      </Link>
    </div>
  )
}

export default Navbar

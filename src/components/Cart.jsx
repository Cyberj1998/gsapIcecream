import CartCard from "./CartCard"
import Button from "./Button"
import CartIcon from '../assets/Cart.png'

//-------------zustand iports
import useCartStore from '../store/CartSlice';

const Cart = () => {

  const cart = useCartStore(state => state.cart)

  return (
    <div className='bg-[#3d3d3d91] h-screen w-full flex flex-col justify-start items-center p-2'>
      {/*-------- products in the cart --------*/}
      <div className="border border-white h-[50%] w-[90%] rounded-2xl m-2 overflow-y-scroll overflow-x-hidden flex flex-col justify-start items-center p-2">
        {cart.map((product, index)=>(
          <CartCard 
           key={index}
           product={product}
          />
        ))}
      </div>
      {/*--------order resume--------*/}
      <div className="border border-white h-[50%] max-md:h-[30%] w-[90%] rounded-2xl m-2 flex flex-col justify-center items-center">
        <h2 className="text-black font-sans font-semibold text-[35px] max-md:text-[20px] p-2 w-full">Resumen de Pago</h2>
        <div className="flex flex-row justify-between items-center w-full">
          <p className="font-sans text-[25px] max-md:text-[20px] m-2">total a pagar:</p>
          <p className="font-semibold text-[25px] max-md:text-[20px] m-2">$: 500</p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <p className="font-sans text-[25px] max-md:text-[20px] m-2">total a pagar:</p>
          <p className="font-semibold text-[25px] max-md:text-[20px] m-2">$: 500</p>
        </div>
        <div className="border border-white w-[90%] h-px" />
        <div className="flex flex-row justify-between items-center w-full">
          <p className="font-sans text-[25px] max-md:text-[20px] m-2">total a pagar:</p>
          <p className="font-semibold text-[25px] max-md:text-[20px] m-2">$: 500</p>
        </div>
      </div>
      <Button 
        className="max-sm:w-[90%] h-[65px]" 
        name='Order'
        image={CartIcon}
      />
    </div>
  )
}

export default Cart

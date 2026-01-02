import CartCard from "./CartCard"
import Button from "./Button"
import CartIcon from '../assets/Cart.png'

//-------------zustand iports
import useCartStore from '../store/CartSlice';

const Cart = () => {

  const cart = useCartStore(state => state.cart)
  const totalQuantity = useCartStore(state => state.getTotalQuantity());
  const totalPrice = useCartStore(state => state.getTotalPrice());

  return (
    <div className='bg-[#e9cc88] h-screen w-full flex flex-col justify-start items-center p-2'>
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
      <div className="border border-white bg-[#dec383] h-[50%] max-md:h-[30%] w-[90%] rounded-2xl m-2 flex flex-col justify-center items-center">
        <h2 className="text-black font-sans font-semibold text-[35px] max-md:text-[20px] p-2 w-full">Resumen de Pago</h2>
        <div className="border border-white w-[90%] h-px" />
        <div className="flex flex-row justify-between items-center w-full">
          <p className="font-sans text-[25px] max-md:text-[20px] m-2">total de productos:</p>
          <p className="font-semibold text-[25px] max-md:text-[20px] m-2">{totalQuantity}</p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <p className="font-sans text-[25px] max-md:text-[20px] m-2">total a pagar:</p>
          <p className="font-semibold text-[25px] max-md:text-[20px] m-2">$: {totalPrice}</p>
        </div>
      </div>
      <div className="payment-container flex flex-row items-center">
       <div className="border border-white flex flex-row w-fit rounded-2xl">
         <p className="text-[20px] font-sans m-2">mesa</p>
          <select className="w-16 p-2 h-[50px] rounded-lg bg-white text-2xl font-semibold transition duration-500">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
       </div>
        <Button 
          className="max-sm:w-[90%] h-[65px]" 
          name='Order'
          image={CartIcon}
        />
      </div>
    </div>
  )
}

export default Cart

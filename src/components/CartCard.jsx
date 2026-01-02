import deleteIcon from '../assets/trash.png'
import leftIcon from '../assets/left.png'
import rightIcon from '../assets/right.png'

//-------------zustand iports
import useCartStore from '../store/CartSlice';


const CartCard = ({ product }) => {

  const increaseQuantity = useCartStore(state => state.increaseQuantity)
  const decreaseQuantity = useCartStore(state => state.decreaseQuantity)
  const remove = useCartStore(state => state.removeFromCart)

  return (
    <div className="border border-white bg-[#dec383] h-[150px] w-[90%] rounded-2xl m-2  relative flex flex-row justify-between items-center">
      <div className='flex flex-col justify-center items-center h-[120px] w-[120px]'>
        <img 
          src={product.image} 
          alt="product image"
          className='h-[120px] w-[120px]' 
        />
        <h3 className='font-semibold text-[#1d1d1df0]'>{product.name}</h3>
      </div>

      <div id='total-info-container' className='flex flex-row max-md:flex-col w-full h-full justify-around items-center'>
        <div id='quantity-container' className='h-[150px] max-md:h-[50%] w-[20%] max-md:w-full flex justify-around items-center'>
          <button 
            className='cursor-pointer'
            onClick={()=>decreaseQuantity(product.id)}
          >
            <img 
              src={leftIcon} 
              alt="left icon"
              className='h-10 w-10'
            />
          </button>

          <p className='text-[25px] font-sans font-semibold'>
            {product.quantity}
          </p>

          <button 
            className='cursor-pointer'
            onClick={() => increaseQuantity(product.id)}
          >
            <img 
              src={rightIcon} 
              alt="right icon"
              className='h-10 w-10'
            />
          </button>
        </div>

        <div id='total-price-container' className='h-[150px] max-md:h-[50%] w-[20%] max-md:w-full flex flex-row justify-around items-center'>
          <h3 className='text-[25px] font-sans font-semibold'>
            $: {(product.price * product.quantity).toFixed(2)}
          </h3>
          <button
            onClick={()=>remove(product.id)}
            className='cursor-pointer'
          >
            <img 
              src={deleteIcon} 
              alt="delete icon" 
              className='h-[30px] w-[30px]'
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartCard

import productPlaceHolder from '../assets/icecream-1.png'
import deleteIcon from '../assets/trash.png'
import leftIcon from '../assets/left.png'
import rightIcon from '../assets/right.png'

const CartCard = () => {
  return (
    <div className="border border-white h-[150px] w-[90%] rounded-2xl m-2 relative flex flex-row justify-between items-center">
      <img 
        src={productPlaceHolder} 
        alt="product image"
        className='h-[120px] w-[120px]' 
      />

      <div id='total-info-container' className='flex flex-row max-md:flex-col w-full h-full justify-around items-center'>
        <div id='quantity-container' className='h-[150px] max-md:h-[50%] w-[20%] max-md:w-full flex justify-around items-center'>
          <button className='cursor-pointer'>
            <img 
              src={leftIcon} 
              alt="left icon"
              className='h-10 w-10'
            />
          </button>

          <p className='text-[25px] font-sans font-semibold'>
            10
          </p>

          <button className='cursor-pointer'>
            <img 
              src={rightIcon} 
              alt="right icon"
              className='h-10 w-10'
            />
          </button>
        </div>

        <div id='total-price-container' className='h-[150px] max-md:h-[50%] w-[20%] max-md:w-full flex flex-row justify-around items-center'>
          <h3 className='text-[25px] font-sans font-semibold'>
            $: 500
          </h3>
          <button
            onClick={()=>console.log('hola')}
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

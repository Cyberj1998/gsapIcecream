import ProductPlaceHolder from '../assets/icecream-1.png'
import Button from './Button'
import CartIcon from '../assets/cart.png'
import Start from '../assets/start.png'

const Details = () => {
    
  return (
    <div className='h-screen w-full bg-[#3d3d3d91] flex flex-row max-md:flex-col justify-around max-md:justify-start items-center'>
      <div className=' h-[500px] max-md:h-[300px] max-md:mt-2.5 w-[500px] max-md:w-[360px] flex flex-col justify-center items-center'>
        <img 
          src={ProductPlaceHolder}
          alt="product image"
          className='h-[350px] max-md:h-[250px] w-[350px] max-md:w-[250px]' 
        />
        <div className='extra-info-conntainer w-full flex flex-row justify-evenly items-center'> 
          
          <div className='rating-container border border-white h-10 w-[100px] rounded-3xl flex flex-row justify-around items-center'>
            <p className='font-semibold text-[12px] text-[#efefef]'>
              4.5/5
            </p>
            <img 
              src={Start}
              alt="rating start" 
              className='h-[25px] w-[25px]'
            />
          </div>

          <h3 className='text-[20px] font-semibold text-[#343434e9]'>
            $: 500
          </h3>
        </div>
      </div>
      <div className='h-[500px] w-[500px] max-md:w-[360px] flex flex-col justify-center max-md:justify-start items-start max-md:items-center'>
        <h3 className='font-semibold text-[30px] max-md:text-[20px] text-[#343434e9] m-5'>Product Name</h3>
        <p className='text-[15px] max-md:text-[12px] m-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sed quidem sapiente voluptatum pariatur ad, corporis quos unde at architecto itaque dignissimos numquam quam nobis, tempora voluptatem iste nostrum? Doloremque.</p>
        <Button 
          name='add to cart'
          image={CartIcon}
          className='mt-5'
        />
      </div>
    </div>
  )
}

export default Details

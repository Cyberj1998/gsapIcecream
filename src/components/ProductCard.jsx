import CartIcon from '../assets/cart.png'
import Button from './Button'
import { Link } from 'react-router-dom'

//----------images
import IceIcon from '../assets/ice.png'
import StrawberryIcon1 from '../assets/strawberry-1.png'
import Waffle1 from '../assets/waffle-1.png'

//-------------zustand iports
import useCartStore from '../store/CartSlice';

const ProductCard = ({ product, productType }) => {

  const addToCart = useCartStore(state => state.addToCart)
  const cart = useCartStore(state => state.cart)
  
  const handleAddToCart = (product) => {
    addToCart(product)
    console.log(cart)
  }

  return (
    <div className={`h-[250px] w-[250px] m-5 ${product.id === 0  ? 'mt-[120px]' : 'mt-[100px]'} ${product.id === 1  ? 'mt-[120px]' : 'mt-[100px]'} ${product.id === 2  ? 'mt-[120px]' : 'mt-[100px]'} object-contain flex flex-col justify-center items-center relative max-md:w-[100px]`}>
      <div className="bg-[#cdcdcdbc] absolute z-30 h-[250px] w-[250px] rounded-[50px] max-md:rounded-[35px] -mt-[200px] max-md:-mt-[220px] flex flex-col justify-center items-center max-md:w-[165px] max-md:h-[200px]">
        <img 
          alt="ice"
          src={
            productType === 'icecream' ? StrawberryIcon1
            : productType === 'cooffee' ? IceIcon
            : productType === 'dessert' ? Waffle1 : ''
          }
          width={55}
          height={55}
          className="absolute top-10 right-10 max-md:right-5 -rotate-10 max-md:w-[30px] max-md:h-[30px]"
        />
        <img 
          alt="ice"
          src={ 
            productType === 'icecream' ? StrawberryIcon1
            : productType === 'cooffee' ? IceIcon
            : productType === 'dessert' ? Waffle1 : ''
          }
          width={55}
          height={55}
          className="absolute top-30 left-10 max-md:left-5 rotate-50 max-md:w-[30px] max-md:h-[30px]"
        />
        <Link
          to='/details'
        >
          <img 
            alt="product"
            src={product.image}
            className='max-md:h-[150px] w-[130px]'
          />
        </Link>
        <h3 className="text-[20px] font-sans font-bold max-md:text-[15px] z-50">nombre: {product.name}</h3>
        <h4 className="text-[20px] font-sans">$: {product.price}</h4>
      </div>
      <div className="bg-[#343434c1] absolute z-20 h-[250px] w-[250px] rounded-[50px] max-md:rounded-[35px] flex justify-center items-end max-md:w-[165px] max-md:h-[150px]">
        <Button 
          name='Add to Cart'
          image={CartIcon}
          className='text-[12px] max-md:mt-10 bg-black'
          onClick={() => handleAddToCart(product)}
        />
      </div>
    </div>
  )
}

export default ProductCard

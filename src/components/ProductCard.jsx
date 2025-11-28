import IceIcon from '../assets/ice.png'
import CartIcon from '../assets/cart.png'
import Button from './Button'

const ProductCard = ({ product }) => {
  
  const handleAddToCart = () => {
    console.log('handle add to cart')
  }

  return (
    <div className={`h-[250px] w-[250px] m-5 ${product.id === 0  ? 'mt-[120px]' : 'mt-[100px]'} ${product.id === 1  ? 'mt-[120px]' : 'mt-[100px]'} ${product.id === 2  ? 'mt-[120px]' : 'mt-[100px]'} object-contain flex flex-col justify-center items-center relative max-md:w-[100px]`}>
      <div className="bg-[#cdcdcdbc] absolute z-30 h-[250px] w-[250px] rounded-[50px] -mt-[200px] max-md:-mt-[220px] flex flex-col justify-center items-center max-md:w-[165px] max-md:h-[250px]">
        <img 
          alt="ice"
          src={IceIcon}
          width={55}
          height={55}
          className="absolute top-10 right-10 max-md:right-5 -rotate-10 max-md:w-[30px] max-md:h-[30px]"
        />
        <img 
          alt="ice"
          src={IceIcon}
          width={55}
          height={55}
          className="absolute top-30 left-10 max-md:left-5 rotate-50 max-md:w-[30px] max-md:h-[30px]"
        />
        <img 
          alt="product"
          src={product.image}
          width={100}
          height={100}
          className='max-md:h-[150px] w-[100px]'
        />
        <h3 className="text-[20px] font-sans font-bold max-md:text-[15px]">nombre: {product.name}</h3>
        <h4 className="text-[20px] font-sans">$: {product.price}</h4>
      </div>
      <div className="bg-[#343434c1] absolute z-20 h-[250px] w-[250px] rounded-[50px] flex justify-center items-end max-md:w-[165px] max-md:h-[150px]">
        <Button 
          name='Add to Cart'
          image={CartIcon}
          className='mb-5 text-[12px]'
          onClick={() => handleAddToCart(product)}
        />
      </div>
    </div>
  )
}

export default ProductCard

import IceIcon from '../assets/ice.png'
import CartIcon from '../assets/cart.png'
import Button from './Button'

const ProductCard = ({ product }) => {
  
  const handleAddToCart = () => {
    console.log('handle add to cart')
  }

  return (
    <div className={`h-[250px] w-[250px] m-5 ${product.id === 0  ? 'mt-[120px]' : 'mt-[100px]'} ${product.id === 1  ? 'mt-[120px]' : 'mt-[100px]'} ${product.id === 2  ? 'mt-[120px]' : 'mt-[100px]'} object-contain flex flex-col justify-center items-center relative`}>
      <div className="bg-[#cdcdcdbc] absolute z-30 h-[250px] w-[250px] rounded-[50px] -mt-[200px] flex flex-col justify-center items-center">
        <img 
          alt="ice"
          src={IceIcon}
          width={55}
          height={55}
          className="absolute top-10 right-10 -rotate-10"
        />
        <img 
          alt="ice"
          src={IceIcon}
          width={55}
          height={55}
          className="absolute top-30 left-10 rotate-50"
        />
        <img 
          alt="product"
          src={product.image}
          width={100}
          height={100}
        />
        <h3 className="text-[20px] font-sans font-bold">nombre: {product.name}</h3>
        <h4 className="text-[20px] font-sans">$: {product.price}</h4>
      </div>
      <div className="bg-[#343434c1] absolute z-20 h-[250px] w-[250px] rounded-[50px] flex justify-center items-end">
        <Button 
          name='Add to Cart'
          image={CartIcon}
          className='mb-5'
          onClick={() => handleAddToCart(product)}
        />
      </div>
    </div>
  )
}

export default ProductCard

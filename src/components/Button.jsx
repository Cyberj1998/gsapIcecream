import { gsap } from 'gsap'
import { useEffect } from 'react'


const Button = (props) => {

  const handleStart = () => {
    console.log('hola')
  }

  useEffect(()=>{
    gsap.to('#button',{
      opacity: 1,
      ease: 'expo.inOut',
      duration: .5,
      delay: 1.8
    })
  },[])

  return (
    <button
      id={props.id}
      onClick={()=>handleStart()} 
      className={` ${props.id ? 'opacity-0' : '' } bg-linear-to-r from-[#1353f3] to-[#87f8d8] ${props.className.includes('max-md:w-[90%]') ? 'w-[90%]' : 'w-[150px]' } h-10 rounded-2xl cursor-pointer text-white font-bold text-[15px] m-5 flex flex-row justify-center items-center ${props.className}`}
    >
      {props.name}
      {props.image ? (
        <img
          className='h-[25px] w-[25px] m-2 cursor-pointer' 
          src={props.image}
          alt="image"
        />
      ) : ''}
    </button>
  )
}



export default Button

const Button = (props) => {

  const handleStart = () => {
    console.log('hola')
  }

  return (
    <button
      onClick={()=>handleStart()} 
      className={`bg-linear-to-r from-[#1353f3] to-[#75ddf7] w-[150px] h-10 rounded-2xl cursor-pointer text-white font-bold text-[15px] m-5 flex flex-row justify-center items-center ${props.className}`}
    >
      {props.name}
      {props.image ? (
        <img
          className='h-[25px] w-[25px] m-2' 
          src={props.image}
          alt="image"
        />
      ) : ''}
    </button>
  )
}

export default Button

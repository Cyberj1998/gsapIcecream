import video from '../assets/Gsap-Icecream.mp4'
import { useRef } from 'react'

const Main = () => {

  const remoteRepo = 'https://github.com/Cyberj1998/gsapIcecream.git'

  const videoRef = useRef()

  return (
    <>
      <div className='m-0 z-20 border-2 border-red-400  h-screen w-full flex flex-col justify-center items-center'>
        <div className='m-0 bg-[#3d3d3d55] h-screen w-full z-30 flex flex-col justify-center items-center'>
          <h1 className='text-[100px]'>Hero Section</h1>
        </div>
        <video 
          ref={videoRef}
          src={video}           
          className='z-10 fixed'  
          muted
        />
      </div>
      {/*-------------divicion de las dos secciones----------------*/}
      <div className='m-0 z-20 border-2 border-blue-400 bg-[#3d3d3d55] h-screen w-full flex flex-col justify-center items-center'>
        <div className='m-0 bg-[#3d3d3d55] h-screen w-full z-30 flex flex-col justify-center items-center'>

        </div>
      </div>
    </>
  )
}

export default Main

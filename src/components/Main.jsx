import video from '../assets/Gsap-Icecream.mp4'
import { useRef, useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
import Button from './Button'
import IceIcon from '../assets/ice.png'
import { SplitText } from 'gsap/all'
import { products } from '../constants/Products'
import ProductCard from './ProductCard'
import { ScrollParallax } from 'react-just-parallax'

gsap.registerPlugin(ScrollTrigger)

const Main = () => {

  const videoRef = useRef()
  

  useEffect(() => {
    if (!videoRef.current) return;
    
    const paragraphSplit = new SplitText('#subtitle', {type: 'lines'})
    const textSplit = new SplitText('#title', {type: 'chars, words'})

    gsap.from(textSplit.chars,{
      opacity: 0,
      yPercent: 50,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06,
    })

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 50,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06,
      delay: 1
    })

    gsap.from('#button',{
      opacity: 0,
      yPercent: 50,
      duration: 1.8,
      ease: 'expo.out',
      delay: 1
    })

    gsap.to("#ice", { x: '30rem', y: '12rem', ease: "back.out(1.7)", duration: 1.5, rotate: 160 })
    gsap.to("#ice2", { x: '-30rem', y: '-15rem', ease: "back.out(1.7)", duration: 1.9, rotate: 100 })
    gsap.to("#ice3", { x: '20rem', y: '-13rem', ease: "back.out(1.7)", duration: 1.2, rotate: 50 })
    gsap.to("#ice4", { x: '-20rem', y: '10rem', ease: "back.out(1.7)", duration: 1, rotate: 20 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#herosection',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        pin: true,
        markers: true,
      },
    });


    {/*tl.to(videoRef.current, {
      currentTime: videoRef.current.duration,
      ease: "none",
    });*/}

  }, []);


  return (
    <>
      <div id='herosection' className='m-0 z-20 border-2 border-red-400  h-screen w-full flex flex-col justify-center items-center overflow-hidden'>
        <div className='m-0 bg-[#3d3d3d55] h-screen w-full z-30 flex flex-col justify-center items-center overflow-hidden'>
          <h3 id='title' className='z-20 text-[160px] max-md:text-[70px] font-bold font-sans text-[#75ddf7] absolute top-0 left-0 m-5 max-md:mt-20'>Heladeria</h3>
          <h3 id='title' className='z-20 text-[160px] max-md:text-[70px] font-bold font-sans text-[#75ddf7] absolute bottom-0 right-0 m-5 max-md:mb-20'>Gelato</h3>
          <div className='w-full' >
            <p id='subtitle' className='w-[55%] font-sans text-[15px] max-md:text-[12px] text-left m-2 ml-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem assumenda at delectus, nemo autem, illo perferendis pariatur totam mollitia omnis harum dicta, modi tenetur? Dolore aspernatur soluta reprehenderit beatae modi.</p>
            <Button
              id='button' 
              name='Start'
              className='cursor-pointer'
            />
          </div>
          <ScrollParallax isAbsolutelyPositioned >
            <img 
              src={IceIcon} 
              alt="ice" 
              id='ice'
              className='h-[70px] w-[70px] absolute justify-self-center top-[50%]'
            />
          </ScrollParallax>
          <ScrollParallax isAbsolutelyPositioned >
            <img 
              src={IceIcon} 
              alt="ice"
              id='ice2' 
              className='h-[70px] w-[70px] absolute justify-self-center top-[50%]'
            />
          </ScrollParallax>
          <ScrollParallax isAbsolutelyPositioned >
            <img 
              src={IceIcon} 
              alt="ice"
              id='ice3' 
              className='h-[70px] w-[70px] absolute justify-self-center top-[50%]'
            />
          </ScrollParallax>
          <ScrollParallax isAbsolutelyPositioned >
            <img 
              src={IceIcon} 
              alt="ice"
              id='ice4' 
              className='h-[70px] w-[70px] absolute justify-self-center top-[50%]'
            />
          </ScrollParallax>
        </div>
        <video 
          ref={videoRef}
          src={video}           
          className='z-10 fixed h-screen w-full bg-cover'  
          muted
          loop
          playsInline
        />
      </div>
      {/*-------------divicion de las dos secciones----------------*/}
      <div className='m-0 z-20 border-2 border-blue-400 bg-[#3d3d3d55] h-screen w-full flex flex-col justify-center items-center'>
        <div className='m-0 bg-[#3d3d3d55] h-screen w-full z-30 flex flex-col justify-center items-center'>
          <div className='productsContainer border border-white rounded-2xl h-[90%] w-[90%]  flex flex-wrap justify-center items-center overflow-scroll'>
            {
              products.map((product)=>(
                <ProductCard 
                  key={product.id}
                  product={product}
                />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Main

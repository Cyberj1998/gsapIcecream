import Arrow from '../assets/right.png'
import { useRef, useEffect, useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
import Button from './Button'
import { SplitText } from 'gsap/all'
import { products, categories } from '../constants/Products'
import ProductCard from './ProductCard'
import { ScrollParallax } from 'react-just-parallax'

//-------------images
import IceIcon from '../assets/ice.png'

//--------------videos
import video from '../assets/Gsap-Icecream.mp4'
import icecreamAIVideo2 from '../assets/IceCream-Explotion-2.mp4'
import videoThree from '../assets/videoThree.mp4'
import videoSodaCans from '../assets/hero-bg.mp4'

gsap.registerPlugin(ScrollTrigger)

const Main = () => {

  const[productType,setProductType]=useState('icecream')


  const handleCategory = (categoryName) => {
    if(categoryName === 'Helados'){
      setProductType('icecream')
    }
    if(categoryName === 'Vevidas'){
      setProductType('cooffee')
    }if(categoryName === 'Postres'){
      setProductType('dessert')
    }
  }


  const videoRef = useRef()



  useEffect(() => {
    //const video = videoRef.current;
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

    gsap.to("#ice", { x: '30rem', y: '12rem', ease: "back.out(1.7)", duration: 1.5, rotate: 160 })
    gsap.to("#ice2", { x: '-30rem', y: '-15rem', ease: "back.out(1.7)", duration: 1.9, rotate: 100 })
    gsap.to("#ice3", { x: '20rem', y: '-13rem', ease: "back.out(1.7)", duration: 1.2, rotate: 50 })
    gsap.to("#ice4", { x: '-20rem', y: '10rem', ease: "back.out(1.7)", duration: 1, rotate: 20 })


    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'scrollanimation',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      }
    })

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration
      })
    }

  }, []);


  return (
    <>
      <div className='scrollanimation bg-transparent m-0 z-20 h-screen w-full flex flex-col justify-center items-center overflow-hidden'>
        <div className='m-0 bg-transparent h-screen w-full z-30 flex flex-col justify-center items-center overflow-hidden'>
          <h3 id='title' className='max-md:hidden font-MyFont z-20 text-[160px] max-md:text-[70px] font-bold font-sans text-[#d482be] absolute top-0 left-0 m-5 max-md:mt-20 max-sm:text-[60px]'>Heladeria</h3> 
          <div>
            <h3 className="md:hidden font-MyFont z-20 text-[70px] font-bold font-sans m-0 leading-none text-[#d482be]">Heladeria</h3>
            <h3 className="md:hidden font-MyFont z-20 text-[70px] font-bold font-sans m-0 leading-none text-[#e9cc88] bg-[#786945] -rotate-5">Heladeria</h3>
            <h3 className="md:hidden font-MyFont z-20 text-[70px] font-bold font-sans m-0 leading-none text-[#7abfd0]">Heladeria</h3>
          </div>
          <h3 id='title' className='max-md:hidden z-20 text-[160px] max-md:text-[70px] font-bold font-sans text-[#7abfd0] absolute bottom-0 right-0 m-5 max-md:mb-20'>Gelato</h3>
          <div className='w-full' >
            <p id='subtitle' className='max-md:hidden w-[55%] font-sans font-semibold text-[15px] max-md:text-[12px] text-left m-2 ml-5 max-md:absolute max-md:top-0 left-0 max-md:mt-45 text-[#7a4a6d]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit consectetur adipisicing elit Rem assumenda at delectus, nemo autem, illo perferendis.</p>
            <Button
              id='button'
              name='Empezar'
              className='max-md:hidden cursor-pointer max-md:absolute max-md:top-0 max-md:left-0 max-md:mt-70'
              image={Arrow}
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
          src={videoThree}           
          className="fixed top-0 left-0 w-screen h-screen object-cover z-10"
          preload='auto'
        />
      </div>

      {/*-------------divicion de las dos secciones----------------*/}

      <div className='m-0 z-20 bg-transparent h-screen w-full flex flex-col justify-center items-center'>
        <div className='m-0 bg-transparent h-screen w-full z-30 flex flex-col justify-center items-center'>
          <div id='category selector' className='h-[50px] w-fit max-md:w-[350px] mt-10 mb-2 border border-white rounded-2xl flex flex-row justify-around items-center'>
            {
              categories.map((category)=>(
                <button 
                  key={category.id} 
                  className='cursor-pointer h-10 p-2 max-md:p-1 flex flex-row justify-center items-center object-contain text-[20px] max-md:text-[15px]font-sans text-black bg-[#cdcdcdbc] rounded-2xl m-5 max-md:m-1'
                  onClick={()=>handleCategory(category.name)}
                >
                  {category.name}
                  {category.name === 'Helados' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="none"><path fill="#ffdea7" d="m8 18l-1.32-2.37c.109-.05.196-.332.3-.391c.854-.494 1.28-1.074 1.583-2.029c.23-.74 1.167-1.446 1.928-1.446s1.617.726 1.847 1.446c.51 1.62 1.824 2.597 3.614 2.597s3.105-.987 3.615-2.597c.23-.73 1.143-1.446 1.903-1.446s1.615.726 1.845 1.446c.298.94.87 1.538 1.704 2.029c.116.068.178.335.301.391L24 18l-.551.244H8.563z"/><path fill="#ff6dc6" d="M16 2C10.48 2 6 6.48 6 12c0 1.28.24 2.5.68 3.63a4 4 0 0 0 2.13-2.41c.23-.74.92-1.22 1.68-1.22s1.45.49 1.68 1.21A3.99 3.99 0 0 0 15.98 16c1.79 0 3.3-1.17 3.81-2.78c.23-.73.92-1.21 1.68-1.21h.04c.76 0 1.45.49 1.68 1.21a3.98 3.98 0 0 0 2.13 2.41c.44-1.13.68-2.35.68-3.63c-.01-5.52-4.48-10-10-10"/><path fill="#fbb8ab" d="M14.31 5.94a1.01 1.01 0 1 0 0-2.02a1.01 1.01 0 0 0 0 2.02m-3.35 1.45a1.01 1.01 0 1 0 0-2.02a1.01 1.01 0 0 0 0 2.02m4.01 1.06a1.01 1.01 0 1 1-2.02 0a1.01 1.01 0 0 1 2.02 0"/><path fill="#00a6ed" d="M25.1 8c.66 0 1.09.69.8 1.28l-4.325 8.91h-1.98L24.3 8.5c.15-.31.47-.5.8-.5"/><path fill="#26eafc" d="m8 18l7.41 11.68a.7.7 0 0 0 1.18 0L24 18z"/></g></svg>
                  ) :
                  category.name === 'Vevidas' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 32 32"><g fill="none"><path fill="#ca0b4a" d="M15.25 2.75A.75.75 0 0 1 16 2h4v1.5h-3.25V8a.75.75 0 0 1-1.5 0z"/><path fill="#990838" d="M20.5 2.75c0 .414-.224.75-.5.75s-.5-.336-.5-.75s.224-.75.5-.75s.5.336.5.75"/><path fill="#cdc4d6" d="m11 9l.5-1l.007-.013C11.75 7.507 12.009 7 13 7h6c1 0 1.263.509 1.5 1l.5 1v1H11zM9.5 29l-.916-11l.198-.141l7.2-3.466l7.202 3.466l.233.141l-.917 11c-.04.556-.5 1-1 1h-11c-.5 0-.935-.45-1-1"/><path fill="#e5336d" d="M23.417 18H8.583L8 11l8-.5l8 .5z"/><path fill="#f3eef8" d="M7 10a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1"/></g></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="none"><path fill="#e19747" d="m3.627 29.82l24.63-7.068l.787-.724V7.978l-1.022-1.98l-25.95 7.345v14.944c0 1.225.496 1.785 1.555 1.532"/><path fill="#ffdea7" d="m13.034 2.508l-9.97 9.223c-1.946 1.662-.935 2.811.934 2.399l23.026-6.606c.592-.14.966-.186.966.499v4.02c0 .687.064 1.045-.374 1.183c0 0-22.205 6.694-22.683 6.824s-1.54.328-1.87.28c-.329-.048-.747-.28-.934-.28s-.187.108-.187.623v2.167c0 .163.14.268.14.268a2.48 2.48 0 0 0 1.916.307l23.244-6.73c.374-.094.748.156.748.623v5.298c0 .322.195.339.332.322c.992-.286 1.678-.873 1.678-1.881V8.023c0-.853-.617-2.278-2.01-2.71L16.96 2.725c-1.047-.218-3.072-.88-3.926-.218"/><path fill="#f8312f" d="M12.024 4.517c.126-.628.335-2.402 2.516-2.836l2.356 1.207l.858 2.575C16.95 7.624 15.29 7.47 14.627 7.47h-1.963c-.64 0-1.004-.364-.916-1.033z"/><path fill="#86d72f" d="M16.94 4.372c-.44-.495-.32-1.25-.32-1.25s-.714 0-1.062-.38l-1.193-1.235c-.064-.088 0-.183.088-.248c0 0 .701-.531 1.789.16c.602.444 1.746 1.862 2.036 2.458c.527.9-.146 1.673-.146 1.673c-.077.095-.167.122-.276 0z"/></g></svg>
                  )
                  }
                </button>
              ))
            }
          </div>  
          <div className='productsContainer border border-white rounded-2xl h-[90%] max-md:w-[95%] w-[90%] flex flex-wrap max-md:justify-around justify-center items-center overflow-y-scroll overflow-x-hidden backdrop-blur-md m-5 scrollbar-minimal'>
              {
               products.map((product)=>(
                productType === product.category ?(
                  <ProductCard 
                    productType={productType}
                    key={product.id}
                    product={product}
                />
                ) : 
                (
                  ''
                )
               ))
              }
          </div>
        </div>
      </div>
    </>
  )
}



export default Main

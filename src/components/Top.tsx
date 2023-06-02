import Image from 'next/image'

const Top = () => {
  return (
    <div className='w-full h-full pt-20 pb-20'>

      <div className='flex flex-row justify-center'>
        <div className=' h-full w-[45%] grid items-center justify-center text-5xl'>
        <h1 className='
        pt-10 
        px-6 
        text-center 
        items-center 
        justify-center 
        relative 
        font-bold 
        text-white 
        text-6xl
        max-w-xl'
        >
          Faça Parte da Família
          </h1>
        <p 
        className='
        pt-10
        pb-10 
        px-6 
        text-center 
        items-center 
        justify-center 
        relative 
        text-white 
        text-sm 
        max-w-xl
        
        ' 
        >
          Take your gaming to the next level with Join the Game! Our store offers an unbeatable selection of video games for all platforms, so you can find exactly what you're looking for. With our knowledgeable staff and industry-leading prices, we provide a top-notch experience that will keep you coming back for more. Get in on the action today - Join the Game!</p>

        </div>

        <div className='w-[45%] text-white items-center justify-center'>
          <img className='m-w-[100%] m-h-[100%]' src={'/images/favela1.jpg'} alt={''} max-width="100%" max-height="100%" />
        </div>
      </div>

    </div>
  )
}

  export default Top;
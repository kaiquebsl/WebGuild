import Image from 'next/image'

interface SecondarySectionItemProps {
  Subtitle: string;
  title: string;
  MainImg: string;
  Image1: string;
  Image2: string;
  Image3: string;
  Image4: string;
}

const SecondarySection: React.FC<SecondarySectionItemProps> = ({
  Subtitle,
  title,
  MainImg,
  Image1,
  Image2,
  Image3,
  Image4,
}) => { 
  return (
    <div className='w-full h-full relative pt-10 bg-[#424a89]'>
    <div className='grid justify-center '>
        <div className='text-center items-center justify-center pb-1'>
           <h1 className='text-xl text-yellow-500'>{Subtitle}</h1>
        </div>

        <div className='text-center pb-5'>
           <h1 className='text-white font-bold text-4xl'>{title}</h1>
        </div>
        
      <div className='w-full h-full pb-20'>
<div className='w-full h-full flex flex-row items-center text-center justify-center gap-10 '>
  <div className='w-full bg-black'>
    <Image className='max-w-[540px] max-h-[540px]' src={MainImg} width={540} height={540} alt='1'></Image>
    
  </div>
  <div className='w-full grid grid-cols-2 gap-4'>
  <Image className='max-w-[255px] max-h-[255px]' src={Image1} width={255} height={255} alt='1'></Image>
  <Image className='max-w-[255px] max-h-[255px]' src={Image2} width={255} height={255} alt='1'></Image>
  <Image className='max-w-[255px] max-h-[255px]' src={Image3} width={255} height={255} alt='1'></Image>
  <Image className='max-w-[255px] max-h-[255px]' src={Image4} width={255} height={255} alt='1'></Image> 
  </div>
</div>
</div>

    <div className='items-center text-center justify-center pb-4'>
      <a className='bg-[#d6a93b] py-3 px-[22px] text-[#424a89] font-black uppercase border-[1px] border-[#d6a93b] ' href="#">Ver Mais</a>
    </div>
    </div>

  </div>
  )
}

export default SecondarySection;
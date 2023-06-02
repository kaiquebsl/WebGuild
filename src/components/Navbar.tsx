import NavbarItem from "./NavBarItem";
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='w-full h-full'>
      <div className="central w-full flex justify-center ">
      <div className='
          px-4
          md:px-16
          py-6
          flex
          flex-row
          items-center
          transitio
          duration-500
          w-[50%]
          '>
        <Image className="h-8 w-8 lg:h-20 lg:w-20" src="/images/logo.png"  width={297} height={241} alt="Logo" />
        <div
        className='
        flex
        ml-8
        gap-7
        hidden
        lg:flex
        '
        >
          <NavbarItem label="Home" menulink="#" />
          <NavbarItem label="Discord" menulink="#" />
          <NavbarItem label="WhatsApp" menulink="#" />
        </div>
      </div>
      </div>
    </nav>
  )
}

export default Navbar;
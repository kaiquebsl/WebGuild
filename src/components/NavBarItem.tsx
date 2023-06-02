interface NavbarItemProps {
  label: string;
  menulink: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({
  label,
  menulink
}) => { 
  return (
    <div className="text-white cursor-pointer hover:text-gray-300 transition">
      <a href={menulink}>{label}</a>
    </div>
  )
}

export default NavbarItem
interface NavbarProps {
  onOpenMenu: () => void;
}

const Navbar = ({ onOpenMenu }: NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-[100px] z-50 bg-black">
      {/* Left Side - Social Links Container */}
      <div className="absolute left-0 top-0 h-full border-r border-white flex">
        <div className="flex flex-col justify-center gap-6 px-8">
          <a href="#" className="text-white text-xl">
            ✉
          </a>
          <a href="#" className="text-white text-xl">
            <span className="font-serif">ⓘ</span>
          </a>
        </div>
      </div>

      {/* Center - Pre-Order Logo */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="relative w-16 h-16 mx-auto">
          {/* PRE text */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-white text-sm tracking-wider">
            PRE
          </div>
          
          {/* Logo */}
          <img src="/logo.png" alt="Logo" className="w-full h-full" />
          
          {/* ORDER text */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-white text-sm tracking-wider">
            ORDER
          </div>
        </div>
      </div>

      {/* Right Side - Menu Button */}
      <div className="absolute right-0 top-0 h-full border-l border-white">
        <button 
          onClick={onOpenMenu} 
          className="h-full px-8 text-white text-xl hover:bg-white/5 transition-colors"
        >
          Menu
        </button>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 border-b border-white" />
    </nav>
  )
}

export default Navbar 
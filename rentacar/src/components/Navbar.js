import { useState, useEffect } from "react";
import { Search, User, Heart, ShoppingCart, Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full h-20 px-4 md:px-6 flex items-center justify-between transition-all duration-500 ease-in-out z-50
                     ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
      
      {/* Logo */}
      <div className={`text-2xl font-bold ml-2 md:ml-6 transition-colors duration-500
                       ${scrolled ? "text-black" : "text-white"}`}>
        logo
      </div>

      {/* Hamburger Menü - Mobil */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? 
            <X size={28} className={`${scrolled ? "text-black" : "text-white"}`} /> : 
            <Menu size={28} className={`${scrolled ? "text-black" : "text-white"}`} />
          }
        </button>
      </div>

      {/* Menü - Desktop */}
      <div className={`hidden md:flex items-center gap-4 transition-colors duration-500
                       ${scrolled ? "text-black" : "text-white"}`}>
        <ScrollLink to="foto" smooth={true} duration={500} className="font-bold cursor-pointer">ANA SAYFA</ScrollLink>
        <ScrollLink to="bizkimiz" smooth={true} duration={500} className="font-bold cursor-pointer">BİZ KİMİZ</ScrollLink>
        <ScrollLink to="cart" smooth={true} duration={500} className="font-bold cursor-pointer">ARAÇLAR</ScrollLink>
        <ScrollLink to="hakkimizda" smooth={true} duration={500} className="font-bold cursor-pointer">HAKKIMIZDA</ScrollLink>
      </div>

      {/* Search Bar - Desktop */}
      <div className={`hidden md:flex ml-2 md:ml-4 transition-colors duration-500
                       ${scrolled ? "text-black" : "text-white"}`}>
        <input
          type="text"
          placeholder="Ara..."
          className={`w-40 lg:w-60 px-4 py-2 border rounded-tl-3xl rounded-bl-lg rounded-tr-lg rounded-br-3xl focus:outline-none
                      ${scrolled ? "border-gray-400 text-black" : "border-white text-white"} focus:ring-2 focus:ring-yellow-300`}
        />
        <button className={`px-4 rounded-r-lg transition-colors duration-500 ${scrolled ? "text-black" : "text-white"}`}>
          <Search size={20} />
        </button>
      </div>

      {/* Icons - Desktop */}
      <div className={`hidden md:flex items-center space-x-4 transition-colors duration-500 ml-4
                       ${scrolled ? "text-black" : "text-white"}`}>
        <button>
          <User size={24} />
        </button>
        <button>
          <Heart size={24} />
        </button>
        <button className="relative">
          <ShoppingCart size={24} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full"></span>
        </button>
      </div>

      {/* Mobil Menü Açılır */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white flex flex-col items-center py-4 shadow-md md:hidden z-40">
          <ScrollLink onClick={() => setMenuOpen(false)} to="foto" smooth={true} duration={500} className="py-2 font-bold cursor-pointer text-black">ANA SAYFA</ScrollLink>
          <ScrollLink onClick={() => setMenuOpen(false)} to="bizkimiz" smooth={true} duration={500} className="py-2 font-bold cursor-pointer text-black">BİZ KİMİZ</ScrollLink>
          <ScrollLink onClick={() => setMenuOpen(false)} to="cart" smooth={true} duration={500} className="py-2 font-bold cursor-pointer text-black">ARAÇLAR</ScrollLink>
          <ScrollLink onClick={() => setMenuOpen(false)} to="hakkimizda" smooth={true} duration={500} className="py-2 font-bold cursor-pointer text-black">HAKKIMIZDA</ScrollLink>

          {/* İkonlar - Mobil Menü */}
          <div className="flex mt-4 space-x-6">
            <button>
              <User size={24} className="text-black" />
            </button>
            <button>
              <Heart size={24} className="text-black" />
            </button>
            <button className="relative">
              <ShoppingCart size={24} className="text-black" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full"></span>
            </button>
            <button className="flex items-center border border-gray-400 rounded-full px-2 py-1">
              <Search size={20} className="text-black" />
              <input
                type="text"
                placeholder="Ara..."
                className="ml-2 w-24 bg-transparent focus:outline-none"
              />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

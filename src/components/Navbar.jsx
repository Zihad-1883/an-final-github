import { useState } from "react"
import translateIcon from "../assets/translate-02.png"
import arrowWhite from "../assets/arrow-up-right-white.png"
import arrowBlue from "../assets/arrow-up-right.png"

const Navbar = ({ onLogin, onSignup }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section className="nav-bar container mx-auto flex justify-between items-center p-5 md:p-7">
      {/* Logo */}
      <div className="nav-left">
        <h4 className="text-xl md:text-2xl bg-gradient-to-r from-[#2b32b2] to-[#1a80bc] bg-clip-text text-transparent font-bold">
          AN Express
        </h4>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex justify-center items-center gap-10 lg:gap-18">
        <div className="flex justify-center items-center max-w-[120px] relative">
          <img src={translateIcon} className="w-4 h-4 absolute left-0 z-10" alt="language" />
          <select className="border-none text-black pl-5 font-bold bg-transparent outline-none cursor-pointer text-sm">
            <option>English</option>
            <option>Mandarin</option>
            <option>Spanish</option>
          </select>
        </div>

        <div className="flex justify-center items-center gap-8">
          <p className="font-bold cursor-pointer hover:opacity-70 transition-opacity text-sm lg:text-base">Help</p>
          <p className="font-bold cursor-pointer hover:opacity-70 transition-opacity text-sm lg:text-base">Contact Us</p>
        </div>

        <div className="flex justify-center items-center gap-3">
          <button
            onClick={onLogin}
            className="rounded-full bg-gradient-to-r from-[#2b32b2] to-[#1a80bc] text-white flex items-center gap-1 py-2.5 px-6 hover:opacity-90 transition-opacity text-sm lg:text-base"
          >
            <span>Login</span>
            <img className="w-3.5 h-3.5" src={arrowWhite} alt="arrow" />
          </button>
          <button
            onClick={onSignup}
            className="border border-[#2b32b2] rounded-full flex items-center gap-1 py-2.5 px-5 hover:bg-gray-50 transition-colors text-sm lg:text-base"
          >
            <span className="bg-gradient-to-r from-[#2b32b2] to-[#1a80bc] bg-clip-text text-transparent font-medium">Signup</span>
            <img className="w-3.5 h-3.5" src={arrowBlue} alt="arrow" />
          </button>
        </div>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-black transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-0.5 bg-black transition-all ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-black transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-[72px] left-0 right-0 bg-white shadow-lg z-50 px-6 py-6 flex flex-col gap-5 md:hidden">
          <p className="font-bold cursor-pointer">Help</p>
          <p className="font-bold cursor-pointer">Contact Us</p>
          <button
            onClick={() => { onLogin(); setMenuOpen(false) }}
            className="rounded-full bg-gradient-to-r from-[#2b32b2] to-[#1a80bc] text-white py-3 px-6 text-center"
          >
            Login
          </button>
          <button
            onClick={() => { onSignup(); setMenuOpen(false) }}
            className="border border-[#2b32b2] rounded-full py-3 px-6 text-center"
          >
            <span className="bg-gradient-to-r from-[#2b32b2] to-[#1a80bc] bg-clip-text text-transparent font-medium">Signup</span>
          </button>
        </div>
      )}
    </section>
  )
}

export default Navbar

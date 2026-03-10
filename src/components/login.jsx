import toroid from "../assets/SuperToroid-2.png"
import arrowWhite from "../assets/arrow-up-right-white.png"
import arrowBlue from "../assets/arrow-up-right.png"

const Login = ({ onLogin, onSignup }) => (
  <div className="container mx-auto bg-black mx-4 md:mx-auto px-6 md:px-24 lg:px-72 py-14 md:py-20 flex flex-col items-center justify-center mt-24 md:mt-36 rounded-2xl md:rounded-3xl overflow-hidden relative">
    <img src={toroid} alt="3D decoration" className="w-28 h-28 md:w-40 md:h-40 object-contain" />
    <h1 className="text-center text-white text-[36px] md:text-[60px] lg:text-[80px] leading-tight font-bold mt-8 md:mt-12 mb-6 md:mb-10">
      Send Money on the best rates possible
    </h1>
    <p className="text-[#9A9EB1] mb-8 md:mb-12 text-center max-w-[700px] text-sm md:text-lg">
      Ultimate solution for your international money transfer needs with our
      cutting-edge technology get efficiency and security in your pocket.
    </p>
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
      <button
        onClick={onLogin}
        className="rounded-full bg-gradient-to-r from-[#2b32b2] to-[#1a80bc] text-white flex items-center justify-center gap-2 py-3 px-10 md:px-12 hover:opacity-90 transition-opacity w-full sm:w-auto"
      >
        <span>Login</span>
        <img className="w-4 h-4" src={arrowWhite} alt="arrow" />
      </button>
      <button
        onClick={onSignup}
        className="border border-[#2b32b2] bg-white rounded-full flex items-center justify-center gap-2 py-3 px-8 md:px-10 hover:bg-gray-50 transition-colors w-full sm:w-auto"
      >
        <span className="bg-gradient-to-r from-[#2b32b2] to-[#1a80bc] bg-clip-text text-transparent font-medium">Signup</span>
        <img className="w-4 h-4" src={arrowBlue} alt="arrow" />
      </button>
    </div>
  </div>
)

export default Login

import appStore from "../assets/image 68.png"
import playStore from "../assets/image 69.png"
import group5 from "../assets/Group 5.png"
import group6 from "../assets/Group 6.png"

const MoneyTransfer = () => (
  <div className="container mx-auto mt-24 md:mt-36 relative px-4">
    <h1 className="text-[36px] md:text-[60px] lg:text-[80px] leading-tight font-bold mb-4">
      Global Money <br /> Transfer at Your Fingertips.
    </h1>
    <p className="text-xl md:text-3xl mb-6 md:mb-12 opacity-50">
      Fast, Secure, and Convenient - Anytime, Anywhere
    </p>
    <p className="text-xl md:text-3xl font-bold mb-8 md:mb-12 max-w-[376px]">
      Download our mobile app for easy access. Money transfer in your pocket.
    </p>
    <div className="flex gap-4 mt-12 md:mt-56 flex-wrap">
      <img src={playStore} alt="Get it on Google Play" className="cursor-pointer hover:opacity-90 transition-opacity h-12 md:h-auto" />
      <img src={appStore} alt="Download on App Store" className="cursor-pointer hover:opacity-90 transition-opacity h-12 md:h-auto" />
    </div>
    <img className="hidden lg:block absolute top-66 left-140 -z-10" src={group5} alt="" aria-hidden="true" />
    <img className="hidden lg:block absolute top-15 right-20 -z-10" src={group6} alt="" aria-hidden="true" />
  </div>
)

export default MoneyTransfer

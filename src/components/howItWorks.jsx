import { useState } from "react"
import shorts1 from "../assets/shorts1.png"
import shorts2 from "../assets/shorts2.png"
import shorts3 from "../assets/shorts3.png"
import shorts4 from "../assets/shorts4.png"
import muteIcon from "../assets/mute.png"

const steps = [
  {
    step: "Step 1",
    title: "Create an account on AN-Express.",
    description: "Create your free account in minutes.",
    img: shorts1,
    label: "Go to anexpress.com and click on signup",
  },
  {
    step: "Step 2",
    title: "Set up a transfer",
    description: "Choose the amount of money to send and tell us who to send it to.",
    img: shorts2,
    label: "Enter amount and recipient details",
  },
  {
    step: "Step 3",
    title: "Pay securely",
    description: "Pay using a debit/credit card or bank transfer.",
    img: shorts3,
    label: "Complete payment in seconds",
  },
  {
    step: "Step 4",
    title: "That's it.",
    description: "Your money is on its way to your recipient.",
    img: shorts4,
    label: "Track your transfer in real time",
  },
]

const HowItWorks = () => {
  const [active, setActive] = useState(0)

  const current = steps[active]
  const behind = steps[(active + 1) % steps.length]

  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 mt-24 md:mt-36 px-4">
      
      {/* Left: steps */}
      <div className="texts">
        <h1 className="text-[40px] md:text-[60px] lg:text-[80px] font-bold mb-8 md:mb-10">How it works.</h1>
        {steps.map((s, i) => (
          <div key={i}>
            <div
              onClick={() => setActive(i)}
              className={`steps p-5 md:p-6 space-y-3 md:space-y-4 transition-all duration-300 cursor-pointer rounded-lg select-none
                ${active === i
                  ? "bg-[#d4ecfa] pl-10 md:pl-12"
                  : "hover:bg-[#f0f8ff] hover:pl-8 md:hover:pl-10"
                }`}
            >
              <h5 className={`text-lg md:text-2xl font-bold transition-colors ${active === i ? "text-[#2b32b2]" : "opacity-40"}`}>
                {s.step}
              </h5>
              <h4 className={`text-xl md:text-3xl font-bold transition-colors ${active === i ? "text-gray-900" : "opacity-70"}`}>
                {s.title}
              </h4>
              <p className={`text-base md:text-xl transition-opacity ${active === i ? "opacity-70" : "opacity-40"}`}>
                {s.description}
              </p>
            </div>
            {i < steps.length - 1 && <hr className="opacity-15" />}
          </div>
        ))}
      </div>

      {/* Right: images - desktop only */}
      <div className="shorts relative hidden lg:flex items-start justify-start" style={{ height: "520px" }}>

        {/* Behind image - peeks out top-right, overlapped by front */}
        <img
          key={`behind-${active}`}
          className="absolute rounded-2xl object-cover shadow-lg transition-all duration-500"
          src={behind.img}
          alt={behind.step}
          style={{ width: "220px", height: "380px", top: "20px", left: "160px", zIndex: 1 }}
        />

        {/* Front image - left, taller, on top */}
        <img
          key={`front-${active}`}
          src={current.img}
          alt={current.step}
          className="absolute rounded-2xl object-cover shadow-xl animate-[fadeIn_0.4s_ease]"
          style={{ width: "260px", height: "460px", top: "0px", left: "0px", zIndex: 10 }}
        />

        {/* Step label card - bottom of front image */}
        <div
          key={`label-${active}`}
          className="absolute bg-white shadow-lg rounded-xl px-5 py-3 text-center animate-[fadeIn_0.4s_ease]"
          style={{ zIndex: 20, bottom: "30px", left: "10px", maxWidth: "260px" }}
        >
          <h2 className="text-base font-bold">{current.label}</h2>
        </div>

        {/* Mute button - bottom right of behind image */}
        <div
          className="absolute w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center shadow-lg"
          style={{ zIndex: 20, bottom: "10px", left: "310px" }}
        >
          <img src={muteIcon} alt="mute" className="w-5 h-5" />
        </div>

        {/* Step dots indicator */}
        <div className="absolute flex gap-2" style={{ bottom: "-36px", left: "0" }}>
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
                active === i
                  ? "w-6 h-2.5 bg-[#2b32b2]"
                  : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Mobile: just show active image below steps */}
      <div className="lg:hidden flex justify-center">
        <div className="relative">
          <img
            key={`mobile-${active}`}
            src={current.img}
            alt={current.step}
            className="w-[220px] rounded-2xl object-cover shadow-xl animate-[fadeIn_0.4s_ease]"
            style={{ height: "360px" }}
          />
          <div className="max-w-[220px] px-4 py-2 text-center bg-white absolute bottom-4 left-0 right-0 mx-auto shadow-lg rounded-xl">
            <p className="text-sm font-bold">{current.label}</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HowItWorks

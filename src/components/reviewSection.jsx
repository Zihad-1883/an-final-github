import { useState } from "react"
import ukReview from "../assets/UK-review.png"
import pakistanReview from "../assets/pakistan-review.png"
import qatarReview from "../assets/Qatar-review.png"
import arrowLeft from "../assets/arrow-narrow-left.png"
import arrowRight from "../assets/arrow-narrow-right.png"
import arrowBlue from "../assets/arrow-up-right.png"
import arrowWhite from "../assets/arrow-up-right-white.png"

const reviews = [
  { flag: ukReview, quote: "Wise has been a lifesaver for me as a student in a foreign country.", author: "Megan", platform: "Trust Pilot" },
  { flag: pakistanReview, quote: "Always fast transactions and good fees. An invaluable online bank for those who live outside their own country or are frequent travellers.", author: "Ahmer", platform: "Trust Pilot" },
  { flag: qatarReview, quote: "I use Wise to pay a mortgage in a different country each month. Superb. That simple and easy.", author: "Mohamed", platform: "Trust Pilot" },
]

const ReviewSection = () => {
  const [active, setActive] = useState(0)

  const prev = () => setActive((i) => (i - 1 + reviews.length) % reviews.length)
  const next = () => setActive((i) => (i + 1) % reviews.length)

  const ordered = [...Array(reviews.length)].map((_, i) => (active + i) % reviews.length)

  return (
    <div className="bg-black w-full py-16 md:py-32 mb-16 md:mb-32 overflow-hidden">
      {/* Header */}
      <div className="container mx-auto flex justify-between items-start px-5 md:px-8 mb-10 md:mb-14">
        <h1 className="text-white text-[28px] md:text-[52px] lg:text-[72px] leading-tight font-bold max-w-[600px]">
          People talking about AN Express from across the globe.
        </h1>
        <div className="flex gap-3 md:gap-4 self-center">
          <button onClick={prev} className="bg-white/20 hover:bg-white/40 p-4 md:p-5 rounded-full transition-all duration-200">
            <img src={arrowLeft} alt="previous" className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <button onClick={next} className="bg-white hover:bg-gray-100 p-4 md:p-5 rounded-full transition-all duration-200">
            <img src={arrowRight} alt="next" className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="overflow-hidden">
        <div
          className="flex gap-4 md:gap-6 transition-all duration-500 ease-in-out pl-5 md:pl-8"
          style={{ marginLeft: `max(0px, calc((100vw - 1280px) / 2))` }}
        >
          {ordered.map((reviewIdx, pos) => {
            const review = reviews[reviewIdx]
            const isActive = pos === 0

            return (
              <div
                key={reviewIdx}
                onClick={() => !isActive && setActive(reviewIdx)}
                className={`
                  flex-shrink-0 rounded-2xl flex flex-col justify-between cursor-pointer
                  transition-all duration-500 ease-in-out
                  ${isActive
                    ? "bg-gradient-to-b from-[#2b32b2] to-[#1a80bc] p-10 md:p-14"
                    : "bg-[#111119] p-8 md:p-12 hover:bg-[#1a1a28]"
                  }
                `}
                style={{
                  width: isActive ? "clamp(260px, 36vw, 480px)" : "clamp(220px, 32vw, 420px)",
                  height: isActive ? "clamp(360px, 42vw, 520px)" : "clamp(300px, 36vw, 440px)",
                  alignSelf: "flex-end",
                }}
              >
                <div>
                  <img src={review.flag} alt={review.author} className={`object-cover rounded-full mb-6 md:mb-8 ${isActive ? "w-12 h-12" : "w-10 h-10"}`} />
                  <p className={`font-bold leading-snug ${isActive ? "text-white text-2xl md:text-3xl lg:text-4xl" : "text-white/80 text-xl md:text-2xl"}`}>
                    "{review.quote}"
                  </p>
                </div>
                <button className={`mt-8 rounded-full flex items-center gap-2 py-2.5 px-5 w-fit text-sm font-medium transition-colors
                  ${isActive ? "bg-white text-[#2b32b2] hover:bg-gray-100" : "border border-white/30 text-white/70 hover:border-white/60"}`}>
                  <span>{review.author} on {review.platform}</span>
                  <img className="w-3.5 h-3.5" src={isActive ? arrowBlue : arrowWhite} alt="arrow" />
                </button>
              </div>
            )
          })}
        </div>
      </div>

      {/* Dots */}
      <div className="flex gap-2 mt-8 md:mt-10 pl-5 md:pl-8" style={{ marginLeft: `max(0px, calc((100vw - 1280px) / 2))` }}>
        {reviews.map((_, i) => (
          <button key={i} onClick={() => setActive(i)}
            className={`rounded-full transition-all duration-300 ${active === i ? "w-6 h-2.5 bg-white" : "w-2.5 h-2.5 bg-white/30 hover:bg-white/60"}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ReviewSection

import rectUK from "../assets/Rectangle-UK.png"
import rectBD from "../assets/Rectangle-BD.png"
import rectUS from "../assets/Rectangle-US.png"
import rectIndia from "../assets/Rectangle-India.png"
import rectNepal from "../assets/Rectangle-Nepal.png"
import rectOman from "../assets/Rectangle-Oman.png"
import rectARG from "../assets/Rectangle_ARG.png"
import rectSRL from "../assets/Rectangle-SRL.png"

const countries = [
  { name: "United Kingdom", img: rectUK },
  { name: "Bangladesh", img: rectBD },
  { name: "United States", img: rectUS },
  { name: "India", img: rectIndia },
  { name: "Nepal", img: rectNepal },
  { name: "Oman", img: rectOman },
  { name: "Argentina", img: rectARG },
  { name: "Sri Lanka", img: rectSRL },
]

const CountryCard = ({ name, img }) => (
  <div className="flex-shrink-0">
    <img className="w-[160px] h-[90px] md:w-[220px] md:h-[120px] lg:w-[283px] lg:h-[151px] object-cover rounded-lg" src={img} alt={name} />
    <p className="mt-3 text-base md:text-xl lg:text-2xl">{name}</p>
  </div>
)

const Slider = () => {
  return (
    <section className="countries mb-10 md:mb-13 overflow-hidden">
      <div className="container mx-auto pb-10 md:pb-20 px-4">
        <h1 className="text-[40px] md:text-[60px] lg:text-[80px] leading-tight font-bold">
          AN-Express <br /> works nearly{" "}
          <span className="bg-gradient-to-r from-[#2b32b2] to-[#1a80bc] bg-clip-text text-transparent">
            everywhere
          </span>
          .
        </h1>
      </div>

      <div className="overflow-hidden">
        {/* Row 1 - left */}
        <div className="flex gap-6 md:gap-10 mb-6 md:mb-10 animate-[marquee-left_30s_linear_infinite] w-max">
          {[...countries, ...countries].map((c, i) => (
            <CountryCard key={i} name={c.name} img={c.img} />
          ))}
        </div>

        {/* Row 2 - right */}
        <div className="flex gap-6 md:gap-10 mb-16 md:mb-44 animate-[marquee-right_30s_linear_infinite] w-max">
          {[...countries, ...countries].map((c, i) => (
            <CountryCard key={i} name={c.name} img={c.img} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Slider

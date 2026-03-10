import facebook from "../assets/bxl-facebook.svg"
import instagram from "../assets/bxl-insta.png"
import twitter from "../assets/bxl-twitter.svg"
import youtube from "../assets/youtube-logo.svg"
import mailIcon from "../assets/mail-03.png"
import copyIcon from "../assets/copy-04.png"
import pinIcon from "../assets/pin-01.png"

const Footer = () => (
  <div className="bg-black mt-16 px-6 md:px-16 lg:px-24 py-14 md:py-20">
    <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:gap-16">

      {/* Left */}
      <div className="flex-1">
        <h2 className="text-3xl md:text-[40px] text-white mb-5 font-bold">AN Express</h2>
        <p className="text-white text-xs md:text-[14px] max-w-[550px] mb-10 leading-relaxed opacity-80">
          A N Express Limited, trading as AN Express, is a company registered in England and Wales.
          Company registration number: 04778768. Authorised and regulated by the Financial Conduct Authority
          (FCA) under the Payment Services Regulations 2017 (Firm reference: 504626). Also registered by HMRC
          as a money service business (registration number: 12142969).
        </p>
        <h6 className="text-white text-base md:text-xl mb-3">Follow us on</h6>
        <div className="flex gap-5 md:gap-8 mb-8 md:mb-10">
          {[
            { src: facebook, alt: "Facebook" },
            { src: instagram, alt: "Instagram", cls: "w-6 h-6" },
            { src: twitter, alt: "Twitter" },
            { src: youtube, alt: "YouTube" },
          ].map(({ src, alt, cls }) => (
            <img key={alt} src={src} alt={alt} className={`cursor-pointer hover:opacity-70 transition-opacity ${cls || ""}`} />
          ))}
        </div>
        <p className="text-white text-sm md:text-xl">Copyright © 2024 A N Express Money Transfer. All Rights Reserved.</p>
      </div>

      {/* Right */}
      <div className="flex-1">
        <div className="flex justify-start lg:justify-around gap-12 lg:gap-0">
          {[
            { title: "About Company", links: ["Home", "About Us", "Blogs", "FAQ"] },
            { title: "Legal", links: ["Privacy Policy", "Cookies Policy", "Terms & Conditions", "Copyrights"] },
          ].map(({ title, links }) => (
            <div key={title} className="space-y-4 md:space-y-6">
              <h3 className="text-white text-lg md:text-2xl font-semibold">{title}</h3>
              {links.map((l) => (
                <p key={l} className="text-white text-sm md:text-xl cursor-pointer hover:opacity-70 transition-opacity">{l}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-24 space-y-4">
          <div className="flex items-center gap-2">
            <img className="w-4 h-4" src={mailIcon} alt="email" />
            <p className="text-white text-sm md:text-base">info@anexpress.com</p>
            <button onClick={() => navigator.clipboard.writeText("info@anexpress.com")} title="Copy email" className="hover:opacity-70 transition-opacity">
              <img className="w-4 h-4" src={copyIcon} alt="copy" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <img className="w-4 h-4" src={pinIcon} alt="location" />
            <p className="text-white text-sm md:text-base">208a Whitechapel Road, London, E1 1BJ</p>
          </div>
        </div>
      </div>

    </div>
  </div>
)

export default Footer

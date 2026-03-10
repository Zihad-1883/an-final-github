import { useState } from "react"
import Navbar from "./components/Navbar"
import Banner from "./components/banner"
import SendMoney from "./components/sendMoney"
import Slider from "./components/slider"
import ReviewSection from "./components/reviewSection"
import Card from "./components/card"
import HowItWorks from "./components/howItWorks"
import Login from "./components/login"
import MoneyTransfer from "./components/moneyTransfer"
import Footer from "./components/footer"
import AuthModal from "./components/AuthModal"
import image from "./assets/Image.png"

function App() {
  const [authMode, setAuthMode] = useState(null) // null | "login" | "signup"

  const openLogin = () => setAuthMode("login")
  const openSignup = () => setAuthMode("signup")
  const closeAuth = () => setAuthMode(null)

  return (
    <div className="relative overflow-x-hidden">
      <Navbar onLogin={openLogin} onSignup={openSignup} />
      <Banner />
      <SendMoney />

      <section className="container mx-auto pt-16 md:pt-20 pb-20 md:pb-32 px-4">
        <img src={image} alt="AN Express platform preview" className="w-full rounded-2xl" />
      </section>

      <Slider />
      <ReviewSection />

      {/* Feature cards */}
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-4">
        <Card title="Low fee and high rate" description="We offer competitive exchange rates and low fees, so you can maximize the amount that your recipient gets" />
        <Card title="Check Transfer History" description="You can see the history log of your transfers in your online account with us, for easier access you can download our mobile app." />
        <Card title="5 star service" description="Proven record of providing the best customer care. Please read our reviews on our online platforms such as trustpilot." />
      </section>

      {/* Security section */}
      <div className="container mx-auto mt-16 md:mt-[140px] px-4">
        <h1 className="text-[36px] md:text-[60px] lg:text-[80px] leading-tight font-bold mb-5 md:mb-7">
          Keeping your hard earned <br className="hidden md:block" /> money safe is our primary goal.
        </h1>
        <p className="text-lg md:text-2xl leading-7 opacity-50 max-w-3xl">
          Every year, our customers trust us with over GBP 20 millions. Here are some ways how we keep money flowing safe and transparent to our customers at the same time.
        </p>
      </div>

      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-10 md:mt-[60px] px-4">
        <Card title="Dedicated Security Team" description="Our dedicated security team works all the time to keep your money safe by implementing world class security standards." />
        <Card title="2FA" description="We allow you to enable two-factor authentication on your account to enable tight access and security of your account." />
      </section>

      <HowItWorks />
      <Login onLogin={openLogin} onSignup={openSignup} />
      <MoneyTransfer />
      <Footer />

      {/* Auth Modal */}
      {authMode && <AuthModal mode={authMode} onClose={closeAuth} />}
    </div>
  )
}

export default App

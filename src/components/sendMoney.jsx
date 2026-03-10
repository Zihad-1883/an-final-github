import { useState } from "react"
import ukFlag from "../assets/UK.png"
import bdFlag from "../assets/BD.png"
import swapIcon from "../assets/Group 3.png"
import arrowBlack from "../assets/arrow-up-right-black.png"

const RATES = {
  GBP_BDT: 146.52, GBP_JPY: 191.5, GBP_AUD: 2.01,
  USD_BDT: 110.5, USD_JPY: 144.2, USD_AUD: 1.52,
  EUR_BDT: 120.3, EUR_JPY: 158.7, EUR_AUD: 1.65,
}

const fromCurrencies = [
  { value: "GBP", label: "£ GBP", flag: ukFlag, country: "United Kingdom" },
  { value: "USD", label: "$ USD", flag: null, country: "United States" },
  { value: "EUR", label: "€ EUR", flag: null, country: "Europe" },
]
const toCurrencies = [
  { value: "BDT", label: "৳ Taka", flag: bdFlag, country: "Bangladesh" },
  { value: "JPY", label: "¥ JPY", flag: null, country: "Japan" },
  { value: "AUD", label: "$ AUD", flag: null, country: "Australia" },
]

const SendMoney = () => {
  const [amount, setAmount] = useState(1)
  const [fromCurrency, setFromCurrency] = useState("GBP")
  const [toCurrency, setToCurrency] = useState("BDT")

  const rate = RATES[`${fromCurrency}_${toCurrency}`] || 1
  const converted = (parseFloat(amount || 0) * rate).toFixed(2)
  const fromInfo = fromCurrencies.find((c) => c.value === fromCurrency)
  const toInfo = toCurrencies.find((c) => c.value === toCurrency)

  return (
    <section className="send-money space-y-4 md:space-y-6 px-4">
      {/* Converter pill */}
      <div className="flex flex-col md:flex-row justify-center items-center container mx-auto border border-gray-300 max-w-[1140px] rounded-3xl md:rounded-full px-6 md:px-12 py-5 md:py-0 md:min-h-[130px] gap-4 md:gap-0">

        {/* You Send */}
        <div className="flex justify-between md:justify-start items-center w-full md:w-[40%] gap-4 md:gap-8">
          <div>
            <input
              type="number"
              min="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="text-[28px] md:text-[40px] font-bold bg-gradient-to-r from-[#2b32b2] to-[#1a80bc] bg-clip-text text-transparent w-24 md:w-32 outline-none border-none bg-transparent"
            />
            <p className="text-base md:text-xl opacity-60">You Send</p>
          </div>
          <div>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="text-black text-xl md:text-[32px] font-bold border-none outline-none bg-transparent cursor-pointer"
            >
              {fromCurrencies.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
            </select>
            <div className="flex items-center gap-2">
              {fromInfo?.flag && <img className="w-6 h-3.5 md:w-8 md:h-4 object-cover" src={fromInfo.flag} alt={fromInfo.country} />}
              <p className="text-sm md:text-xl opacity-60">{fromInfo?.country}</p>
            </div>
          </div>
        </div>

        {/* Swap icon */}
        <div className="md:px-10 hidden md:block">
          <img src={swapIcon} alt="swap" className="cursor-pointer hover:scale-110 transition-transform" />
        </div>
        {/* Mobile divider */}
        <div className="w-full border-t border-gray-200 md:hidden" />

        {/* Receiver Gets */}
        <div className="flex justify-between md:justify-start items-center w-full md:w-[40%] gap-4 md:gap-8">
          <div>
            <h1 className="text-[28px] md:text-[40px] font-bold bg-gradient-to-r from-[#2b32b2] to-[#1a80bc] bg-clip-text text-transparent">
              {isNaN(converted) ? "0.00" : converted}
            </h1>
            <p className="text-base md:text-xl opacity-60">Receiver Gets</p>
          </div>
          <div>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="text-black text-xl md:text-[32px] font-bold border-none outline-none bg-transparent cursor-pointer"
            >
              {toCurrencies.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
            </select>
            <div className="flex items-center gap-2">
              {toInfo?.flag && <img className="w-6 h-3.5 md:w-8 md:h-4 object-cover" src={toInfo.flag} alt={toInfo.country} />}
              <p className="text-sm md:text-xl opacity-60">{toInfo?.country}</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA button */}
      <div className="flex px-4">
        <button className="border rounded-full mx-auto px-10 md:px-20 py-4 md:py-5 flex items-center gap-2 hover:bg-gray-50 transition-colors">
          <span className="text-lg md:text-2xl font-semibold">Send Money Now</span>
          <img className="w-4 h-4" src={arrowBlack} alt="arrow" />
        </button>
      </div>
    </section>
  )
}

export default SendMoney

import { useState } from "react"
import arrowWhite from "../assets/arrow-up-right-white.png"
import arrowBlue from "../assets/arrow-up-right.png"

const InputField = ({ type = "text", placeholder, value, onChange, label }) => (
  <div className="flex flex-col gap-1.5">
    {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#2b32b2] focus:ring-2 focus:ring-[#2b32b2]/10 transition-all placeholder:text-gray-400"
    />
  </div>
)

const LoginForm = ({ onSwitch, onClose }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPass, setShowPass] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Login submitted! Connect your backend here.")
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Welcome back</h2>
        <p className="text-gray-500 text-sm mt-1">Sign in to your AN Express account</p>
      </div>

      <div className="flex flex-col gap-4">
        <InputField
          type="email"
          label="Email address"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700">Password</label>
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#2b32b2] focus:ring-2 focus:ring-[#2b32b2]/10 transition-all placeholder:text-gray-400 pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs"
            >
              {showPass ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <div className="flex justify-end">
          <span className="text-sm text-[#2b32b2] cursor-pointer hover:underline font-medium">Forgot password?</span>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full rounded-full bg-gradient-to-r from-[#2b32b2] to-[#1a80bc] text-white py-3.5 font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
      >
        <span>Login</span>
        <img className="w-4 h-4" src={arrowWhite} alt="arrow" />
      </button>

      <p className="text-center text-sm text-gray-500">
        Don't have an account?{" "}
        <span onClick={onSwitch} className="text-[#2b32b2] font-semibold cursor-pointer hover:underline">
          Sign up
        </span>
      </p>
    </div>
  )
}

const SignupForm = ({ onSwitch, onClose }) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "", confirm: "" })
  const [showPass, setShowPass] = useState(false)

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.password !== form.confirm) return alert("Passwords don't match!")
    alert("Signup submitted! Connect your backend here.")
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Create account</h2>
        <p className="text-gray-500 text-sm mt-1">Join AN Express and start sending money</p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField label="Full Name" placeholder="Muhammad Ali" value={form.name} onChange={set("name")} />
          <InputField label="Phone Number" placeholder="+44 7700 900000" value={form.phone} onChange={set("phone")} />
        </div>
        <InputField type="email" label="Email address" placeholder="you@example.com" value={form.email} onChange={set("email")} />

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700">Password</label>
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Create a strong password"
              value={form.password}
              onChange={set("password")}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#2b32b2] focus:ring-2 focus:ring-[#2b32b2]/10 transition-all placeholder:text-gray-400 pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs"
            >
              {showPass ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <InputField type="password" label="Confirm Password" placeholder="Re-enter password" value={form.confirm} onChange={set("confirm")} />

        <p className="text-xs text-gray-400 leading-relaxed">
          By creating an account, you agree to our{" "}
          <span className="text-[#2b32b2] cursor-pointer hover:underline">Terms & Conditions</span> and{" "}
          <span className="text-[#2b32b2] cursor-pointer hover:underline">Privacy Policy</span>.
        </p>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full rounded-full bg-gradient-to-r from-[#2b32b2] to-[#1a80bc] text-white py-3.5 font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
      >
        <span>Create Account</span>
        <img className="w-4 h-4" src={arrowWhite} alt="arrow" />
      </button>

      <p className="text-center text-sm text-gray-500">
        Already have an account?{" "}
        <span onClick={onSwitch} className="text-[#2b32b2] font-semibold cursor-pointer hover:underline">
          Sign in
        </span>
      </p>
    </div>
  )
}

const AuthModal = ({ mode, onClose }) => {
  const [currentMode, setCurrentMode] = useState(mode)

  if (!mode) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto p-8 z-10">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors text-lg"
        >
          ×
        </button>

        {/* Brand mark */}
        <div className="mb-6">
          <span className="text-lg font-bold bg-gradient-to-r from-[#2b32b2] to-[#1a80bc] bg-clip-text text-transparent">
            AN Express
          </span>
        </div>

        {currentMode === "login" ? (
          <LoginForm onSwitch={() => setCurrentMode("signup")} onClose={onClose} />
        ) : (
          <SignupForm onSwitch={() => setCurrentMode("login")} onClose={onClose} />
        )}
      </div>
    </div>
  )
}

export default AuthModal

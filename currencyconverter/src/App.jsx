import { useState } from 'react'
import {InputBox} from './Components'
import useCurrencyInfo from './Hooks/useCurrencyInfo'


function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from) || {}
  const options = Object.keys(currencyInfo)

  const swap = () => {
    // swap currencies and their amounts
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () => {
    const rate = currencyInfo[to] ?? 1
    setConvertedAmount(amount * rate)
  }

  return (
    <div
      className="fixed inset-0 w-full h-full flex justify-center items-center bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        backgroundSize: "cover",
      }}
    >
      <div className="w-full h-full overflow-auto flex items-center justify-center">
        <div className="w-full max-w-md mx-4 border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}
          >
            <div className="w-full mb-1 text-center font-semibold text-lg text-black/70">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(val) => setAmount(val)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4 text-center font-semibold text-lg text-black/70">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
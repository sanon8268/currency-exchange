import React, { useState } from "react"
import InputBox from "./components/Inputbox"
import useCurrencyInfo from "./hooks/useCurrencyInfo"

function App() {

  const [amount,setAmount]=useState('');
  const [from,setFrom]=useState("inr");
  const [to,setTo]=useState("usd");
  const [convertAmount,setConvertAmount]=useState('');

  const currencyInfo=useCurrencyInfo(from);
  const options=Object.keys(currencyInfo);

  const swap=()=>{
      setFrom(to)
      setTo(from)
      setConvertAmount(amount)
      setAmount(convertAmount)
  }

const convert=()=>{
  setConvertAmount(amount*currencyInfo[to])
}
  return (
    <div className="w-full flex flex-wrap justify-center">
      <h1 className='text-[#ffffff] text-4xl bg-[#6ED0DA] w-1/2 text-center mt-6 p-1 rounded-lg'>Currency Converter - AN0N</h1>
      <div className="w-full mt-32">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setFrom(currency)}
                                onAmountChange={(amount)=>setAmount(amount)}
                                selectCurrency={from}
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
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setTo(currency)}
                                selectCurrency={to}
                                // onAmountChange={(amount)=>setAmount(amount)}
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


/*////////////// NOTES ////////////////

    const currencyInfo=useCurrencyInfo(from);
    const options=Object.keys(currencyInfo);

    Object.keys jo hai currencyInfo ek object ke keys ko legaa ey js khud provide karta hai


    const swap=()=>{
    swap button dabaane p strings change bhii to honee chahiye    
    from ko to me change kar dega aur ot ko from me  
  }


*/
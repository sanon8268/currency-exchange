import React, { useId } from 'react'


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency="inr",
    
    className = "",
}) {

    const amountId=useId();
   

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountId} className="text-black/40 mb-2 inline-block">
                    {label} {/*//to hoga ya from*/}
                </label>
                <input
                    id={amountId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Enter Amount"
                    value={amount}
                    onChange={(e)=>onAmountChange&&onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=>onCurrencyChange&&onCurrencyChange(e.target.value)}
                >
                    
                    {currencyOptions.map((currency)=>(
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;


//Notes
/********
 * 
onChange={(e)=>onAmountChange&&onAmountChange(Number(e.target.value))}
to yaha kya kya ho raha hai baat karte hai jaisee hi input change hoga 

onAmountChange&&onAmountChange(Number(e.target.value) here using && to be on safe sides
like agar onAmmountChange agar ye avaialbe hai to set karneg values ko
onAmountChange && bas ek checker hai to check ki exist kar rhaa ki nhii

taking Number -> (Number(e.target.value) as js kabhi kabhi string bhi bhej deta hai inputs me to usko number me convert karne ke liyee

*
onChange={(e)=>onCurrencyChange&&onCurrencyChange(e.target.value)}
currency to string hi aayega so no chnage or no adding of Number
*
{currencyOptions.map((currency)=>{
                        <option key={} value="usd">
                            usd
                        </option>
})}

map used to loop a array and kuch function perform karke kuch naya array return karta hai
next is ki jab bhii is tarah se value repeat karta hai to react bahut hit karta hai
so we have to use a key,like some index or something
{Without a key prop, React may encounter performance issues and potentially incorrect behaviour}
*
const amountId=useId;
kuch nhii bas random values dega jisko iD me use karte sakte hai ab id daal rahe to usko label me bhii dalna hoga
aur haa useId ka use karke keys me nhii daalna chhaiye react team says this

not necessary just used for uniqueness

  
 **************/
import React, {useId} from "react";


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "Usd",
    disabledAmount = false,
    disabledCurrency = false,
    className = "",
}) {
   
    const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={disabledAmount}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    value={selectCurrency}
                    disabled={disabledCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    
                >
                    
                       {currencyOptions.map((currency) => (
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

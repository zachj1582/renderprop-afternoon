import React from 'react'
import CurrencyConverter from "./CurrencyConverter"


const CurrencyDisplay = (props)=>(
    <p>
              US Dollar ${props.amount.toFixed(2)} - {props.currencyData.name}{" "}
              {props.currencyData.symbol}
              {(props.amount * props.currencyData.rate).toFixed(2)}
            </p>
)

export default CurrencyDisplay
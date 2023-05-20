import React from 'react'

import { InputAmount, SelectCountry, SwitchCurrency } from "./Index"

const Body = () => {
    return (
        <div>
            <div
            style={{ boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)" }}
             className='flex items-center gap-6 flex-col lg:flex-row px-6 py-6 sm:py-24 sm:px-20 border-black border rounded-lg'>
                <InputAmount />
                <SelectCountry />
                <SwitchCurrency />
                <SelectCountry />
            </div>
        </div>
    )
}

export default Body
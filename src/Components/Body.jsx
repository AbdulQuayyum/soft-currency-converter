import React from 'react'

import { InputAmount, SelectCountry, SwitchCurrency } from "./Index"

const Body = () => {
    return (
        <div>
            <div className='flex items-center gap-6 flex-col lg:flex-row px-6 py-6 sm:py-12 sm:px-20 border-black border rounded-lg'>
                <InputAmount />
                <SelectCountry />
                <SwitchCurrency />
                <SelectCountry />
            </div>
        </div>
    )
}

export default Body
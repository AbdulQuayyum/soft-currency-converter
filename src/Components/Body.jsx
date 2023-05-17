import React from 'react'

import { InputAmount, SelectCountry, SwitchCurrency } from "./Index"

const Body = () => {
    return (
        <div>
            <div className='flex sm:flex-col flex-row px-10 py-6 sm:py-12 sm:px-20 border-black border rounded-lg'>
                <InputAmount />
                <SelectCountry />
                <SwitchCurrency />
            </div>
        </div>
    )
}

export default Body
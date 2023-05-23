import { useContext, useEffect, useState } from 'react'

import { InputAmount, SelectCountry, SwitchCurrency } from "../Components/Index"
import { Footer, Navbar } from "../Components/Index"

const MainLayout = () => {
    const [ fromCurrency, setFromCurrency ] = useState("")
    const [ toCurrency, setToCurrency ] = useState("")
    // const { fromCurrency, setFromCurrency, toCurrency, setToCurrency, firstAmount } = useContext();

    return (
        <div className='relative z-10 min-h-screen flex justify-between items-center flex-col max-w-7xl mx-auto sm:px-16 px-6'>
            <Navbar />
            <div
                style={{ boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)" }}
                className='flex items-center gap-6 flex-col lg:flex-row px-6 py-6 sm:py-24 sm:px-20 border-black border rounded-lg'>
                <InputAmount />
                <SelectCountry value={fromCurrency} setValue={setFromCurrency} label="From" />
                <SwitchCurrency />
                <SelectCountry value={toCurrency} setValue={setToCurrency} label="To" />
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout
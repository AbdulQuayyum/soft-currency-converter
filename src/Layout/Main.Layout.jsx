import React from 'react'
import { Footer, Navbar } from "../Components/Index"

const MainLayout = () => {
    return (
        <div className='relative z-10 min-h-screen flex justify-between items-center flex-col max-w-7xl mx-auto sm:px-16 px-6'>
            <Navbar />
            <Footer />
        </div>
    )
}

export default MainLayout
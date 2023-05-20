import React, { useState } from 'react'
import Select from "react-select"

const SelectCountry = (props) => {
    const [isClearable, setIsClearable] = useState(true)
    const [isSearchable, setIsSearchable] = useState(true)

    const customStyles = {
        control: (provided) => ({
            ...provided,
            cursor: "pointer",
            background: '#F7F7F7',
            borderColor: "transparent",
            borderRadius: "12px",
            minHeight: '48px',
            padding: "0px 10px"
        })
    };

    return (
        <div className=' w-full'>
            <Select
                styles={customStyles}
                className=" lg:w-[220px] xl:w-[300px] w-full"
                classNamePrefix="select"
                //   defaultValue={colourOptions[0]}
                isClearable={isClearable}
                isSearchable={isSearchable}
                name="countries"
            //   options={colourOptions}
            />
        </div>
    )
}

export default SelectCountry
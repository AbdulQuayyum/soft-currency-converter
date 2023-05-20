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
        <div>
            <Select
                styles={customStyles}
                className="basic-single"
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
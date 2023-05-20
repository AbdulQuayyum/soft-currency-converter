import React, { useState } from 'react'
import Select from "react-select"
import UseAxios from "../Utilities/UseAxios"
import countryData from "../Data/allcountries.json"

const SelectCountry = (props) => {
    const { label, value, setValue } = props
    const [data, error, loaded] = UseAxios("https://raw.githubusercontent.com/AbdulQuayyum/soft-currency-converter/Source/src/Data/allcountries.json")
    const [isClearable, setIsClearable] = useState(true)
    const [isSearchable, setIsSearchable] = useState(true)

    // console.log(data)
    // console.log(countryData)

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

    const DataFilter = data.filter(item => "currencies" in item);
    const DataCountries = DataFilter.map(item => {
        return `${item.flag} ${Object.keys(item.currencies)[0]} - ${item.name.common}`
    });
    
    // console.log(DataCountries)

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
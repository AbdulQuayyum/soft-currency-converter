import React, { useState } from 'react'
import Select from "react-select"
import UseAxios from "../Utilities/UseAxios"
// import countryData from "../Data/allcountries.json"

const SelectCountry = (props) => {
    const [value, setValue] = useState()
    // const { label, value, setValue } = props
    const [data, error, loaded] = UseAxios("https://raw.githubusercontent.com/AbdulQuayyum/data.json/Source/country-flag.json")
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

    if (error) {
        return "Something went wrong!"
    }

    // const DataFilter = data.filter(item => "currencies" in item);
    // const DataCountries = DataFilter.map(item => {
    //     return `${item.flag} ${Object.keys(item.currencies)[0]} - ${item.name.common}`
    // });

    // console.log(DataCountries)

    return (
        <div className=' w-full'>
            <Select
                styles={customStyles}
                className=" lg:w-[220px] xl:w-[300px] w-full"
                classNamePrefix="select a country"
                value={data?.code}
                onChange={(event) => { setValue(event?.code) }}
                isClearable={isClearable}
                isSearchable={isSearchable}
                name="countries"
                options={data}
                formatOptionLabel={country => (
                    <div className="flex items-center gap-3 cursor-pointer">
                        <img src={country?.flag} height="30px" width="30px" alt={country?.country} />
                        <span>{country?.country}</span>
                    </div>
                )}
                getOptionLabel={(data) => data?.country}
                getOptionValue={(data) => data?.code}
            />
        </div>
    )
}

export default SelectCountry
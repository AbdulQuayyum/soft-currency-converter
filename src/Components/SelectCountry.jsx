import React, { useState } from 'react'
import Select from "react-select"
import UseAxios from "../Utilities/UseAxios"
import { SkeletonCard } from "../Components/Index"
// import countryData from "../Data/allcountries.json"

const SelectCountry = (props) => {
    const { label, value, setValue } = props
    // const [data, error, loaded] = UseAxios("https://raw.githubusercontent.com/AbdulQuayyum/data.json/Source/country-flag.json")
    const [data, error, loaded] = UseAxios("https://raw.githubusercontent.com/AbdulQuayyum/data.json/Source/allcountries.json")
    const [isClearable, setIsClearable] = useState(true)
    const [isSearchable, setIsSearchable] = useState(true)

    console.log(value)
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

    if (!loaded) {
        return (
            <SkeletonCard />
        )
    }

    if (error) {
        return "Something went wrong!"
    }

    const DataFilter = data.filter(item => "currencies" in item);
    // console.log(DataFilter)
    const DataCountries = DataFilter.map(item => ({
        // return (
          "name": `${Object.keys(item.currencies)[0]} - ${item.name.common}`,
          "flag": `${item?.flags?.svg}`
        // )
        // return `${item?.flags?.svg} ${Object.keys(item.currencies)[0]} - ${item.name.common}`
    }))
    // console.log(DataCountries)

    // const NewData = Object.keys(DataCountries).map(key => ({
    //     id: key,
    //     country: DataCountries[key]
    // }))

    // console.log(NewData)

    return (
        <div className=' w-full'>
            {/* <span>{label}</span> */}
            <Select
                styles={customStyles}
                className=" lg:w-[220px] xl:w-[300px] w-full"
                classNamePrefix="select a country"
                value={DataCountries?.name}
                onChange={(event) => { setValue(event?.name) }}
                isClearable={isClearable}
                isSearchable={isSearchable}
                name="countries"
                options={DataCountries}
                formatOptionLabel={country => (
                    <div className="flex items-center gap-3 cursor-pointer">
                        <img src={country?.flag} height="30px" width="30px" alt={country?.name} />
                        <span>{country?.name}</span>
                    </div>
                )}
                getOptionLabel={(DataCountries) => DataCountries?.name}
                getOptionValue={(DataCountries) => DataCountries?.name}
            />
        </div>
    )
}

export default SelectCountry
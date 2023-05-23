import { useContext } from "react";
import { CurrencyContext } from '../Contexts/CurrencyContext'
import { TbArrowsExchange } from "react-icons/tb"

const SwitchCurrency = () => {
    const { fromCurrency, setFromCurrency, toCurrency, setToCurrency } = useContext(CurrencyContext)

    const HandleSwitch = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    }
    return (
        <div>
            <button className='bg-none' onClick={HandleSwitch}>
                <TbArrowsExchange size={24} />
            </button>
        </div>
    )
}

export default SwitchCurrency
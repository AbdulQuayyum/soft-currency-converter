import React from 'react'

const InputAmount = () => {
    return (
        <div>
            <input
                type="number"
                // value={Title}
                // onChange={(e) => setTitle(e.target.value)}
                placeholder="Add an amount"
                className="p-2 text-lg transition-all duration-500 border-b-2 border-gray-200 outline-none dark:bg-transparent dark:border-2 dark:rounded-lg dark:border-white"
            />
        </div>
    )
}

export default InputAmount
import React from 'react'

const ToggleButton = ({ isChecked, onToggle }) => {

    const handleCheckboxChange = () => {
        onToggle(!isChecked)
    }

    return (
        <>
            <label className='themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center'>
                <input
                    type='checkbox'
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className='sr-only'
                />
                <span className='label flex items-center text-sm font-medium text-white'>
                    To Be Done
                </span>
                <span
                    className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${isChecked ? 'bg-[#68b492]' : 'bg-[#CCCCCE]'
                        }`}
                >
                    <span
                        className={`dot h-6 w-6 rounded-full bg-white duration-200 ${isChecked ? 'translate-x-[28px]' : ''
                            }`}
                    ></span>
                </span>
                <span className='label flex items-center text-sm font-medium text-white'>
                    Completed
                </span>
            </label>
        </>
    )
}

export default ToggleButton
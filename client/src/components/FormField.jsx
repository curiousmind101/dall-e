import React from 'react'

const FormField = ({labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe }) => {
  return (
    <div>
       <div className='flex items-center gap-2 mb-2'>
          <label
            htmlFor={name}
            className = "block text-sm font font-medium text-gray-800"> 
            {labelName}
          </label>
          {isSurpriseMe && (
            <button 
            type='button'
            onClick={handleSurpriseMe}
            className='font-semibold text-xs bg-[#ececf1] text-black rounded-[5px] py-1 px-2'>
            Surprise Me
            </button>
          )}
       </div>
          <div>
             <input
               type={type}
               name={name}
               placeholder={placeholder}
               value={value}
               onChange={handleChange}
               required
               className='bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring[#4646FF] focus:border-[4649ff] outline-none block w-full p-3'
             ></input>
          </div>
    </div>
  )
}

export default FormField
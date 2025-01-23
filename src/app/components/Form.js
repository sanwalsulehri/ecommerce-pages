import React from 'react'

const Form = () => {
  return (
    <>
     <div className=" md:col-span-2   rounded-lg ">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact us</h2>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, adipiscing rhoncus litora ut dui morbi, mattis nescetur amet, ut justo
              primis, fusce purus tellus hac risus. Vehicula nullam, non suscipit.
            </p>

            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 h-[46px] py-2 border text-[14px] border-[#D9D9D9] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full h-[46px] px-4 py-2 text-[14px] border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className='relative'>
                <label className='absolute text-[14px] text-[#737373] pl-3 pt-1'>
                  Please Select Enquiry
                </label>
                <select 
                  className="w-full h-[50px] pt-4 px-3 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none text-[14px]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 7.5L10 12.5L15 7.5' stroke='%23737373' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 16px center'
                  }}
                >
                  <option value="enquiry" className="text-[14px]">Enquiry</option>
                </select>
              </div>
              <div className="relative">
                <textarea
                  placeholder="Write your message"
                  rows="4"
                  className="w-full px-4 py-2 pb-28 border border-[#D9D9D9] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <p className="absolute bottom-3 right-3 text-sm text-[#BDBFC3]">
                  Max character count: 250
                </p>
              </div>
              <div className='flex justify-end w-full'>
              <button
                type="submit"
                className="w-[100%] md:w-[40%]  bg-[#213550] text-white py-3 px-6 rounded-full transition-colors duration-200"
              >
                
                Submit
              </button>
              </div>
            </form>
          </div>
    </>
  )
}

export default Form
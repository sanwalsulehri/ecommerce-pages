import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        
        {/* Mobile Help/Contact Toggle */}
        <div className="md:hidden mb-6">
          <select 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='6' viewBox='0 0 12 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 0.5L6 5.5L11 0.5' stroke='%23737373' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 16px center'
            }}
          >
            <option className='text-[#232936]'>Help / Contact us</option>
          </select>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-3 gap-8">
          {/* Contact Form - Appears first on mobile */}
          <div className="order-1 md:order-2 md:col-span-2 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact us</h2>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, adipiscing rhoncus litora ut dui morbi, mattis nescetur amet, ut justo
              primis, fusce purus tellus hac risus. Vehicula nullam, non suscipit.
            </p>

            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full  px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className='relative h-[50px]'>
                <label className='absolute text-[#737373] pl-3 pt-1'>
                  Please Select Enquiry
                </label>
                <select 
                  className="w-full pb-4 pt-8 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='6' viewBox='0 0 12 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 0.5L6 5.5L11 0.5' stroke='%23737373' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 16px center'
                  }}
                >
                  <option value="enquiry">Enquiry</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Write your message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <p className="text-right text-sm text-gray-500 mt-1">Max character count: 250</p>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-3 px-6 rounded-md hover:bg-blue-800 transition-colors duration-200"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Help Section - Appears second on mobile */}
        
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
'use client'
import React, { useState } from 'react';
import Form from './components/Form';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import ShippingReturns from './components/ShippingReturns';

const Page = () => {
  const tabs = [
    { label: 'Contact Us', component: <Form />, key: 'contact' },
    { label: 'Privacy & Cookies Policy', component: <PrivacyPolicy />, key: 'privacy' },
    { label: 'Terms & Conditions', component: <TermsConditions />, key: 'terms' },
    { label: 'Shipping & Returns', component: <ShippingReturns />, key: 'shipping' },
    { label: 'How to order?', component: '', key: 'order' },
    { label: 'Create Quotations', component: '', key: 'quotations' },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].key);

  const renderActiveComponent = () => {
    const activeTabObject = tabs.find(tab => tab.key === activeTab);
    return activeTabObject ? activeTabObject.component : null;
  };

  return (
    <>
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="md:hidden mb-6">
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 7.5L10 12.5L15 7.5' stroke='%23737373' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 16px center'
            }}
          >
            <option className='text-[#232936]'>Help / Contact us</option>
          </select>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1 rounded-lg max-w-xs">
            <nav className="hidden md:block space-y-1 mb-8 border text-[#232936] text-[14px] py-2 pr-3">
              {tabs.map(tab => (
                <a
                  key={tab.key}
                  href="#"
                  className={`block py-2 border-l-4 px-3 ${activeTab === tab.key ? 'bg-[#F7F7F7] border-[#213550]' : 'border-transparent'}`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  {tab.label}
                </a>
              ))}
            </nav>

            <div className="md:block mt-[40px] bg-[#F7F7F7] px-4 py-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Need Help?</h3>
              <p className="text-[#6B7177] text-[14px] mb-4">
                Lorem ipsum dolor sit amet, adipiscing rhoncus litora ut dui morbi, mattis nescetur amet
              </p>
              <div className="space-y-3 text-[14px]">
                <div className="flex items-center text-[#232936]">
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.8333 10.37V12.12C12.834 12.2825 12.8007 12.4433 12.7356 12.5921C12.6705 12.741 12.5751  12.8746 12.4554 12.9844C12.3357 13.0942 12.1943 13.1779 12.0404 13.2299C11.8865 13.282 11.7235 13.3013 11.5617 13.2867C9.76665 13.0916 8.04242 12.4783 6.5275 11.4958C5.11807 10.6002 3.92311 9.40527 3.0275 7.99583C2.04166 6.47404 1.42814 4.74141 1.23667 2.93833C1.22209 2.77702 1.24126 2.61444 1.29296 2.46095C1.34466 2.30745 1.42775 2.1664 1.53695 2.04678C1.64615 1.92716 1.77905 1.83158 1.92721 1.76614C2.07537 1.7007 2.23553 1.66682 2.3975 1.66667H4.1475C4.4306 1.66388 4.70505 1.76413 4.9197 1.94873C5.13434 2.13333 5.27455 2.38968 5.31417 2.67C5.38803 3.23004 5.52501 3.77992 5.7225 4.30917C5.80099 4.51796 5.81797 4.74487 5.77145 4.96301C5.72492 5.18116 5.61684 5.3814 5.46 5.54L4.71917 6.28083C5.54958 7.74124 6.75877 8.95043 8.21917 9.78083L8.96 9.04C9.1186 8.88316 9.31884 8.77508 9.53699 8.72856C9.75513 8.68203 9.98205 8.69902 10.1908 8.7775C10.7201 8.97499 11.27 9.11197 11.83 9.18583C12.1134 9.22581 12.3722 9.36854 12.5571 9.58687C12.7421 9.80521 12.8404 10.0839 12.8333 10.37Z" stroke="#232936" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <p className='ml-[16px]'>0800 111 1111</p>
                </div>
                <div className="flex items-center text-[#232936]">
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.33341 2.83333H11.6667C12.3084 2.83333 12.8334 3.35833 12.8334 4V11C12.8334 11.6417 12.3084 12.1667 11.6667 12.1667H2.33341C1.69175 12.1667 1.16675 11.6417 1.16675 11V4C1.16675 3.35833 1.69175 2.83333 2.33341 2.83333Z" stroke="#232936" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.8334 4L7.00008 8.08333L1.16675 4" stroke="#232936" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <p className='ml-[16px]'>support@email.com</p>
                </div>
                <div className="flex items-center text-[#232936]">
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    < path d="M12.25 7.20833C12.252 7.97826 12.0721 8.73777 11.725 9.425C11.3134 10.2485 10.6807 10.9412 9.89768 11.4254C9.11467 11.9096 8.21231 12.1663 7.29167 12.1667C6.52174 12.1687 5.76223 11.9888 5.075 11.6417L1.75 12.75L2.85833 9.425C2.51121 8.73777 2.33133 7.97826 2.33333 7.20833C2.33369 6.28769 2.59036 5.38533 3.07459 4.60232C3.55882 3.81931 4.25148 3.18658 5.075 2.775C5.76223 2.42788 6.52174 2.24799 7.29167 2.25H7.58333C8.7992 2.31708 9.94761 2.83028 10.8087 3.69134C11.6697 4.55239 12.1829 5.7008 12.25 6.91667V7.20833Z" stroke="#232936" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <p className='ml-[16px]'>Talk to our experts on live chat</p>
                </div>
              </div>
            </div>
          </div>
          {renderActiveComponent()}
        </div>
      </div>
    </>
  );
};

export default Page;
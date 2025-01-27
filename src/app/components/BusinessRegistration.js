"use client"
import React from 'react';

const BusinessRegistration = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      {/* Breadcrumb - Hide on mobile */}
      <div className="hidden sm:flex items-center text-sm text-gray-500 mb-6">
        <span>ข้อมูลทั่วไป</span>
        <span className="mx-2">{'>'}</span>
        <span>ข้อมูลส่วนตัว</span>
        <span className="mx-2">{'>'}</span>
        <span>เปลี่ยนเป็นนิติบุคคล</span>
      </div>

      {/* Back Button */}
      <button className="flex items-center text-[#0067C7] mb-4 sm:mb-6">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 8H1M1 8L8 15M1 8L8 1" stroke="#0067C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="ml-2">ร้านค้าในโปรไฟล์</span>
      </button>

      {/* Title */}
      <h1 className="text-lg sm:text-xl text-[#232936] font-medium mb-6 sm:mb-8">เปลี่ยนเป็นนิติบุคคล</h1>

      {/* Form Container */}
      <div className="max-w-3xl">
        {/* Company Information Section */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-base sm:text-lg text-[#232936] font-medium mb-3 sm:mb-4">ข้อมูลบริษัท</h2>
          <div className="space-y-3 sm:space-y-4">
            <input
              type="text"
              placeholder="ชื่อบริษัท (Company Name) *"
              className="w-full border rounded px-3 py-2 text-sm sm:text-base"
            />
            <input
              type="text"
              placeholder="เลขที่ผู้เสียภาษี (Tax ID) *"
              className="w-full border rounded px-3 py-2 text-sm sm:text-base"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <input
                type="text"
                placeholder="เบอร์บริษัท (Company Phone No.) *"
                className="w-full border rounded px-3 py-2 text-sm sm:text-base"
              />
              <input
                type="email"
                placeholder="อีเมลบริษัท (Company Email) *"
                className="w-full border rounded px-3 py-2 text-sm sm:text-base"
              />
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-base sm:text-lg text-[#232936] font-medium mb-3 sm:mb-4">ที่อยู่สำหรับการจัดส่งสินค้า</h2>
          <div className="space-y-3 sm:space-y-4">
            <input
              type="text"
              placeholder="บ้านเลขที่, อาคาร, ถนน"
              className="w-full border rounded px-3 py-2 text-sm sm:text-base"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-[#737373]">
              <div className="relative">
                <select className="w-full border rounded px-3 py-2 appearance-none bg-white text-sm sm:text-base">
                  <option value="">จังหวัด</option>
                </select>
                <div className="absolute border-l pr-2 right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="20" height="20"  className='ml-2' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="#737373" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="relative">
                <select className="w-full border rounded px-3 py-2 appearance-none bg-white text-sm sm:text-base">
                  <option value="">อำเภอ/เขต</option>
                </select>
                <div className="absolute border-l pr-2 right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="20" height="20"  className='ml-2' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="#737373" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="relative">
                <select className="w-full border rounded px-3 py-2 appearance-none bg-white text-sm sm:text-base">
                  <option value="">ตำบล/แขวง</option>
                </select>
                 <div className="absolute border-l pr-2 right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="20" height="20"  className='ml-2' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="#737373" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="relative">
                <select className="w-full border rounded px-3 py-2 appearance-none bg-white text-sm sm:text-base">
                  <option value="">รหัสไปรษณีย์</option>
                </select>
                <div className="absolute border-l pr-2 right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="20" height="20"  className='ml-2' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="#737373" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Person Section */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-base sm:text-lg text-[#232936] font-medium mb-3 sm:mb-4">ข้อมูลผู้ติดต่อ</h2>
          <div className="flex flex-col sm:flex-row  justify-between gap-3 sm:gap-4">
            <div className="w-full sm:w-auto">
              <label className="block text-sm text-[#232936] mb-1">ชื่อ</label>
              <input
                type="text"
                className="w-full sm:w-[200px] border rounded px-3 py-2 text-sm sm:text-base"
              />
            </div>
            <div className="w-full sm:w-auto">
              <label className="block text-sm text-[#232936] mb-1">นามสกุล</label>
              <input
                type="text"
                className="w-full sm:w-[200px] border rounded px-3 py-2 text-sm sm:text-base"
              />
            </div>
            <div className="w-full sm:w-auto">
              <label className="block text-sm text-[#232936] mb-1">เบอร์โทรศัพท์</label>
              <input
                type="text"
                className="w-full sm:w-[120px] border rounded px-3 py-2 text-sm sm:text-base"
              />
            </div>
            <div className="w-full sm:w-auto">
              <div className="flex flex-wrap  sm:flex-nowrap gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="admin" className="text-sm sm:text-base">Admin</label>
                  <input type="checkbox" className="w-4 h-4 mx-auto mt-4" id="admin" />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="purchaser" className="text-sm sm:text-base">ผู้สั่งซื้อสินค้า</label>
                  <input type="checkbox" className="w-4 h-4 mx-auto mt-4" id="purchaser" />
                </div>
              </div>
            </div>
          </div>
          <button className="text-[#0067C7] w-full text-center mt-3 sm:mt-4 text-sm sm:text-base bg-[#F4F9FF] py-2"> เพิ่มแถวใหม่</button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-4">
          <button className="order-2 sm:order-1 w-full sm:w-auto px-6 sm:px-20 py-3 border rounded-full border-[#213550] text-sm sm:text-base">
            ยกเลิก
          </button>
          <button className="order-1 sm:order-2 w-full sm:w-auto px-6 sm:px-16 py-2 bg-[#E6E8EC] text-[#42526E] rounded-full text-sm sm:text-base">
            ส่งข้อมูล
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessRegistration; 
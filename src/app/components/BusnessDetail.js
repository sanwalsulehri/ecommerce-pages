"use client";

import React from "react";

const BusnessDetail = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <span>บัญชีของฉัน</span>
        <span className="mx-2">{">"}</span>
        <span>องค์กรของฉัน</span>
      </div>

      {/* Title Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-lg sm:text-xl font-medium text-gray-900">องค์กรของฉัน</h1>
        <button className="text-blue-600">แก้ไข</button>
      </div>

      {/* Organization Details */}
      <div className="mb-8">
        <p className="text-gray-600 text-sm mb-6">
          Lorem ipsum dolor sit amet, adipiscing rhoncus litora ut dui morbi, mattis nascetur amet, et justo primis, fusce purus tellus hac risus.
          Vehicula nullam, non suscipit sit vivamus, quam vel nostra.
        </p>
        <div className=" gap-6 mb-6 space-y-6 ">
          <div className="">
            <h2 className="font-medium text-gray-[#232936] mb-4">ข้อมูลบริษัท</h2>
            <div className="md:border-none md:text-normal rounded-md border text-[14px] py-1 px-2">
            <p className=" text-sm text-[#737373]">ชื่อบริษัท (Company Name):</p>
            <p className="text-gray-800 ">FYI Technology Company Co., Ltd.</p>
            </div>
            <div className="mt-6 md:border-none md:text-normal rounded-md border text-[14px] py-1 px-2">
            <p className=" text-sm text-[#232936]">เลขที่ผู้เสียภาษี (Tax ID):</p>
            <p className="text-gray-800">6703040008</p>
            </div>
            <div className="md:flex md:space-x-36">
                <div className="mt-6 md:border-none rounded-md border md:text-normal text-[14px] py-1 px-2">
            <p className="mt-2 text-sm w-[220px] text-gray-600">เบอร์บริษัท (Company Phone No.):</p>
            <p className="text-gray-800">0901234567</p>
            </div>
            <div className="mt-6 md:border-none rounded-md border md:text-normal text-[14px] py-1 px-2">
            <p className="mt-2 text-sm text-gray-600">อีเมลบริษัท (Company Email):</p>
            <p className="text-gray-800">patcharee.p@fyi.co.th</p>
            </div>
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-[18px] text-[#232936]">ที่อยู่สำหรับการจัดส่งสินค้า</h2>
            <div className=" mt-6 md:border-none rounded-md border md:text-normal text-[14px] py-1 px-2 ">
            <p className="mt-2 text-sm text-gray-600">บ้านเลขที่, อาคาร, ถนน:</p>
            <p className="text-gray-800">100/10 ถ. พระรามที่ 4</p>
            </div>
            <div className="md:flex md:space-x-36">
                <div className="relative mt-6 md:border-none rounded-md border md:text-normal text-[14px] py-1 px-2 ">
            <p className="mt-2 text-sm w-[220px] text-gray-600">จังหวัด:</p>
            <p className="text-gray-800">กรุงเทพมหานคร</p>
            <div className=" block md:hidden absolute border-l pr-2 right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="20" height="20"  className='ml-2' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="#737373" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
            </div>
            <div  className="relative mt-6 md:border-none rounded-md border md:text-normal text-[14px] py-1 px-2 ">
            <p className="mt-2 text-sm text-gray-600">อำเภอ/เขต:</p>
            <p className="text-gray-800">คลองเตย</p>
            <div className=" block md:hidden absolute border-l pr-2 right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="20" height="20"  className='ml-2' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="#737373" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
            </div>
            </div>
            <div className="md:flex md:space-x-36 mt-6">
                <div className="relative mt-6 md:border-none rounded-md border md:text-normal text-[14px] py-1 px-2 ">
            <p className="mt-2 w-[220px] text-sm text-gray-600">ตำบล/แขวง:</p>
            <p className="text-gray-800">คลองเตย</p>
            <div className=" block md:hidden absolute border-l pr-2 right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="20" height="20"  className='ml-2' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="#737373" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
            </div>
            <div className="relative mt-6 md:border-none rounded-md border md:text-normal text-[14px] py-1 px-2 ">
            <p className="mt-2 text-sm text-gray-600">รหัสไปรษณีย์:</p>
            <p className="text-gray-800">10110</p>
            <div className=" block md:hidden absolute border-l pr-2 right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="20" height="20"  className='ml-2' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="#737373" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div>
        <h2 className="font-semibold text-[18px] text-gray-800 mb-4">ข้อมูลผู้ติดต่อ</h2>
        <div className="w-full">
  {/* Table Header */}
  <div className="hidden md:flex w-full border-b">
    <div className="flex-1 py-2 px-4 text-sm font-medium text-gray-600">อีเมล</div>
    <div className="flex-1 py-2 px-4 text-sm font-medium text-gray-600">ชื่อ</div>
    <div className="flex-1 py-2 px-4 text-sm font-medium text-gray-600">เบอร์โทรศัพท์</div>
    <div className="w-24 py-2 px-4 text-sm font-medium text-gray-600 text-center">Admin</div>
    <div className="w-32 py-2 px-4 text-sm font-medium text-gray-600 text-center">ผู้สั่งซื้อสินค้า</div>
  </div>

  {/* Table Body */}
  <div className="divide-y">
    {/* Row 1 */}
    <div className="md:flex  w-full border md:border-none md:p-0 p-4">
        <div className="flex justify-end md:hidden">
        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.66406 4.00033V2.33366C3.66406 1.89163 3.83966 1.46771 4.15222 1.15515C4.46478 0.842587 4.8887 0.666992 5.33073 0.666992H8.66406C9.10609 0.666992 9.53001 0.842587 9.84257 1.15515C10.1551 1.46771 10.3307 1.89163 10.3307 2.33366V4.00033M12.8307 4.00033V15.667C12.8307 16.109 12.6551 16.5329 12.3426 16.8455C12.03 17.1581 11.6061 17.3337 11.1641 17.3337H2.83073C2.3887 17.3337 1.96478 17.1581 1.65222 16.8455C1.33966 16.5329 1.16406 16.109 1.16406 15.667V4.00033H12.8307Z" stroke="#232936" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

        </div>
        <div className="flex-1 ">
        <div className="block md:hidden py-2  text-sm font-medium text-[#676F78]">อีเมล</div>
      <div className="flex-1 py-3 px-4 text-sm text-gray-800 md:border-none border">SMB2331@officebigbox.com</div>
      </div>
      <div className="mt-4 md:mt-0  flex-1">
      <div className="block md:hidden py-2  text-sm font-medium text-[#676F78]">ชื่อ</div>
      <div className="flex-1 py-3 px-4 text-sm text-gray-800 md:border-none border">จุฑามาศ เตชะขจร</div>
      </div>
      <div className=" flex-1">
      <div className="block md:hidden  py-2  text-sm font-medium text-[#676F78]">เบอร์โทรศัพท์</div>
      <div className="flex-1 py-3 px-4 text-sm text-gray-800 md:border-none border">0991001000</div>
      </div>
      <div className="w-32 py-3  flex md:block  justify-between md:text-center ">
      <input type="checkbox" checked readOnly className="accent-blue-600" />
      <div className="w-24 md:hidden block text-sm font-medium text-gray-600 ">Admin</div>
      </div>
      <div className="w-40 md:w-32 py-3 flex md:block  justify-between md:text-center">
      <input type="checkbox" className="accent-blue-600" readOnly />
      <div className="w-32  md:hidden block text-sm font-medium text-gray-600 ">ผู้สั่งซื้อสินค้า</div>
      </div>
    </div>

    {/* Row 2 */}
    <div className="md:flex  w-full border md:border-none md:p-0 p-4">
        <div className="flex justify-end md:hidden">
        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.66406 4.00033V2.33366C3.66406 1.89163 3.83966 1.46771 4.15222 1.15515C4.46478 0.842587 4.8887 0.666992 5.33073 0.666992H8.66406C9.10609 0.666992 9.53001 0.842587 9.84257 1.15515C10.1551 1.46771 10.3307 1.89163 10.3307 2.33366V4.00033M12.8307 4.00033V15.667C12.8307 16.109 12.6551 16.5329 12.3426 16.8455C12.03 17.1581 11.6061 17.3337 11.1641 17.3337H2.83073C2.3887 17.3337 1.96478 17.1581 1.65222 16.8455C1.33966 16.5329 1.16406 16.109 1.16406 15.667V4.00033H12.8307Z" stroke="#232936" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

        </div>
        <div className="flex-1 ">
        <div className="block md:hidden py-2  text-sm font-medium text-[#676F78]">อีเมล</div>
      <div className="flex-1 py-3 px-4 text-sm text-gray-800 md:border-none border">SMB2331@officebigbox.com</div>
      </div>
      <div className="mt-4 md:mt-0  flex-1">
      <div className="block md:hidden py-2  text-sm font-medium text-[#676F78]">ชื่อ</div>
      <div className="flex-1 py-3 px-4 text-sm text-gray-800 md:border-none border">จุฑามาศ เตชะขจร</div>
      </div>
      <div className=" flex-1">
      <div className="block md:hidden  py-2  text-sm font-medium text-[#676F78]">เบอร์โทรศัพท์</div>
      <div className="flex-1 py-3 px-4 text-sm text-gray-800 md:border-none border">0991001000</div>
      </div>
      <div className="w-32 py-3  flex md:block  justify-between md:text-center ">
      <input type="checkbox" checked readOnly className="accent-blue-600" />
      <div className="w-24 md:hidden block text-sm font-medium text-gray-600 ">Admin</div>
      </div>
      <div className="w-40 md:w-32 py-3 flex md:block  justify-between md:text-center">
      <input type="checkbox" className="accent-blue-600" readOnly />
      <div className="w-32  md:hidden block text-sm font-medium text-gray-600 ">ผู้สั่งซื้อสินค้า</div>
      </div>
    </div>

    {/* Row 3 */}
    <div className="md:flex  w-full border md:border-none md:p-0 p-4">
        <div className="flex justify-end md:hidden">
        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.66406 4.00033V2.33366C3.66406 1.89163 3.83966 1.46771 4.15222 1.15515C4.46478 0.842587 4.8887 0.666992 5.33073 0.666992H8.66406C9.10609 0.666992 9.53001 0.842587 9.84257 1.15515C10.1551 1.46771 10.3307 1.89163 10.3307 2.33366V4.00033M12.8307 4.00033V15.667C12.8307 16.109 12.6551 16.5329 12.3426 16.8455C12.03 17.1581 11.6061 17.3337 11.1641 17.3337H2.83073C2.3887 17.3337 1.96478 17.1581 1.65222 16.8455C1.33966 16.5329 1.16406 16.109 1.16406 15.667V4.00033H12.8307Z" stroke="#232936" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

        </div>
        <div className="flex-1 ">
        <div className="block md:hidden py-2  text-sm font-medium text-[#676F78]">อีเมล</div>
      <div className="flex-1 py-3 px-4 text-sm text-gray-800 md:border-none border">SMB2331@officebigbox.com</div>
      </div>
      <div className="mt-4 md:mt-0  flex-1">
      <div className="block md:hidden py-2  text-sm font-medium text-[#676F78]">ชื่อ</div>
      <div className="flex-1 py-3 px-4 text-sm text-gray-800 md:border-none border">จุฑามาศ เตชะขจร</div>
      </div>
      <div className=" flex-1">
      <div className="block md:hidden  py-2  text-sm font-medium text-[#676F78]">เบอร์โทรศัพท์</div>
      <div className="flex-1 py-3 px-4 text-sm text-gray-800 md:border-none border">0991001000</div>
      </div>
      <div className="w-32 py-3  flex md:block  justify-between md:text-center ">
      <input type="checkbox" checked readOnly className="accent-blue-600" />
      <div className="w-24 md:hidden block text-sm font-medium text-gray-600 ">Admin</div>
      </div>
      <div className="w-40 md:w-32 py-3 flex md:block  justify-between md:text-center">
      <input type="checkbox" className="accent-blue-600" readOnly />
      <div className="w-32  md:hidden block text-sm font-medium text-gray-600 ">ผู้สั่งซื้อสินค้า</div>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default BusnessDetail;

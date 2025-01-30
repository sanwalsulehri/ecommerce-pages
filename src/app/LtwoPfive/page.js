"use client";
import React, { useState } from "react";
import Mainside from '../components/Mainside'





const LtwoPfive = () => {
  return (
    <>
    <Mainside />
    
    <div className="min-h-screen max-w-5xl md:ml-[400px] mt-[50px] bg-white text-gray-900 p-4 md:p-6">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 mb-8 text-sm">
        <a href="#" className="text-gray-400">
          บัญชีของฉัน
        </a>
        <span className="text-gray-600">/</span>
        <a href="#" className="text-gray-400">
          องค์กรของฉัน
        </a>
        <span className="text-gray-600">/</span>
        <span className="text-gray-500">แก้ไขรายละเอียด</span>
      </nav>

      {/* Back p */}
      <div className="mb-6">
        <p variant="link" className="text-blue-500 p-0">
          
          ย้อนกลับไปหน้าหลัก
        </p>
      </div>

      <h1 className="text-2xl font-semibold mb-8">แก้ไขรายละเอียด</h1>

      <form className="space-y-8">
        {/* Company Information */}
        <section>
          <h2 className="text-lg font-medium mb-4">ข้อมูลบริษัท</h2>
          <div className="space-y-4">
            <div className="relative">
              <input
                type="text"
                defaultValue="FYI Technology Company Co., Ltd."
                className="w-full bg-white border border-gray-200 rounded-md p-2 pt-6"
              />
              <label className="absolute top-2 left-2 text-xs text-gray-500">ชื่อบริษัท (Company Name)</label>
            </div>
            <div className="relative">
              <input
                type="text"
                defaultValue="6703040008"
                className="w-full bg-white border border-gray-200 rounded-md p-2 pt-6"
              />
              <label className="absolute top-2 left-2 text-xs text-gray-500">เลขที่ผู้เสียภาษี (Tax ID)</label>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="tel"
                  defaultValue="0901234567"
                  className="w-full bg-white border border-gray-200 rounded-md p-2 pt-6"
                />
                <label className="absolute top-2 left-2 text-xs text-gray-500">เบอร์บริษัท (Company Phone No.)</label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  defaultValue="petcharee.perly.co.th"
                  className="w-full bg-white border border-gray-200 rounded-md p-2 pt-6"
                />
                <label className="absolute top-2 left-2 text-xs text-gray-500">อีเมลบริษัท (Company Email)</label>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Address */}
        <section>
          <h2 className="text-lg font-medium mb-4">ที่อยู่สำหรับการจัดส่งสินค้า</h2>
          <div className="space-y-4">
            <div className="relative">
              <input
                type="text"
                defaultValue="100/10 ถ. พระรามที่ 4"
                className="w-full bg-white border border-gray-200 rounded-md p-2 pt-6"
              />
              <label className="absolute top-2 left-2 text-xs text-gray-500">บ้านเลขที่, อาคาร, ถนน</label>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <p className="w-full bg-white border border-gray-200 rounded-md p-2 pt-6 flex justify-between items-center text-left">
                  <span>กรุงเทพมหานคร</span>
                </p>
                <svg width="12" className="right-3 top-7  absolute " height="12" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0.500244L6 5.50024L11 0.500244" stroke="#737373" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                <label className="absolute top-2 left-2 text-xs text-gray-500">จังหวัด</label>
              </div>
              <div className="relative">
                <p className="w-full bg-white border border-gray-200 rounded-md p-2 pt-6 flex justify-between items-center text-left">
                  <span>คลองเตย</span>
                </p>
                <svg width="12" className="right-3 top-7  absolute " height="12" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0.500244L6 5.50024L11 0.500244" stroke="#737373" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                <label className="absolute top-2 left-2 text-xs text-gray-500">อำเภอ/เขต</label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <p className="w-full bg-white border border-gray-200 rounded-md p-2 pt-6 flex justify-between items-center text-left">
                  <span>คลองเตย</span>
                </p>
                <svg width="12" className="right-3 top-7  absolute " height="12" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0.500244L6 5.50024L11 0.500244" stroke="#737373" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                <label className="absolute top-2 left-2 text-xs text-gray-500">ตำบล/แขวง</label>
              </div>
              <div className="relative">
                <p className="w-full bg-white border border-gray-200 rounded-md p-2 pt-6 flex justify-between items-center text-left">
                  <span>10110</span>
                </p>
                <svg width="12" className="right-3 top-7  absolute " height="12" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0.500244L6 5.50024L11 0.500244" stroke="#737373" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                <label className="absolute top-2 left-2 text-xs text-gray-500">รหัสไปรษณีย์</label>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-lg font-medium mb-4">ข้อมูลผู้ติดต่อ</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] border-separate border-spacing-y-2 border-spacing-x-2">
              <thead>
                <tr className="text-left">
                  <th className="pb-4">อีเมล</th>
                  <th className="pb-4">ชื่อ</th>
                  <th className="pb-4">นามสกุล</th>
                  <th className="pb-4">เบอร์ติดต่อ</th>
                  <th className="pb-4">Admin</th>
                  <th className="pb-4">ผู้ติดต่อหลัก</th>
                  <th className="pb-4"></th>
                </tr>
              </thead>
              <tbody className="">
                {[
                  {
                    email: "SM82331@officebigbox.com",
                    firstName: "จุฑามาศ",
                    lastName: "เดชธนาลี",
                    phone: "0991001000",
                    isAdmin: true,
                    isPrimary: true,
                  },
                  {
                    email: "SM82332@officebigbox.com",
                    firstName: "ทิพย์อุษา",
                    lastName: "เวียงลอ",
                    phone: "0882445665",
                    isAdmin: false,
                    isPrimary: false,
                  },
                  {
                    email: "SM82333@officebigbox.com",
                    firstName: "ชัญญานี",
                    lastName: "ศรีสุนาถ",
                    phone: "0658004224",
                    isAdmin: false,
                    isPrimary: false,
                  },
                  {
                    email: "",
                    firstName: "",
                    lastName: "",
                    phone: "",
                    isAdmin: false,
                    isPrimary: false,
                  },
                ].map((contact, i) => (
                  <tr key={i} className="text-sm ">
                    <td className="py-2 border px-2    ">{contact.email}</td>
                    <td className="py-2 border px-2">{contact.firstName}</td>
                    <td className="py-2 border px-2">{contact.lastName}</td>
                    <td className="py-2 border px-2">{contact.phone}</td>
                    <td className="py-2 px-2">
                      <input type="checkbox" checked={contact.isAdmin} className="rounded border-gray-300 bg-white" />
                    </td>
                    <td className="py-2">
                      <input type="checkbox" checked={contact.isPrimary} className="rounded  border-gray-300 bg-white" />
                    </td>
                    <td className="py-2">
                      <p variant="ghost" size="icon" className="text-gray-600 hover:text-gray-700">
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M2.5 5.50024H4.16667H17.5"
                            stroke="#232936"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.66602 5.50026V3.8336C6.66602 3.39157 6.84161 2.96765 7.15417 2.65509C7.46673 2.34253 7.89065 2.16693 8.33268 2.16693H11.666C12.108 2.16693 12.532 2.34253 12.8445 2.65509C13.1571 2.96765 13.3327 3.39157 13.3327 3.8336V5.50026M15.8327 5.50026V17.1669C15.8327 17.609 15.6571 18.0329 15.3445 18.3454C15.032 18.658 14.608 18.8336 14.166 18.8336H5.83268C5.39065 18.8336 4.96673 18.658 4.65417 18.3454C4.34161 18.0329 4.16602 17.609 4.16602 17.1669V5.50026H15.8327Z"
                            stroke="#232936"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p variant="outline" className="mt-4 text-blue-500 border-blue-500">
            เพิ่มแถวใหม่
          </p>
        </section>

        {/* Form Actions */}
        <div className="flex justify-between pt-6 border-t border-gray-100">
          <p variant="ghost" className="text-gray-400">
            ยกเลิก
          </p>
          <p className="bg-blue-600 hover:bg-blue-700 text-white">ส่งข้อมูล</p>
        </div>
      </form>
    </div>
    </>
  )
}

export default LtwoPfive
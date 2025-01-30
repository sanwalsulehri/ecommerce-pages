"use client";
import React, { useState } from "react";

const Mainside = () => {
    return (
      <div className="w-[275px] md:block hidden left-[2%] top-[0%] fixed  ml-[50px] mt-[50px] h-fit bg-white border px-4 py-4">
        {/* Profile Section */}
        <div className="flex items-center justify-center space-x-3 mb-6">
          <div className="">
            <svg
              width="65"
              height="64"
              viewBox="0 0 65 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_18051_151035)">
                <path
                  d="M10.6616 55.3385C6.96863 51.9029 4.28284 47.7959 2.5147 43.0734C0.959185 38.8881 0.276548 34.5572 0.567508 30.1257C0.947994 24.0939 2.86161 18.5544 6.36433 13.5969C10.1804 8.20297 15.205 4.36453 21.3935 2.03686C25.5453 0.470148 29.8426 -0.212489 34.2517 0.0560892C40.5521 0.436575 46.3042 2.4733 51.4184 6.21101C56.0401 9.57943 59.4757 13.9326 61.7922 19.1475C63.0008 21.8557 63.7842 24.6982 64.1758 27.6525C64.422 29.4654 64.5451 31.2895 64.478 33.1136C64.3213 37.2094 63.4484 41.1598 61.781 44.9087C60.2031 48.4562 58.0769 51.6455 55.3351 54.4096C55.2344 54.5104 55.1225 54.5887 55.0218 54.6782C54.6301 54.5775 54.4958 54.2082 54.2832 53.9284C51.5191 50.0229 47.8149 47.5161 43.1708 46.4194C41.6264 46.0501 40.0373 45.9494 38.4706 45.927C34.8336 45.8711 31.2078 45.8711 27.5708 45.927C23.1057 45.983 18.9539 47.0797 15.4288 49.9781C13.795 51.321 12.3514 52.8653 11.2211 54.667C11.0644 54.9244 10.9637 55.2266 10.6616 55.3721V55.3385Z"
                  fill="#D8D8D8"
                />
                <path
                  d="M10.6621 55.3385C11.0874 54.1299 11.9043 53.1786 12.7212 52.2386C15.4741 49.0493 18.9209 47.0013 23.0503 46.1173C24.4156 45.8263 25.792 45.7144 27.1685 45.7032C31.0517 45.6473 34.9461 45.6137 38.8293 45.7032C45.7787 45.8487 51.2622 48.7247 55.0223 54.667C51.9337 57.8788 48.2519 60.1841 44.1337 61.8067C39.9595 63.463 35.6063 64.1904 31.1188 63.9554C23.2741 63.5525 16.4365 60.6988 10.6621 55.3273V55.3385Z"
                  fill="#969796"
                />
                <path
                  d="M18.5509 26.8466C18.2487 20.009 23.6315 13.7198 30.5921 12.6455C38.09 11.4817 45.0842 15.8573 47.0538 23.1648C48.2624 27.6411 47.2552 31.8377 44.8604 35.7209C43.0251 38.6976 40.5967 41.0141 37.2842 42.3011C33.3339 43.823 29.5738 43.2747 26.1382 40.9694C21.8186 38.0598 19.4014 33.8632 18.5733 28.7602C18.4725 28.1447 18.5621 27.4845 18.5621 26.8466H18.5509Z"
                  fill="#969796"
                />
              </g>
              <defs>
                <clipPath id="clip0_18051_151035">
                  <rect
                    width="64"
                    height="64"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <div className="text-sm text-gray-600">สวัสดี,</div>
            <div className="font-medium">Nice!</div>
          </div>
        </div>
  
        {/* Navigation Menu */}
        <nav className="space-y-1">
  
          {/* Menu Items */}
          <div className="space-y-1">
          <div className="py-2 px-3   rounded">
          ข้อมูลทั่วไป
            </div>
            <div className="flex items-center justify-between py-2 px-3 hover:bg-gray-100 rounded">
              <span>รายการสั่งซื้อของฉัน</span>
              <span className="bg-[#F6625A] text-white text-xs px-2 py-1 rounded-full">
                2
              </span>
            </div>
  
            <div className="flex items-center justify-between py-2 px-3 hover:bg-gray-100 rounded">
              <span>รายการโปรดของฉัน</span>
              <span className="bg-[#F6625A] text-white text-xs px-2 py-1 rounded-full">
                3
              </span>
            </div>
  
            <div className="py-2 px-3 bg-gray-100 text-red-500 rounded">
              สั่งซื้อด่วน
            </div>
  
            <div className="py-2 px-3 hover:bg-gray-100 rounded">ใบเสนอราคา</div>
            <div className="py-2 px-3 hover:bg-gray-100 rounded">
              ที่อยู่ของฉัน
            </div>
            <div className="py-2 px-3 hover:bg-gray-100 rounded">
              การยืนยันตัวตนผู้ใช้และอุปกรณ์
            </div>
            <div className="py-2 px-3 hover:bg-gray-100 rounded">
              องค์กรของฉัน
            </div>
            <div className="py-2 px-3 hover:bg-gray-100 rounded">
              รายการสินค้าและบริการ
            </div>
            <div className="py-2 px-3 hover:bg-gray-100 rounded">
              บัตรเครดิตของฉัน
            </div>
            <div className="py-4 px-3 border-b hover:bg-gray-100 rounded text-gray-400">
              Credit Terms
            </div>
            <div className="py-2 px-3 hover:bg-gray-100 rounded">ออกจากระบบ</div>
          </div>
        </nav>
      </div>
    );
  };
  export default Mainside

  
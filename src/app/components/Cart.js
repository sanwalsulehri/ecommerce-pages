"use client";
import React, { useState } from "react";

const Sidebar = () => {
  return (
    <div className="w-[275px] ml-[50px] mt-[50px] h-fit bg-white border px-4 py-4">
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

const Cart = () => {
  const [selectedSeller, setSelectedSeller] = useState("SAHA OFFICE");
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <div className="max-w-4xl mx-auto p-4">
          {/* Header Section */}
          <h2 className="text-xl font-semibold mb-4">สั่งซื้อด่วน</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, adipiscing rhoncus libra ut dui morbi,
            mattis necetor amet, ut justo prims, fusce purus tellus hac risus.
            Vehicula nullam, non suscipit sit vivamus, quam vel nostra.
          </p>

          {/* Order Form Table */}
          <div className="overflow-x-auto">
            <table className="w-full mb-4">
              <thead>
                <tr className="text-[12px] text-[#232936]">
                  <th className="text-left font-normal tracking-widest py-2 w-[40%]">ENTER SKU OR PRODUCT NAME</th>
                  <th className="text-center font-normal tracking-widest py-2 w-[25%]">SELLER</th>
                  <th className="text-center font-normal tracking-widest py-2 w-[20%]">QTY</th>
                  <th className="text-right font-normal tracking-widest py-2 w-[10%]">SUBTOTAL</th>
                  <th className="w-[5%]"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-[#737373] text-[14px] ">
                  <td className="py-2 pr-2 w-[45%]">
                    <input
                      type="text"
                      placeholder="Enter SKU or Product name"
                      className="w-full border rounded px-3 py-2"
                    />
                  </td>
                  <td className="py-2 px-2 w-[40%]">
                    <div className="relative">
                      <select
                        className="w-full border rounded px-3 py-2 appearance-none"
                        value={selectedSeller}
                        onChange={(e) => setSelectedSeller(e.target.value)}
                      >
                        <option>SAHA OFFICE</option>
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 0.5L6 5.5L11 0.5" stroke="#737373" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </td>
                  <td className="py-2 px-2 w-[10%]">
                    <div className="flex items-center justify-between border rounded w-24">
                      <button
                        className="px-2 py-2 hover:bg-gray-100"
                        onClick={() => setQuantity(Math.max(0, quantity - 1))}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(0, parseInt(e.target.value) || 0))}
                        className="w-10 text-center focus:outline-none"
                      />
                      <button
                        className="px-2 hover:bg-gray-100"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="py-2  text-right w-[5%]">
                    <div className="h-full w-full bg-[#F7F7F7] py-5">
                    </div>
                    {/* Subtotal calculation would go here */}
                  </td>
                  <td className="py-2 pl-4 w-[5%]">
                    <button className="p-2">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 5H4.16667H17.5" stroke="#232936" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6.66602 4.99984V3.33317C6.66602 2.89114 6.84161 2.46722 7.15417 2.15466C7.46673 1.8421 7.89065 1.6665 8.33268 1.6665H11.666C12.108 1.6665 12.532 1.8421 12.8445 2.15466C13.1571 2.46722 13.3327 2.89114 13.3327 3.33317V4.99984M15.8327 4.99984V16.6665C15.8327 17.1085 15.6571 17.5325 15.3445 17.845C15.032 18.1576 14.608 18.3332 14.166 18.3332H5.83268C5.39065 18.3332 4.96673 18.1576 4.65417 17.845C4.34161 17.5325 4.16602 17.1085 4.16602 16.6665V4.99984H15.8327Z" stroke="#232936" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Add More Rows Link */}
          <div className="text-center mb-6">
            <button className="text-[#0067C7] ">
              Add more rows
            </button>
          </div>

          {/* Add To Cart Button */}
          <div className="text-right mb-8">
            <button className="bg-[#213550] text-white px-28 py-3 rounded-full">
              Add To Cart
            </button>
          </div>

          {/* Copy/Paste Section */}
          <div className="mb-8 flex justify-between">
            <div>
            <h3 className="font-medium tracking-wide mb-2">Copy/Paste Skus</h3>
            <p className="text-[#6B7177]">Sku's code</p>
            </div>
            <textarea
              className=" w-[80%] border-[#DEE7EF] border rounded p-3 h-24"
            />
          </div>
          <div className="text-right mt-2">
              <button className="border rounded-full px-16 border-[#213550] text-[#213550] py-2">Validate</button>
            </div>

          {/* Upload Section */}
          <div className="flex">
            <div>
            <h3 className="font-medium mb-2">Upload</h3>
            <p className="text-sm text-gray-600 mb-2">
              Upload a Spreadsheet with two columns<br></br> (SKU, Quantity) to bulk
              order
            </p>
            <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">
              Click here to download a spreadsheet model
            </a>
            </div>
            <div className="border-2 w-[60%] mx-auto  border-dashed rounded-lg py-10 px-8 mt-4 text-center">
            <svg width="25" height="24" className="mx-auto" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 2H6.5C5.96957 2 5.46086 2.21071 5.08579 2.58579C4.71071 2.96086 4.5 3.46957 4.5 4V20C4.5 20.5304 4.71071 21.0391 5.08579 21.4142C5.46086 21.7893 5.96957 22 6.5 22H18.5C19.0304 22 19.5391 21.7893 19.9142 21.4142C20.2893 21.0391 20.5 20.5304 20.5 20V8L14.5 2Z" stroke="#213550" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5 2V8H20.5" stroke="#213550" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5 13H8.5" stroke="#213550" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5 17H8.5" stroke="#213550" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.5 9H9.5H8.5" stroke="#213550" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              <p className="text-gray-500 py-2">
                Drop here your XLS or choose a file
              </p>
            </div>
            
          </div>
          <div className="text-right mt-2">
              <button className="border rounded-full px-16 border-[#213550] text-[#213550] py-2">Validate</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

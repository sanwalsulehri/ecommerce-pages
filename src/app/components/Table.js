import React from 'react'

const Table = () => {
  return (
    
<div className="flex items-center justify-center w-full min-h-screen bg-gray-100">
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-3xl">
        <h2 className="text-lg text-gray-500 font-semibold mb-4">ยืนยันการสั่งซื้อ</h2>

        <p className="text-sm w-full  text-red-600 border border-gray-300  p-4 mb-1">
          <span className="text-gray-500">รายการสินค้าหมด</span>
          <br />
            กรุณาตรวจสอบรายละเอียดก่อนยืนยันการสั่งซื้อ เนื่องจากทางร้านค้าขอสงวนสิทธิ์ในการเปลี่ยนแ
        </p>

        <div className=" border border-gray-300">
            <div className="flex items-center flex-wrap gap-6  justify-between border-b border-gray-300 p-6">
                <div className="flex md:border-none border-gray-400  justify-between space-x-4">
                    <input type="checkbox" className="mt-1"/>
                    <div>
                        <p className="text- text-gray-500 font-medium">แพ็คเส้นลวด ตราช้าง 121A5 ดึง 3 นิ้ว</p>
                        <p className="text-xs text-gray-500">Pack of 24, กิโลกรัม</p>
                        <p className="text-xs text-gray-500">฿1,664.40 ต่อ 1 หน่วย</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div>
                     <h1 className="text-gray-600">ราคารวม
                       <br />
                       <span className="text-xs text-gray-500">฿400.00</span>
                     </h1>
                      <div className="flex items-center border  px-2">
                        <button className="text-gray-600">-</button>
                        <input type="number" min="0" value="1" className="w-12 text-center outline-none border-none" />
                        <button className="text-gray-600">+</button>
                    </div>
                    </div>
                  <div>
                    <h1 className="text-gray-500">ราคารวม
                      <br />
                      <span className="text-xs">฿2,403.00</span>
                    </h1>
                      <p className="font-semibold text-red-600">
                      
                      ฿81,664.40</p>
                  </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 5.5H4.16667H17.5" stroke="#232936" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66699 5.49935V3.83268C6.66699 3.39065 6.84259 2.96673 7.15515 2.65417C7.46771 2.34161 7.89163 2.16602 8.33366 2.16602H11.667C12.109 2.16602 12.5329 2.34161 12.8455 2.65417C13.1581 2.96673 13.3337 3.39065 13.3337 3.83268V5.49935M15.8337 5.49935V17.166C15.8337 17.608 15.6581 18.032 15.3455 18.3445C15.0329 18.6571 14.609 18.8327 14.167 18.8327H5.83366C5.39163 18.8327 4.96771 18.6571 4.65515 18.3445C4.34259 18.032 4.16699 17.608 4.16699 17.166V5.49935H15.8337Z" stroke="#232936" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </button>
                </div>
            </div>

            <div className="flex items-center flex-wrap gap-6 p-6 justify-between">
                <div className="flex items-start space-x-4">
                    <input type="checkbox" className="mt-1" />
                    <div>
                        <p className="text-sm text-gray-500 font-medium">ปากกาลูกลื่น 0.8 มม. Quantum GeloPlus 008</p>
                        <p className="text-xs text-gray-500">Pack of 50, สีดำ</p>
                        <p className="text-xs text-gray-500">฿190.00 ต่อ 1 หน่วย</p>
                    </div>
                </div>
                <div className="flex items-center space-x-6">
                 
                   <div>
                     <h1 className="text-gray-600">ราคารวม
                       <br />
                       <span className="text-xs text-gray-500">฿400.00</span>
                     </h1>
                      <div className="flex items-center border  px-2">
                        <button className="text-gray-600">-</button>
                        <input type="number" min="0" value="1" className="w-12 text-center outline-none border-none" />
                        <button className="text-gray-600">+</button>
                    </div>
                   </div>
                  <div>
                     <h1 className="text-gray-500">ราคารวม
                      <br />
                      <span className="text-xs">฿2,403.00</span>
                    </h1>
                    <p className="font-semibold text-red-600">฿190.00</p>
                  </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 5.5H4.16667H17.5" stroke="#232936" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66699 5.49935V3.83268C6.66699 3.39065 6.84259 2.96673 7.15515 2.65417C7.46771 2.34161 7.89163 2.16602 8.33366 2.16602H11.667C12.109 2.16602 12.5329 2.34161 12.8455 2.65417C13.1581 2.96673 13.3337 3.39065 13.3337 3.83268V5.49935M15.8337 5.49935V17.166C15.8337 17.608 15.6581 18.032 15.3455 18.3445C15.0329 18.6571 14.609 18.8327 14.167 18.8327H5.83366C5.39163 18.8327 4.96771 18.6571 4.65515 18.3445C4.34259 18.032 4.16699 17.608 4.16699 17.166V5.49935H15.8337Z" stroke="#232936" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </button>
                </div>
            </div>
        </div>

        <div className="mt-6 text-right">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                ยืนยันการสั่งซื้อ
            </button>
        </div>
    </div>
</div>
  )
}

export default Table
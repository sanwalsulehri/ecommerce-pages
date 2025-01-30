import React from 'react'

const page = () => {
  return (
    <>
    
<div className="flex items-center justify-between mb-4">
  
  <h1 className="text-xl font-medium text-gray-800">คำขอรายการคืนสินค้าและคืนเงิน</h1>
  
  
  <button className="px-4 py-3 bg-[#1B2B4D] text-white rounded-full hover:bg-[#263B68] transition-colors">
    สร้างคำขอใหม่
  </button>
</div>


<div className="flex items-center gap-4 mb-4">
  
  <div className="relative flex-1">
    <input 
      type="text" 
      placeholder="ค้นหาหมายเลขคำขอการคืนสินค้าและคืนเงิน" 
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
    <div className="absolute right-3 top-1/2 -translate-y-1/2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  </div>

  
  <div className="relative">
    <button className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-gray-50">
      <span className="text-gray-700">ทั้งหมด</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  </div>
</div>


<div className="max-w-6xl mx-auto">
  <table className="w-full bg-white rounded-lg shadow">
    
    <thead className="bg-gray-50">
      <tr>
        <th className="px-4 py-3 text-left">หมายเลขคำขอ</th>
        <th className="px-4 py-3 text-left">หมายเลขคำสั่งซื้อ</th>
        <th className="px-4 py-3 text-left">วันที่สร้างคำขอ</th>
        <th className="px-4 py-3 text-left">วันที่เข้าไปรับสินค้า</th>
        <th className="px-4 py-3 text-left">จำนวนเงินสินค้า</th>
        <th className="px-4 py-3 text-left">สถานะ</th>
      </tr>
    </thead>

    
    <tbody>
      <tr className="border-t">
        <td className="px-4 py-3">#RT3952944000</td>
        <td className="px-4 py-3">#3957000045532</td>
        <td className="px-4 py-3">12.12.2567</td>
        <td className="px-4 py-3">12.12.2567</td>
        <td className="px-4 py-3">1</td>
        <td className="px-4 py-3">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
            ซึ่งคำขอใหม่สินค้า/ดินเงิน
          </span>
        </td>
      </tr>

      
      <tr>
        <td colspan="6" className="px-4 py-2">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            
            <table className="w-full mb-4">
              <tr>
                <td className="font-semibold">8851907004460</td>
                <td>แฟ้มสัมภาระ A4 ตัน 2 มิ้ว ตราจริง 10</td>
                <td>600.00</td>
                <td>800,000.00</td>
                <td>6,400.00</td>
              </tr>
              
            </table>

            
            <div className="space-y-2">
              <div className="bg-green-100 p-3 rounded border-l-4 border-green-500">
                <div className="flex justify-between items-center">
                  <span>อนุมัติการดินสินค้า/</span>
                  <a href="#" className="text-blue-600 hover:underline">ดูรายละเอียด</a>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>

      
      <tr>
        <td colspan="6" className="px-4 py-2">
          <div className="bg-red-100 p-3 rounded border-l-4 border-red-500 ml-4">
            <div className="flex justify-between items-center">
              <span>ยกเลิกการดินสินค้า/ดินเงิน</span>
              <a href="#" className="text-blue-600 hover:underline">ดูรายละเอียด</a>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>



    <div className="flex mx-auto mt-6 items-center space-x-2">
                
                <button className="px-3 py-1.5 border rounded-lg text-gray-600 hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                </button>

                
                <div className="flex space-x-1">
                    <button className="px-3 py-1.5 rounded-lg bg-blue-600 text-white">1</button>
                    <button className="px-3 py-1.5 rounded-lg text-gray-600 hover:bg-gray-100">2</button>
                    <button className="px-3 py-1.5 rounded-lg text-gray-600 hover:bg-gray-100">3</button>
                    <span className="px-3 py-1.5 text-gray-400">...</span>
                    <button className="px-3 py-1.5 rounded-lg text-gray-600 hover:bg-gray-100">10</button>
                </div>

                
                <button className="px-3 py-1.5 border rounded-lg text-gray-600 hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
    </>
  )
}

export default page
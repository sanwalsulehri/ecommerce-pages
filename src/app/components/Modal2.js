import React from 'react'

const Modal2 = () => {
  return (
    <>
    <div className=" inset-0 bg-black h-screen bg-opacity-30 flex items-center justify-center">
  <div className="bg-white rounded-[3px] p-5 w-[90%] max-w-md relative">
   
    <button className="absolute right-4 top-6 cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    
    <h2 className="text-lg font-medium mb-6 text-black">ยกเลิกคำสั่งซื้อ #RT3952944000</h2>

    
    <div className="space-y-3">
      <label className="flex items-center p-3 border border-[#DEE7EF] rounded-[3px] cursor-pointer hover:border-[#213550] transition-colors">
        <input type="radio" name="reason" className="w-4 h-4 text-blue-600" />
        <span className="ml-3 text-black">ต้องการเปลี่ยนที่อยู่จัดส่ง</span>
      </label>

      <label className="flex items-center p-3 borderborder-[#DEE7EF] rounded-[3px] cursor-pointer hover:border-[#213550]  transition-colors">
        <input type="radio" name="reason" className="w-4 h-4 text-blue-600" />
        <span className="ml-3 text-black">ผู้ขายไม่ยอมยอมรับการขอแก้ไขข้อมูล</span>
      </label>

      <label className="flex items-center p-3 border border-[#DEE7EF] rounded-[3px] cursor-pointer hover:border-[#213550]  transition-colors">
        <input type="radio" name="reason" className="w-4 h-4 text-blue-600" />
        <span className="ml-3 text-black">ต้องการเปลี่ยนวิธีชำระเงินคำสั่งซื้อ เช่น สาขา และอื่นๆ</span>
      </label>

      <label className="flex items-center p-3 border border-[#DEE7EF] rounded-[3px] cursor-pointer hover:border-[#213550]  transition-colors">
        <input type="radio" name="reason" className="w-4 h-4 text-blue-600" />
        <span className="ml-3 text-black">พบสินค้าที่ถูกกว่าจากร้านอื่นๆ</span>
      </label>

      <label className="flex items-center p-3 border border-[#DEE7EF] rounded-[3px] cursor-pointer hover:border-[#213550]  transition-colors">
        <input type="radio" name="reason" className="w-4 h-4 text-blue-600" />
        <span className="ml-3 text-black">เปลี่ยนใจ</span>
      </label>

<div className="p-3 border items-center border-[#213550] rounded-[3px] cursor-pointer hover:border-blue-500 transition-colors">
      <label className="flex flex-1 items-center mb-2 ">
        <input type="radio" name="reason" className="w-4  h-4 text-blue-600" />
        <span className="ml-3 text-black">อื่นๆ</span>
      </label>
       <input type="text" placeholder="โปรดระบุสาเหตุ" className="w-full rounded-[3px] border border-gray-300 px-4 py-2 placeholder-gray-400 focus:border-transparent focus:ring focus:ring-blue-500 focus:outline-none" />
    </div>

</div>

  
    <button className="w-full bg-[#213550] text-white py-3 rounded-full cursor-pointer mt-6 hover:bg-[#1a237e]/90 transition-colors">
      ยกเลิกคำสั่งซื้อนี้
    </button>
  </div>
</div>










    </>
  )
}

export default Modal2
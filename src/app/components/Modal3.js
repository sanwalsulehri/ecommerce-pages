import React from 'react'

const Modal3 = () => {
  return (
    <>
    <div className="h-screen inset-0 bg-black bg-opacity-50 px-3 flex items-center justify-center">
  <div className="bg-white  pt-8 w-[100%] max-w-[487px] text-center ">
   
    <h2 className="text-[25px]  px-2 font-semibold mb-7 text-black">
      ไม่สามารถเปลี่ยนแปลงได้
    </h2>

<div className="w-[80%] mx-auto">
  <hr className="text-gray-300 py-3 " />
</div>
    
    <p className="text-gray-600 text-[16px] px-6 mb-6 leading-relaxed">
      เนื่องจากรหัสไปรษณีย์ที่เปลี่ยนกระทบค่าขนส่งที่คำนวณไว้แล้ว หากต้องการเปลี่ยนจะต้องทำการยกเลิกออเดอร์และสั่งสินค้าใหม่อีกครั้ง
    </p>

    
    <button className="px-12 py-3 mb-7 cursor-pointer border-2 border-[#213550] text-[#213550] rounded-full hover:bg-gray-50 transition-colors">
      ปิด
    </button>
  </div>
</div>
    </>
  )
}

export default Modal3
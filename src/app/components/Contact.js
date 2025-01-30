import React from 'react'

const Contact = () => {
  return (
    <>
  
  <div className="flex flex-wrap xl:flex-row xl:flex-nowrap h-fit">
  <div className="m-5 h-[110vh] md:w-[25vw] w-full border border-gray-200">
    <div className="m-5 flex gap-4">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="m-2 size-12 rounded-full bg-gray-300 text-gray-500">
        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
      </svg>

      <h1 className="text-lg text-gray-500">
        สวัสดี, <br />
        <span className="text-xl text-black">Nice!</span>
      </h1>
    </div>
    <div className="m-5 flex flex-col gap-4 text-sm font-normal">
      <h1>แดชบอร์ดของฉัน</h1>
      <h1>ข้อมูลส่วนตัว</h1>
      <h1 className="flex justify-between">
        รายการสั่งซื้อของฉัน
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="0.5" width="19" height="18" rx="9" fill="#F6625A" />
          <path d="M6.69402 8.004C6.67002 7.572 6.71402 7.172 6.82602 6.804C6.93802 6.436 7.11002 6.12 7.34202 5.856C7.58202 5.584 7.87802 5.372 8.23002 5.22C8.58202 5.068 8.98202 4.992 9.43002 4.992C9.79802 4.992 10.142 5.048 10.462 5.16C10.79 5.264 11.074 5.42 11.314 5.628C11.554 5.828 11.742 6.08 11.878 6.384C12.022 6.688 12.094 7.04 12.094 7.44C12.094 7.816 12.034 8.148 11.914 8.436C11.802 8.724 11.65 8.984 11.458 9.216C11.266 9.44 11.046 9.644 10.798 9.828C10.55 10.012 10.294 10.188 10.03 10.356C9.76602 10.516 9.50202 10.676 9.23802 10.836C8.97402 10.988 8.73002 11.152 8.50602 11.328C8.29002 11.504 8.10202 11.696 7.94202 11.904C7.79002 12.104 7.69002 12.336 7.64202 12.6H12.01V13.5H6.45402C6.49402 12.996 6.58202 12.568 6.71802 12.216C6.86202 11.856 7.04202 11.544 7.25802 11.28C7.47402 11.016 7.71802 10.784 7.99002 10.584C8.26202 10.384 8.54602 10.196 8.84202 10.02C9.20202 9.796 9.51802 9.592 9.79002 9.408C10.062 9.216 10.286 9.024 10.462 8.832C10.646 8.64 10.782 8.432 10.87 8.208C10.966 7.984 11.014 7.724 11.014 7.428C11.014 7.196 10.97 6.988 10.882 6.804C10.794 6.612 10.674 6.448 10.522 6.312C10.378 6.176 10.206 6.072 10.006 6C9.80602 5.928 9.59402 5.892 9.37002 5.892C9.07402 5.892 8.81802 5.956 8.60202 6.084C8.39402 6.204 8.22202 6.364 8.08602 6.564C7.95002 6.764 7.85002 6.992 7.78602 7.248C7.73002 7.496 7.70602 7.748 7.71402 8.004H6.69402Z" fill="white" />
        </svg>
      </h1>

      <h1 className="flex justify-between">
        ข้อมูลส่วนตัว
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="0.5" width="19" height="18" rx="9" fill="#F6625A" />
          <path d="M6.69402 8.004C6.67002 7.572 6.71402 7.172 6.82602 6.804C6.93802 6.436 7.11002 6.12 7.34202 5.856C7.58202 5.584 7.87802 5.372 8.23002 5.22C8.58202 5.068 8.98202 4.992 9.43002 4.992C9.79802 4.992 10.142 5.048 10.462 5.16C10.79 5.264 11.074 5.42 11.314 5.628C11.554 5.828 11.742 6.08 11.878 6.384C12.022 6.688 12.094 7.04 12.094 7.44C12.094 7.816 12.034 8.148 11.914 8.436C11.802 8.724 11.65 8.984 11.458 9.216C11.266 9.44 11.046 9.644 10.798 9.828C10.55 10.012 10.294 10.188 10.03 10.356C9.76602 10.516 9.50202 10.676 9.23802 10.836C8.97402 10.988 8.73002 11.152 8.50602 11.328C8.29002 11.504 8.10202 11.696 7.94202 11.904C7.79002 12.104 7.69002 12.336 7.64202 12.6H12.01V13.5H6.45402C6.49402 12.996 6.58202 12.568 6.71802 12.216C6.86202 11.856 7.04202 11.544 7.25802 11.28C7.47402 11.016 7.71802 10.784 7.99002 10.584C8.26202 10.384 8.54602 10.196 8.84202 10.02C9.20202 9.796 9.51802 9.592 9.79002 9.408C10.062 9.216 10.286 9.024 10.462 8.832C10.646 8.64 10.782 8.432 10.87 8.208C10.966 7.984 11.014 7.724 11.014 7.428C11.014 7.196 10.97 6.988 10.882 6.804C10.794 6.612 10.674 6.448 10.522 6.312C10.378 6.176 10.206 6.072 10.006 6C9.80602 5.928 9.59402 5.892 9.37002 5.892C9.07402 5.892 8.81802 5.956 8.60202 6.084C8.39402 6.204 8.22202 6.364 8.08602 6.564C7.95002 6.764 7.85002 6.992 7.78602 7.248C7.73002 7.496 7.70602 7.748 7.71402 8.004H6.69402Z" fill="white" />
        </svg>
      </h1>
      <h1>รายการโปรดของฉัน</h1>
      <h1>ใบเสนอราคา</h1>
      <h1>ที่อยู่ของฉัน</h1>
      <h1>การยืนยันตัวตนผู้ใช้และอุปกรณ์</h1>
      <h1>องค์กรของฉัน</h1>
      <h1>กรายการคืนสินค้าและคืนเงิน</h1>
      <h1>บัตรเครดิตของฉัน</h1>

      <h1 className="border-b border-gray-300 pb-2 text-gray-400">Credit Terms</h1>
      <h1 className="text-xs">ออกจากระบบ</h1>
    </div>
  </div>
  
  
  <div className="sm:w-[70vw] ml-2.5 w-full">
<div>

    <div className="m-5 flex gap-2">
      <div className="flex text-sm">
        <h1 className="text-gray-500">บัญชีของฉัน</h1>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="#6B7177" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="flex text-sm">
        <h1 className="text-gray-500">บัญชีของฉัน</h1>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="#6B7177" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="flex text-sm">
        <h1 className="text-gray-500">บัญชีของฉัน</h1>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="#6B7177" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
    <div className="flex flex-wrap justify-between gap-5 border-b border-gray-400 py-2">
      <div>
        <h1>สถานะ: <span className="text-black">จัดส่งเรียบร้อยแล้ว</span></h1>
      </div>
    </div>
    
    <div className=" mt-5 flex max-w-[444px] w-full items-center justify-between border border-gray-400 px-4 text-sm text-gray-500">
      <h1>
        หมายเลขคำสั่งซื้อ
        <br />
        <span>#3957003245532</span>
      </h1>
      <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 0.5L6 5.5L11 0.5" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    <h1 className="mt-2">การรับเงินคืน</h1>
    <div></div>
    

    <div className="flex gap-3 flex-wrap">
      <div className="className mt-5 flex max-w-[444px] w-full items-center justify-between border border-gray-400 px-4 text-sm text-gray-500">
        <h1>
          หมายเลขคำสั่งซื้อ
          <br />
          <span>#3957003245532</span>
        </h1>
        <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 0.5L6 5.5L11 0.5" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="className mt-5 flex max-w-[444px] w-full items-center justify-between border border-gray-400 px-4 text-sm text-gray-500">
        <h1>
          หมายเลขคำสั่งซื้อ
          <br />
          <span>#3957003245532</span>
        </h1>
        <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 0.5L6 5.5L11 0.5" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
    
    <div className="flex gap-3 flex-wrap">
      <div className="className mt-5 flex max-w-[444px] w-full items-center justify-between border border-gray-400 px-4 text-sm text-gray-500">
        <h1>
          หมายเลขคำสั่งซื้อ
          <br />
          <span>#3957003245532</span>
        </h1>
        <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 0.5L6 5.5L11 0.5" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="className mt-5 flex max-w-[444px] w-full items-center justify-between border border-gray-400 px-4 text-sm text-gray-500">
        <h1>
          หมายเลขคำสั่งซื้อ
          <br />
          <span>#3957003245532</span>
        </h1>
        <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 0.5L6 5.5L11 0.5" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
    
    <h1 className="mt-5">ที่อยู่ที่ต้องการให้เข้ารับสินค้าคืน</h1>
    <div className=" mt-5 flex max-w-[444px] w-full items-center justify-between border border-gray-400 px-4 text-sm text-gray-500">
      <h1>
        หมายเลขคำสั่งซื้อ
        <br />
        <span>#3957003245532</span>
      </h1>
      <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 0.5L6 5.5L11 0.5" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    
    <div className="flex gap-3 flex-wrap">
      <div className="className mt-5 flex max-w-[444px] w-full items-center justify-between border border-gray-400 px-4 text-sm text-gray-500">
        <h1>
          หมายเลขคำสั่งซื้อ
          <br />
          <span>#3957003245532</span>
        </h1>
        <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 0.5L6 5.5L11 0.5" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      

      <div className="className mt-5 flex max-w-[444px] w-full items-center justify-between border border-gray-400 px-4 text-sm text-gray-500">
        <h1>
          หมายเลขคำสั่งซื้อ
          <br />
          <span>#3957003245532</span>
        </h1>
        <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 0.5L6 5.5L11 0.5" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
    
    <h1 className="mt-5">ที่อยู่ที่ต้องการให้เข้ารับสินค้าคืน</h1>
    <div className=" mt-5 flex max-w-[900px] w-full items-center justify-between border border-gray-400 bg-gray-200 px-4 text-sm text-gray-500">
      <h1>
        หมายเลขคำสั่งซื้อ
        <br />
        <span>#3957003245532</span>
      </h1>
      <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 0.5L6 5.5L11 0.5" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    
    <div className="flex flex-wrap gap-3">
      <div className=" mt-5 flex max-w-[444px] w-full items-center justify-between border border-gray-400 bg-gray-200 px-4 text-sm text-gray-500">
        <h1>
          หมายเลขคำสั่งซื้อ
          <br />
          <span>#3957003245532</span>
        </h1>
        <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 0.5L6 5.5L11 0.5" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className=" mt-5 flex max-w-[444px] w-full items-center justify-between border border-gray-400 bg-gray-200 px-4 text-sm text-gray-500">
        <h1>
          หมายเลขคำสั่งซื้อ
          <br />
          <span>#3957003245532</span>
        </h1>
        <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 0.5L6 5.5L11 0.5" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
    
    <div className="flex gap-3 flex-wrap ">
      <div className=" mt-5 flex max-w-[444px] w-full items-center justify-between border border-gray-400 bg-gray-200 px-4 text-sm text-gray-500">
        <h1>
          หมายเลขคำสั่งซื้อ
          <br />
          <span>#3957003245532</span>
        </h1>
        <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 0.5L6 5.5L11 0.5" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="mt-5 flex max-w-[444px] w-full items-center justify-between border border-gray-400 bg-gray-200 px-4 text-sm text-gray-500">
        <h1>
          หมายเลขคำสั่งซื้อ
          <br />
          <span>#3957003245532</span>
        </h1>
        <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 0.5L6 5.5L11 0.5" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
    
    <h1 className="mt-5">รูปภาพประกอบหลักฐานการคืนสินค้า</h1>
    <p className="mt-5 text-sm text-gray-500">ขนาดไฟล์ที่อัพโหลดต้องไม่เกิน 5 MB รองรับนามสกุลไฟล์.pdf และ .jpg</p>
    <div className="flex flex-col items-center justify-center border border-dotted text-gray-500 max-w-[444px] w-full mb-7 mt-7 py-5 text-xs">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#213550" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 2V8H20" stroke="#213550" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 13H8" stroke="#213550" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 17H8" stroke="#213550" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 9H9H8" stroke="#213550" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <br />
      <h1>เลือกไฟล์ ที่ต้องการอัปโหลด</h1>
    </div>
  </div>

  <div className="flex flex-col w-full justify-center items-center">
  <h1>เลือกรายการและจำนวนสินค้าที่ต้องการคืน</h1>
 <div className="bg-white p-6 rounded-xl  max-w-6xl mx-auto">
  
  <div className="mb-8">
    <h2 className="text-lg font-semibold mb-4">ร้านค้า: SAHA OFFICE</h2>
    <div className="border-t border-gray-200 overflow-auto">
      
      <div className="grid grid-cols-1 sm:grid-cols-6 items-center gap-4 py-4 border-b border-gray-200">
        <input type="checkbox" className="w-4 h-4" />
        <div className="sm:col-span-2 text-gray-800 text-sm sm:text-base">
          เฟอร์นิเจอร์ทำงาน จราจร 121AS สี 3 ชั้น
        </div>
        <select className="col-span-1 p-2 border rounded-md text-sm sm:text-base">
          <option>เหตุผลในการคืน</option>
        </select>
        <div className="flex items-center col-span-1">
          <button className="px-2 py-1 border rounded-l-md bg-gray-100 text-sm sm:text-base">-</button>
          <input type="text" value="0" className="w-12 text-center border-t border-b border-gray-200 text-sm sm:text-base" />
          <button className="px-2 py-1 border rounded-r-md bg-gray-100 text-sm sm:text-base">+</button>
        </div>
        <div className="text-gray-800 text-right sm:text-left text-sm sm:text-base">฿8,832.20</div>
      </div>
      
    </div>
  </div>

  
  <div className="mb-8">
    <h2 className="text-lg font-semibold mb-4">ร้านค้า: Space Distortions</h2>
    <div className="border-t border-gray-200 overflow-auto">
      
      <div className="grid grid-cols-1 sm:grid-cols-6 items-center gap-4 py-4 border-b border-gray-200">
        <input type="checkbox" className="w-4 h-4" />
        <div className="sm:col-span-2 text-gray-800 text-sm sm:text-base">
          เฟอร์นิเจอร์ทำงาน จราจร 121AS สี 3 ชั้น
        </div>
        <select className="col-span-1 p-2 border rounded-md text-sm sm:text-base">
          <option>เหตุผลในการคืน</option>
        </select>
        <div className="flex items-center col-span-1">
          <button className="px-2 py-1 border rounded-l-md bg-gray-100 text-sm sm:text-base">-</button>
          <input type="text" value="0" className="w-12 text-center border-t border-b border-gray-200 text-sm sm:text-base" />
          <button className="px-2 py-1 border rounded-r-md bg-gray-100 text-sm sm:text-base">+</button>
        </div>
        <div className="text-gray-800 text-right sm:text-left text-sm sm:text-base">฿8,832.20</div>
      </div>
      
    </div>
  </div>

  
  <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
    <div className="text-gray-600 text-center md:text-left mb-4 md:mb-0">
      <p>จำนวนสินค้าที่ทำการคืน: -</p>
      <p>จำนวนเงินที่จะได้รับคืน: -</p>
    </div>
    <div className="space-x-4">
      <button className="px-6 py-2 border rounded-lg text-gray-700 bg-gray-100 text-sm sm:text-base">
        ยกเลิก
      </button>
      <button className="px-6 py-2 rounded-lg bg-blue-600 text-white shadow-md text-sm sm:text-base">
        ส่งข้อมูล
      </button>
    </div>
  </div>
</div>
</div>


</div>

  
</div>




    </>
  )
}

export default Contact
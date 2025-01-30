import React from 'react'

const Modal = () => {
  return (
    <>
    <div className="max-w-[896px]  border border-gray-300 pt-8 mx-auto pb-4 px-3 sm:px-7">
    
    <h1 className="text-[25px] font-[700] mb-4 text-[#232936]">ยืนยันการสั่งซื้อ</h1>

   
    <div className="border border-[#DEE7EF] rounded-lg sm:py-4 py-1  mb-4">
        <h2 className="text-lg mb-2 pt-3 sm:pt-0 px-4">รายการสินค้าทั้งหมด</h2>
        
<div className="border-b border-gray-300  ">
        <p className="text-red-500 text-sm px-4 mb-6">
            กรุณาตรวจสอบรายละเอียดก่อนยืนยันการสั่งซื้อ เนื่องจากจำนวนสินค้าอาจมีการเปลี่ยนแปลงและและอาจไม่เพียงพอในขณะนี้
        </p>
</div>
        
        <div className="">
            
           <div className="flex flex-col border-gray-300 sm:pt-5 py-3 px-2.5 sm:pb-6 sm:flex-row justify-around  sm:items-center  gap-4   border-b">

 
                <div className="flex  gap-5">
                  <div className="flex md:-ml-5 sm:mr-5 items-center ">
  <input type="checkbox" id="myCheckbox" className="form-checkbox h-5 w-5 text-blue-600 rounded" />
</div>

                    <div className="">
                        <h3 className="font-medium text-gray-300 mb-1">แฟ้มสันกว้าง ตราช้าง 121A5 สัน 3 นิ้ว</h3>
                        <p className="text-gray-300 text-sm">Pack of 24 ชิ้น</p>
                        <p className="text-gray-300 font-medium text-sm">฿1,664.40 ต่อ 1 หน่วย</p>
                    </div>
                </div>

                <div className="flex flex-col  ">
                       <div>
                          <span className="text-[18px] text-gray-300  mr-2">จำนวน</span>
                       </div>
                        <div className="flex  justify-between w-full items-center border-2 mt-2 border-gray-300 rounded">
                            <button className="px-3 py-1 border-r-2 border-gray-300 text-gray-300 hover:bg-gray-100">-</button>
                            <input type="number"  className= "nom w-12 text-gray-300 !appearance-none text-center py-1" value="0" />
                            <button className="px-3 py-1 border-l-2 border-gray-300 text-gray-300 hover:bg-gray-100">+</button>
                        </div>
                    </div>

                          
                    
                    <div className="flex sm:w-auto w-full sm:gap-7 justify-between ">                  
                    <div className="">
                      <p className="text-[15px] text-[#213550] mb-1.5 ">จำนวน</p>
                        <p className="line-through text-[#717786]  text-sm">฿2,664.40</p>
                        <p className="text-[#C42F2F] font-bold">฿1,664.40</p>
                    </div>
                
                <div className="flex items-center gap-8  "> 
                                
                    <div className="flex gap-2">

                       <button className="p-2  hover:text-blue-500 text-gray-600">
                           <svg width="21" height="20"  stroke="currentColor" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.1043 6.55705C20.0663 3.39753 17.4759 0.86612 14.3164 0.900778C12.7934 0.895378 11.3346 1.4939 10.2524 2.54756C9.16992 1.4939 7.70993 0.895372 6.17869 0.900742C3.02881 0.86612 0.438457 3.39753 0.400393 6.55705C0.399093 7.85942 0.849374 9.1143 1.67366 10.113C1.73135 10.181 3.1726 11.7946 5.72184 14.6468L9.75397 19.1574C10.0198 19.4547 10.4852 19.4546 10.7509 19.1572L18.814 10.1329C19.6554 9.1143 20.1056 7.85942 20.1044 6.56445L20.1043 6.55705ZM10.7793 3.95828C11.6306 2.86813 12.9382 2.233 14.3214 2.23785C16.7515 2.21126 18.7361 4.14951 18.7673 6.56945C18.7674 7.55204 18.4253 8.50404 17.7998 9.26192L10.2522 17.7085L6.71672 13.7535C4.30513 11.0553 2.73775 9.30045 2.69868 9.25449C2.07862 8.50309 1.73651 7.54965 1.73746 6.56575C1.76658 4.15149 3.752 2.21125 6.1737 2.23781C7.56652 2.233 8.87415 2.86813 9.72544 3.95828C9.99311 4.30105 10.5116 4.30105 10.7793 3.95828Z" fill="none"/>
</svg>

                        </button>

                       <button className="p-2 hover:text-red-500 text-gray-700 ">
                           <svg width="20" height="20" stroke="currentColor" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 5.5H4.16667H17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66699 5.49935V3.83268C6.66699 3.39065 6.84259 2.96673 7.15515 2.65417C7.46771 2.34161 7.89163 2.16602 8.33366 2.16602H11.667C12.109 2.16602 12.5329 2.34161 12.8455 2.65417C13.1581 2.96673 13.3337 3.39065 13.3337 3.83268V5.49935M15.8337 5.49935V17.166C15.8337 17.608 15.6581 18.032 15.3455 18.3445C15.0329 18.6571 14.609 18.8327 14.167 18.8327H5.83366C5.39163 18.8327 4.96771 18.6571 4.65515 18.3445C4.34259 18.032 4.16699 17.608 4.16699 17.166V5.49935H15.8337Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        </button>
                       
                    </div>
                </div>
                </div> 

            </div>

            <div className="flex flex-col border-gray-400 sm:pt-5 sm:pb-4 py-3 px-2.5 sm:flex-row justify-around  sm:items-center  gap-4   ">

 
                <div className="flex  gap-5">
                  <div className="flex md:-ml-5 sm:mr-5 items-center ">
  <input type="checkbox" id="myCheckbox" className="form-checkbox h-5 w-5 text-blue-600 rounded" />
</div>

                    <div className="">
                        <h3 className="font-medium text-gray-300 mb-1">แฟ้มสันกว้าง ตราช้าง 121A5 สัน 3 นิ้ว</h3>
                        <p className="text-gray-300 text-sm">Pack of 24 ชิ้น</p>
                        <p className="text-gray-300 font-medium text-sm">฿1,664.40 ต่อ 1 หน่วย</p>
                    </div>
                </div>

                <div className="flex flex-col  ">
                       <div>
                          <span className="text-[18px] text-gray-300  mr-2">จำนวน</span>
                       </div>
                        <div className="flex  justify-between w-full items-center border-2 mt-2 border-gray-300 rounded">
                            <button className="px-3 py-1 border-r-2 border-gray-300 text-gray-300 hover:bg-gray-100">-</button>
                            <input type="number"  className= "nom w-12 text-gray-300 !appearance-none text-center py-1" value="0" />
                            <button className="px-3 py-1 border-l-2 border-gray-300 text-gray-300 hover:bg-gray-100">+</button>
                        </div>
                    </div>

                          
                    
                    <div className="flex sm:w-auto w-full sm:gap-7 justify-between ">                  
                    <div className="">
                      <p className="text-[15px] text-[#213550] mb-1.5 ">จำนวน</p>
                        <p className="line-through text-[#717786]  text-sm">฿2,664.40</p>
                        <p className="text-[#C42F2F] font-bold">฿1,664.40</p>
                    </div>
                
                <div className="flex items-center gap-8  "> 
                                
                    <div className="flex gap-2">

                       <button className="p-2  hover:text-blue-500 text-gray-600">
                           <svg width="21" height="20"  stroke="currentColor" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.1043 6.55705C20.0663 3.39753 17.4759 0.86612 14.3164 0.900778C12.7934 0.895378 11.3346 1.4939 10.2524 2.54756C9.16992 1.4939 7.70993 0.895372 6.17869 0.900742C3.02881 0.86612 0.438457 3.39753 0.400393 6.55705C0.399093 7.85942 0.849374 9.1143 1.67366 10.113C1.73135 10.181 3.1726 11.7946 5.72184 14.6468L9.75397 19.1574C10.0198 19.4547 10.4852 19.4546 10.7509 19.1572L18.814 10.1329C19.6554 9.1143 20.1056 7.85942 20.1044 6.56445L20.1043 6.55705ZM10.7793 3.95828C11.6306 2.86813 12.9382 2.233 14.3214 2.23785C16.7515 2.21126 18.7361 4.14951 18.7673 6.56945C18.7674 7.55204 18.4253 8.50404 17.7998 9.26192L10.2522 17.7085L6.71672 13.7535C4.30513 11.0553 2.73775 9.30045 2.69868 9.25449C2.07862 8.50309 1.73651 7.54965 1.73746 6.56575C1.76658 4.15149 3.752 2.21125 6.1737 2.23781C7.56652 2.233 8.87415 2.86813 9.72544 3.95828C9.99311 4.30105 10.5116 4.30105 10.7793 3.95828Z" fill="none"/>
</svg>

                        </button>

                       <button className="p-2 hover:text-red-500 text-gray-700 ">
                           <svg width="20" height="20" stroke="currentColor" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 5.5H4.16667H17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66699 5.49935V3.83268C6.66699 3.39065 6.84259 2.96673 7.15515 2.65417C7.46771 2.34161 7.89163 2.16602 8.33366 2.16602H11.667C12.109 2.16602 12.5329 2.34161 12.8455 2.65417C13.1581 2.96673 13.3337 3.39065 13.3337 3.83268V5.49935M15.8337 5.49935V17.166C15.8337 17.608 15.6581 18.032 15.3455 18.3445C15.0329 18.6571 14.609 18.8327 14.167 18.8327H5.83366C5.39163 18.8327 4.96771 18.6571 4.65515 18.3445C4.34259 18.032 4.16699 17.608 4.16699 17.166V5.49935H15.8337Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        </button>
                       
                    </div>
                </div>
                </div> 

            </div>

        </div>
    </div>

   
    <div className="flex py-2 justify-end">
        <button className="bg-[#213550] text-white px-10 py-3  cursor-pointer rounded-full hover:bg-[#152041]">
            ยืนยันการสั่งซื้อ
        </button>
    </div>
</div>
    </>
  )
}

export default Modal
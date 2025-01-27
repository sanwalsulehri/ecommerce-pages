import React from "react";

const Information = () => {
  return (
    <>
      <div className="items-center flex flex-col justify-center">
        <div className="m-5">
          <div className="flex gap-3 text-xs text-gray-400">
            <h1>บัญชีของฉัน</h1>
            <svg
              width="5"
              height="12"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 13L7 7L1 1"
                stroke="#6B7177"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <h1>ใบเสนอราคา</h1>
          </div>
        </div>
        <div className="text-xl font-bold m-5 ">
          <h1 className="my-3">ใบเสนอราคาของฉัน</h1>
          <div className="flex gap-5 flex-wrap font-normal">
            <h1>เลขใบเสนอราคา : 0012430112024</h1>
            <div className="flex flex-wrap justify-center items-center p-2 text-sm rounded-full bg-[#E6E8EC]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_19410_29712)">
                  <rect
                    width="14"
                    height="14"
                    fill="white"
                    fill-opacity="0.01"
                  />
                  <path
                    d="M6.90156 9.32617C6.91326 9.34111 6.92819 9.3532 6.94525 9.36151C6.96231 9.36981 6.98103 9.37413 7 9.37413C7.01897 9.37413 7.03769 9.36981 7.05475 9.36151C7.0718 9.3532 7.08674 9.34111 7.09844 9.32617L8.84844 7.11211C8.9125 7.03086 8.85469 6.91055 8.75 6.91055H7.59219V1.62305C7.59219 1.5543 7.53594 1.49805 7.46719 1.49805H6.52969C6.46094 1.49805 6.40469 1.5543 6.40469 1.62305V6.90898H5.25C5.14531 6.90898 5.0875 7.0293 5.15156 7.11055L6.90156 9.32617ZM12.7188 8.7793H11.7812C11.7125 8.7793 11.6562 8.83555 11.6562 8.9043V11.3105H2.34375V8.9043C2.34375 8.83555 2.2875 8.7793 2.21875 8.7793H1.28125C1.2125 8.7793 1.15625 8.83555 1.15625 8.9043V11.998C1.15625 12.2746 1.37969 12.498 1.65625 12.498H12.3438C12.6203 12.498 12.8438 12.2746 12.8438 11.998V8.9043C12.8438 8.83555 12.7875 8.7793 12.7188 8.7793Z"
                    fill="#42526E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_19410_29712">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <button className="text-lg font-normal">
                ดาวน์โหลดใบเสนอราคา
              </button>
            </div>
            <button className="border rounded-full p-2 text-sm">
              {" "}
              Re-Quotation
            </button>
            <button className="bg-[#213550] p-2 text-sm text-white rounded-full">
              ซื้อสินค้าตามใบเสนอราคา
            </button>
          </div>
        </div>
        <div className="flex">
          <div className="m-5 h-[110vh] border border-gray-200 w-[40vw]">
            <div className="flex m-5 gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-12 text-gray-500 bg-gray-300 rounded-full m-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clip-rule="evenodd"
                />
              </svg>

              <h1 className="text-gray-500 text-lg">
                สวัสดี, <br />
                <span className="text-black  text-xl">Nice!</span>
              </h1>
            </div>
            <div className="flex flex-col gap-4 m-5 text-sm font-normal">
              <h1>แดชบอร์ดของฉัน</h1>
              <h1>ข้อมูลส่วนตัว</h1>
              <h1 className="flex justify-between">
                รายการสั่งซื้อของฉัน
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width="19" height="18" rx="9" fill="#F6625A" />
                  <path
                    d="M6.69402 8.004C6.67002 7.572 6.71402 7.172 6.82602 6.804C6.93802 6.436 7.11002 6.12 7.34202 5.856C7.58202 5.584 7.87802 5.372 8.23002 5.22C8.58202 5.068 8.98202 4.992 9.43002 4.992C9.79802 4.992 10.142 5.048 10.462 5.16C10.79 5.264 11.074 5.42 11.314 5.628C11.554 5.828 11.742 6.08 11.878 6.384C12.022 6.688 12.094 7.04 12.094 7.44C12.094 7.816 12.034 8.148 11.914 8.436C11.802 8.724 11.65 8.984 11.458 9.216C11.266 9.44 11.046 9.644 10.798 9.828C10.55 10.012 10.294 10.188 10.03 10.356C9.76602 10.516 9.50202 10.676 9.23802 10.836C8.97402 10.988 8.73002 11.152 8.50602 11.328C8.29002 11.504 8.10202 11.696 7.94202 11.904C7.79002 12.104 7.69002 12.336 7.64202 12.6H12.01V13.5H6.45402C6.49402 12.996 6.58202 12.568 6.71802 12.216C6.86202 11.856 7.04202 11.544 7.25802 11.28C7.47402 11.016 7.71802 10.784 7.99002 10.584C8.26202 10.384 8.54602 10.196 8.84202 10.02C9.20202 9.796 9.51802 9.592 9.79002 9.408C10.062 9.216 10.286 9.024 10.462 8.832C10.646 8.64 10.782 8.432 10.87 8.208C10.966 7.984 11.014 7.724 11.014 7.428C11.014 7.196 10.97 6.988 10.882 6.804C10.794 6.612 10.674 6.448 10.522 6.312C10.378 6.176 10.206 6.072 10.006 6C9.80602 5.928 9.59402 5.892 9.37002 5.892C9.07402 5.892 8.81802 5.956 8.60202 6.084C8.39402 6.204 8.22202 6.364 8.08602 6.564C7.95002 6.764 7.85002 6.992 7.78602 7.248C7.73002 7.496 7.70602 7.748 7.71402 8.004H6.69402Z"
                    fill="white"
                  />
                </svg>
              </h1>

              <h1 className="flex justify-between ">
                ข้อมูลส่วนตัว
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width="19" height="18" rx="9" fill="#F6625A" />
                  <path
                    d="M6.69402 8.004C6.67002 7.572 6.71402 7.172 6.82602 6.804C6.93802 6.436 7.11002 6.12 7.34202 5.856C7.58202 5.584 7.87802 5.372 8.23002 5.22C8.58202 5.068 8.98202 4.992 9.43002 4.992C9.79802 4.992 10.142 5.048 10.462 5.16C10.79 5.264 11.074 5.42 11.314 5.628C11.554 5.828 11.742 6.08 11.878 6.384C12.022 6.688 12.094 7.04 12.094 7.44C12.094 7.816 12.034 8.148 11.914 8.436C11.802 8.724 11.65 8.984 11.458 9.216C11.266 9.44 11.046 9.644 10.798 9.828C10.55 10.012 10.294 10.188 10.03 10.356C9.76602 10.516 9.50202 10.676 9.23802 10.836C8.97402 10.988 8.73002 11.152 8.50602 11.328C8.29002 11.504 8.10202 11.696 7.94202 11.904C7.79002 12.104 7.69002 12.336 7.64202 12.6H12.01V13.5H6.45402C6.49402 12.996 6.58202 12.568 6.71802 12.216C6.86202 11.856 7.04202 11.544 7.25802 11.28C7.47402 11.016 7.71802 10.784 7.99002 10.584C8.26202 10.384 8.54602 10.196 8.84202 10.02C9.20202 9.796 9.51802 9.592 9.79002 9.408C10.062 9.216 10.286 9.024 10.462 8.832C10.646 8.64 10.782 8.432 10.87 8.208C10.966 7.984 11.014 7.724 11.014 7.428C11.014 7.196 10.97 6.988 10.882 6.804C10.794 6.612 10.674 6.448 10.522 6.312C10.378 6.176 10.206 6.072 10.006 6C9.80602 5.928 9.59402 5.892 9.37002 5.892C9.07402 5.892 8.81802 5.956 8.60202 6.084C8.39402 6.204 8.22202 6.364 8.08602 6.564C7.95002 6.764 7.85002 6.992 7.78602 7.248C7.73002 7.496 7.70602 7.748 7.71402 8.004H6.69402Z"
                    fill="white"
                  />
                </svg>
              </h1>
              <h1>รายการโปรดของฉัน</h1>
              <h1>ใบเสนอราคา</h1>
              <h1>ที่อยู่ของฉัน</h1>
              <h1>การยืนยันตัวตนผู้ใช้และอุปกรณ์</h1>
              <h1>องค์กรของฉัน</h1>
              <h1>กรายการคืนสินค้าและคืนเงิน</h1>
              <h1>บัตรเครดิตของฉัน</h1>

              <h1 className="text-gray-400 border-b border-gray-300 pb-2">
                Credit Terms
              </h1>
              <h1 className="text-xs">ออกจากระบบ</h1>
            </div>
          </div>
          <div className="p-6 max-w-[60vw] mx-auto  bg-white shadow-lg rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-800">ชื่อผู้ค้า/บริษัท</p>
                <p className="text-gray-600">Ryan</p>
              </div>
              <div>
                <label className="block font-semibold text-gray-800">
                  Salesman
                </label>
                <input
                  type="text"
                  placeholder="Passin Kaewwit"
                  className="w-full border border-gray-300 rounded px-3 py-1 mt-1"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-800">ที่อยู่ลูกค้า</p>
                <p className="text-gray-600">
                  123 ม.12 ถ. รัชดา แขวง คลองเคย เขตคลองเตย 10300
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">เบอร์โทร</p>
                <p className="text-gray-600">02-32323432</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">อีเมล</p>
                <p className="text-gray-600">farid12@company.com</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">
                  วันที่ออกใบเสนอราคา
                </p>
                <p className="text-gray-600">11.12.2024</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">ใช้ได้ถึงวันที่</p>
                <p className="text-gray-600">01.01.2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="m-5 text-xl font-bold">ผู้จัดจำหน่ายสินค้า (2) </h1>
      <h1 className="m-5 text-lg">ร้าน เจริญสิทธิภัณฑ์ฮาร์ดแวร์</h1>

      <div className="max-w-screen-lg text-sm mx-auto my-8 p-6 bg-white shadow-md rounded-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse  border-b border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className=" border-gray-300 border-b px-4 py-2">#</th>
                <th className=" border-gray-300 border-b px-4 py-2">
                  รหัสสินค้า
                </th>
                <th className=" border-gray-300 border-b px-4 py-2">
                  ชื่อสินค้า
                </th>
                <th className=" border-gray-300 border-b px-4 py-2">จำนวน</th>
                <th className=" border-gray-300 border-b px-4 py-2">
                  หน่วยขาย
                </th>
                <th className=" border-gray-300 border-b px-4 py-2">
                  ราคาหน่วย
                </th>
                <th className=" border-gray-300 border-b px-4 py-2">
                  ส่วนลดร้านค้า
                </th>
                <th className=" border-gray-300 border-b px-4 py-2">รวม</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-gray-300 px-4 py-2">1</td>
                <td className="border-b border-gray-300 px-4 py-2">FS084516</td>
                <td className="border-b border-gray-300 px-4 py-2">
                  ถุงมือยาง สีส้ม Star ไซส์ 1 หนาค. 8 1/2 นิ้ว
                </td>
                <td className="border-b border-gray-300 px-4 py-2">2</td>
                <td className="border-b border-gray-300 px-4 py-2">
                  PAIR(คู่)
                </td>
                <td className="border-b border-gray-300 px-4 py-2">35.00</td>
                <td className="border-b border-gray-300 px-4 py-2">0</td>
                <td className="border-b border-gray-300 px-4 py-2">70.00</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border-b border-gray-300 px-4 py-2">2</td>
                <td className="border-b border-gray-300 px-4 py-2">FS084547</td>
                <td className="border-b border-gray-300 px-4 py-2">
                  คัตเตอร์ทอง ตราไทไทม์ Kanazawa 200 กรัม KA-0102003
                </td>
                <td className="border-b border-gray-300 px-4 py-2">2</td>
                <td className="border-b border-gray-300 px-4 py-2">ชิ้น</td>
                <td className="border-b border-gray-300 px-4 py-2">110.00</td>
                <td className="border-b border-gray-300 px-4 py-2">0</td>
                <td className="border-b border-gray-300 px-4 py-2">220.00</td>
              </tr>
              <tr>
                <td className="border-b border-gray-300 px-4 py-2">3</td>
                <td className="border-b border-gray-300 px-4 py-2">FS084707</td>
                <td className="border-b border-gray-300 px-4 py-2">
                  ตลับเมตร ตราไทไทม์ 16 ออนซ์
                </td>
                <td className="border-b border-gray-300 px-4 py-2">1</td>
                <td className="border-b border-gray-300 px-4 py-2">ชิ้น</td>
                <td className="border-b border-gray-300 px-4 py-2">75.00</td>
                <td className="border-b border-gray-300 px-4 py-2">0</td>
                <td className="border-b border-gray-300 px-4 py-2">75.00</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border-b border-gray-300 px-4 py-2">4</td>
                <td className="border-b border-gray-300 px-4 py-2">FS085346</td>
                <td className="border-b border-gray-300 px-4 py-2">
                  ไฟฉายชาร์จไฟ Yasida YD-888 ชาร์จได้ 2 ระบบ 21 LED
                </td>
                <td className="border-b border-gray-300 px-4 py-2">1</td>
                <td className="border-b border-gray-300 px-4 py-2">ชิ้น</td>
                <td className="border-b border-gray-300 px-4 py-2">270.00</td>
                <td className="border-b border-gray-300 px-4 py-2">0</td>
                <td className="border-b border-gray-300 px-4 py-2">270.00</td>
              </tr>
              <tr>
                <td className="border-b border-gray-300 px-4 py-2">5</td>
                <td className="border-b border-gray-300 px-4 py-2">FS085353</td>
                <td className="border-b border-gray-300 px-4 py-2">
                  หมวกเซฟตี้ Pangolin พร้อมชิ้นเลื่อน สายคาดหาง 2 จุด 8091-S2WH
                  สีขาว
                </td>
                <td className="border-b border-gray-300 px-4 py-2">5</td>
                <td className="border-b border-gray-300 px-4 py-2">ใบ</td>
                <td className="border-b border-gray-300 px-4 py-2">270.00</td>
                <td className="border-b border-gray-300 px-4 py-2">0</td>
                <td className="border-b border-gray-300 px-4 py-2">1,350.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h1 className="m-5 text-lg">ร้าน เจริญสิทธิภัณฑ์ฮาร์ดแวร์</h1>

      <div className="max-w-screen-lg mx-auto my-8 p-6 bg-white text-sm shadow-md rounded-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse  border-b border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className=" border-gray-300 border-b px-4 py-2">#</th>
                <th className=" border-gray-300 border-b px-4 py-2">
                  รหัสสินค้า
                </th>
                <th className=" border-gray-300 border-b px-4 py-2">
                  ชื่อสินค้า
                </th>
                <th className=" border-gray-300 border-b px-4 py-2">จำนวน</th>
                <th className=" border-gray-300 border-b px-4 py-2">
                  หน่วยขาย
                </th>
                <th className=" border-gray-300 border-b px-4 py-2">
                  ราคาหน่วย
                </th>
                <th className=" border-gray-300 border-b px-4 py-2">
                  ส่วนลดร้านค้า
                </th>
                <th className=" border-gray-300 border-b px-4 py-2">รวม</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-gray-300 px-4 py-2">1</td>
                <td className="border-b border-gray-300 px-4 py-2">FS084516</td>
                <td className="border-b border-gray-300 px-4 py-2">
                  ถุงมือยาง สีส้ม Star ไซส์ 1 หนาค. 8 1/2 นิ้ว
                </td>
                <td className="border-b border-gray-300 px-4 py-2">2</td>
                <td className="border-b border-gray-300 px-4 py-2">
                  PAIR(คู่)
                </td>
                <td className="border-b border-gray-300 px-4 py-2">35.00</td>
                <td className="border-b border-gray-300 px-4 py-2">0</td>
                <td className="border-b border-gray-300 px-4 py-2">70.00</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border-b border-gray-300 px-4 py-2">2</td>
                <td className="border-b border-gray-300 px-4 py-2">FS084547</td>
                <td className="border-b border-gray-300 px-4 py-2">
                  คัตเตอร์ทอง ตราไทไทม์ Kanazawa 200 กรัม KA-0102003
                </td>
                <td className="border-b border-gray-300 px-4 py-2">2</td>
                <td className="border-b border-gray-300 px-4 py-2">ชิ้น</td>
                <td className="border-b border-gray-300 px-4 py-2">110.00</td>
                <td className="border-b border-gray-300 px-4 py-2">0</td>
                <td className="border-b border-gray-300 px-4 py-2">220.00</td>
              </tr>
              <tr>
                <td className="border-b border-gray-300 px-4 py-2">3</td>
                <td className="border-b border-gray-300 px-4 py-2">FS084707</td>
                <td className="border-b border-gray-300 px-4 py-2">
                  ตลับเมตร ตราไทไทม์ 16 ออนซ์
                </td>
                <td className="border-b border-gray-300 px-4 py-2">1</td>
                <td className="border-b border-gray-300 px-4 py-2">ชิ้น</td>
                <td className="border-b border-gray-300 px-4 py-2">75.00</td>
                <td className="border-b border-gray-300 px-4 py-2">0</td>
                <td className="border-b border-gray-300 px-4 py-2">75.00</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border-b border-gray-300 px-4 py-2">4</td>
                <td className="border-b border-gray-300 px-4 py-2">FS085346</td>
                <td className="border-b border-gray-300 px-4 py-2">
                  ไฟฉายชาร์จไฟ Yasida YD-888 ชาร์จได้ 2 ระบบ 21 LED
                </td>
                <td className="border-b border-gray-300 px-4 py-2">1</td>
                <td className="border-b border-gray-300 px-4 py-2">ชิ้น</td>
                <td className="border-b border-gray-300 px-4 py-2">270.00</td>
                <td className="border-b border-gray-300 px-4 py-2">0</td>
                <td className="border-b border-gray-300 px-4 py-2">270.00</td>
              </tr>
              <tr>
                <td className="border-b border-gray-300 px-4 py-2">5</td>
                <td className="border-b border-gray-300 px-4 py-2">FS085353</td>
                <td className="border-b border-gray-300 px-4 py-2">
                  หมวกเซฟตี้ Pangolin พร้อมชิ้นเลื่อน สายคาดหาง 2 จุด 8091-S2WH
                  สีขาว
                </td>
                <td className="border-b border-gray-300 px-4 py-2">5</td>
                <td className="border-b border-gray-300 px-4 py-2">ใบ</td>
                <td className="border-b border-gray-300 px-4 py-2">270.00</td>
                <td className="border-b border-gray-300 px-4 py-2">0</td>
                <td className="border-b border-gray-300 px-4 py-2">1,350.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="max-w-sm mx-auto p-4 border-gray-100  rounded-lg shadow-lg text-gray-800">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>ยอดรวมก่อนหักส่วนลด:</span>
            <span>22,185.00</span>
          </div>
          <div className="flex justify-between">
            <span>ส่วนลดเงินสด:</span>
            <span>600.00</span>
          </div>
          <div className="flex justify-between">
            <span>ยอดรวมหลังหักส่วนลด:</span>
            <span>21,585.00</span>
          </div>
          <div className="flex justify-between">
            <span>ค่าขนส่ง:</span>
            <span>80.00</span>
          </div>
          <div className="flex justify-between">
            <span>ราคาก่อนรวมภาษีมูลค่าเพิ่ม:</span>
            <span>20,247.66</span>
          </div>
          <div className="flex justify-between">
            <span>ภาษีมูลค่าเพิ่ม 7%:</span>
            <span>1,417.34</span>
          </div>
          <div className="flex justify-between font-bold text-lg border-t pt-2">
            <span>ยอดรวมทั้งหมด:</span>
            <span className="text-purple-600">21,665.00฿</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;

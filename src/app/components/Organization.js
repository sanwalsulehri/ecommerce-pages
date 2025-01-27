import React from "react";

const Organization = () => {
  return (
    <div className="p-6 space-y-6 bg-white rounded-lg shadow-md">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 flex items-center space-x-2">
        <span>บัญชีของฉัน</span>
        <span className="text-gray-400">/</span>
        <span className="font-medium text-gray-700">องค์กรของฉัน</span>
      </div>

      {/* Title and Description */}
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-gray-900">องค์กรของฉัน</h1>
        <p className="text-gray-500">
          ขณะนี้คุณเป็นสมัครสมาชิกแบบบุคคลธรรมดา คุณสามารถเปลี่ยนข้อมูลเป็นรูปแบบนิติบุคคลได้ที่ปุ่มด้านล่างนี้
        </p>
      </div>

      {/* Button */}
      <div>
        <button className="px-12 py-4 bg-[#213550] text-white text-sm font-medium rounded-full hover:bg-blue-800 transition">
          เปลี่ยนเป็นนิติบุคคล
        </button>
      </div>
    </div>
  );
};

export default Organization;

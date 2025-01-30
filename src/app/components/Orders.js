const Sidebar = () => {
    return (
      <div className="w-[275px] md:block hidden ml-[50px] mt-[50px] h-fit bg-white border px-4 py-4">
        {/* Navigation Menu */}
        <nav className="space-y-1">
          <div className="space-y-1">
            <div className="py-2 px-3 hover:bg-gray-100 rounded">Profile</div>
            <div className="flex items-center justify-between py-2 px-3 hover:bg-gray-100 rounded">
              <span>My Orders</span>
              <span className="bg-[#F6625A] text-white text-xs px-2 py-1 rounded-full">2</span>
            </div>
            <div className="flex items-center justify-between py-2 px-3 hover:bg-gray-100 rounded">
              <span>My Wishlist</span>
              <span className="bg-[#F6625A] text-white text-xs px-2 py-1 rounded-full">3</span>
            </div>
            <div className="py-2 px-3 bg-gray-100 text-red-500 rounded">Quick Order</div>
            <div className="py-2 px-3 hover:bg-gray-100 rounded">My Quotes</div>
            <div className="py-2 px-3 hover:bg-gray-100 rounded">My Addresses</div>
            <div className="py-2 px-3 hover:bg-gray-100 rounded">My Organization</div>
            <div className="py-2 px-3 hover:bg-gray-100 rounded">My Returns</div>
            <div className="py-4 px-3 border-b"></div>
            <div className="py-2 px-3 hover:bg-gray-100 rounded">Logout</div>
          </div>
        </nav>
      </div>
    );
  };
  
  const Orders = () => {
    return (
      <div className="flex">
        <Sidebar />
        <div className="flex-1 px-8 py-6 overflow-auto">
          <div className="flex items-center mb-6 ">
            <button className="flex items-center text-[#0067C7]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 8H1M1 8L8 15M1 8L8 1" stroke="#0067C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="ml-2">Back to Quick Order</span>
            </button>
          </div>
  
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px]">
              <thead>
                <tr className="text-xs uppercase text-[#232936] border-b">
                  <th className="text-left pb-2 font-normal w-[250px]">Product Name</th>
                  <th className="text-left pb-2 font-normal w-[250px]"></th>
                  <th className="text-left pb-2 font-normal w-[120px]">SKU</th>
                  <th className="text-left pb-2 font-normal w-[100px]">Status</th>
                  <th className="text-center pb-2 font-normal w-[100px]">QTY</th>
                  <th className="text-right pb-2 font-normal w-[120px]">Subtotal</th>
                  <th className="w-[60px]"></th>
                </tr>
              </thead>
              <tbody>
                {[...Array(10)].map((_, index) => (
                  <tr key={index} className="border-b text-sm">
                    <td className="py-4 pr-2 ">
                      <div>
                        <div>A&B 16" Notebook Pro Late 2019,<br></br> Space Gray</div>
                      </div>
                    </td>
                    <td className="">
                      <div className="text-xs  mt-1">
                        <span >Supplied by: </span>
                        <span className="text-[#717786]">Thai Bell Pen<br></br> Industry Co., LTD</span>
                      </div>
                      <div className="text-xs text-gray-500">
                        <span className="text-[black]">Delivered by: </span>
                        <span>Office Buddy</span>
                      </div>
                    </td>
                    <td className="py-4 w-[120px]">122334</td>
                    <td className="py-4 w-[100px]">
                      <span className="text-green-500">Valid</span>
                    </td>
                    <td className="py-4 w-[80px]">
                      <div className="flex items-center justify-center space-x-2 border py-1 mx-2">
                        <button className="text-gray-500">-</button>
                        <span>1</span>
                        <button className="text-gray-500">+</button>
                      </div>
                    </td>
                    <td className="py-4 text-right w-[120px]">$277.95</td>
                    <td className="py-4 pl-4 w-[60px]">
                      <button>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.5 5H4.16667H17.5" stroke="#232936" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M6.66602 4.99984V3.33317C6.66602 2.89114 6.84161 2.46722 7.15417 2.15466C7.46673 1.8421 7.89065 1.6665 8.33268 1.6665H11.666C12.108 1.6665 12.532 1.8421 12.8445 2.15466C13.1571 2.46722 13.3327 2.89114 13.3327 3.33317V4.99984M15.8327 4.99984V16.6665C15.8327 17.1085 15.6571 17.5325 15.3445 17.845C15.032 18.1576 14.608 18.3332 14.166 18.3332H5.83268C5.39065 18.3332 4.96673 18.1576 4.65417 17.845C4.34161 17.5325 4.16602 17.1085 4.16602 16.6665V4.99984H15.8327Z" stroke="#232936" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    );
  };
  
  export default Orders;
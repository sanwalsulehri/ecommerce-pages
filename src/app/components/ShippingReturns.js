import React from 'react';

const ShippingReturns = () => {
  const policies = [
    {
      heading: 'Shipping Policy',
      list: [
        'Free shipping on orders over $50.',
        'Orders are processed within 2-3 business days.',
        'Delivery times may vary based on location.',
      ],
      paragraph: 'Please allow additional time for your order to be processed during peak seasons.',
    },
    {
      heading: 'Returns Policy',
      list: [
        'You have 30 days to return an item from the date you received it.',
        'Items must be in original condition and packaging.',
        'Refunds will be processed within 7-10 business days after we receive your return.',
      ],
      paragraph: 'If you have any questions about your return, please contact our customer service.',
    },
    {
      heading: 'Exchanges',
      list: [
        'Exchanges are subject to product availability.',
        'You can exchange an item for a different size or color.',
        'Please contact customer service to initiate an exchange.',
      ],
      paragraph: 'We want you to be completely satisfied with your purchase.',
    },
  ];

  return (
    <div className='px-4'>
      <div>
        <h1 className='sm:text-[24px] text-[20px] text-[#232936] font-semibold'>Shipping & Returns</h1>
        <p className='text-sm text-[#6B7177] py-3'>Please read the terms and conditions of this www.dhas.com website carefully.</p>

        <div className='py-12 flex flex-col gap-8 sm:gap-14'>
          {policies.map((policy, index) => (
            <div key={index}>
              <h1 className='text-[20px] text-[#232936] font-semibold'>{policy.heading}</h1>
              <ul className='list-disc pl-5 py-5 flex flex-col gap-2'>
                {policy.list.map((item, itemIndex) => (
                  <li key={itemIndex} className='text-sm text-[#6B7177]'>
                    {item}
                  </li>
                ))}
              </ul>
              <p className='text-sm text-[#6B7177]'>{policy.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShippingReturns;
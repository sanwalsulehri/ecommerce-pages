import React from 'react';

const PrivacyPolicy = () => {
  const policies = [
    { heading: '', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { heading: '', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { heading: '', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { heading: '', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { heading: '', content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { heading: 'Heading for Paragraph 6', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { heading: 'Heading for Paragraph 7', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { heading: 'Heading for Paragraph 8', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { heading: 'Heading for Paragraph 9', content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { heading: 'Heading for Paragraph 10', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  ];

  return (
    <div className=' px-4'>
      <div>
        <h1 className='sm:text-[24px] text-[20px] text-[#232936] font-semibold'>Privacy & Cookies Policy</h1>
        <p className='text-sm text-[#6B7177] py-3'>Revised edition dated 1 June 2020</p>

        <div className='py-12 flex flex-col gap-8 sm:gap-14'>
          {policies.map((policy, index) => (
            <div key={index}>
              {policy.heading && (
                <h1 className='text-[20px] text-[#232936] font-semibold'>{policy.heading}</h1>
              )}
              <p className='text-sm text-[#6B7177]'>{policy.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
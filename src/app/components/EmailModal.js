import Image from 'next/image'
import React from 'react'

const EmailModal = () => {
  return (
    <div>
        <div className="flex w-full flex-col sm:w-fit sm:flex-row">
  <div className="m-3 flex h-[40vh] w-full overflow-hidden sm:h-auto sm:w-fit">
    <Image
      src="data:image/jpeg;base64,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"
      alt="image"
      className="w-full"
    />
  </div>
  <div className="m-7 flex flex-col justify-center">
    <h2 className="text-xl font-bold">
      Sign up to receive $5 off your first <br />
      purchase + weekly deals
    </h2>
    <p className="mt-4 text-xs text-[#6B7177]">
      Enter your email address to receive our newsletter and weekly <br />
      special deals.
    </p>
    <div className="flex flex-wrap items-center justify-center">
      <input className="mt-8 mr-3 rounded-4xl border-2 border-gray-200 bg-transparent px-8 py-2" type="text" placeholder="Your Email Address" />
      <button className="mt-5 rounded-4xl bg-[#213550] p-2 px-28 text-white md:mt-8 md:px-6 md:py-2">join</button>
    </div>
  </div>
</div>

    </div>
  )
}

export default EmailModal
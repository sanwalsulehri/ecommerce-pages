'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import BusinessRegistration from './components/BusinessRegistration';
import BusnessDetail from './components/BusnessDetail';
import Cart from './components/Cart';
import Contact from './components/Contact';
import DetailsInfo from './components/DetailsInfo';
import Email from './components/Email';
import EmailModal from './components/EmailModal';
import Form from './components/Form';
import Information from './components/Information';
import MoreCart from './components/MoreCart';
import Orders from './components/Orders';
import OrderDetails from './components/OrdersDetails';
import Organization from './components/Organization';
import PrivacyPolicy from './components/PrivacyPolicy';
import ShippingReturns from './components/ShippingReturns';
import SideBar from './components/SideBar';
import Table from './components/Table';
import TableDetails from './components/TableDetails';
import TermsConditions from './components/TermsConditions';
import Navbar from './components/Navbar';


const components = {
  BusinessRegistration: <BusinessRegistration />,
  BusnessDetail: <BusnessDetail />,
  Cart: <Cart />,
  Contact: <Contact />,
  DetailsInfo: <DetailsInfo />,
  Email: <Email />,
  EmailModal: <EmailModal />,
  Form: <Form />,
  Information: <Information />,
  MoreCart: <MoreCart />,
  Orders: <Orders />,
  OrderDetails: <OrderDetails />,
  Organization: <Organization />,
  PrivacyPolicy: <PrivacyPolicy />,
  ShippingReturns: <ShippingReturns />,
  SideBar: <SideBar />,
  Table: <Table />,
  TableDetails: <TableDetails />,
  TermsConditions: <TermsConditions />,
};

const Page = () => {
  
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div className="flex min-h-screen bg-gray-200 flex-col gap-3 p-5">
      <Navbar />
      <div className="flex gap-4 flex-wrap">
        <Link href={'/ContactPage'}>
      <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            ContactPage
          </button>
          </Link>
          <Link href={'/APage'}>APage</Link>
          <Link href={'/APage2'}>APage2</Link>
          <Link href={'/Checkout'}>Checkout</Link>
          <Link href={'/ContactPage'}>ContactPage</Link>
          <Link href={'/DelivryDetails'}>DelivryDetails</Link>
          <Link href={'/LtwoPfive'}>LtwoPfive</Link>
          <Link href={'/LtwoPfour'}>LtwoPfour</Link>
          <Link href={'/LtwoPthree'}>LtwoPthree</Link>
          <Link href={'/LtwoPtwo'}>LtwoPtwo</Link>
          <Link href={'/OrgnizationPage'}>OrganizationPage</Link>
          <Link href={'/PrivacyPage'}>PrivacyPage</Link>
          <Link href={'/ReQuotation'}>Requotation</Link>
          <Link href={'/U1'}>U1</Link>
          <Link href={'/U2'}>U2</Link>
          <Link href={'/U3'}>U3</Link>
          <Link href={'/U4'}>U4</Link>
          <Link href={'/U5'}>U5</Link>
          <Link href={'/U6'}>U6</Link>
        {Object.keys(components).map((componentName) => (
          <button
            key={componentName}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => setActiveComponent(componentName)}
          >
            {componentName}
          </button>
        ))}
      </div>
      <div className="mt-5 p-5 bg-white rounded shadow">
        {activeComponent ? (
          components[activeComponent]
        ) : (
          <p className="text-gray-700">Select a component to display</p>
        )}
      </div>
    </div>
  );
};

export default Page;

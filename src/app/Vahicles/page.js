"use client";
import React from "react";
import Navbar from "@/components/components/Navbar";
import Customercard from "@/components/components/Customercard";
import VahiclesDetails from "@/components/components/VahiclesDetails";
import VahiclesPast from "@/components/components/VahiclesPast";
import VahiclesUpcoming from "@/components/components/VahiclesUpcoming";

const customers = [
  {
    Company_Name: "ACE FREIGHTLINES PTY LTD",
    Customer_Nickname: "ACE",
    Status: "Active",
    Type: "Customer",
    Postcode: "3030",
    Invoicing_Contact: "Akash Chaudhary",
    Vehicle: "cajd6hcx",
  },
  {
    Company_Name: "ACE FREIGHTLINES PTY LTD",
    Customer_Nickname: "ACE",
    Status: "Active",
    Type: "Customer",
    Postcode: "3030",
    Invoicing_Contact: "Akash Chaudhary",
    Vehicle: "cajd6hcx",
  },
  {
    Company_Name: "ACE FREIGHTLINES PTY LTD",
    Customer_Nickname: "ACE",
    Status: "Active",
    Type: "Customer",
    Postcode: "3030",
    Invoicing_Contact: "Akash Chaudhary",
    Vehicle: "cajd6hcx",
  },
  {
    Company_Name: "ACE FREIGHTLINES PTY LTD",
    Customer_Nickname: "ACE",
    Status: "Active",
    Type: "Customer",
    Postcode: "3030",
    Invoicing_Contact: "Akash Chaudhary",
    Vehicle: "cajd6hcx",
  },
];

function Page() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-2 lg:border-r lg:border-gray-300">
            <div className="text-2xl font-semibold text-center mt-12 mb-6">
              Customers
            </div>
            <div className="mx-2 items-center justify-center">
              {customers.map((customer, index) => (
                <Customercard key={index} customer={customer} />
              ))}
            </div>
          </div>
          <div className="p-2 lg:border-r lg:border-gray-300">
            <div className="text-2xl font-semibold text-center mt-12 mb-6">
              Vahicles
            </div>
            <div className="p-2">
              <VahiclesDetails />
            </div>
          </div>
          <div className="p-2">
            <div className="text-2xl font-semibold text-center mt-12 mb-6">
              Past & Upcoming Services
            </div>
            <div className="p-2">
              <VahiclesPast />
              <VahiclesUpcoming />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

"use client";
import React from "react";
import ServicesDetails from "@/app/Employee/components/ServicesDetails";
import ServiceInvoice from "@/app/Employee/components/ServiceInvoice";
import Navbar from "@/app/Employee/components/Navbar";

function page() {
  return (
    <>
      <Navbar />
      <div className="text-4xl font-semibold text-center mt-12 mb-6">
        Services
      </div>
      <div className="sm:col-span-1 mx-auto container justify-center">
        <ServicesDetails />
      </div>
    </>
  );
}

export default page;

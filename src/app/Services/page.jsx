"use client";
import React from "react";
import ServicesDetails from "@/components/components/ServicesDetails";
import ServiceInvoice from "@/components/components/ServiceInvoice";
import Navbar from "@/components/components/Navbar";

function page() {
  return (
    <>
      <Navbar />
      <div className="text-2xl font-semibold text-center mt-12 mb-6">
        Services
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3">
        <div className="sm:col-span-1 mx-auto container justify-center">
          <ServicesDetails />
        </div>
        <div className="sm:col-span-2 mx-auto container justify-center">
          <ServiceInvoice />
        </div>
      </div>
    </>
  );
}

export default page;

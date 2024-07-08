"use client";

import React from "react";
import ServicesDetails from "@/app/Employee/components/ServicesDetails";
import Navbar from "@/app/Employee/components/Navbar";
import AddServices from "@/app/Employee/components/AddServices";
import { withRoleProtection } from "../../components/withRoleProtection";

function EmployeeDashboard() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Services</h1>
        <ServicesDetails />
        <AddServices />
      </div>
    </>
  );
}

export default withRoleProtection(EmployeeDashboard, ["employee"]);

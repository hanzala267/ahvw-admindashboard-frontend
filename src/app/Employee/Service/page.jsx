"use client";
import { useState } from "react";
import Navbar from "@/app/Employee/components/Navbar";
import ServiceSidebar from "@/app/Employee/components/ServiceSidebar";
import ServiceInvoice from "@/app/Employee/components/ServiceInvoice";
import MenuIcon from "@/app/Employee/components/MenuIcon";

const Page = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col md:flex-row">
        <ServiceSidebar
          selectedService={selectedService}
          setSelectedService={setSelectedService}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <div className="md:hidden p-4">
          <MenuIcon onClick={handleSidebarToggle} />
        </div>
        <main className="flex-1 p-6 bg-gray-50 space-y-6">
          {selectedService ? (
            <ServiceInvoice
              service={selectedService}
              setSelectedService={setSelectedService}
            />
          ) : (
            <div className="text-center text-gray-500">
              Select a service to view and update
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default Page;

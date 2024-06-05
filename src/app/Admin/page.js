"use client";
import { useState } from "react";
import Navbar from "@/app/Admin/components/Navbar";
import { Calendar } from "@/components/ui/calendar";
import Lowstock from "@/app/Admin/components/Lowstock";
import Todayservises from "@/app/Admin/components/Todayservices";
export default function Home() {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2  justify-center  py-2">
        <div>
          <div className="text-2xl font-semibold text-center mt-12 mb-6">
            Services
          </div>
          <div className=" flex items-center justify-center">
            <Calendar mode="single" selected={date} onSelect={setDate} />
          </div>
          <div className="text-2xl  font-semibold text-center mt-16 mb-2">
            Low Part Stock
          </div>
          <div className="mt-6 mx-2  sm;mx-8">
            <Lowstock />
          </div>
        </div>
        <div>
          <div className="text-2xl font-semibold text-center mt-12 mb-6">
            Today Services
          </div>
          <div className="mt-6 mx-2 sm:mx-8">
            <Todayservises />
          </div>
        </div>
      </div>
    </>
  );
}

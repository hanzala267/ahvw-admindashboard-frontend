"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const ServiceInvoice = ({ service, setSelectedService }) => {
  const { name, parts, hours } = service;
  const [newPartName, setNewPartName] = useState("");
  const [newPartQty, setNewPartQty] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [serviceHours, setServiceHours] = useState("");

  const handleAddPart = () => {
    const newPart = {
      name: newPartName,
      qty: Number(newPartQty),
      price: 0, // Placeholder, should be fetched from the database
      tax: 0, // Placeholder, should be fetched from the database
    };
    const updatedParts = [...parts, newPart];
    setSelectedService({ ...service, parts: updatedParts });
    setNewPartName("");
    setNewPartQty("");
  };

  const handleAddHours = () => {
    const newHours = {
      employeeName: employeeName,
      hours: Number(serviceHours),
    };
    const updatedHours = [...hours, newHours];
    setSelectedService({ ...service, hours: updatedHours });
    setEmployeeName("");
    setServiceHours("");
  };

  return (
    <section className="grid md:grid-cols-1 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
      <div className="grid gap-4 md:gap-10 items-start">
        <div className="grid gap-4">
          <h1 className="font-bold text-3xl">Service</h1>
          <div className="grid gap-2 text-sm leading-loose">
            <p>
              Thank you for your business with AHVW Service. Please find the details of your recent purchase below.
            </p>
            <div className="grid grid-cols-[100px_1fr] gap-2">
              <span className="font-medium">Service:</span>
              <span>{name}</span>
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <h2 className="font-bold text-xl">Parts Purchased</h2>
            <div className="grid gap-2 border-t border-gray-200 pt-2 dark:border-gray-800">
              <div className="grid grid-cols-[1fr_80px_80px_80px] items-center gap-4">
                <span className="font-medium">Part Name</span>
                <span className="font-medium text-right">Qty</span>
                <span className="font-medium text-right">Price</span>
                <span className="font-medium text-right">Tax</span>
              </div>
              {parts.map((part, index) => (
                <div key={index} className="grid grid-cols-[1fr_80px_80px_80px] items-center gap-4">
                  <span>{part.name}</span>
                  <span className="text-right">{part.qty}</span>
                  <span className="text-right">xxxx</span>
                  <span className="text-right">xxxx</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-2">
            <h2 className="font-bold text-xl">Service Hours</h2>
            <div className="grid gap-2 border-t border-gray-200 pt-2 dark:border-gray-800">
              <div className="grid grid-cols-[1fr_80px] items-center gap-4">
                <span className="font-medium">Employee</span>
                <span className="font-medium text-right">Hours</span>
              </div>
              {hours.map((hour, index) => (
                <div key={index} className="grid grid-cols-[1fr_80px] items-center gap-4">
                  <span>{hour.employeeName}</span>
                  <span className="text-right">{hour.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <h2 className="font-bold text-xl">Add New Part</h2>
            <div className="grid gap-2">
              <Label htmlFor="new-part-name">Part Name</Label>
              <Input
                id="new-part-name"
                type="text"
                value={newPartName}
                onChange={(e) => setNewPartName(e.target.value)}
                placeholder="Part Name"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="new-part-qty">Part Quantity</Label>
              <Input
                id="new-part-qty"
                type="number"
                value={newPartQty}
                onChange={(e) => setNewPartQty(e.target.value)}
                placeholder="Part Quantity"
              />
            </div>
            <Button className="w-full mb-4" onClick={handleAddPart}>
              Add Part
            </Button>
          </div>
          <div className="grid gap-2">
            <h2 className="font-bold text-xl">Add Service Hours</h2>
            <div className="grid gap-2">
              <Label htmlFor="employee-name">Employee Name</Label>
              <Input
                id="employee-name"
                type="text"
                value={employeeName}
                onChange={(e) => setEmployeeName(e.target.value)}
                placeholder="Employee Name"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="service-hours">Hours</Label>
              <Input
                id="service-hours"
                type="number"
                value={serviceHours}
                onChange={(e) => setServiceHours(e.target.value)}
                placeholder="Hours"
              />
            </div>
            <Button className="w-full mb-4" onClick={handleAddHours}>
              Add Hours
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceInvoice;

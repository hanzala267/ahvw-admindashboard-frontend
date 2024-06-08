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

const ServiceInvoice = ({ service }) => {
  const { name, parts, hours } = service;

  // Calculate subtotal, totalTax, and totalHours
  const subtotal = parts.reduce((acc, part) => acc + part.price * part.qty, 0);
  const totalTax = parts.reduce((acc, part) => acc + part.tax, 0);
  const totalHours = hours.reduce((acc, hour) => acc + hour.hours, 0);
  const total = subtotal + totalTax;

  return (
    <section className="grid md:grid-cols-1 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
      <div className="grid gap-4 md:gap-10 items-start">
        <div className="grid gap-4">
          <h1 className="font-bold text-3xl">Service</h1>
          <div className="grid gap-2 text-sm leading-loose">
            <p>
              Thank you for your business with AHVW Service. Please find the
              details of your recent purchase below.
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
                <div
                  key={index}
                  className="grid grid-cols-[1fr_80px_80px_80px] items-center gap-4"
                >
                  <span>{part.name}</span>
                  <span className="text-right">{part.qty}</span>
                  <span className="text-right">{part.price.toFixed(2)}</span>
                  <span className="text-right">{part.tax.toFixed(2)}</span>
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
                <div
                  key={index}
                  className="grid grid-cols-[1fr_80px] items-center gap-4"
                >
                  <span>{hour.employeeName}</span>
                  <span className="text-right">{hour.hours}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-2 border-t border-gray-200 pt-2 dark:border-gray-800">
            <div className="grid grid-cols-[1fr_80px_80px_80px] items-center gap-4">
              <span className="font-medium">Subtotal</span>
              <span />
              <span className="text-right">{subtotal.toFixed(2)}</span>
              <span className="text-right">{totalTax.toFixed(2)}</span>
            </div>
            <div className="grid grid-cols-[1fr_80px_80px_80px] items-center gap-4">
              <span className="font-medium">Total</span>
              <span />
              <span className="text-right font-bold text-lg">
                {total.toFixed(2)}
              </span>
              <span />
            </div>
          </div>
        </div>
      </div>
      <Button className="w-full" size="lg">
        Send Invoice
      </Button>
    </section>
  );
};

const CreateInvoiceForm = ({ onAddPart, onAddHours, onSubmit }) => {
  const [serviceName, setServiceName] = useState("");
  const [partName, setPartName] = useState("");
  const [partQty, setPartQty] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [hours, setHours] = useState("");

  const handleAddPart = (e) => {
    e.preventDefault();
    const newPart = {
      name: partName,
      qty: Number(partQty),
      price: 0, // Placeholder, to be fetched from the database
      tax: 0, // Placeholder, to be fetched from the database
    };
    onAddPart(newPart);
    setPartName("");
    setPartQty("");
  };

  const handleAddHours = (e) => {
    e.preventDefault();
    const newHours = {
      employeeName: employeeName,
      hours: Number(hours),
    };
    onAddHours(newHours);
    setEmployeeName("");
    setHours("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(serviceName);
    setServiceName("");
  };

  return (
    <Card className="w-full max-w-lg mx-auto mt-8">
      <CardHeader>
        <CardTitle className="text-2xl">Create Service</CardTitle>
        <CardDescription>Enter details to create a new Service</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="service-name">Service Name</Label>
          <Input
            id="service-name"
            type="text"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            placeholder="Service Name"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="part-name">Part Name</Label>
          <Input
            id="part-name"
            type="text"
            value={partName}
            onChange={(e) => setPartName(e.target.value)}
            placeholder="Part Name"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="part-qty">Part Quantity</Label>
          <Input
            id="part-qty"
            type="number"
            value={partQty}
            onChange={(e) => setPartQty(e.target.value)}
            placeholder="Part Quantity"
          />
        </div>
        <Button className="w-full mb-4" onClick={handleAddPart}>
          Add Part
        </Button>
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
          <Label htmlFor="hours">Hours</Label>
          <Input
            id="hours"
            type="number"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            placeholder="Hours"
          />
        </div>
        <Button className="w-full mb-4" onClick={handleAddHours}>
          Add Hours
        </Button>
      </CardContent>
      <CardFooter className="flex gap-4">
        <Button className="w-full" onClick={handleSubmit}>
          Create Service
        </Button>
      </CardFooter>
    </Card>
  );
};

const App = () => {
  const [invoices, setInvoices] = useState([]);
  const [currentParts, setCurrentParts] = useState([]);
  const [currentHours, setCurrentHours] = useState([]);

  const handleAddPart = (part) => {
    setCurrentParts([...currentParts, part]);
  };

  const handleAddHours = (hours) => {
    setCurrentHours([...currentHours, hours]);
  };

  const handleCreateInvoice = (serviceName) => {
    const newInvoice = {
      name: serviceName,
      parts: currentParts,
      hours: currentHours,
    };
    setInvoices([...invoices, newInvoice]);
    setCurrentParts([]);
    setCurrentHours([]);
  };

  return (
    <div className="p-4">
      {invoices.map((invoice, index) => (
        <ServiceInvoice key={index} service={invoice} />
      ))}
      <CreateInvoiceForm
        onAddPart={handleAddPart}
        onAddHours={handleAddHours}
        onSubmit={handleCreateInvoice}
      />
    </div>
  );
};

export default App;

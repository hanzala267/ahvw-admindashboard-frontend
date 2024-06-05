import { Button } from "@/components/ui/button";

const ServiceInvoice = ({ service }) => {
  const { name, parts } = service;

  const subtotal = parts.reduce((acc, part) => acc + part.price * part.qty, 0);
  const totalTax = parts.reduce((acc, part) => acc + part.tax, 0);
  const total = subtotal + totalTax;

  return (
    <section className="grid md:grid-cols-1 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
      <div className="grid gap-4 md:gap-10 items-start">
        <div className="grid gap-4">
          <h1 className="font-bold text-3xl">Invoice</h1>
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
                  <span className="text-right">${part.price.toFixed(2)}</span>
                  <span className="text-right">${part.tax.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-2 border-t border-gray-200 pt-2 dark:border-gray-800">
            <div className="grid grid-cols-[1fr_80px_80px_80px] items-center gap-4">
              <span className="font-medium">Subtotal</span>
              <span />
              <span className="text-right">${subtotal.toFixed(2)}</span>
              <span className="text-right">${totalTax.toFixed(2)}</span>
            </div>
            <div className="grid grid-cols-[1fr_80px_80px_80px] items-center gap-4">
              <span className="font-medium">Total</span>
              <span />
              <span className="text-right font-bold text-lg">
                ${total.toFixed(2)}
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

export default ServiceInvoice;

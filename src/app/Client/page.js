import Navbar from "@/app/Client/components/Navbar";
import OngoingServices from "@/app/Client/components/OngoingServicesHome";
import UpcomingServices from "@/app/Client/components/UpcomingServicesHome";
import PendingInvoices from "@/app/Client/components/PendingInvoicesHome";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div>
            <div className="text-2xl font-bold my-6 mx-auto text-center">
              OngoingServices
            </div>
            <OngoingServices />
            <OngoingServices />
          </div>
          <div>
            <div className="text-2xl font-bold my-6 mx-auto text-center">
              UpcomingServices
            </div>
            <UpcomingServices />
            <UpcomingServices />
            <UpcomingServices />
          </div>
          <div>
            <div className="text-2xl font-bold my-6 mx-auto text-center">
              Pending Invoices
            </div>
            <PendingInvoices />
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import Navbar from "@/app/Admin/components/Navbar";
import InventoryTable from "@/app/Admin/components/InventoryTable";
import InventoryForm from "@/app/Admin/components/InventoryForm";
import { withRoleProtection } from "@/components/withRoleProtection";

function AdminInventory() {
  return (
    <>
      <Navbar />
      <div className="justify-center">
        <div className="mx-auto container justify-center">
          <div className="text-2xl font-semibold text-center mt-12 mb-6">
            Add stocks
          </div>
          <InventoryForm />
        </div>
        <div className="mx-auto container justify-center">
          <div className="text-2xl font-semibold text-center mt-12 mb-6">
            Inventory
          </div>
          <InventoryTable />
        </div>
      </div>
    </>
  );
}

export default withRoleProtection(AdminInventory, ["admin"]);

import Navbar from "@/components/components/Navbar";
import InventoryTable from "@/components/components/InventoryTable";
import InventoryForm from "@/components/components/InventoryForm";

export default function Component() {
  return (
    <>
      <Navbar />
      <div classname="justify-center ">
        <div className=" mx-auto container justify-center">
          <div className="text-2xl font-semibold text-center mt-12 mb-6">
            Add stocks
          </div>
          <InventoryForm />
        </div>
        <div className=" mx-auto container justify-center">
        <div className="text-2xl font-semibold text-center mt-12 mb-6">
            Inventory
          </div>
          <InventoryTable />
        </div>
      </div>
    </>
  );
}

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Vahicle_Details = [
  {
    Vehicle: "cajd6hcx",
    description: "YV98PN",
    Service_ID: "AMANAT-YN52RU-2023919_178",
    next_Service_Schedule: "20/11/2024",
    Status: "Closed",
  },
];

export default function Component() {
  return (
    <>
      <div className="text-2xl font-semibold text-center mt-12 mb-6">
        Past Services
      </div>
      {Vahicle_Details.map((detail, index) => (
        <Card key={index} className="my-4">
          <CardHeader>
            <CardTitle>Vehicle: {detail.Vehicle}</CardTitle>
            <CardDescription>{detail.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <CardTitle>Next Service: {detail.next_Service_Schedule}</CardTitle>
            <Button size="default " className="mt-3 px-3" variant="destructive">
              {detail.Status}
            </Button>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

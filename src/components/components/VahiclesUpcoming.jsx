import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const vehicleUpcomingData = [
  {
    Vehicle: "cajd6hcx",
    description: "YV98PN",
    Service_ID: "AMANAT-YN52RU-2023919_178",
    next_Service_Schedule: "20/11/2024",
    Status: "Upcoming",
  },
  {
    Vehicle: "dajd7hdy",
    description: "YV99PN",
    Service_ID: "AMANAT-YN53RU-2023920_179",
    next_Service_Schedule: "21/11/2024",
    Status: "Upcoming",
  },
  {
    Vehicle: "eajd8hez",
    description: "YV100PN",
    Service_ID: "AMANAT-YN54RU-2023921_180",
    next_Service_Schedule: "22/11/2024",
    Status: "Upcoming",
  },
  {
    Vehicle: "fajd9hfa",
    description: "YV101PN",
    Service_ID: "AMANAT-YN55RU-2023922_181",
    next_Service_Schedule: "23/11/2024",
    Status: "Upcoming",
  },
];

export default function VehicleUpcoming({ vehicle }) {
  const upcomingServices = vehicleUpcomingData.filter(
    (detail) => detail.Vehicle === vehicle.id
  );

  if (upcomingServices.length === 0) {
    return <div>No upcoming services available for this vehicle.</div>;
  }

  return (
    <>
      <div className="text-2xl font-semibold text-center mt-12 mb-6">
        Upcoming Services
      </div>
      {upcomingServices.map((detail, index) => (
        <Card key={index} className="my-4">
          <CardHeader>
            <CardTitle>Vehicle: {detail.Vehicle}</CardTitle>
            <CardDescription>{detail.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <CardTitle>Next Service: {detail.next_Service_Schedule}</CardTitle>
            <Button size="default" className="mt-3 px-3" variant="secondary">
              {detail.Status}
            </Button>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

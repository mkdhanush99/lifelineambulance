import { SERVICES } from "@/lib/services";
import { ServiceCard } from "./ServiceCard";

export function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map((service) => (
        <ServiceCard key={service.slug} service={service} />
      ))}
    </div>
  );
}

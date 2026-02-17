import type { Route } from "./+types/services";
import { Link } from "react-router";
import { MainLayout } from "../components/main-layout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Services | Book_A_Taxi" },
    {
      name: "description",
      content:
        "Browse Book_A_Taxi ride options including city, airport, corporate, and rental services.",
    },
  ];
}

const serviceItems = [
  {
    title: "City Rides",
    description: "Fast pickups for daily travel, meetings, and local errands.",
  },
  {
    title: "Airport Transfers",
    description: "Scheduled airport pickups and drop-offs with luggage support.",
  },
  {
    title: "Corporate Travel",
    description: "Professional rides for employees, clients, and business events.",
  },
  {
    title: "Hourly Rentals",
    description: "Keep a driver on standby for flexible travel plans.",
  },
];

export default function Services() {
  return (
    <MainLayout
      title="Services"
      subtitle="Choose a ride plan that matches your schedule and destination."
    >
      <section className="grid cards-2">
        {serviceItems.map((service) => (
          <article key={service.title} className="card">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </article>
        ))}
      </section>

      <section className="cta-row">
        <Link to="/book-ride" className="btn btn-primary">
          Continue to Booking
        </Link>
      </section>
    </MainLayout>
  );
}

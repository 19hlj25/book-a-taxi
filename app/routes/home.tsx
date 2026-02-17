import type { Route } from "./+types/home";
import { Link } from "react-router";
import { MainLayout } from "../components/main-layout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Book_A_Taxi | Fast City Rides" },
    {
      name: "description",
      content:
        "Book reliable taxi rides in minutes with Book_A_Taxi for city, airport, and business travel.",
    },
  ];
}

const highlights = [
  "24/7 ride booking support",
  "Verified professional drivers",
  "Transparent pricing and trip updates",
];

export default function Home() {
  return (
    <MainLayout
      title="Your ride, right on time"
      subtitle="Book_A_Taxi helps you schedule city rides, airport pickups, and premium travel in a few clicks."
    >
      <section className="grid cards-3">
        {highlights.map((item) => (
          <article key={item} className="card">
            <h2>{item}</h2>
            <p>
              Start with a quick booking and receive confirmation details for a
              smoother trip experience.
            </p>
          </article>
        ))}
      </section>

      <section className="cta-row">
        <Link to="/book-ride" className="btn btn-primary">
          Book a Ride
        </Link>
        <Link to="/services" className="btn btn-secondary">
          Explore Services
        </Link>
      </section>
    </MainLayout>
  );
}

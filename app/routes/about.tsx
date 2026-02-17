import type { Route } from "./+types/about";
import { MainLayout } from "../components/main-layout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us | Book_A_Taxi" },
    {
      name: "description",
      content:
        "Learn how Book_A_Taxi delivers safe, dependable, and affordable taxi booking services.",
    },
  ];
}

export default function About() {
  return (
    <MainLayout
      title="About Book_A_Taxi"
      subtitle="We connect riders and trusted drivers for dependable journeys across the city."
    >
      <section className="card">
        <h2>Our mission</h2>
        <p>
          Book_A_Taxi is focused on making local transportation simple. We help
          riders schedule trips quickly while drivers receive clear trip details
          and efficient route support.
        </p>
      </section>

      <section className="grid cards-2">
        <article className="card">
          <h2>Safety first</h2>
          <p>
            Driver verification, ride tracking, and transparent communication are
            built into every booking.
          </p>
        </article>
        <article className="card">
          <h2>Customer focused</h2>
          <p>
            From airport pickups to daily commuting, we prioritize punctuality,
            fair pricing, and responsive support.
          </p>
        </article>
      </section>
    </MainLayout>
  );
}

import type { Route } from "./+types/contact";
import { MainLayout } from "../components/main-layout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact | Book_A_Taxi" },
    {
      name: "description",
      content:
        "Reach Book_A_Taxi support for booking help, service questions, and partnership inquiries.",
    },
  ];
}

export default function Contact() {
  return (
    <MainLayout
      title="Contact"
      subtitle="Need help with a ride? Our support team is here for you."
    >
      <section className="grid cards-2">
        <article className="card">
          <h2>Support Center</h2>
          <p>Email: support@bookataxi.example</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Hours: 24/7 customer support</p>
        </article>
        <article className="card">
          <h2>Office</h2>
          <p>Book_A_Taxi HQ</p>
          <p>250 Market Street, Suite 800</p>
          <p>San Francisco, CA 94105</p>
        </article>
      </section>
    </MainLayout>
  );
}

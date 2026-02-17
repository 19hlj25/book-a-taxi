import { useState } from "react";
import type { Route } from "./+types/book-ride";
import { MainLayout } from "../components/main-layout";

type BookingFormValues = {
  fullName: string;
  email: string;
  phone: string;
  pickup: string;
  dropoff: string;
  serviceType: string;
  rideDate: string;
  passengers: string;
};

type BookingFormErrors = Partial<Record<keyof BookingFormValues, string>>;

const initialValues: BookingFormValues = {
  fullName: "",
  email: "",
  phone: "",
  pickup: "",
  dropoff: "",
  serviceType: "",
  rideDate: "",
  passengers: "1",
};

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Book Ride | Book_A_Taxi" },
    {
      name: "description",
      content:
        "Book your next taxi ride with Book_A_Taxi using our quick and simple ride request form.",
    },
  ];
}

function validate(values: BookingFormValues): BookingFormErrors {
  const errors: BookingFormErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^\+?[0-9\s()-]{10,}$/;

  if (!values.fullName.trim()) errors.fullName = "Name is required.";
  if (!emailPattern.test(values.email)) errors.email = "Enter a valid email address.";
  if (!phonePattern.test(values.phone)) errors.phone = "Enter a valid phone number.";
  if (!values.pickup.trim()) errors.pickup = "Pickup location is required.";
  if (!values.dropoff.trim()) errors.dropoff = "Drop-off location is required.";
  if (!values.serviceType) errors.serviceType = "Select a service type.";
  if (!values.rideDate) errors.rideDate = "Choose a ride date and time.";

  if (!Number.isInteger(Number(values.passengers)) || Number(values.passengers) < 1) {
    errors.passengers = "Passengers must be at least 1.";
  }

  return errors;
}

export default function BookRide() {
  const [formValues, setFormValues] = useState<BookingFormValues>(initialValues);
  const [formErrors, setFormErrors] = useState<BookingFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function updateField<K extends keyof BookingFormValues>(
    key: K,
    value: BookingFormValues[K],
  ) {
    setFormValues((current) => ({ ...current, [key]: value }));
    setFormErrors((current) => ({ ...current, [key]: undefined }));
    setSubmitted(false);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(formValues);
    setFormErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setFormValues(initialValues);
    }
  }

  return (
    <MainLayout
      title="Book a Ride"
      subtitle="Fill in your trip details and we will match you with an available driver."
    >
      <section className="card">
        <form className="booking-form" noValidate onSubmit={handleSubmit}>
          <label>
            Full Name
            <input
              type="text"
              value={formValues.fullName}
              onChange={(event) => updateField("fullName", event.target.value)}
              placeholder="Jane Doe"
            />
            {formErrors.fullName ? <span className="error">{formErrors.fullName}</span> : null}
          </label>

          <label>
            Email
            <input
              type="email"
              value={formValues.email}
              onChange={(event) => updateField("email", event.target.value)}
              placeholder="you@example.com"
            />
            {formErrors.email ? <span className="error">{formErrors.email}</span> : null}
          </label>

          <label>
            Phone
            <input
              type="tel"
              value={formValues.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              placeholder="+1 (555) 123-4567"
            />
            {formErrors.phone ? <span className="error">{formErrors.phone}</span> : null}
          </label>

          <label>
            Pickup Location
            <input
              type="text"
              value={formValues.pickup}
              onChange={(event) => updateField("pickup", event.target.value)}
              placeholder="123 Main St"
            />
            {formErrors.pickup ? <span className="error">{formErrors.pickup}</span> : null}
          </label>

          <label>
            Drop-off Location
            <input
              type="text"
              value={formValues.dropoff}
              onChange={(event) => updateField("dropoff", event.target.value)}
              placeholder="Airport Terminal 2"
            />
            {formErrors.dropoff ? <span className="error">{formErrors.dropoff}</span> : null}
          </label>

          <label>
            Service Type
            <select
              value={formValues.serviceType}
              onChange={(event) => updateField("serviceType", event.target.value)}
            >
              <option value="">Select one</option>
              <option value="city">City Ride</option>
              <option value="airport">Airport Transfer</option>
              <option value="corporate">Corporate Travel</option>
              <option value="rental">Hourly Rental</option>
            </select>
            {formErrors.serviceType ? <span className="error">{formErrors.serviceType}</span> : null}
          </label>

          <label>
            Ride Date and Time
            <input
              type="datetime-local"
              value={formValues.rideDate}
              onChange={(event) => updateField("rideDate", event.target.value)}
            />
            {formErrors.rideDate ? <span className="error">{formErrors.rideDate}</span> : null}
          </label>

          <label>
            Number of Passengers
            <input
              type="number"
              min={1}
              max={6}
              value={formValues.passengers}
              onChange={(event) => updateField("passengers", event.target.value)}
            />
            {formErrors.passengers ? <span className="error">{formErrors.passengers}</span> : null}
          </label>

          <button type="submit" className="btn btn-primary">
            Request Ride
          </button>

          {submitted ? (
            <p className="success">Ride request submitted successfully.</p>
          ) : null}
        </form>
      </section>
    </MainLayout>
  );
}

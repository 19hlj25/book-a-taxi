import { Link, NavLink } from "react-router";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/book-ride", label: "Book Ride" },
  { to: "/contact", label: "Contact" },
];

export function MainLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container">
          <Link to="/" className="brand" aria-label="Book A Taxi home">
            Book_A_Taxi
          </Link>
          <nav className="topnav" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? "topnav-link active" : "topnav-link"
                }
                end={item.to === "/"}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="container page-content">
        <section className="page-hero">
          <h1>{title}</h1>
          {subtitle ? <p>{subtitle}</p> : null}
        </section>
        {children}
      </main>

      <footer className="footer">
        <div className="container">Book_A_Taxi © {new Date().getFullYear()}</div>
      </footer>
    </div>
  );
}

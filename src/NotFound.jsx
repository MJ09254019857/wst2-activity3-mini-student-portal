import { Link, useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();
  return (
    <section>
      <h1>Page not found</h1>
      <p className="lead">
        There is no page at <code>{location.pathname}</code>. Check the address or go back home.
      </p>
      <div className="actions">
        <Link to="/" className="btn btn-primary">Go to Home</Link>
      </div>
    </section>
  );
}

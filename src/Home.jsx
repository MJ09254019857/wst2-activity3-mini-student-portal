import { Link } from "react-router-dom";

export default function Home({ count }) {
  return (
    <section>
      <h1>Welcome to the Student Portal</h1>
      <p className="lead">
        Register students and browse the class list. Every page change here happens
        without a full page reload.
      </p>
      <div className="actions">
        <Link to="/register" className="btn btn-primary">Register a student</Link>
        <Link to="/students" className="btn">View all students</Link>
      </div>
      <p className="stat-line">
        <strong>{count}</strong> students registered
      </p>
    </section>
  );
}

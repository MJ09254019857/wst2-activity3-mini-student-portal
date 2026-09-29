import { Link } from "react-router-dom";
import { yearLabel } from "../data/students.js";

// Task 6: one table row per student, keyed by the unique student ID.
export default function Students({ students }) {
  return (
    <section>
      <h1>Students</h1>
      <p className="lead">{students.length} registered. Select a name to see the details.</p>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th scope="col">Student ID</th>
              <th scope="col">Name</th>
              <th scope="col">Course</th>
              <th scope="col">Year</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td className="id">{s.id}</td>
                <td>
                  <Link to={`/students/${s.id}`}>{s.fullName}</Link>
                </td>
                <td>{s.course}</td>
                <td>{yearLabel(s.yearLevel)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

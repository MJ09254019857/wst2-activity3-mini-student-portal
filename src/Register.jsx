import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { COURSES, YEAR_LEVELS, yearLabel } from "../data/students.js";
import { validate } from "../utils/validate.js";

const EMPTY_FORM = { fullName: "", studentId: "", email: "", course: "", yearLevel: "" };

export default function Register({ students, onAdd }) {
  // Task 3: one state object keeps every field controlled.
  const [form, setForm] = useState(EMPTY_FORM);
  // Task 4: one error message per invalid field.
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // One change handler for all fields, using each field's "name".
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined })); // clear that field's error
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = validate(form);

    // Extra check: the Student ID is used in the URL, so it must be unique.
    const studentId = form.studentId.trim();
    if (!newErrors.studentId && students.some((s) => s.id === studentId)) {
      newErrors.studentId = "This Student ID is already registered.";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return; // stop if anything is invalid

    // Task 5: add the student to App's list, then go to the list page.
    onAdd({
      id: studentId,
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      course: form.course,
      yearLevel: form.yearLevel,
    });
    navigate("/students");
  }

  return (
    <section>
      <h1>Register a student</h1>
      <p className="lead">All fields are required.</p>

      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor="fullName">Full name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            className={errors.fullName ? "invalid" : ""}
            value={form.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <small className="error">{errors.fullName}</small>}
        </div>

        <div className="field">
          <label htmlFor="studentId">Student ID</label>
          <input
            id="studentId"
            name="studentId"
            type="text"
            placeholder="2024-0123"
            className={errors.studentId ? "invalid" : ""}
            value={form.studentId}
            onChange={handleChange}
          />
          <p className="hint">Format: four digits, a dash, four digits.</p>
          {errors.studentId && <small className="error">{errors.studentId}</small>}
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className={errors.email ? "invalid" : ""}
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <small className="error">{errors.email}</small>}
        </div>

        <div className="field">
          <label htmlFor="course">Course</label>
          <select
            id="course"
            name="course"
            className={errors.course ? "invalid" : ""}
            value={form.course}
            onChange={handleChange}
          >
            <option value="">Choose a course</option>
            {COURSES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          {errors.course && <small className="error">{errors.course}</small>}
        </div>

        <div className="field">
          <fieldset>
            <legend>Year level</legend>
            <div className="radio-group">
              {YEAR_LEVELS.map((y) => (
                <label key={y}>
                  <input
                    type="radio"
                    name="yearLevel"
                    value={y}
                    checked={form.yearLevel === y}
                    onChange={handleChange}
                  />
                  {yearLabel(y)}
                </label>
              ))}
            </div>
          </fieldset>
          {errors.yearLevel && <small className="error">{errors.yearLevel}</small>}
        </div>

        <button type="submit" className="btn btn-primary">Register student</button>
      </form>
    </section>
  );
}

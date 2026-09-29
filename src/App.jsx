import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { INITIAL_STUDENTS } from "./data/students.js";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Students from "./pages/Students.jsx";
import StudentDetail from "./pages/StudentDetail.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  // Task 5: the student list is lifted here because Register AND Students both need it.
  const [students, setStudents] = useState(INITIAL_STUDENTS);

  function addStudent(student) {
    setStudents((prev) => [...prev, student]);
  }

  return (
    <>
      <header className="topbar">
        <span className="brand">Mini Student Portal</span>

        {/* Task 2: navigation. NavLink adds the "active" class to the current page. */}
        <nav aria-label="Main">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/students">Students</NavLink>
        </nav>
      </header>

      <main className="page">
        {/* Task 1: routes */}
        <Routes>
          <Route path="/" element={<Home count={students.length} />} />
          <Route path="/register" element={<Register students={students} onAdd={addStudent} />} />
          <Route path="/students" element={<Students students={students} />} />
          <Route path="/students/:id" element={<StudentDetail students={students} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

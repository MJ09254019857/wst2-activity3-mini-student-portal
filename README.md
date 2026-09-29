# Hands-On Activity 3: Mini Student Portal

**Objective:** Combine controlled forms, validation, lifted state, lists, and routing in one SPA.
**Suggested time:** 90 minutes

## How to run
1. Open this folder in VS Code (**File → Open Folder…**).
2. Double-click `start.bat`, **or** open the terminal with **Ctrl + `** and run `npm install` then `npm run dev`.
   `react-router-dom` is already listed in `package.json`, so `npm install` installs it for you.
3. The app opens at http://localhost:5173. Press **Ctrl + C** to stop it.

> PowerShell error *"running scripts is disabled"*? Switch the VS Code terminal to **Command Prompt** (**˅** beside **+**).

## Already provided
`Home.jsx`, `NotFound.jsx`, the sample data in `src/data/students.js`, the form layout, and all CSS.

## Your tasks
Search for `TODO` with **Ctrl + Shift + F**.

| # | Task | File |
|---|------|------|
| 1 | Wrap `<App />` in `<BrowserRouter>`. Create routes: `/`, `/register`, `/students`, `/students/:id`, and `*` (404). | `src/main.jsx`, `src/App.jsx` |
| 2 | Build the navigation bar with `NavLink` (the active style is already in the CSS). | `src/App.jsx` |
| 3 | Make the registration form controlled: Full Name, Student ID, Email, Course (select), Year Level (radio). | `src/pages/Register.jsx` |
| 4 | Validate: all fields required; Student ID matches `####-####`; valid email. Show a message under each invalid field. | `src/utils/validate.js`, `Register.jsx` |
| 5 | Keep the students array in App (lifted state). On a valid submit, add the student and `navigate("/students")`. | `App.jsx`, `Register.jsx` |
| 6 | Render the list with keys; each name is a `<Link>` to `/students/:id`, which shows that student's details. | `Students.jsx`, `StudentDetail.jsx` |

## Test your app
- Submit an empty form: five error messages appear.
- Enter `2024123` as the Student ID: the format error appears.
- Register a valid student: you land on /students and the new student is in the list.
- Click a name: its details page opens. Type `/students/9999-9999` in the address bar: "Student not found".
- Type `/hello` in the address bar: the 404 page appears.

## Rubric (100 pts)
| Criterion | Points |
|---|---|
| Routing and navigation | 30 |
| Controlled form + validation | 35 |
| Lifted state and lists | 25 |
| UI and code quality | 10 |

## Submit
A 1–2 minute screen recording of the full flow (Windows: **Win + Alt + R** with Xbox Game Bar, or the Snipping Tool video mode) and a GitHub repository link.

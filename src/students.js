// Initial data so the Students page is not empty on first load.
export const INITIAL_STUDENTS = [
  { id: "2024-0012", fullName: "Ana Cruz", email: "ana.cruz@example.com", course: "BSIT", yearLevel: "2" },
  { id: "2024-0045", fullName: "Ben Lim", email: "ben.lim@example.com", course: "BSCS", yearLevel: "3" },
  { id: "2023-0101", fullName: "Carla Reyes", email: "carla.reyes@example.com", course: "BSIS", yearLevel: "4" },
];

export const COURSES = ["BSIT", "BSCS", "BSIS"];
export const YEAR_LEVELS = ["1", "2", "3", "4"];

export function yearLabel(y) {
  return { 1: "1st Year", 2: "2nd Year", 3: "3rd Year", 4: "4th Year" }[y] ?? y;
}

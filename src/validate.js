// Returns an object with an error message for every invalid field.
// An EMPTY object means the form is valid.
const STUDENT_ID_PATTERN = /^\d{4}-\d{4}$/;
const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;

export function validate(values) {
  const errors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Enter the student's full name.";
  }

  if (!values.studentId.trim()) {
    errors.studentId = "Enter the student ID.";
  } else if (!STUDENT_ID_PATTERN.test(values.studentId.trim())) {
    errors.studentId = "Use the format ####-#### (for example 2024-0123).";
  }

  if (!values.email.trim()) {
    errors.email = "Enter an email address.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.course) {
    errors.course = "Choose a course.";
  }

  if (!values.yearLevel) {
    errors.yearLevel = "Choose a year level.";
  }

  return errors;
}

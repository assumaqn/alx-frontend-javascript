// Define a function type for printTeacher
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the function
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe
console.log(printTeacher("Alice", "Smith")); // Output: A. Smith

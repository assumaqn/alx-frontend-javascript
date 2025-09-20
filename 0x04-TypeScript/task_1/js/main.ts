// Teacher interface
interface Teacher {
  readonly firstName: string; // cannot be changed after initialization
  readonly lastName: string; // cannot be changed after initialization
  fullTimeEmployee: boolean; // required
  yearsOfExperience?: number; // optional
  location: string; // required
  [key: string]: any; // allows any other attribute like contract
}

// Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number; // required attribute for Directors
}

// Example Director object
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "London",
  numberOfReports: 17,
};
console.log(director1);

// Function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function implementation
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // J. Doe
console.log(printTeacher("Elham", "Seid")); // E. Seid
console.log(printTeacher("Mary", "Smith")); // M. Smith

// Define a function type for printTeacher
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the function

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe
console.log(printTeacher("Alice", "Smith")); // Output: A. Smith

interface Teacher {
  readonly firstName: string; // cannot be changed after initialization
  readonly lastName: string; // cannot be changed after initialization
  fullTimeEmployee: boolean; // required
  yearsOfExperience?: number; // optional
  location: string; // required
  [key: string]: any; // allows any other attribute like contract
}
interface Directors extends Teacher {
  numberOfReports: number; // required attribute for Directors
}
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "London",
  numberOfReports: 17,
};

console.log(director1);
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};
console.log(printTeacher("John", "Doe")); // Output: J. Doe
console.log(printTeacher("Elham", "Seid")); // Output: E. Seid

// Define the function type interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // J. Doe
console.log(printTeacher("Mary", "Smith")); // M. Smith

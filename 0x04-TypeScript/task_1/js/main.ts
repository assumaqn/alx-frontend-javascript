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

interface Teacher {
  readonly firstName: string; // cannot be changed after initialization
  readonly lastName: string; // cannot be changed after initialization
  fullTimeEmployee: boolean; // required
  yearsOfExperience?: number; // optional
  location: string; // required
  [key: string]: any; // allows any other attribute like contract
}

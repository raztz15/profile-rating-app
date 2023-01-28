export class ProfileDataModel {
  name: string;
  lastName: string;
  age: number;
  technology: ProfileTechnology;
  constructor(profile: ProfileDataModel) {
    this.name = profile.name;
    this.lastName = profile.lastName;
    this.age = profile.age;
    this.technology = profile.technology;
  }
}

enum ProfileTechnology {
  "React",
  "Angular",
  "Java",
  "JS",
  "Type Script",
}

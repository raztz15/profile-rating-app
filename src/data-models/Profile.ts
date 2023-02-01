export class ProfileDataModel {
  _id: string;
  name: string;
  lastName: string;
  age: number;
  technology: ProfileTechnology;
  constructor(profile: ProfileDataModel) {
    this._id = profile._id;
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

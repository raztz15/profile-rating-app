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

export enum ProfileTechnology {
  REACT = "React",
  ANGULAR = "Angular",
  JS = "JS",
  JAVA = "Java",
  ANDROID = "Android",
  SWIFT = "Swift",
  TS = "Type Script",
}

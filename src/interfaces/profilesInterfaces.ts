import { ProfileTechnology } from "../data-models/Profile";

export interface IProfile {
  name: string;
  lastName: string;
  age: number;
  technology: ProfileTechnology;
}

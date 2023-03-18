import axios from "axios";
import { IProfile } from "../interfaces/profilesInterfaces";

// TODO insert all string into constants

export const editProfile = (id: string, profileBody: IProfile) => {
  axios
    .put(`http://localhost:8080/${id}`, profileBody)
    .then((res) => {
      const response = res.data;
      return response;
    })
    .catch((err) => {
      console.log("Couldn't edit profile ===> ", err);
    });
};

export const getAllProfiles = () => {
  const profiles = axios
    .get(`http://localhost:8080/`)
    .then((res) => {
      const response = res.data;
      return response;
    })
    .catch((err) => {
      console.log("Couldn't load all the profiles ===> ", err);
    });
  return profiles;
};

export const deleteProfileById = (id: string) => {
  axios
    .delete(`http://localhost:8080/${id}`)
    .then((res) => {
      const response = res.data;
      return response;
    })
    .catch((err) => {
      console.log("Couldn't delete the profile ===> ", err);
    });
};

export const addProfile = (profile: IProfile) => {
  axios
    .post(`http://localhost:8080/`, profile)
    .then((res) => {
      const response = res.data;
      return response;
    })
    .catch((err) => {
      console.log("Couldn't add Profile ===> ", err);
    });
};

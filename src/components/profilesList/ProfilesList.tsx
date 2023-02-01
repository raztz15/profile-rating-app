import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "./ProfileList.css";
import { setProfiles } from "../../actions/profileActions";
import { EditProfileModal } from "../edit-profile-modal/EditProfileModal";
import { RootState } from "../../reducers/rootReducer";
import { ProfileListActions } from "./ProfileListActions";
import { ProfileDataModel } from "../../data-models/Profile";

export const ProfilesList = () => {
  const profiles = useSelector((state: RootState) => state.allProfiles);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [selectedProfile, setSelectedProfile] =
    useState<ProfileDataModel | null>(null);
  const dispatch = useDispatch();

  const fetchingProfilesData = async () => {
    await axios.get("http://localhost:8080/").then((res) => {
      const response = res.data;
      dispatch(setProfiles(response));
    });
  };

  useEffect(() => {
    fetchingProfilesData();
  }, []);

  return (
    <div className="profiles-list--container">
      <button>Add New</button>
      <div className="profile-list--profile">
        {profiles &&
          profiles.profiles.data.map((item: any, index: number) => {
            return (
              <div className="profile" key={index}>
                <li>{item.name}</li>
                <li>{item.lastName}</li>
                <li>{item.age}</li>
                <li>{item.technology}</li>
                <ProfileListActions
                  item={item}
                  setIsOpenModal={setIsOpenModal}
                  setSelectedProfile={setSelectedProfile}
                />
              </div>
            );
          })}
      </div>
      {isOpenModal && (
        <EditProfileModal
          setIsOpenModal={setIsOpenModal}
          selectedProfile={selectedProfile}
        />
      )}
    </div>
  );
};

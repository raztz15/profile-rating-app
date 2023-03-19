import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./ProfileList.css";
import { setProfiles } from "../../actions/profileActions";
import { EditProfileModal } from "../edit-profile-modal/EditProfileModal";
import { RootState, useAppDispatch } from "../../reducers/rootReducer";
import { ProfileListActions } from "./ProfileListActions";
import { ProfileDataModel } from "../../data-models/Profile";
import { ReactComponent as AddButton } from "../../assets/icons/add-button.svg";
import { IProfile } from "../../interfaces/profilesInterfaces";
import { Modal } from "../modal/Modal";

export const ProfilesList = () => {
  const [title] = useState("Edit Profile");
  const { profiles } = useSelector((state: RootState) => state.allProfiles);
  const [data, setData] = useState<Array<ProfileDataModel>>([]);
  const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
  const [selectedProfile, setSelectedProfile] =
    useState<ProfileDataModel | null>(null);
  const dispatch = useAppDispatch();

  const fetchingProfilesData = () => {
    dispatch(setProfiles());
  };

  useEffect(() => {
    fetchingProfilesData();
  }, []);

  useEffect(() => {
    if (profiles) setData(profiles.data);
  }, [profiles]);

  const getEditProfileModalProps = () => {
    return {
      title,
      isOpenEditModal,
      setIsOpenEditModal,
      selectedProfile,
    };
  };

  const deleteModalButtons = [
    {
      text: "Cancel",
      cb: () => { console.log("Cancel") },
      className: "modal--buttons__cancel"
    },
    {
      text: "Delete",
      cb: () => { console.log("Delete") },
      className: "modal--buttons__Delete"
    },
  ]

  const getDeleteModalProps = () => {
    return {
      isOpenModal: isOpenDeleteModal,
      setIsOpenModal: setIsOpenDeleteModal,
      title: "Delete Profile",
      buttons: deleteModalButtons,
      children: "Are you sure you want to delete this profile?"
    }
  }

  return (
    <div className="profiles-list--container">
      <div className="profiles-list--add-button">
        <AddButton />
      </div>
      <div className="profile-list--profile">
        {data &&
          data.map((profile, index) => {
            return (
              <div className="profile" key={index}>
                <li>{profile.name}</li>
                <li>{profile.lastName}</li>
                <li>{profile.age}</li>
                <li>{profile.technology}</li>
                <ProfileListActions
                  item={profile}
                  setIsOpenEditModal={setIsOpenEditModal}
                  setIsOpenDeleteModal={setIsOpenDeleteModal}
                  setSelectedProfile={setSelectedProfile}
                />
              </div>
            );
          })}
      </div>
      <EditProfileModal editProfilModalProps={getEditProfileModalProps()} />
      {isOpenDeleteModal ? <Modal {...getDeleteModalProps()} /> : null}
    </div>
  );
};

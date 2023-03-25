import "./ProfileList.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { setProfiles } from "../../actions/profileActions";
import { EditProfileModal } from "../edit-profile-modal/EditProfileModal";
import { RootState, useAppDispatch } from "../../reducers/rootReducer";
import { ProfileListActions } from "./ProfileListActions";
import { ProfileDataModel } from "../../data-models/Profile";
import { ReactComponent as AddButton } from "../../assets/icons/add-button.svg";
import { Modal } from "../modal/Modal";
import { deleteModalButtons, deleteModalContent, deleteModalTitle, editModalTitle } from "./ProfileListProps";

export const ProfilesList = () => {

  // Fetching data from store
  const { profiles } = useSelector((state: RootState) => state.allProfiles);

  // Local state
  const [data, setData] = useState<Array<ProfileDataModel>>();
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

  const cancelAction = () => {
    setIsOpenDeleteModal(false)
  }

  const DeleteAction = () => {
    setIsOpenDeleteModal(false)
  }

  // Props
  const getEditProfileModalProps = () => {
    return {
      title: editModalTitle,
      isOpenEditModal,
      setIsOpenEditModal,
      selectedProfile,
    };
  };

  const getDeleteModalProps = () => {
    return {
      isOpen: isOpenDeleteModal,
      setIsOpen: setIsOpenDeleteModal,
      title: deleteModalTitle,
      buttons: deleteModalButtons(cancelAction, DeleteAction),
      children: deleteModalContent
    }
  }

  const getProfileActionsProps = () => {
    return {
      setIsOpenEditModal,
      setIsOpenDeleteModal,
      setSelectedProfile
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
                  profile={profile}
                  {...getProfileActionsProps()}
                />
              </div>
            );
          })}
      </div>
      <EditProfileModal {...getEditProfileModalProps()} />
      <Modal {...getDeleteModalProps()} />
    </div>
  );
};

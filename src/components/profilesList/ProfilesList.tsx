import "./ProfileList.css";
import { SyntheticEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { deleteProfileAction, setProfiles } from "../../actions/profileActions";
import { EditProfileModal } from "../edit-profile-modal/EditProfileModal";
import { RootState, useAppDispatch } from "../../reducers/rootReducer";
import { ProfileListActions } from "./ProfileListActions";
import { ProfileDataModel, ProfileTechnology } from "../../data-models/Profile";
import { ReactComponent as AddButton } from "../../assets/icons/add-button.svg";
import { Modal } from "../modal/Modal";
import { deleteModalButtons, deleteModalContent, deleteModalTitle, editModalTitle, saveProfileModalTitle } from "./ProfileListProps";
import { deleteProfileById } from "../../services/ProfileService";
import { EditProfileForm } from "../edit-profile-modal/EditProfileForm";
import { technologiesList } from "../edit-profile-modal/editProfileModalProps";

export const ProfilesList = () => {

  // Fetching data from store
  const { profiles } = useSelector((state: RootState) => state.allProfiles);

  console.log("profiles ===> ", profiles);


  // Local state
  const [data, setData] = useState<Array<ProfileDataModel>>();
  const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
  const [isOpenSaveProfileModal, setIsOpenSaveProfileModal] = useState(false)
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

  const deleteAction = () => {
    if (selectedProfile) {
      deleteProfileAction(selectedProfile._id)
      // setIsOpenDeleteModal(false)
    }
  }

  const handleSubmit = () => {
    console.log("Submit");
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    console.log("value ===> ", value);

  }

  // Props

  const getSaveProfileFormProps = () => {
    return {
      formProps: {
        handleSubmit,
        handleChange,
        setIsOpenEditModal: (val: boolean) => { },
        selectedProfile: selectedProfile,
        setUpdatedProfile: (val: ProfileDataModel) => { },
        updatedProfile: selectedProfile || undefined,
        technologiesList: technologiesList
      }
    }
  }

  const getSaveProfileModalProps = () => {
    return {
      isOpen: isOpenSaveProfileModal,
      setIsOpen: setIsOpenSaveProfileModal,
      title: saveProfileModalTitle,
      buttons: deleteModalButtons(cancelAction, deleteAction),
      children: <EditProfileForm {...getSaveProfileFormProps()} />
    }
  }

  const getEditProfileModalProps = () => {
    return {
      title: editModalTitle,
      isOpenEditModal,
      setIsOpenEditModal,
      selectedProfile,
    };
  };

  const getProfileActionsProps = () => {
    return {
      setIsOpenEditModal,
      setIsOpenDeleteModal,
      setSelectedProfile
    }
  }

  const getDeleteModalProps = () => {
    return {
      isOpen: isOpenDeleteModal,
      setIsOpen: setIsOpenDeleteModal,
      title: deleteModalTitle,
      buttons: deleteModalButtons(cancelAction, deleteAction),
      children: deleteModalContent,
    }
  }

  return (
    <div className="profiles-list--container">
      <div className="profiles-list--add-button">
        <AddButton onClick={() => setIsOpenEditModal(true)} />
        <Modal {...getSaveProfileModalProps()} />
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
      <Modal  {...getDeleteModalProps()} />
    </div>
  );
};

import "./EditProfileModal.css";
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { ProfileDataModel, ProfileTechnology } from "../../data-models/Profile";
import { EditProfileForm } from "./EditProfileForm";
import { buttonsProps, technologiesList } from "./editProfileModalProps";
import { useAppDispatch } from "../../reducers/rootReducer";
import { editProfileAction } from "../../actions/profileActions";
import { useClickOutside } from "../../util.service/utils";
import { Modal } from "../modal/Modal";
import { ConstGeneric } from "../../constants/ConstGeneric";
import { ConstClassNames } from "../../constants/ConstClassNames";

interface IEditProfileModal {
  title: string;
  setIsOpenEditModal: (value: boolean) => void;
  selectedProfile: ProfileDataModel | null;
  isOpenEditModal: boolean;
  children?: React.ReactNode;
}

export const EditProfileModal = (props: IEditProfileModal) => {
  const { title, isOpenEditModal, setIsOpenEditModal, selectedProfile } = props;
  const [updatedProfile, setUpdatedProfile] = useState<ProfileDataModel>();

  const dispatch = useAppDispatch();
  const modalRef = useRef(null)

  // useClickOutside(modalRef, () => {
  //   console.log("Clicked outside of modal!");
  //   setIsOpenModal(false)
  // });

  useEffect(() => {
    if (selectedProfile) {
      setUpdatedProfile({
        ...updatedProfile,
        _id: selectedProfile._id,
        name: selectedProfile.name,
        lastName: selectedProfile.lastName,
        age: selectedProfile.age,
        technology: selectedProfile.technology,
      });
    }
  }, [selectedProfile]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedProfile({ ...updatedProfile!, [name]: value });
  };

  const getEditProfileModalFormProps = () => {
    return {
      technologiesList, handleSubmit: updateCB, handleChange, selectedProfile, setIsOpenEditModal, setUpdatedProfile, updatedProfile
    }
  };

  const cancelCB = () => {
    setIsOpenEditModal(false)
  }

  const updateCB = () => {
    dispatch(editProfileAction(updatedProfile!, selectedProfile!._id));
    setIsOpenEditModal(false)
  }

  const getModalProps = () => {
    return {
      title,
      isOpen: isOpenEditModal,
      setIsOpen: setIsOpenEditModal,
      children: <EditProfileForm formProps={getEditProfileModalFormProps()} />,
      buttons: buttonsProps(cancelCB, updateCB),
    }

  }

  return (
    <Modal {...getModalProps()} />
  )
};

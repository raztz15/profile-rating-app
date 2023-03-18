import { SyntheticEvent, useEffect, useRef, useState } from "react";
import "./EditProfileModal.css";
import { ProfileDataModel, ProfileTechnology } from "../../data-models/Profile";
import { EditProfileModalForm } from "./EditProfileModalForm";
import { technologiesList } from "./editProfileModalProps";
import { ReactComponent as ExitIcon } from "../../assets/icons/close-modal-icon.svg";
import { useAppDispatch } from "../../reducers/rootReducer";
import { editProfileAction } from "../../actions/profileActions";
import { useClickOutside } from "../../util.service/utils";
import { Modal } from "../modal/Modal";

interface IEditProfileModal {
  editProfilModalProps: {
    title: string;
    setIsOpenEditModal: (value: boolean) => void;
    selectedProfile: ProfileDataModel | null;
    isOpenEditModal: boolean;
    children?: React.ReactNode;
  };
}

export const EditProfileModal = (props: IEditProfileModal) => {
  const { title, isOpenEditModal, setIsOpenEditModal, selectedProfile } = props.editProfilModalProps;
  const [updatedProfile, setUpdatedProfile] = useState<ProfileDataModel>();

  const dispatch = useAppDispatch();
  const modalRef = useRef(null)

  // useClickOutside(modalRef, () => {
  //   console.log("Clicked outside of modal!");
  //   setIsOpenModal(false)
  // });

  useEffect(() => {
    setUpdatedProfile({
      ...updatedProfile,
      _id: selectedProfile ? selectedProfile._id : "",
      name: selectedProfile ? selectedProfile!.name : "",
      lastName: selectedProfile ? selectedProfile!.lastName : "",
      age: selectedProfile ? selectedProfile!.age : 0,
      technology: selectedProfile
        ? selectedProfile!.technology
        : ProfileTechnology.ANDROID,
    });
  }, [selectedProfile]);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(editProfileAction(selectedProfile!._id, updatedProfile!));
    // dispatch(
    //   createProfileAction({
    //     name: "Yaron",
    //     lastName: "Cohen",
    //     age: 45,
    //     technology: ProfileTechnology.TS,
    //   })
    // );
    setIsOpenEditModal(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedProfile({ ...updatedProfile!, [name]: value });
  };

  const getEditProfileModalFormProps = () => {
    return {
      technologiesList, handleSubmit, handleChange, selectedProfile, setIsOpenEditModal, setUpdatedProfile, updatedProfile
    }
  };

  const cancelCB = () => {
    setIsOpenEditModal(false)
  }

  const buttons = [
    {
      text: "Cancel",
      cb: cancelCB,
      className: "modal--buttons__cancel"
    },
    {
      text: "Update",
      cb: cancelCB,
      className: "modal--buttons__update"
    },
  ]

  const getModalProps = () => {
    return {
      title,
      isOpenModal: isOpenEditModal,
      setIsOpenModal: setIsOpenEditModal,
      children: <EditProfileModalForm formProps={getEditProfileModalFormProps()} />,
      buttons
    }

  }

  return (
    <Modal {...getModalProps()} />
  )
};

import { SyntheticEvent, useEffect, useRef, useState } from "react";
import "./EditProfileModal.css";
import { ProfileDataModel, ProfileTechnology } from "../../data-models/Profile";
import { EditProfileForm } from "./EditProfileForm";
import { technologiesList } from "./editProfileModalProps";
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
    console.log("name ===> ", name, "value ===> ", value);

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

  const updateCB = () => {
    setIsOpenEditModal(false)
  }

  const buttons = [
    {
      id: ConstGeneric.CANCEL,
      text: ConstGeneric.CANCEL,
      cb: cancelCB,
      className: ConstClassNames.CANCEL_BUTTON
    },
    {
      id: ConstGeneric.UPDATE,
      text: ConstGeneric.UPDATE,
      cb: updateCB,
      className: ConstClassNames.UPDATE_BUTTON
    },
  ]

  const getModalProps = () => {
    return {
      title,
      isOpen: isOpenEditModal,
      setIsOpen: setIsOpenEditModal,
      children: <EditProfileForm formProps={getEditProfileModalFormProps()} />,
      buttons
    }

  }

  return (
    <Modal {...getModalProps()} />
  )
};

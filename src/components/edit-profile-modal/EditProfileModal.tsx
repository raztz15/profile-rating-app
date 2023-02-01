import { SyntheticEvent, useRef, useState } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside/useOnClickOutside";
import "./EditProfileModal.css";
import axios from "axios";
import { ProfileDataModel } from "../../data-models/Profile";
import { EditProfileModalForm } from "./EditProfileModalForm";

interface IEditProfileModal {
  setIsOpenModal: (value: boolean) => void;
  selectedProfile: ProfileDataModel | null;
}

export const EditProfileModal = (props: IEditProfileModal) => {
  const { setIsOpenModal, selectedProfile } = props;
  const [updatedProfile, setUpdatedProfile] = useState({
    name: selectedProfile?.name,
    lastName: selectedProfile?.lastName,
    age: selectedProfile?.age,
    technology: selectedProfile?.technology,
  });

  const handleSubmit = (e: SyntheticEvent) => {
    // e.preventDefault();
    axios
      .put(`http://localhost:8080/${selectedProfile!._id}`, updatedProfile)
      .then((res) => {
        const response = res.data;
      })
      .catch((err) => {
        console.log("error is ===> ", err);
      });
    setIsOpenModal(false);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUpdatedProfile({ ...updatedProfile, [name]: value });
  };

  const editProfileModalFormProps = {
    handleSubmit,
    handleChange,
    selectedProfile,
  };

  return (
    <div className="edit-profile-modal--container">
      <div className="edit-profile-modal--wrapper">
        <div
          className="edit-profile-modal--exit-button"
          onClick={() => setIsOpenModal(false)}
        >
          &#10060;
        </div>
        <EditProfileModalForm formProps={editProfileModalFormProps} />
      </div>
    </div>
  );
};

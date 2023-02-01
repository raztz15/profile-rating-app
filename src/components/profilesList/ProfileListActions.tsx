import React from "react";
import { ProfileDataModel } from "../../data-models/Profile";

interface IProfileListActions {
  item: any;
  setIsOpenModal: (val: boolean) => void;
  setSelectedProfile: (val: ProfileDataModel) => void;
}

export const ProfileListActions = (props: IProfileListActions) => {
  const { setIsOpenModal, item, setSelectedProfile } = props;

  const handleEditClick = () => {
    setIsOpenModal(true);
    setSelectedProfile(item);
  };

  return (
    <div className="profile--buttons">
      <button className="profile--edit-button" onClick={handleEditClick}>
        Edit
      </button>
      <button
        className="profile--delete-button"
        onClick={() => alert(`Are you sure you want to delete ${item.name}`)}
      >
        Delete
      </button>
    </div>
  );
};

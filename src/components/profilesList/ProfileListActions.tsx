import { ProfileDataModel } from "../../data-models/Profile";
import { deleteProfileById } from "../../services/ProfileService";

interface IProfileListActions {
  profile: ProfileDataModel;
  setIsOpenEditModal: (val: boolean) => void;
  setIsOpenDeleteModal: (val: boolean) => void;
  setSelectedProfile: (val: ProfileDataModel) => void;
}

export const ProfileListActions = (props: IProfileListActions) => {
  const { setIsOpenEditModal, profile, setSelectedProfile, setIsOpenDeleteModal } = props;

  const handleEditClick = () => {
    setIsOpenEditModal(true);
    setSelectedProfile(profile);
  };

  const handleDeleteClick = () => {
    setIsOpenDeleteModal(true)
    // deleteProfileById(item._id);
  };

  return (
    <div className="profile--buttons">
      <button className="profile--edit-button" onClick={handleEditClick}>
        Edit
      </button>
      <button
        className="profile--delete-button"
        onClick={() => handleDeleteClick()}
      >
        Delete
      </button>
    </div>
  );
};

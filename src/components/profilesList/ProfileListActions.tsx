import { ConstGeneric } from "../../constants/ConstGeneric";
import { ProfileDataModel } from "../../data-models/Profile";

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
    setSelectedProfile(profile)
  };

  return (
    <div className="profile--buttons">
      <button className="profile--edit-button" onClick={handleEditClick}>
        {ConstGeneric.EDIT}
      </button>
      <button className="profile--delete-button" onClick={handleDeleteClick}>
        {ConstGeneric.DELETE}
      </button>
    </div>
  );
};

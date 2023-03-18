import { SyntheticEvent, useEffect, useState } from "react";
import { ProfileDataModel, ProfileTechnology } from "../../data-models/Profile";
import { ReactComponent as Arrow } from "../../assets/icons/arrow_drop_down_menu.svg";
import { TechnologyList } from "./TechnologyList";
import { IProfile } from "../../interfaces/profilesInterfaces";

interface IEditProfileModalForm {
  formProps: {
    handleSubmit: (e: SyntheticEvent) => void;
    handleChange: (e: any) => void;
    setIsOpenEditModal: (val: boolean) => void;
    selectedProfile: ProfileDataModel | null;
    setUpdatedProfile: (val: ProfileDataModel) => void;
    updatedProfile: ProfileDataModel | undefined;
    technologiesList: ProfileTechnology[];
  };
}

export const EditProfileModalForm = (props: IEditProfileModalForm) => {
  const { handleChange, handleSubmit, setIsOpenEditModal, selectedProfile, setUpdatedProfile, updatedProfile, technologiesList } = props.formProps;

  const [isListOpen, setIsListOpen] = useState<boolean>(false);
  const [technologyValue, setTechnologyValue] = useState<ProfileTechnology>();

  useEffect(() => {
    setTechnologyValue(selectedProfile?.technology!);
  }, [selectedProfile]);

  const technologyListProps = {
    setIsListOpen,
    setTechnologyValue,
    setUpdatedProfile,
    updatedProfile,
    handleChange,
    technologiesList,
    technologyValue,
  };

  return (
    <form className="edit-profile-modal--form" onSubmit={(e) => handleSubmit(e)}>
      <div className="edit-profile-modal--form__input">
        <label>Name</label>
        <input
          type="text"
          defaultValue={selectedProfile?.name}
          onChange={(e) => handleChange(e)}
          name="name" />
      </div>
      <div className="edit-profile-modal--form__input">
        <label>Last Name</label>
        <input
          type="text"
          defaultValue={selectedProfile?.lastName}
          onChange={(e) => handleChange(e)}
          name="lastName" />
      </div>
      <div className="edit-profile-modal--form__input">
        <label>Age</label>
        <input
          type="text"
          defaultValue={selectedProfile?.age}
          onChange={(e) => handleChange(e)}
          name="age" />
      </div>
      <div className="edit-profile-modal--form__input">
        <label>Technology</label>
        <div className="modal-technology--input">
          <input
            type="text"
            value={technologyValue}
            onClick={(e) => [handleChange(e), setIsListOpen(!isListOpen)]}
            name="technology"
            readOnly />
          <div
            className={isListOpen ?
              "technology-input--arrow-icon__active" : `technology-input--arrow-icon`}>
            <Arrow />
          </div>
          {isListOpen && (
            <TechnologyList technologyListProps={technologyListProps} />
          )}
        </div>
      </div>
      <div className="edit-profile-modal--buttons">
        <button className="modal--buttons__update">Update</button>
      </div>
    </form>
  );
};

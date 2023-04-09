import { SyntheticEvent, useEffect, useState } from "react";
import { ProfileDataModel, ProfileTechnology } from "../../data-models/Profile";
import { ReactComponent as Arrow } from "../../assets/icons/arrow_drop_down_menu.svg";
import { TechnologyList } from "./TechnologyList";
import { TextInput } from "../inputs/TextInput";
import { ConstGeneric } from "../../constants/ConstGeneric";
import { JsConst } from "../../constants/JsConst";
import { ConstInputTypes } from "../../constants/ConstInputTypes";
import { editProfileInputProps } from "./editProfileModalProps";

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

export const EditProfileForm = (props: IEditProfileModalForm) => {
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

  const getInputProps = () => {
    return editProfileInputProps(handleChange, selectedProfile!)
  }

  return (
    <form className="edit-profile-modal--form" onSubmit={(e) => handleSubmit(e)}>
      {getInputProps()?.map((input, idx) => {
        return <TextInput key={`${idx} input.label`} {...input} />
      })}
      <div className="edit-profile-modal--form__input">
        <label>{ConstGeneric.TECHNOLOGY}</label>
        <div className="modal-technology--input">
          <input
            type={ConstInputTypes.TEXT_TYPE}
            defaultValue={technologyValue}
            onClick={(e) => [handleChange(e), setIsListOpen(!isListOpen)]}
            name={JsConst.technology}
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
      {/* <div className="edit-profile-modal--buttons">
          <button className="modal--buttons__update">{constGeneric.UPDATE}</button>
        </div> */}
    </form>
  );
};

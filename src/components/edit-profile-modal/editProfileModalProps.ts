import { ConstClassNames } from "../../constants/ConstClassNames";
import { ConstGeneric } from "../../constants/ConstGeneric";
import { ConstInputTypes } from "../../constants/ConstInputTypes";
import { JsConst } from "../../constants/JsConst";
import { ProfileDataModel, ProfileTechnology } from "../../data-models/Profile";

export const technologiesList = [
  ProfileTechnology.REACT,
  ProfileTechnology.ANGULAR,
  ProfileTechnology.JS,
  ProfileTechnology.JAVA,
  ProfileTechnology.ANDROID,
  ProfileTechnology.SWIFT,
  ProfileTechnology.TS,
];

export const editProfileInputProps = (handleChange: (e: any) => void, selectedProfile: ProfileDataModel) => {
  return [
    {
      label: ConstGeneric.NAME,
      type: ConstInputTypes.TEXT_TYPE,
      value: selectedProfile?.name,
      onChange: handleChange,
      name: JsConst.constName
    },
    {
      label: ConstGeneric.LAST_NAME,
      type: ConstInputTypes.TEXT_TYPE,
      value: selectedProfile?.lastName,
      onChange: handleChange,
      name: JsConst.lastName
    },
    {
      label: ConstGeneric.AGE,
      type: ConstInputTypes.TEXT_TYPE,
      value: selectedProfile?.age,
      onChange: handleChange,
      name: JsConst.age
    }
  ]
}

export const buttonsProps = (cancelCB: () => void, updateCB: () => void) => {
  return [
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
}

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
      defaultValue: selectedProfile?.name,
      onChange: handleChange,
      name: JsConst.constName
    },
    {
      label: ConstGeneric.LAST_NAME,
      type: ConstInputTypes.TEXT_TYPE,
      defaultValue: selectedProfile?.lastName,
      onChange: handleChange,
      name: JsConst.lastName
    },
    {
      label: ConstGeneric.AGE,
      type: ConstInputTypes.TEXT_TYPE,
      defaultValue: selectedProfile?.age,
      onChange: handleChange,
      name: JsConst.age
    }
  ]
}

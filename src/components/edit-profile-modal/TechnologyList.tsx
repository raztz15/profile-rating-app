import { ProfileDataModel, ProfileTechnology } from "../../data-models/Profile";
import { IProfile } from "../../interfaces/profilesInterfaces";

interface ITechnologyList {
  technologyListProps: {
    setIsListOpen: (val: boolean) => void;
    setTechnologyValue: (value: ProfileTechnology) => void;
    setUpdatedProfile: (val: ProfileDataModel) => void;
    handleChange: (e: any) => void;
    technologiesList: ProfileTechnology[];
    updatedProfile: ProfileDataModel | undefined;
    technologyValue: ProfileTechnology | undefined;
  };
}
export const TechnologyList = (props: ITechnologyList) => {
  const {
    updatedProfile,
    setUpdatedProfile,
    setIsListOpen,
    setTechnologyValue,
    technologiesList,
  } = props.technologyListProps;

  return (
    <div className="technologies-list--container">
      {technologiesList.map((technology, index) => {
        return (
          <li
            key={`${index} + technologies-list--container`}
            value={technology}
            onClick={(e) => [
              setIsListOpen(false),
              setTechnologyValue(technology),
              setUpdatedProfile({ ...updatedProfile!, technology }),
            ]}
          >
            {technology}
          </li>
        );
      })}
    </div>
  );
};

import { SyntheticEvent } from "react";
import { ProfileDataModel } from "../../data-models/Profile";

interface IEditProfileModalForm {
  formProps: {
    handleSubmit: (e: SyntheticEvent) => void;
    handleChange: (e: any) => void;
    selectedProfile: ProfileDataModel | null;
  };
}

export const EditProfileModalForm = (props: IEditProfileModalForm) => {
  const { handleChange, handleSubmit, selectedProfile } = props.formProps;

  return (
    <form
      className="edit-profile-modal--form"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="edit-profile-modal--form__input">
        <label>Name</label>
        <input
          type="text"
          defaultValue={selectedProfile?.name}
          onChange={(e) => handleChange(e)}
          name="name"
        />
      </div>
      <div className="edit-profile-modal--form__input">
        <label>Last Name</label>
        <input
          type="text"
          defaultValue={selectedProfile?.lastName}
          onChange={(e) => handleChange(e)}
          name="lastName"
        />
      </div>
      <div className="edit-profile-modal--form__input">
        <label>Age</label>
        <input
          type="text"
          defaultValue={selectedProfile?.age}
          onChange={(e) => handleChange(e)}
          name="age"
        />
      </div>
      <div className="edit-profile-modal--form__input">
        <label>Technology</label>
        <input
          type="text"
          defaultValue={selectedProfile?.technology.toString()}
          onChange={(e) => handleChange(e)}
          name="technology"
        />
      </div>
      <button>Update</button>
    </form>
  );
};

import "./EditProfileModal.css";

interface IEditProfileModal {
  setIsOpenModal: (value: boolean) => void;
}

export const EditProfileModal = (props: IEditProfileModal) => {
  const { setIsOpenModal } = props;
  return (
    <div className="edit-profile-modal--container">
      <div className="edit-profile-modal--wrapper">
        <div
          className="edit-profile-modal--exit-button"
          onClick={() => setIsOpenModal(false)}
        >
          &#10060;
        </div>
      </div>
    </div>
  );
};

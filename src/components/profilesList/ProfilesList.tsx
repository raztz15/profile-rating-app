import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "./ProfileList.css";
import { setProfiles } from "../../actions/profileActions";
import { EditProfileModal } from "../edit-profile-modal/EditProfileModal";
import { profileReducer } from "../../reducers/profileReducer";

export const ProfilesList = () => {
  const profiles = useSelector((state) => state);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [data, setData] = useState<any>();
  const dispatch = useDispatch();

  const fetchingProfilesData = async () => {
    await axios.get("http://localhost:8080/").then((res) => {
      const response = res.data;
      console.log(response);
      //   dispatch(setProfiles(response));
      setData(response);
    });
  };

  useEffect(() => {
    fetchingProfilesData();
  }, [data]);

  console.log("profiles ===> ", profiles);
  console.log("data ===> ", data);

  return (
    <div className="profiles-list--container">
      <h1>Profiles List</h1>
      <div className="profile-list--profile">
        {data &&
          data.data.map((item: any, index: number) => {
            return (
              <div className="profile" key={index}>
                <li>{item.name}</li>
                <li>{item.lastName}</li>
                <li>{item.age}</li>
                <li>{item.technology}</li>
                <div className="profile--buttons">
                  <button
                    className="profile--edit-button"
                    onClick={() => setIsOpenModal(!isOpenModal)}
                  >
                    Edit
                  </button>
                  <button className="profile--delete-button">Delete</button>
                </div>
              </div>
            );
          })}
      </div>
      {isOpenModal && <EditProfileModal setIsOpenModal={setIsOpenModal} />}
    </div>
  );
};

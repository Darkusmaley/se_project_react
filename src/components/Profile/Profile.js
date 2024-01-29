import React from "react";
import SideBar from "../SideBar/SideBar";
import ClothingSection from "../ClothingSection/ClothingSection";
import "./Profile.css";

const Profile = ({ onSelectCard, onCreateModal}) => {
  return (
    <div className="profile">
      <div>
        <SideBar />
      </div>
      <div>
        <ClothingSection onSelectCard={onSelectCard} onCreateModal={onCreateModal}/>
      </div>
    </div>
  );
};

export default Profile;

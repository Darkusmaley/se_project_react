import React from "react";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothingSection/ClothesSection";
import "./Profile.css";

const Profile = ({ onSelectCard, onCreateModal, clothingItems }) => {
  const profileName = "Terrence Tegegne";
  return (
    <div className="profile">
      <div>
        <SideBar profileName={profileName} />
      </div>
      <div>
        <ClothesSection
          onSelectCard={onSelectCard}
          onCreateModal={onCreateModal}
          clothingItems={clothingItems}
        />
      </div>
    </div>
  );
};

export default Profile;

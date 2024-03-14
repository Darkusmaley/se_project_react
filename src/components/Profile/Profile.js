import React from "react";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothingSection/ClothesSection";
import "./Profile.css";

const Profile = ({
  onSelectCard,
  onCreateModal,
  clothingItems,
  logout,
  editProfile,
  isloggedIn,
  handleCardLike,
}) => {
  return (
    <div className="profile">
      <div>
        <SideBar logout={logout} editProfile={editProfile} />
      </div>
      <div>
        <ClothesSection
          onSelectCard={onSelectCard}
          onCreateModal={onCreateModal}
          clothingItems={clothingItems}
          isloggedIn={isloggedIn}
          handleCardLike={handleCardLike}
        />
      </div>
    </div>
  );
};

export default Profile;

import React, { useContext } from "react";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothingSection/ClothesSection";
import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Profile = ({
  onSelectCard,
  onCreateModal,
  clothingItems,
  logout,
  editProfile,
  isloggedIn,
  handleCardLike,
}) => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="profile">
      <div>
        <SideBar
          profileName={currentUser?.name}
          logout={logout}
          editProfile={editProfile}
        />
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

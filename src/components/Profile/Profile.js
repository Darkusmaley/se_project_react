import React from "react";
import { Link } from "react-router-dom";
import avatar from "../Header/Avatar.svg";
import SideBar from "../SideBar/SideBar";
import ClothingSection from "../ClothingSection/ClothingSection";

const Profile = () => {
  return (
    <div>
      <SideBar />
      <ClothingSection />
    </div>
  );
};

export default Profile;

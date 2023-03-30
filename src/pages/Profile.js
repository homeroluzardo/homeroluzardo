import React from "react";
import "../styles/Pages.css";
import profile_pic from "../images/IMG_1841.png";

function Profile() {
  return (
    <div className="container mt-5 p-5 myContainer">
      <h2 className="subtitle">Profile</h2>
      <img className="profile_pic" src={profile_pic} alt="Profile Pic" />;
      <blockquote className="blockquote text-white">
        <p className="mb-0">
          I am a Frontend Developer and Marketer with ability to research,
          analyze and synthesize information.
          <br />
          <br />
          My objective is simply to be the best web developer that I can be and
          to contribute to the technology industry all that I know and can do.
          <br />
          <br />I am passionate about learning and applying coding skills in the
          software development field. Redesigning systems when technological,
          methodological and organizational changes require it. <br />
          Plan, design and monitor information systems.
        </p>
      </blockquote>
    </div>
  );
}

export default Profile;

import React from "react";
import "../styles/Pages.css";

function Profile() {
  return (
    <div className="container mt-5 p-5 myContainer">
      <h2 className="subtitle">Profile</h2>

      <blockquote className="blockquote text-white">
        <p className="mb-0">
          Frontend Developer with ability to research, analyze and synthesize
          information.
          <br />
          <br />
          My objective is simply to be the best web developer that I can be and
          to contribute to the technology industry all that I know and can do.
          <br />
          <br />I am passionate about learning and applying coding skills in the
          software development field. Redesigning systems when technological,
          methodological and organizational changes require it. Plan, design and
          monitor information systems.
        </p>
      </blockquote>
    </div>
  );
}

export default Profile;

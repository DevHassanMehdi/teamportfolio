import React from "react";
import "./Avatars.scss";
import {avatars} from "../../portfolio";

export default function avatars() {
  if (!avatars.display) {
    return null;
  }
  return (
    <div className="avatar-div">
      {avatars.hassan ? (
        <a
          href={avatars.hassan}
          className="icon-button hassan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
          <span></span>
        </a>
      ) : null}
    </div>
  );
}

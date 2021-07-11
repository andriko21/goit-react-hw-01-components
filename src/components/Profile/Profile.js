import React from "react";
import PropTypes from "prop-types";

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className="profile">
    <div className="description">
      <img
        src="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
        alt="Аватар пользователя"
        className="avatar"
      />
      <p className="name">Petra Marica</p>
      <p className="tag">@pmarica</p>
      <p className="location">Salvador, Brasil</p>
    </div>

    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">1000</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">2000</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">3000</span>
      </li>
    </ul>
  </div>
);

Profile.propsTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Profile;

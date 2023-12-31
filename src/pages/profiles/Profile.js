import React from "react";
import styles from "../../styles/Profile.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import Avatar from "../../components/UserAvatar";
import { useSetProfileData } from "../../contexts/ProfileDataContext";

// User Profile 
const Profile = (props) => {
  const { profile, mobile, imageSize = 55 } = props;
  const { id, following_id, profile_avatar, owner } = profile;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const { handleFollow, handleUnfollow } = useSetProfileData();

  return (
    <div
      className={`my-3 d-flex align-items-center ${mobile && "flex-column"}`}
    >
      <div>
        <Link className="align-self-center" to={`/profiles/${id}/`}>
          <Avatar src={profile_avatar} height={imageSize} alt="Gamer connect users profile avatar"/>
        </Link>
      </div>
      <div className={`mx-2 ${styles.WordBreak}`}>
        <strong>{owner}</strong>
      </div>
      <div className={`text-right ${!mobile && "ml-auto"}`}>
        {!mobile &&
          currentUser &&
          !is_owner &&
          (following_id ? (
            <button
              className={btnStyles.btnXsSmall}
              onClick={() => handleUnfollow(profile)}
            >
              unfollow
            </button>
          ) : (
            <button
              className={btnStyles.btnXsSmall}
              onClick={() => handleFollow(profile)}
            >
              follow
            </button>
          ))}
      </div>
    </div>
  );
};

export default Profile;
import React from "react";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import { Link } from "react-router-dom";
import Avatar from "../../components/UserAvatar";
import styles from "../../styles/Post.module.css"

// Renders the games information
const Games = (props) => {
  const {
    owner,
    profile_id,
    profile_avatar,
    name,
    content,
    looking_for_friends,
    platform_username,
    experience,
    ProfilePage,
  } = props;

  return (
    <Card className={styles.Post}>
      <Card.Body>
        {!ProfilePage && (
          <Media className="align-items-center justify-content-between">
            <Link to={`/profiles/${profile_id}`}>
              <Avatar src={profile_avatar} height={80} />
              <div className={styles.ownerName}>{owner}</div>
            </Link>

          </Media>
        )}
        <p className="text-center">
          I am Currently Playing:
          {name}
        </p>
        <p className="text-center">
          About:
          {content}
        </p>
        <p className="text-center">
          Looking For Friends:
          {looking_for_friends}
          <span>{platform_username}</span>
        </p>
        <p className="text-center">
          Skill Level:
          {experience}
        </p>
      </Card.Body>
    </Card>
  );
};

export default Games

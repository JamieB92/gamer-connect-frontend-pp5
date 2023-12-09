import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserAvatar from "../../components/UserAvatar";
import styles from "../../styles/Comment.module.css";

const Comment = (props) => {
  const { profile_id, profile_avatar, owner, edited_on, comment } = props;

  return (
    <div>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <UserAvatar src={profile_avatar} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{edited_on}</span>
          <p>{comment}</p>
        </Media.Body>
      </Media>
    </div>
  );
};

export default Comment;
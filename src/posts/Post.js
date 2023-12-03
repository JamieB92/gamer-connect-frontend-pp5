import React from 'react'
import styles from "../styles/Post.module.css"
import { useCurrentUser } from '../contexts/CurrentUserContext';
import { Card, Media, OverlayTrigger, Tooltip} from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import UserAvatar from '../components/UserAvatar';

const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_avatar,
    comments_count,
    likes_count,
    like_id,
    post_header,
    caption,
    upload_image,
    edited_on,
    postPage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <UserAvatar src={profile_avatar} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{edited_on}</span>
            {is_owner && postPage && "..."}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img src={upload_image} alt={post_header} />
      </Link>
      <Card.Body>
        {post_header && <Card.Title className="text-center">{post_header}</Card.Title>}
        {caption && <Card.Text>{caption}</Card.Text>}
        <div className={styles.PostBar}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own post!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={() => {}}>
              <i className={`fas fa-heart ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={() => {}}>
              <i className={`far fa-heart ${styles.HeartOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like posts!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
          {likes_count}
          <Link to={`/posts/${id}`}>
            <i className="far fa-comments" />
          </Link>
          {comments_count}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post
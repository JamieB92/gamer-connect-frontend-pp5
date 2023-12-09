import React from 'react'
import ReactPlayer from 'react-player'
import styles from "../styles/Post.module.css"
import { useCurrentUser } from '../contexts/CurrentUserContext';
import { Card, Media, OverlayTrigger, Tooltip} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import UserAvatar from '../components/UserAvatar';
import { axiosRes } from '../api/axiosDefaults';
import { MoreDropdown } from '../components/EditDeleteDropdown';


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
    upload_clip,
    edited_on,
    postPage,
    setPosts,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const history = useHistory();

  const handleEdit = () => {
    console.log(`post id is : ${id}`)
    history.push(`/posts/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  }

  const handleLike = async () => {
    try {
      const {data} = await axiosRes.post('/likes/', {post:id})
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
          ? {...post, likes_count: post.likes_count + 1, like_id: data.id}
          :post; 
        }),
      }));
    } catch(err){
      console.log(err);
    }
  }

  const handleUnLike = async () => {
    try {
      const {data} = await axiosRes.delete(`/likes/${like_id}`)
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
          ? {...post, likes_count: post.likes_count - 1, like_id: data.id}
          :post; 
        }),
      }));
    } catch(err){
      console.log(err);
    }
  }

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <UserAvatar src={profile_avatar} height={55} />
            <span className={styles.ownerName}>{owner}</span>
          </Link>
          <div className="d-flex align-items-center">
            <span>{edited_on}</span>
            {is_owner && postPage && (
              <MoreDropdown 
                handleEdit={handleEdit}
                handleDelete={handleDelete} 
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        {upload_image ? (
          <Card.Img src={upload_image} alt={post_header} />
        ) : upload_clip ? (
          <ReactPlayer
            url={upload_clip}
            controls={true}
            width="700"
            height="500"
          />
        ) : (
          <></>
        )}
      </Link>
      <Card.Body>
        {post_header && (
          <Card.Title className="text-center">{post_header}</Card.Title>
        )}
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
            <span onClick={handleUnLike}>
              <i className={`fas fa-heart ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleLike}>
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
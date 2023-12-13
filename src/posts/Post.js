import React, { useState } from "react";
import ReactPlayer from "react-player";
import styles from "../styles/Post.module.css";
import { useCurrentUser } from "../contexts/CurrentUserContext";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import Modal from "react-bootstrap/Modal";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { Link, useHistory } from "react-router-dom";
import UserAvatar from "../components/UserAvatar";
import { axiosRes } from "../api/axiosDefaults";
import { MoreDropdown } from "../components/EditDeleteDropdown";

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

  // Post - display all the information in a the post

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const history = useHistory();

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    history.goBack();
  };

  const handleShow = () => setShow(true);

  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      handleShow();
    } catch (err) {
      
    }
  };

  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
            : post;
        }),
      }));
    } catch (err) {

    }
  };

  const handleUnLike = async () => {
    try {
      const { data } = await axiosRes.delete(`/likes/${like_id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count - 1, like_id: data.id }
            : post;
        }),
      }));
    } catch (err) {

    }
  };

  return (
    <Card className={styles.Post}>
      <Card.Body>
        {/* Posts drop down menu */}
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
          {/* Model that confirms deletion of a post */}
        </Media>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>Your Post has been deleted</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Okay
            </Button>
          </Modal.Footer>
        </Modal>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        {/* checks to see if the post is image or a video */}
        {upload_image ? (
          <img
            className={styles.PostImg}
            src={upload_image}
            alt={post_header}
          />
        ) : upload_clip ? (
          <ReactPlayer
            url={upload_clip}
            controls={true}
            width="700"
            height="500"
            alt={post_header}
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
              overlay={<Tooltip>You cant like your own post!</Tooltip>}
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

export default Post;

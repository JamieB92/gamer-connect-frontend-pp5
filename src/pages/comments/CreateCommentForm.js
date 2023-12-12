import React, { useState } from "react";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import BtnStyles from "../../styles/Button.module.css"
import styles from "../../styles/CommentCreateEditForm.module.css";
import UserAvatar from "../../components/UserAvatar";
import { axiosRes } from "../../api/axiosDefaults";

function CreateCommentForm(props) {
  const { post, setPost, setComments, profile_avatar, profile_id } = props;
  const [comment, setComment] = useState("");

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/post_comments/", {
        comment,
        post,
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count + 1,
          },
        ],
      }));
      setComment("");
    } catch (err) {

    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <Link to={`/profiles/${profile_id}`}>
            <UserAvatar src={profile_avatar} />
          </Link>
          <Form.Control
            className={styles.Form}
            placeholder="Create a comment"
            as="textarea"
            value={comment}
            onChange={handleChange}
            rows={4}
          />
        </InputGroup>
      </Form.Group>
      <button
        className={`${BtnStyles.btnXsSmall} d-block ml-auto`}
        disabled={!comment.trim()}
        type="submit"
      >
        post
      </button>
    </Form>
  );
}

export default CreateCommentForm;
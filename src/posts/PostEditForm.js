import React, { useEffect, useRef, useState } from "react";

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";

import ReactPlayer from "react-player";

import styles from "../styles/CreatePostEditForm.module.css";
import appStyles from "../App.module.css";
import btnStyles from "../styles/Button.module.css";

import { axiosReq } from "../api/axiosDefaults";
import { useHistory, useParams } from "react-router";
import { useRedirect } from "../hooks/useRedirect";

// Postedit form
// allow for data in the post to be edited

function CreatePostWithImageForm() {
  useRedirect("loggedOut")
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    post_header: "",
    caption: "",
    upload_image: "",
    upload_clip: "",
  });

  const [show, setShow] = useState(false);

  const handleClose = () => {
        setShow(false);
        history.push(`/posts/${id}`);
  } 
  const handleShow = () => setShow(true);


  const { post_header, caption, upload_image, upload_clip } = postData;

  const uploadImage = useRef(null);
  const uploadClip = useRef(null);
  const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/${id}/`);
        const { post_header, caption, upload_clip, upload_image, is_owner } = data;

        is_owner
          ? setPostData({ post_header, caption, upload_clip, upload_image })
          : history.push("/");
      } catch (err) {

      }
    };
    handleMount();
  }, [history, id]);

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(upload_image);
      setPostData({
        ...postData,
        upload_image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleChangeVideo = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(upload_clip);
      setPostData({
        ...postData,
        upload_clip: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    if (uploadImage.current  && uploadImage.current.files.length) {
        formData.append("upload_image", uploadImage.current.files[0]);
    }
    
    if (uploadClip.current && uploadClip.current.files.length) {
        formData.append("upload_clip", uploadClip.current.files[0]);
    }
    formData.append("post_header", post_header);
    formData.append("caption", caption);

    try {
      await axiosReq.put(`/posts/${id}/`, formData);
      handleShow();
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="post_header"
          value={post_header}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.post_header?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label>Caption</Form.Label>
        <Form.Control
          as="textarea"
          rows={8}
          type="text"
          name="caption"
          value={caption}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.caption?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button className={`${btnStyles.btnSmall}`} type="submit">
        create
      </Button>

      <Button
        className={`${btnStyles.btnSmall}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Container
            className={`${appStyles.Content} ${styles.UploadContainer} d-flex flex-column justify-content-center`}
          >
            {upload_image ? (
              <>
                <Form.Group className="text-center">
                  <figure>
                    <Image
                      className={appStyles.Image}
                      src={upload_image}
                      rounded
                    />
                  </figure>
                  <Form.Label
                    className={btnStyles.btnSmall}
                    htmlFor="image-upload"
                  >
                    Change
                  </Form.Label>
                  <Form.File
                    id="image-upload"
                    name="upload_image"
                    accept="image/*"
                    onChange={handleChangeImage}
                    ref={uploadImage}
                  />
                </Form.Group>
                {errors?.upload_image?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
              </>
            ) : upload_clip ? (
              <>
                <Form.Group className="text-center">
                  <ReactPlayer
                    url={upload_clip}
                    controls={true}
                    width="700"
                    height="500"
                  />
                  <Form.Label
                    className={btnStyles.btnSmall}
                    htmlFor="video-upload"
                  >
                    Change
                  </Form.Label>
                  <Form.File
                    id="video-upload"
                    name="upload_clip"
                    accept="video/mp4,video/x-m4v,video/*"
                    onChange={handleChangeVideo}
                    ref={uploadClip}
                  />
                </Form.Group>
                {errors?.upload_clip?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
              </>
            ) : (
              <></>
            )}
          </Container>
        </Col>
        <Col>
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirmed Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>You have succesfully edited your Post!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>
    </Form>
  );
}

export default CreatePostWithImageForm;

import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import { axiosReq } from "../../api/axiosDefaults";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";

import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import { Button, Modal } from "react-bootstrap";
import { useRedirect } from "../../hooks/useRedirect";

const ProfileEditForm = () => {
  useRedirect('loggedOut')
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { id } = useParams();
  const history = useHistory();
  const imageFile = useRef();

  const [profileData, setProfileData] = useState({
    name: "",
    bio: "",
    profile_avatar: "",
    platform: "",
    platform_username: "",
  });
  const { name, bio, profile_avatar, platform, platform_username } =
    profileData;

  const [errors, setErrors] = useState({});

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    history.goBack();
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleMount = async () => {
      if (currentUser?.profile_id?.toString() === id) {
        try {
          const { data } = await axiosReq.get(`/profiles/${id}`);
          const { name, bio, profile_avatar, platform, platform_username } =
            data;
          setProfileData({
            name,
            bio,
            profile_avatar,
            platform,
            platform_username,
          });
        } catch (err) {

          history.push("/");
        }
      } else {
        history.push("/");
      }
    };

    handleMount();
  }, [currentUser, history, id]);

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("bio", bio);
    formData.append("platform", platform);
    formData.append("platform_username", platform_username);

    if (imageFile?.current?.files[0]) {
      formData.append("profile_avatar", imageFile?.current?.files[0]);
    }

    try {
      const { data } = await axiosReq.put(`/profiles/${id}/`, formData);
      setCurrentUser((currentUser) => ({
        ...currentUser,
        profile_avatar: data.profile_avatar,
      }));
      handleShow();
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  const textFields = (
    <>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          as="textarea"
          value={name}
          onChange={handleChange}
          name="name"
          rows={1}
        />
      </Form.Group>

      {errors?.name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Bio</Form.Label>
        <Form.Control
          as="textarea"
          value={bio}
          onChange={handleChange}
          name="bio"
          rows={7}
        />
      </Form.Group>

      {errors?.bio?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Platform</Form.Label>
        <Form.Control
          as="select"
          value={platform}
          onChange={handleChange}
          name="platform"
          rows={7}
        >
          <option value="Xbox">Xbox</option>
          <option value="Playstation">Playstation</option>
          <option value="Steam">Steam</option>
          <option value="Nintend Switch">Nintendo Switch</option>
          <option value="Discord">Discord</option>
        </Form.Control>
      </Form.Group>

      {errors?.platform?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Platform Username</Form.Label>
        <Form.Control
          type="textarea"
          value={platform_username}
          onChange={handleChange}
          name="platform_username"
          rows={1}
        />
      </Form.Group>
      {errors?.platform_username?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <button className={btnStyles.btnXsSmall} onClick={() => history.goBack()}>
        cancel
      </button>
      <button className={btnStyles.btnXsSmall} type="submit">
        save
      </button>
    </>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2 text-center" md={7} lg={6}>
          <Container className={appStyles.Content}>
            <Form.Group>
              {profile_avatar && (
                <figure>
                  <Image src={profile_avatar} fluid />
                </figure>
              )}
              {errors?.profile_avatar?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              <div>
                <Form.Label
                  className={btnStyles.btnXsSmall}
                  htmlFor="image-upload"
                >
                  Change your avatar
                </Form.Label>
              </div>
              <Form.File
                id="image-upload"
                ref={imageFile}
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files.length) {
                    setProfileData({
                      ...profileData,
                      profile_avatar: URL.createObjectURL(e.target.files[0]),
                    });
                  }
                }}
              />
            </Form.Group>
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={6} className="d-none d-md-block p-0 p-md-2 text-center">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirmed Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>You have succesfully edited your Profile!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>
    </Form>
  );
};

export default ProfileEditForm;

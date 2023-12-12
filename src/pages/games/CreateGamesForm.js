import React, { useState } from "react";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import { Alert, Col, Container, Form } from "react-bootstrap";
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import appStyles from "../../App.module.css"


// Form to create data 
const CreateGamesForm = () => {
  // redirect to home page if user is not logged in
  // useRedirect ("loggedOut");
  const [errors, setErrors] = useState({});
  const currentUser = useCurrentUser();
  const id = currentUser?.profile_id;

  const [gameData, setGameData] = useState({
    name: "",
    content: "",
    looking_for_friends: "",
    experience: "",
  });
  const {
    name, content, looking_for_friends, experience,
  } = gameData;

  const history = useHistory();

  const handleChange = (event) => {
    setGameData({
      ...gameData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("content", content);
    formData.append("looking_for_friends", looking_for_friends);
    formData.append("experience", experience);

    try {
      // request to make new game
      const { data } = await axiosReq.post("/games/", formData);
      // add game to the profile id
      await axiosRes.put(`/profiles/${id}/`, { gamesId: data.id });
      // goes back to the page the user was on
      history.goBack();
    } catch (err) {
      // display validation errors
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };


  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>What game are you currently playing?</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label>Let everyone know a little bit about the game.</Form.Label>
        <Form.Control
          as="textarea"
          name="content"
          value={content}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label>Are you looking to make friends?</Form.Label>
        <Form.Control
          as="select"
          value={looking_for_friends}
          onChange={handleChange}
          name="looking_for_friends"
          rows={7}
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </Form.Control>
      </Form.Group>
      {errors?.looking_for_friends?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label>What is your skill level?</Form.Label>
        <Form.Control
          as="select"
          value={experience}
          onChange={handleChange}
          name="platform"
          rows={7}
        >
          <option value="Noob">Noob</option>
          <option value="Casual">Casual</option>
          <option value="Pro">Pro</option>
          <option value="Veteran">Veteran</option>
          <option value="Master">Master</option>
          <option value="God">God</option>
        </Form.Control>
      </Form.Group>
      {errors?.experience?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <button className={btnStyles.btnXsSmall} onClick={() => history.goBack()}>
        Cancel
      </button>
      <button className={btnStyles.btnXsSmall} type="submit">
        Send
      </button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Col md={5} lg={6} className="d-none d-md-block p-0 p-md-2 text-center">
          <Container className={appStyles.Content}>{textFields}</Container>
      </Col>
    </Form>
  )

};

export default CreateGamesForm;

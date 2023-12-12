import React, { useState } from "react";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import { Alert, Container, Form } from "react-bootstrap";
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import appStyles from "../../App.module.css";
import Asset from "../../assets/create-game.jpg";
import styles from "../../styles/CreateGamesForm.module.css";
import { useRedirect } from "../../hooks/useRedirect";


// Form to create data 
const CreateGamesForm = () => {

  useRedirect("loggedOut");
  
  const [errors, setErrors] = useState({});
  const currentUser = useCurrentUser();
  const id = currentUser?.profile_id;

  const [gameData, setGameData] = useState({
    name: "",
    content: "",
    friends: "",
    experience: "",
  });
  const { name, content, friends, experience } = gameData;

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
    formData.append("friends", friends);
    formData.append("experience", experience);

    try {
      // request to make new game
      const { data } = await axiosReq.post("/games/", formData);
      // add game to the profile id
      await axiosRes.put(`/profiles/${id}/`, { game_id: data.id });
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
          rows={5}
        />
      </Form.Group>
      {errors?.name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label>
          Share a brief description of the game or the specific gaming interests
          you'd like to connect over.
        </Form.Label>
        <Form.Control
          as="textarea"
          name="content"
          value={content}
          onChange={handleChange}
          rows={5}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label>
          Gaming is better with friends! Do you want to expand your gaming
          circle and connect with other gamers?
        </Form.Label>
        <Form.Control
          as="select"
          value={friends}
          onChange={handleChange}
          name="friends"
          rows={5}
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </Form.Control>
      </Form.Group>
      {errors?.friends?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label>
          Level Up: Share Your Gaming Prowess! What's Your Skill Level?
        </Form.Label>
        <Form.Control
          as="select"
          value={experience}
          onChange={handleChange}
          name="experience"
          rows={5}
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
      <div className={styles.container}>
        <img
          src={Asset}
          alt="Image of a playstaion controller"
          className={styles.image}
        />
      </div>
      <div className={appStyles.Content}>{textFields}</div>
    </Form>
  );
};

export default CreateGamesForm;

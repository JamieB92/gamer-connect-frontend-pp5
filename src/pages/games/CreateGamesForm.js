import React, { useState } from "react";
import { axiosRes } from "../../api/axiosDefaults";
import { Form } from "react-bootstrap";
import BtnStyles from "../../styles/Button.module.css"

function CreateGamesForm(props) {
  const { profile, setProfile, setGames } = props;
  const [game, setGame] = useState("");

  const handleChange = (event) => {
    setGame(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/games/", {
        game,
        profile,
      });
      setGames((prevGames) => ({
        ...prevGames,
        results: [data, ...prevGames.results],
      }));
      setProfile((prevProfile) => ({
        results: [
          {
            ...prevProfile.results[0],
          },
        ],
      }));
      setGame("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form ClassName="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Game</Form.Label>
          <Form.Control
            type="text"
            name="game"
            value={game}
            onChange={handleChange}
          />
      </Form.Group>
      {errors?.game?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

    <Form.Group>
        <Form.Label>About the game</Form.Label>
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
        <Form.Label>What is your skill level?</Form.Label>
          <Form.Control
            as="select"
            name="experience"
            value={experience}
            onChange={handleChange}
          >
             <option value="Noob">Noob</option>
             <option value="Casual">Casual</option>
             <option value="Pro">Pro</option>
             <option value="Vetran">Vetran</option>
             <option value="Master">Master</option>
             <option value="God">God</option>
          </Form.Control>
      </Form.Group>
      {errors?.experience.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

    <Form.Group>
        <Form.Label>Are you looking for people to play with?</Form.Label>
          <Form.Control
            as="select"
            name="looking_for_friends"
            value={looking_for_friends}
            onChange={handleChange}
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
        <button
        className={`${BtnStyles.btnXsSmall} d-block ml-auto`}
        type="submit"
      >
        Add
      </button>
    </Form>
  );
}

export default CreateGamesForm;

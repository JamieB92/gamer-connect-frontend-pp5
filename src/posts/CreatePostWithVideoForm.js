import React, { useRef ,useState } from "react";
import {Form, Button, Row, Col, Container, Alert} from "react-bootstrap";

import Upload from "../assets/upload.png"

import styles from "../styles/CreatePostEditForm.module.css";
import appStyles from "../App.module.css";
import btnStyles from "../styles/Button.module.css";
import Asset from "../components/Assests";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../api/axiosDefaults";

function CreatePostWithVideoForm() {

  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    post_header: "",
    caption: "",
    upload_clip: "",
  });

  const { post_header, caption, upload_clip } = postData;

  const uploadClip = useRef(null);
  const history = useHistory();

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
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

  const handleSubmit= async (event) => {
    event.preventDefault()
    const formData = new FormData();

    formData.append('post_header', post_header)
    formData.append('caption', caption)
    formData.append('upload_clip', uploadClip.current.files[0])

    try {
      const {data} = await axiosReq.post('/posts/', formData);
      history.push(`/posts/${data.id}`)
    } catch(err) {
      if (err.response?.status !==401){
        setErrors(err.response?.data)
      }
    }
  }


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
            <Form.Group className="text-center">
              {upload_clip ? (
                <>
                  <div>
                    <video width="500" height="350" controls>
                      <source src={upload_clip} type="video/mp4" />
                    </video>
                  </div>
                  <Form.Label
                    className={btnStyles.btnSmall}
                    htmlFor="video-upload"
                  >
                    Change
                  </Form.Label>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="video-upload"
                >
                  <Asset
                    src={Upload}
                    message="Upload an video by click or tapping"
                  />
                </Form.Label>
              )}

              <Form.File
                id="video-upload"
                name="upload_clip"
                accept="upload_clip/*"
                onChange={handleChangeVideo}
                ref={uploadClip}
              />
            </Form.Group>
            {errors?.upload_clip?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Container>
        </Col>
        <Col>
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default CreatePostWithVideoForm
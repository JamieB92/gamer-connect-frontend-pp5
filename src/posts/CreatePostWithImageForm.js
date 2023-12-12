import React, { useRef ,useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

import Upload from "../assets/upload.png"

import styles from "../styles/CreatePostEditForm.module.css";
import appStyles from "../App.module.css";
import btnStyles from "../styles/Button.module.css";
import Asset from "../components/Assests";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../api/axiosDefaults";
import { useRedirect } from "../hooks/useRedirect";

// Create a post with an image form
function CreatePostWithImageForm() {
  useRedirect('loggedOut')

  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    post_header: "",
    caption: "",
    upload_image: "",
  });

  const { post_header, caption, upload_image } = postData;

  const uploadImage = useRef(null);
  const history = useHistory();

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

  const handleSubmit= async (event) => {
    event.preventDefault()
    const formData = new FormData();

    formData.append('post_header', post_header)
    formData.append('caption', caption)
    formData.append('upload_image', uploadImage.current.files[0])

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
              {upload_image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={upload_image} rounded />
                  </figure>
                  <Form.Label 
                    className={btnStyles.btnSmall}
                    htmlFor="image-upload"
                  > Change
                  </Form.Label>
                </>
              ) : (
              
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset 
                  src={Upload} 
                  message="Upload an image by click or tapping"
                    />
                </Form.Label>
              )}

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
          </Container>
        </Col>
        <Col>
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default CreatePostWithImageForm
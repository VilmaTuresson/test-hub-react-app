import React, { useRef, useState } from "react";
import styles from "../../styles/CreatePostForm.module.css";
import BtnStyles from "../../styles/Button.module.css";
import {
  Button,
  Container,
  Form,
  Row,
  Col,
  Image,
  Alert,
} from "react-bootstrap";
import Asset from "../../components/Asset";
import Upload from "../../assets/upload.png";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";

const CreatePostForm = () => {
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    title: "",
    content: "",
    image: "",
    link1: "",
    link2: "",
  });

  const { title, content, image, link1, link2 } = postData;

  const imageInput = useRef(null);
  const history = useHistory();

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", imageInput.current.files[0]);
    formData.append("link1", link1);
    formData.append("link2", link2);

    try {
      const { data } = await axiosReq.post("/posts/", formData);
      history.push(`/posts/${data.id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className={styles.FormInputs}>
      <Form.Group>
        <Form.Label className={styles.FromLabels}>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        ></Form.Control>
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          name="content"
          value={content}
          onChange={handleChange}
        ></Form.Control>
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Link to deployed site</Form.Label>
        <Form.Control
          type="text"
          name="link1"
          value={link1}
          onChange={handleChange}
        ></Form.Control>
      </Form.Group>
      {errors?.link1?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Additional links</Form.Label>
        <Form.Control
          type="text"
          name="link2"
          value={link2}
          onChange={handleChange}
        ></Form.Control>
      </Form.Group>
      {errors?.link2?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={BtnStyles.PostFormBtn}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button className={BtnStyles.PostFormBtn} type="submit">
        Create
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit} className={styles.Form}>
      <Row>
        <Col>
          <Container>
            <Form.Group className={styles.FormImg}>
              {image ? (
                <>
                  <figure>
                    <Image className={styles.Image} src={image} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={BtnStyles.FormButton}
                      htmlFor="image-upload"
                    >
                      Upload new image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label htmlFor="image-upload">
                  <Asset
                    src={Upload}
                    message="Click or tap to upload an image"
                  />
                </Form.Label>
              )}
              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Container>
        </Col>
        <Col>
          <Container>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
};

export default CreatePostForm;

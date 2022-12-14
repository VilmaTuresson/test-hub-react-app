import React, { useRef, useState } from "react";
import {
  Alert,
  Col,
  Container,
  Form,
  Row,
  Image,
  Button,
} from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Asset from "../../components/Asset";
import styles from "../../styles/CreatePostForm.module.css";
import BtnStyles from "../../styles/Button.module.css";
import Upload from "../../assets/upload.png";
import { axiosReq } from "../../api/axiosDefaults";

const CreatePostForm = () => {
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    title: "",
    content: "",
    image: "",
  });

  const { title, content, image } = postData;

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

  // const handleClick = () => {
  //   let DisabledBtn = document.getElementById("CreateBtn");
  //   DisabledBtn.disabled = true;
  // };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
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
          rows={8}
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

      <Button
        className={BtnStyles.PostFormBtn}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button id="CreateBtn" className={BtnStyles.PostFormBtn} type="submit">
        Create
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col
          className={`py-2 p-0 p-md-2" md={7} lg={8} ${styles.ImageContainer}`}
        >
          <Container
            className={`d-flex flex-column justify-content-center ${styles.Container}`}
          >
            <Form.Group className="text-center">
              {image ? (
                <>
                  <figure>
                    <Image className={styles.Image} src={image} rounded />
                  </figure>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset src={Upload} message="Upload an image" />
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
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={styles.Container}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
};

export default CreatePostForm;

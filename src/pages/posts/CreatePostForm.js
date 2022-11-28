import React from "react";
import styles from "../../styles/CreatePostForm.module.css";
import BtnStyles from "../../styles/Button.module.css";
import {
  Button,
  Container,
  FormGroup,
  FormLabel,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import Asset from "../../components/Asset";
import Upload from "../../assets/upload.png";

const CreatePostForm = () => {
  const textFields = (
    <div className={styles.FormInputs}>
      <Form.Group>
        <Form.Label className={styles.FromLabels}>Title</Form.Label>
        <Form.Control type="text" name="title"></Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control as="textarea" rows={5} name="content"></Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Link to deployed site</Form.Label>
        <Form.Control type="text" name="link-1"></Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Additional links</Form.Label>
        <Form.Control type="text" name="link-2"></Form.Control>
      </Form.Group>

      <Button className={BtnStyles.PostFormBtn}>Cancel</Button>
      <Button className={BtnStyles.PostFormBtn}>Create</Button>
    </div>
  );

  return (
    <Form className={styles.Form}>
      <Row>
        <Col>
          <Container>
            <FormGroup className={styles.FormImg}>
              <FormLabel>
                <Asset src={Upload} message="Click or tap to upload an image" />
              </FormLabel>
            </FormGroup>
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

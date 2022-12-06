import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { axiosRes } from "../../api/axiosDefaults";
import styles from "../../styles/CreateCommentForm.module.css";

const CreateCommentForm = (props) => {
  const { post, setPost, setComments } = props;
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/comments/", {
        content,
        post,
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count + 1,
          },
        ],
      }));
      setContent("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <Form.Control
            className={styles.Form}
            placeholder="Write a comment!"
            as="textarea"
            value={content}
            onChange={handleChange}
            rows={1.5}
          />
        </InputGroup>
      </Form.Group>
      <Button
        className={styles.Button}
        disabled={!content.trim()}
        type="submit"
      >
        Post
      </Button>
    </Form>
  );
};

export default CreateCommentForm;

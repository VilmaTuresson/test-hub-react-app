import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import appStyles from "../../App.module.css";

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: post }] = await Promise.all([
          axiosReq.get(`/posts/${id}`),
        ]);
        setPost({ results: [post] });
        console.log(post);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col>
        <Container className={appStyles.Content}>Comments</Container>
      </Col>
      <Col></Col>
    </Row>
  );
};

export default PostPage;

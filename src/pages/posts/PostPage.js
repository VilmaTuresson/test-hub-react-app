import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import styles from "../../styles/PostPage.module.css";
import Post from "./Post";
import Comment from "../comments/Comment";
import CreateCommentForm from "../comments/CreateCommentForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const profile_img = currentUser?.profile_img;
  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: post }, { data: comments }] = await Promise.all([
          axiosReq.get(`/posts/${id}`),
          axiosReq.get(`/comments/?post=${id}`),
        ]);
        setPost({ results: [post] });
        console.info(JSON.stringify(comments));
        setComments(comments.results ? comments : { results: comments });
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className={styles.MainContainer}>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <Post {...post.results[0]} setPosts={setPost} postPage />
        <Container className={styles.CommentsContainer}>
          {currentUser ? (
            <CreateCommentForm
              profile_id={currentUser.profile_id}
              profile_img={profile_img}
              post={id}
              setPost={setPost}
              setComments={setComments}
            />
          ) : comments.results.length ? (
            <h4 className={styles.CommentsTitle}>Comments</h4>
          ) : null}
          {comments.results.length ? (
            comments.results.map((comment) => (
              <Comment
                key={comment.id}
                {...comment}
                setPosts={setPost}
                setComments={setComments}
              />
            ))
          ) : currentUser ? (
            <span>No comments yet!</span>
          ) : (
            <span>No comments yet!</span>
          )}
        </Container>
      </Col>
    </Row>
  );
};

export default PostPage;

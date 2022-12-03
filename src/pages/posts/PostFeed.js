import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "../posts/Post";
import Asset from "../../components/Asset";
import NoResults from "../../assets/no-results.png";
import PostStyles from "../../styles/PostPage.module.css";

const PostFeed = (message, filter = "") => {
  const [posts, setPosts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/?${filter}`);
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    fetchPosts();
  }, [filter, pathname]);

  return (
    <Row className={PostStyles.MainContainer}>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        {hasLoaded ? (
          <>
            {posts.results.length ? (
              posts.results.map((post) => (
                <Post key={post.id} {...post} setPosts={setPosts} />
              ))
            ) : (
              <Container>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container>
            <Asset spinner />
          </Container>
        )}
      </Col>
    </Row>
  );
};

export default PostFeed;

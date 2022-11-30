import React from "react";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import Avatar from "../../components/Avatar";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/Post.module.css";

const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    likes_count,
    comments_count,
    like_id,
    content,
    title,
    image,
    updated_at,
    postPage,
    setPosts,
  } = props;

  const currentUser = useCurrentUser;
  const is_owner = currentUser?.username === owner;

  const handleLike = async () => {
    try {
      const { data } = await axiosReq.post("/likes/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count - 1, like_id: null }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={styles.mainContainer}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} />
            <span className={styles.UserName}>{owner}</span>
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && postPage && "..."}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img src={image} alt={title} className={styles.Img} />
      </Link>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {content && <Card.Text className="text-center">{content}</Card.Text>}
        <div>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own post!</Tooltip>}
            >
              <i className={`fa-solid fa-heart ${styles.icons}`}></i>
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={handleUnlike}>
              <i className={`fa-solid fa-heart ${styles.icons}`}></i>
            </span>
          ) : currentUser ? (
            <span onClick={handleLike}>
              <i className={`fa-regular fa-heart ${styles.icons}`}></i>
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like post!</Tooltip>}
            >
              <i className={`fa-regular fa-heart ${styles.icons}`}></i>
            </OverlayTrigger>
          )}
          {likes_count}
          <Link to={`/posts/${id}`}>
            <i className={`far fa-comments ${styles.icons}`} />
          </Link>
          {comments_count}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;

import React from "react";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosRes } from "../../api/axiosDefaults";
import Avatar from "../../components/Avatar";
import { EditPost } from "../../components/EditPost";
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

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      history.push("/deleted");
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { post: id });
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
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            <span className={styles.OwnerTitle}>{owner}</span>
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && (
              <EditPost handleEdit={handleEdit} handleDelete={handleDelete} />
            )}
            {is_owner && postPage}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
        <div className={styles.PostBar}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own post!</Tooltip>}
            >
              <i className={`fa-regular fa-heart ${styles.icons}`}></i>
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
              overlay={<Tooltip>Log in to like posts!</Tooltip>}
            >
              <i className={`fa-regular fa-heart ${styles.icons}`}></i>
            </OverlayTrigger>
          )}
          {likes_count}
          <Link to={`/posts/${id}`}>
            <i className={`far fa-comments ${styles.icons}`}></i>
          </Link>
          {comments_count}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;

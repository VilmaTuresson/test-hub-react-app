import React from "react";
import {
  Card,
  Media,
  OverlayTrigger,
  TabContent,
  Tooltip,
} from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Avatar from "../../components/Avatar";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

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
    link,
    created_at,
    updated_at,
    postPage,
  } = props;

  const currentUser = useCurrentUser;
  const is_owner = currentUser?.username === owner;

  return (
    <Card>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} />
            {owner}
          </Link>
          <div>
            <span>{updated_at}</span>
            {is_owner && postPage && "..."}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {content && <Card.Text className="text-center">{content}</Card.Text>}
        <div>
          {like_id ? (
            <span onClick={() => {}}>
              <i className={`fa-solid fa-heart`}></i>
            </span>
          ) : currentUser ? (
            <span onClick={() => {}}>
              <i className={`fa-regular fa-heart`}></i>
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like post!</Tooltip>}
            >
              <i className={`fa-regular fa-heart`}></i>
            </OverlayTrigger>
          )}
          {likes_count}
          <Link to={`/posts/${id}`}>
            <i className="far fa-comments" />
          </Link>
          {comments_count}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;

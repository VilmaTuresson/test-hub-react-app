import React, { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Asset from "../../components/Asset";
import styles from "../../styles/ProfilePage.module.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";

const ProfilePage = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const { id } = useParams();
  const setProfileData = useSetProfileData();
  const { pageProfile } = useProfileData();
  const [profile] = pageProfile.results;
  const is_owner = currentUser?.username === profile?.owner;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }] = await Promise.all([
          axiosReq.get(`/profiles/${id}`),
        ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  const mainProfile = (
    <>
      <Row className={styles.Container}>
        <Col lg={3} className="text-lg-left">
          <Image
            className={styles.ProfileImg}
            roundedCircle
            src={profile?.profile_img}
          />
        </Col>
        <Col className={styles.ProfileInfo}>
          <h2 className={styles.ProfileUsername}>{profile?.owner}</h2>
          <Row className="no-gutters">
            <Col className={styles.ProfileFollowInfo}>
              <div>{profile?.posts_count}</div>
              <div>posts</div>
            </Col>
            <Col className={styles.ProfileFollowInfo}>
              <div>{profile?.following_count}</div>
              <div>following</div>
            </Col>
            <Col className={styles.ProfileFollowInfo}>
              <div>{profile?.followers_count}</div>
              <div>followers</div>
            </Col>
          </Row>
        </Col>
        <Col className={styles.BtnContainer}>
          {currentUser &&
            !is_owner &&
            (profile?.following_id ? (
              <Button className={styles.FollowBtn} onClick={() => {}}>
                unfollow
              </Button>
            ) : (
              <Button className={styles.FollowBtn} onClick={() => {}}>
                follow
              </Button>
            ))}
        </Col>
        <Col className="p-3">
          {profile?.content && <Col className="p-3">{profile.content}</Col>}
        </Col>
      </Row>
    </>
  );

  const mainPosts = (
    <>
      <hr />
      <p className="text-center">profile owner posts</p>
      <hr />
    </>
  );

  return (
    <Row>
      <Col>
        <Container>
          {hasLoaded ? (
            <>
              {mainProfile}
              {mainPosts}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
    </Row>
  );
};

export default ProfilePage;

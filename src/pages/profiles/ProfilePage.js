import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Game from "../games/Game";
import Asset from "../../components/Assests";
import PostStyles from "../../styles/PostsPage.module.css";
import styles from "../../styles/ProfilePage.module.css";
import btnStyles from "../../styles/Button.module.css";
import { ProfileEditDropdown } from "../../components/EditDeleteDropdown";
import PopularProfiles from "./PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import { Button, Image, Modal } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "../../posts/Post";
import { fetchMoreData } from "../../utils/utils";
import NoResults from "../../assets/no-results.jpg";
import axios from "axios";

// Individual User profile page
// Displays all users posts, games and profile data

const ProfilePage = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profilePosts, setProfilePosts] = useState({ results: [] });
  const [gameData, setGameData] = useState(null);

  const currentUser = useCurrentUser();
  const { id } = useParams();

  const { setProfileData, handleFollow, handleUnfollow } = useSetProfileData();
  const { pageProfile } = useProfileData();
  const [profile] = pageProfile.results;

  const is_owner = currentUser?.username === profile?.owner;
  const game_id = profile?.game_id;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteGame = async () => {
    try {
      await axios.delete(`/games/${game_id}/`);
      await axiosRes.put(`/profiles/${id}/`, { game_id: null });
      setGameData(null);
    } catch (err) {}
    handleClose();
  };

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: pageProfile }, { data: profilePosts }] =
          await Promise.all([
            axiosReq.get(`/profiles/${id}/`),
            axiosReq.get(`/posts/?owner__profile=${id}`),
          ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfilePosts(profilePosts);
        try {
          const { data } = await axiosReq.get(`/games/${game_id}/`);
          setGameData(data);
        } catch (err) {
          setGameData(null);
        }
        setHasLoaded(true);
      } catch (err) {
        setGameData(null);
      }
    };
    handleMount();
  }, [id, setProfileData, game_id]);

  const mainProfile = (
    <div className={styles.ProfileContent}>
      {profile?.is_owner && (
        <ProfileEditDropdown
          id={profile?.id}
          handleDeleteGame={handleDeleteGame}
        />
      )}
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
          <Image
            className={styles.ProfileAvatar}
            roundedCircle
            src={profile?.profile_avatar}
            alt="GamerConnect  Profile avatar"
          />
        </Col>
        <Col lg={6}>
          <div className={styles.UserName}>
            <h2>{profile?.owner}</h2>
            {profile?.platform && (
              <strong><p className={styles.name}>{profile.name}</p></strong>
            )}
          </div>
          <div>
            {profile?.game_id && <p>Looking for friends to play with on </p>}
            {profile?.platform && <p>Prefered Platform: {profile.platform}</p>}
            {profile?.platform_username && (
              <p>Username: {profile.platform_username}</p>
            )}
          </div>

          <Row className="justify-content-center no-gutters">
            <Col xs={3} className="my-2">
              <div>{profile?.posts_count}</div>
              <div>posts</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.followers_count}</div>
              <div>followers</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.following_count}</div>
              <div>following</div>
            </Col>
          </Row>
        </Col>
        <Col lg={3} className="text-lg-right">
          {currentUser &&
            !is_owner &&
            (profile?.following_id ? (
              <button
                className={btnStyles.btnXsSmall}
                onClick={() => handleUnfollow(profile)}
              >
                unfollow
              </button>
            ) : (
              <button
                className={btnStyles.btnXsSmall}
                onClick={() => handleFollow(profile)}
              >
                follow
              </button>
            ))}
        </Col>
        {profile?.bio && <Col className="p-3">{profile.bio}</Col>}
      </Row>
    </div>
  );

  const mainProfilePosts = (
    <>
      {profilePosts.results.length ? (
        <div className={styles.Post}>
        <InfiniteScroll
          children={profilePosts.results.map((post) => (
            <Post key={post.id} {...post} setPosts={setProfilePosts} />
          ))}
          dataLength={profilePosts.results.length}
          loader={<Asset spinner />}
          hasMore={!!profilePosts.next}
          next={() => fetchMoreData(profilePosts, setProfilePosts)}
        />
        </div> 

      ) : (
        <Container>
          <img
            src={NoResults}
            alt="No Results to display"
            className={PostStyles.noResultsImage}
          />
          <Asset
            message={`No results found, ${profile?.owner} hasn't posted yet.`}
          />
        </Container>
      )}

          </> );

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <Container>
          {hasLoaded ? (
            <>
              {profile?.game_id && is_owner && (
                <button className={btnStyles.btnXsSmall} onClick={handleShow}>
                  Remove Game
                </button>
              )}
              {mainProfile}
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Are you sure you want to delete your current game data?
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Cancel
                  </Button>
                  <button
                    className={btnStyles.btnXsSmall}
                    onClick={handleDeleteGame}
                  >
                    Confirm
                  </button>
                </Modal.Footer>
              </Modal>
              {gameData && <Game {...gameData} isProfilePage showAll />}
              <div>{mainProfilePosts}</div>
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
};

export default ProfilePage;

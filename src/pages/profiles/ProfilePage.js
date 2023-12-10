import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Asset from "../../components/Assests";
import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import PostsPageStyles from "../../styles/PostsPage.module.css"
import btnStyles from "../../styles/Button.module.css";
import PopularProfiles from "./PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import { useSetProfileData, useProfileData} from "../../contexts/ProfileDataContext";
import { Button, Image } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "../../posts/Post";
import { fetchMoreData } from "../../utils/utils";
import NoResults from "../../assets/no-results.jpg";


function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profilePosts, setProfilePosts] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const { id } = useParams();

  const setProfileData = useSetProfileData();
  const { pageProfile } = useProfileData();

  const [profile] = pageProfile.results;
  const is_owner = currentUser?.username === profile?.owner;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }, { data: profilePosts }] =
          await Promise.all([
            axiosReq.get(`/profiles/${id}`),
            axiosReq.get(`/posts/?owner__profile=${id}`),
          ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfilePosts(profilePosts);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  const mainProfile = (
    <>
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
          <Image 
            className={styles.ProfileAvatar}
            roundedCircle 
            src={profile?.profile_avatar}
          />
        </Col>
        <Col lg={6}>
          <h3 className="m-2">{profile?.owner}</h3>
          <Row className="justify-content-center no-gutters">
            <Col xs={3} className="my-2">
              <div>
                {profile?.posts_count}
              </div>
              <div>
                <p>Posts</p>
              </div>
            </Col>
            <Col xs={3} className="my-2">
              <div>
                {profile?.followers_count}
              </div>
              <div>
                <p>Followers</p>
              </div>
            </Col>
            <Col xs={3} className="my-2">
              <div>
                {profile?.following_count}
              </div>
              <div>
                <p>Following</p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col lg={3} className="text-lg-right">
        {currentUser &&
            !is_owner &&
            (profile?.following_id ? (
              <Button
                className={btnStyles.btnXsSmall}
                onClick={() => {}}
              >
                unfollow
              </Button>
            ) : (
              <Button
                className={btnStyles.btnXsSmall}
                onClick={() => {}}
              >
                follow
              </Button>
            ))}
        </Col>
        {profile?.platform && <Col className="p-3">{profile.platform}</Col>}
        {profile?.platform_username && <Col className="p-3">{profile.platform_username}</Col>}
        {profile?.bio && <Col className="p-3">{profile.bio}</Col>}
      </Row>
    </>
  );

  const mainProfilePosts = (
    <>
      <hr />
      <p className="text-center">{profile?.owner}'s posts</p>
      <hr />
      {profilePosts.results.length ? (
        <InfiniteScroll
          children={profilePosts.results.map((post) => (
            <Post key={post.id} {...post} setPosts={setProfilePosts} />
          ))}
          dataLength={profilePosts.results.length}
          loader={<Asset spinner />}
          hasMore={!!profilePosts.next}
          next={() => fetchMoreData(profilePosts, setProfilePosts)}
        />
      ) : (
        <Container className={PostsPageStyles.noResultsContainer}>
        <img
          src={NoResults}
          alt="No Results to display"
          className={PostsPageStyles.noResultsImage}
        />
        <Asset message={`${profile?.owner} hasn't posted yet.`}></Asset>
      </Container>

            


      )}
    </>
  );

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <Container className={appStyles.Content}>
          {hasLoaded ? (
            <>
              {mainProfile}
              {mainProfilePosts}
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
}

export default ProfilePage ;
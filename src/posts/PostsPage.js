import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Post from "./Post";
import styles from "../styles/PostsPage.module.css";
import appStyles from "../App.module.css"
import Asset from "../components/Assests"
import { useLocation } from "react-router";
import { axiosReq } from "../api/axiosDefaults";
import NoResults from "../assets/no-results.jpg"


function PostsPage({ message, filter = "" }) {
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
    <Row className="h-100">
      <Col>
        <p>Popular profiles for desktop</p>
      </Col>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Search</p>
        {hasLoaded ? (
          <>
            {posts.results.length ? (
              posts.results.map((post) => (
                <Post key={post.id} {...post} setPosts={setPosts} />
              ))
            ) : (
              <Container className={styles.noResultsImage}>
                <img src={NoResults} alt="No Results to display" className={styles.noResultsImage}/>
                <Asset message={message}>
                </Asset>
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
    </Row>
  );
}

export default PostsPage;
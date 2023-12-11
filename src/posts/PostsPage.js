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
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../utils/utils";
import PopularProfiles from "../pages/profiles/PopularProfiles";


function PostsPage({ message, filter = "" }) {
  const [posts, setPosts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/?${filter}search=${query}`);
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchPosts();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
}, [filter, query, pathname]);

  return (
    <div>
      <Row>
        <Col>
          <PopularProfiles mobile />
        </Col>
      </Row>
      <Row className="h-100">
        <Col>
          <form
            className={styles.searchForm}
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="text"
              className={styles.searchBar}
              placeholder="Search Posts"
            />
          </form>
        </Col>
      </Row>
      
      <Row className="h-100">
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
            <PopularProfiles />
        </Col>
        <Col className="py-2 p-0 p-lg-2" lg={8}>
          {hasLoaded ? (
            <>
              {posts.results.length ? (
                <InfiniteScroll 
                  children={
                    posts.results.map((post) => (
                      <Post key={post.id} {...post} setPosts={setPosts} />
                    ))
                  }
                  dataLength={posts.results.length}
                  loader={< Asset spinner />}
                  hasMore={!!posts.next}
                  next={() => fetchMoreData(posts, setPosts)}
                />
              ) : (
                <Container>
                  <img
                    src={NoResults}
                    alt="No Results to display"
                    className={styles.noResultsImage}
                  />
                  <Asset message={message}></Asset>
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
    </div>
  );
}

export default PostsPage;
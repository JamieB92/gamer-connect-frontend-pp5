import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useLocation } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Game from "./Game";
import Asset from "../../components/Assests";
import NoResults from "../../assets/no-results.jpg";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import { axiosReq } from "../../api/axiosDefaults";



const GamesPage = ({ message, filter = "" }) => {
  const [games, setGames] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const currentUser = useCurrentUser();

  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const { data } = await axiosReq.get(`/games/?${filter}search=${query}`);
        setGames(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchGames();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname, currentUser]);

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
              placeholder="Search games"
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
              {games.results.length ? (
                <InfiniteScroll 
                  children={
                    games.results.map((game) => (
                      <Game key={game.id} {...game} setGames={setGames} />
                    ))
                  }
                  dataLength={games.results.length}
                  loader={< Asset spinner />}
                  hasMore={!!games.next}
                  next={() => fetchMoreData(games, setGames)}
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

export default GamesPage;
import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useCurrentUser } from '../contexts/CurrentUserContext';
import appStyles from "../App.module.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../api/axiosDefaults";
import Post from "./Post";
import Comment from "../pages/comments/Comment";
import CreateCommentForm from "../pages/comments/CreateCommentForm";
import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../components/Assests"
import { fetchMoreData } from "../utils/utils";
import PopularProfiles from "../pages/profiles/PopularProfiles";



function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const profile_avatar = currentUser?.profile_avatar;
  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: post }, {data: comments}] = await Promise.all([
          axiosReq.get(`/posts/${id}`),
          axiosReq.get(`/post_comments/?post=${id}`)
        ]);
        setPost({ results: [post] });
        setComments(comments)
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <Post {...post.results[0]} setPosts={setPost} postPage />
        <Container className={appStyles.Content}>
          {currentUser ? (
            <CreateCommentForm
              profile_id={currentUser.profile_id}
              profile_avatar={profile_avatar}
              post={id}
              setPost={setPost}
              setComments={setComments}
            />
            ) : comments.results.length ? (
              "Comments"
            ) : null}
            {comments.results.length ? (
              <InfiniteScroll
              children={comments.results.map((comment) => (
                <Comment 
                key={comment.id} 
                {...comment} 
                setPost={setPost}
                setComments={setComments}
                />
              ))}
              dataLength={comments.results.length}
              loader={<Asset spinner />}
              hasMore={!!comments.next}
              next={() => fetchMoreData(comments, setComments)} 
              />
            ) : currentUser ? (
              <span>No comments yet, be the first to comment!</span>
            ) : (
              <span>No comments... yet</span>
            )}
          </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default PostPage;

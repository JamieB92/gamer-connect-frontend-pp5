import { Container } from "react-bootstrap";
import styles from "./App.module.css";
import NavBar from './components/NavBar';
import { Route,Switch } from 'react-router-dom'
import './api/axiosDefaults';
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import CreatePostWithImageForm from "./posts/CreatePostWithImageForm";
import PostPage from "./posts/PostPage";






function App() {
  return (
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Main}>
            <Switch>
              <Route exact path="/" render={() => <h1>Home Page</h1>} />
              <Route exact path="/signin" render={() => <SignInForm />} />
              <Route exact path="/signup" render={() => <SignUpForm/>} />
              <Route exact path="/posts/create" render={() => <CreatePostWithImageForm />} />
              <Route exact path="/posts/:id" render={() => <PostPage />} />
              <Route render={() => <p>Page not found!</p>} />
            </Switch>
          </Container>
        </div>

  );
}

export default App;
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import RegisterForm from "./pages/auth/RegisterForm";
import LoginForm from "./pages/auth/LoginForm";
import PostNav from "./components/PostNav";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import CreatePostForm from "./pages/posts/CreatePostForm";
import PostPage from "./pages/posts/PostPage";
import PostFeed from "./pages/posts/PostFeed";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        {currentUser && <PostNav />}
        <Switch>
          <Route
            exact
            path="/liked"
            render={() => (
              <PostFeed
                message="No results found. You haven't liked post yet!"
                filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
              />
            )}
          />
          <Route exact path="/" render={() => <PostFeed />} />
          <Route exact path="/profile" render={() => <h1>Profile</h1>} />
          <Route exact path="/login" render={() => <LoginForm />} />
          <Route exact path="/register" render={() => <RegisterForm />} />
          <Route exact path="/posts/create" render={() => <CreatePostForm />} />
          <Route exact path="/posts/:id" render={() => <PostPage />} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;

import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import RegisterForm from "./pages/auth/RegisterForm";
import LoginForm from "./pages/auth/LoginForm";
import PostNav from "./components/PostNav";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import PostPage from "./pages/posts/PostPage";
import PostFeed from "./pages/posts/PostFeed";
import CreatePostForm from "./pages/posts/CreatePostForm";
import PostEditForm from "./pages/posts/PostEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import SuccessfulDelete from "./components/SuccessfulDelete";

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
            path="/posts"
            render={() => (
              <PostFeed
                message="No results found. You haven't created any posts yet!"
                filter={`owner__profile=${profile_id}&`}
              />
            )}
          />
          <Route
            exact
            path="/feed"
            render={() => (
              <PostFeed
                message="No results found. You're not following anyone yet!"
                filter={`owner__followed__owner__profile=${profile_id}&`}
              />
            )}
          />
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
          <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route exact path="/deleted" render={() => <SuccessfulDelete />} />
          <Route render={() => <h3>Page not found!</h3>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;

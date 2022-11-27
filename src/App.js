import styles from './App.module.css';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import './api/axiosDefaults'
import RegisterForm from './pages/auth/RegisterForm';
import LoginForm from './pages/auth/LoginForm';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path='/' render={() => <h1>Home</h1>} />
          <Route exact path='/profile' render={() => <h1>Profile</h1>} />
          <Route exact path='/login' render={() => <LoginForm />} />
          <Route exact path='/register' render={() => <RegisterForm />} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
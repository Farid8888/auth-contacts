import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ContactsPage from './pages/ContactsPage'
import Layout from './Layout/Layout';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './store/auth-context';
import NewContactPage from './pages/NewContactPage';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/contacts/new-contact'>
             <NewContactPage/>
          </Route>
          <Route path='/auth'>
            <AuthPage />
          </Route>
        <Route path='/contacts' >
          {authCtx.isLoggedIn && <ContactsPage />}
          {!authCtx.isLoggedIn && <Redirect to='/auth' />}
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

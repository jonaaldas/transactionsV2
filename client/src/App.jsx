import { TransacionsContainers } from './context/TranContext';
import {
  Route,
  Routes
} from 'react-router-dom'
import Home from './Pages/Home'
import Form from './Pages/Form'
import EachClient from './Pages/EachClient';
import { Toaster } from 'react-hot-toast'
import AllArchivedClients from './Pages/AllArchivedClients';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import { Auth0Provider } from '@auth0/auth0-react'
// import LoginButton from './components/LoginButton';
// import  LogoutButton  from './components/LogoutButton';

const domain = process.env.REACT_APP_AUTH_DOMAIN
const clientId = process.env.REACT_APP_AUTH_CLIENT_ID

function App() {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <TransacionsContainers>

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/transactions/add' element={<Form />} />
          <Route path='/transactions/edit/:id' element={<Form />} />
          <Route path='/transactions/:id' element={<EachClient />} />
          <Route path='/transactions/archived' element={<AllArchivedClients />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
        <Toaster />
      </TransacionsContainers>
    </Auth0Provider >
  );
}

export default App;
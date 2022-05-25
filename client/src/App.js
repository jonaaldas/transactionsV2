import { TransacionsContainers } from './context/TranContext';
import {
  Route,
  Routes
} from 'react-router-dom'
import Home from './Pages/Home'
import Form from './Pages/Form'
import EachClient from './Pages/EachClient';
import {Toaster} from 'react-hot-toast'
import AllArchivedClients from './Pages/AllArchivedClients';

function App() {
  return (
    <TransacionsContainers>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/transactions/add' element={<Form />} />
        <Route path='/transactions/edit/:id' element={<Form />} />
        <Route path='/transactions/:id' element={<EachClient />} />
        <Route path='/transactions/archived' element={<AllArchivedClients />} />
      </Routes>
      <Toaster/>
    </TransacionsContainers>
  );
}

export default App;
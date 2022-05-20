import { TransacionsContainers } from './context/TranContext';
import {
  Route,
  Routes
} from 'react-router-dom'
import Home from './Pages/Home'
import Form from './Pages/Form'
import EachClient from './Pages/EachClient';
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <TransacionsContainers>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/transaction' element={<Form />} />
        <Route path='/transaction/edit/:id' element={<Form />} />
        <Route path='/transaction/:id' element={<EachClient />} />
      </Routes>
      <Toaster/>
    </TransacionsContainers>
  );
}

export default App;
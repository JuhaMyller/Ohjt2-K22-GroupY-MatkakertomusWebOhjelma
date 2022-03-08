// riittää importti vaan './pages' koska tulee index filestä
//muuten pitäisi olla esim import Etusivu from './pages/Etusivu';
import {
  Etusivu,
  MatkakohteetSivu,
  MatkakohdeIDSivu,
  LisaaTarinaSivu,
} from './pages';
import Navbar from './components/NavBar/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Esimerkkinä App.js
import { useModalContext } from './components/ResuableComponents/Modal/ModalContext';
import MatkakohteetTemplate from './components/ModalTemplates/MatkakohteetTemplate/MatkakohteetTemplate';
import Button from './components/ResuableComponents/Button';

function App() {
  const { openModal } = useModalContext();
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Etusivu />} />
        <Route exact path="matkakohteet" element={<MatkakohteetSivu />} />
        <Route exact path="matkakohteet/:id" element={<MatkakohdeIDSivu />} />
        <Route exact path="lisaatarina" element={<LisaaTarinaSivu />} />
      </Routes>
    </Router>
  );
}

export default App;

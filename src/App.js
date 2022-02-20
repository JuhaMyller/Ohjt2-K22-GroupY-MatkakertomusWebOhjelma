// riittää importti vaan './pages' koska tulee index filestä
//muuten pitäisi olla esim import Etusivu from './pages/Etusivu';
import {
  Etusivu,
  MatkakohteetSivu,
  MatkakohdeIDSivu,
  LisaaTarinaSivu,
} from './pages';

//Esimerkkinä App.js
import { useModalContext } from './components/ResuableComponents/Modal/ModalContext';
import MatkakohteetTemplate from './components/ModalTemplates/MatkakohteetTemplate/MatkakohteetTemplate';
import Button from './components/ResuableComponents/Button';

function App() {
  const { openModal } = useModalContext();
  return (
    <>
      <LisaaTarinaSivu />
      <Button
        onClick={() =>
          openModal({
            title: 'Muokkaa matkakohteita',
            template: <MatkakohteetTemplate />,
          })
        }
      >
        Avaa
      </Button>
    </>
  );
}

export default App;

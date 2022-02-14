// riittää importti vaan './pages' koska tulee index filestä
//muuten pitäisi olla esim import Etusivu from './pages/Etusivu';
import { Etusivu, MatkakohteetSivu, MatkakohdeIDSivu } from './pages';
import Button from './components/ResuableComponents/Button';

function App() {
  return (
    <>
      <div className="flex">
        <Button>Olen peruna</Button>
      </div>
    </>
  );
}

export default App;

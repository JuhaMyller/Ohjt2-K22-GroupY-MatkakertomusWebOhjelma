// riittää importti vaan './pages' koska tulee index filestä
//muuten pitäisi olla esim import Etusivu from './pages/Etusivu';
import { Etusivu, MatkakohteetSivu, MatkakohdeIDSivu } from './pages';
import Button from './components/ResuableComponents/Button';
import Input from './components/ResuableComponents/Input';
import ImageContainer from './components/ResuableComponents/ImageContainer';

const imgArr = [
  'https://cdn.pixabay.com/photo/2022/02/08/18/35/windmills-7001940_960_720.jpg',
  'https://cdn.pixabay.com/photo/2021/08/22/19/30/sky-6565993_960_720.jpg',
  'https://cdn.pixabay.com/photo/2020/05/15/14/17/water-5173774_960_720.jpg',
  'https://cdn.pixabay.com/photo/2022/02/03/12/03/river-6990295_960_720.jpg',
  'https://cdn.pixabay.com/photo/2022/02/06/17/26/heart-6997703_960_720.jpg',
  'https://cdn.pixabay.com/photo/2022/02/05/13/12/building-6994803__340.jpg',
  'https://cdn.pixabay.com/photo/2021/10/16/09/55/love-6714607_960_720.jpg',
  'https://cdn.pixabay.com/photo/2021/09/11/13/08/couple-6615590_960_720.jpg',
];

function App() {
  return (
    <>
      <div className="flex">
        <ImageContainer imgArr={imgArr} />
      </div>
    </>
  );
}

export default App;

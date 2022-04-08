import {
  Etusivu,
  MatkakohteetSivu,
  MatkakohdeIDSivu,
  LisaaTarinaSivu,
  Kirjaudu,
  Rekisteröidy,
  TarinaSivu,
  KirjauduUlos,
} from './pages';
import Navbar from './components/NavBar/Navbar';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import useRefreshToken from './hooks/useRefreshToken';
import RequireAuth from './components/requireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const user = useSelector((state) => state.auth.kayttaja);
  const userLoading = useSelector((state) => state.auth.refreshTokenFetch);
  const refresh = useRefreshToken();

  useEffect(() => {
    refresh();
  }, []);

  return (
    <Router>
      <Navbar />
      {!user && userLoading ? (
        <h1>Loading</h1>
      ) : (
        <Routes>
          <Route index element={<Etusivu />} />
          <Route exact path='matkakohteet' element={<MatkakohteetSivu />} />
          <Route exact path='kirjaudu' element={<Kirjaudu />} />
          <Route exact path='rekisteroidy' element={<Rekisteröidy />} />

          <Route element={<RequireAuth />}>
            <Route path='matkakohteet/:id' element={<MatkakohdeIDSivu />} />
            <Route exact path='lisaatarina' element={<LisaaTarinaSivu />} />
            <Route path='tarina/:id' element={<TarinaSivu />} />
          </Route>
          <Route exact path='kirjauduulos' element={<KirjauduUlos />} />
        </Routes>
      )}
      <ToastContainer />
    </Router>
  );
}

export default App;

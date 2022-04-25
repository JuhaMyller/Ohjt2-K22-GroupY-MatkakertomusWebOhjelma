import {
  Etusivu,
  MatkakohteetSivu,
  MatkakohdeIDSivu,
  LisaaTarinaSivu,
  Kirjaudu,
  Rekisteröidy,
  TarinaSivu,
  KirjauduUlos,
  KaikkiTarinat,
  OmatTarinatSivu,
  JasenetIDSivu,
  JasenetSivu,
} from './pages';
import Navbar from './components/NavBar/Navbar';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import useRefreshToken from './hooks/useRefreshToken';
import RequireAuth from './components/requireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FooterTemplate from './components/FooterTemplate';

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
      {!user && userLoading ? null : (
        <Routes>
          <Route exact path="kirjaudu" element={<Kirjaudu />} />
          <Route exact path="rekisteroidy" element={<Rekisteröidy />} />
          <Route element={<FooterTemplate />}>
            <Route index element={<Etusivu />} />
            <Route exact path="matkakohteet" element={<MatkakohteetSivu />} />

            <Route element={<RequireAuth />}>
              <Route path="jasenet" element={<JasenetSivu />} />
              <Route path="jasenet/:id" element={<JasenetIDSivu />} />
              <Route path="matkakohteet/:id" element={<MatkakohdeIDSivu />} />
              <Route exact path="lisaatarina" element={<LisaaTarinaSivu />} />
              <Route path="tarinat/:id" element={<TarinaSivu />} />
              <Route path="tarinat" element={<KaikkiTarinat />} />
              <Route path="omattarinat" element={<OmatTarinatSivu />} />
            </Route>
          </Route>
          <Route exact path="kirjauduulos" element={<KirjauduUlos />} />
        </Routes>
      )}
      <ToastContainer />
    </Router>
  );
}

export default App;

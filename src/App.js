import {
  Etusivu,
  MatkakohteetSivu,
  MatkakohdeIDSivu,
  LisaaTarinaSivu,
  Kirjaudu,
  Rekisteröidy,
} from "./pages";
import Navbar from "./components/NavBar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import {
  KirjauduRefreshToken,
  KirjauduSpostiJaSalasana,
} from "./Redux/Actions/authActions";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TarinaSivu from "./pages/TarinaSivu";

function App() {
  const user = useSelector((state) => state.auth.kayttaja);
  const userLoading = useSelector((state) => state.auth.refreshTokenFetch);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(KirjauduRefreshToken());
    // dispatch(
    //   KirjauduSpostiJaSalasana('marek.puurunen@gmail.com', 'aaaaaa', toast)
    // );
  }, []);

  return (
    <Router>
      <Navbar />
      {!user && userLoading ? (
        <h1>Loading</h1>
      ) : (
        <Routes>
          <Route index element={<Etusivu />} />
          <Route exact path="matkakohteet" element={<MatkakohteetSivu />} />
          <Route exact path="matkakohteet/:id" element={<MatkakohdeIDSivu />} />
          <Route exact path="lisaatarina" element={<LisaaTarinaSivu />} />
          <Route exact path="tarina/:id" element={<TarinaSivu />} />
          <Route exact path="kirjaudu" element={<Kirjaudu />} />
          <Route exact path="rekisteroidy" element={<Rekisteröidy />} />
        </Routes>
      )}
      <ToastContainer />
    </Router>
  );
}

export default App;

import React, { useState } from "react";
import styled from "styled-components";
import img from "./KorttiKuva.jpg";
import "./Kohdekortti.css";
import Kohdekortti from "./Kohdekortti";
import Input from "../ResuableComponents/Input";
import Button from "../ResuableComponents/Button";

const KohdeLista = () => {
  const mkohteet = [
    {
      img: img,
      kohde: "ruka",
      maa: "suomi",
      kaupunki: "Kuopio",
      tarinat: 0,
      id: 0,
    },
    {
      img: img,
      kohde: "levi",
      maa: "suomi",
      kaupunki: "Kuopio",
      tarinat: 10,
      id: 1,
    },
    {
      img: img,
      kohde: "kuusamo",
      maa: "suomi",
      kaupunki: "Kuopio",
      tarinat: 7,
      id: 2,
    },
    {
      img: img,
      kohde: "Tampere",
      maa: "suomi",
      kaupunki: "Kuopio",
      tarinat: 0,
      id: 3,
    },
    {
      img: img,
      kohde: "ranta-aho",
      maa: "suomi",
      kaupunki: "Kuopio",
      tarinat: 1,
      id: 4,
    },
    {
      img: img,
      kohde: "perkele",
      maa: "suomi",
      kaupunki: "Kuopio",
      tarinat: 0,
      id: 5,
    },
  ];
  const [etsi, setEtsi] = useState("");
  const [responseData, setResponseData] = useState(mkohteet);
  const [query, setQuery] = useState("");

  const filter = () => {
    if (etsi !== "") {
      const results = mkohteet.filter((matkakohde) => {
        return matkakohde.kohde.toLowerCase().startsWith(etsi.toLowerCase());
      });
      setResponseData(results);
    } else {
      setResponseData(mkohteet);
    }
    setEtsi(etsi);
  };

  const getMatkakohteet = () => {};

  return (
    <div>
      <div>
        <div className="input-container">
          <Input
            className="etsi"
            type="text"
            id="etsi"
            value={etsi}
            onChange={setEtsi}
            placeholder="Etsi"
            styles={{
              marginTop: "10px",
              marginBottom: "10px",
              float: "left",
              width: "50%",
              marginLeft: "20%",
            }}
          />
          <Button
            styles={{
              marginLeft: "2px",
              float: "left",
              marginTop: "10px",
              marginBottom: "10px",
            }}
            onClick={filter}
            className="button"
          >
            Etsi
          </Button>
        </div>
      </div>
      <div>
        <div className="kohdekortti_lista">
          {responseData && responseData.length > 0 ? (
            responseData.map((matkakohde) => (
              <Kohdekortti
                img={matkakohde.img}
                kohde={matkakohde.kohde.toUpperCase()}
                maa={matkakohde.maa}
                kaupunki={matkakohde.kaupunki}
                tarinat={matkakohde.tarinat}
                id={matkakohde.id}
                key={matkakohde.id}
              ></Kohdekortti>
            ))
          ) : (
            <h1>Haulla ei löytynyt mitään</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default KohdeLista;

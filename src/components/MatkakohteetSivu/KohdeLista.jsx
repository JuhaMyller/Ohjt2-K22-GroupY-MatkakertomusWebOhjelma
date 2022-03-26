import React, { useState } from "react";
import styled from "styled-components";
import img from "./KorttiKuva.jpg";
import "./Kohdekortti.css";
import Kohdekortti from "./Kohdekortti";
import Input from "../ResuableComponents/Input";

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

  const filter = (e) => {
    const keyword = e.target.value;
    if (keyword !== "") {
      const results = mkohteet.filter((matkakohde) => {
        return matkakohde.kohde.toLowerCase.startsWith(keyword.toLowerCase());
      });
      setResponseData(results);
    } else {
      setResponseData(mkohteet);
    }
    setEtsi(keyword);
  };

  const getMatkakohteet = () => {};

  return (
    <>
      <div>
        <div className="input-container">
          <Input
            className="search"
            type={"search"}
            id="search"
            value={etsi}
            onChange={filter}
            placeholder="Search"
            styles={{
              height: "50px",
              width: "50%",
              marginLeft: "25%",
            }}
          />
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
    </>
  );
};

export default KohdeLista;

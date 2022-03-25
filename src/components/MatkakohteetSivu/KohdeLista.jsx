import React from "react";
import styled from "styled-components";
import img from "./KorttiKuva.jpg";
import "./Kohdekortti.css";
import Kohdekortti from "./Kohdekortti";

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

  return (
    <div>
      <section className="kohdekortti_lista">
        {mkohteet.map((matkakohde) => {
          return (
            <Kohdekortti
              img={matkakohde.img}
              kohde={matkakohde.kohde.toUpperCase()}
              maa={matkakohde.maa}
              kaupunki={matkakohde.kaupunki}
              tarinat={matkakohde.tarinat}
              id={matkakohde.id}
              key={matkakohde.id}
            ></Kohdekortti>
          );
        })}
      </section>
    </div>
  );
};

export default KohdeLista;

import React from "react";
import styled from "styled-components";
import Kohdekortti from "../components/MatkakohteetSivu/Kohdekortti";
import Input from "../components/ResuableComponents/Input";

const MatkakohteetSivu = () => {
  const mkohteet = [
    {
      img: "../components/MatkakohteetSivu/Kohdekortti/KorttiKuva.jpg",
      kohde: "ruka",
      maa: "suomi",
      kaupunki: "Kuopio",
      tarinat: 0,
      id: 0,
    },
    {
      img: "../components/MatkakohteetSivu/Kohdekortti/KorttiKuva.jpg",
      kohde: "levi",
      maa: "suomi",
      kaupunki: "Kuopio",
      tarinat: 10,
      id: 1,
    },
    {
      img: "../components/MatkakohteetSivu/Kohdekortti/KorttiKuva.jpg",
      kohde: "kuusamo",
      maa: "suomi",
      kaupunki: "Kuopio",
      tarinat: 7,
      id: 2,
    },
    {
      img: "../components/MatkakohteetSivu/Kohdekortti/KorttiKuva.jpg",
      kohde: "Tampere",
      maa: "suomi",
      kaupunki: "Kuopio",
      tarinat: 0,
      id: 3,
    },
    {
      img: "../components/MatkakohteetSivu/Kohdekortti/KorttiKuva.jpg",
      kohde: "ranta-aho",
      maa: "suomi",
      kaupunki: "Kuopio",
      tarinat: 1,
      id: 4,
    },
    {
      img: "../components/MatkakohteetSivu/Kohdekortti/KorttiKuva.jpg",
      kohde: "perkele",
      maa: "suomi",
      kaupunki: "Kuopio",
      tarinat: 0,
      id: 5,
    },
  ];

  return (
    <div>
      <section className="matkakohteet">
        <Input />
        {mkohteet.map((matkakohde) => {
          const maa =
            matkakohde.maa.slice(0, 1).toUpperCase() +
            matkakohde.maa.slice(1, matkakohde.maa.length);
          return (
            <Kohdekortti
              img={matkakohde.img}
              kohde={matkakohde.kohde.toUpperCase()}
              maa={maa}
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

export default MatkakohteetSivu;

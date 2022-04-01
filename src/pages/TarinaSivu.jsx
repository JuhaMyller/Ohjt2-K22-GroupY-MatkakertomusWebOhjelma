import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineRead } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import ImageContainer from "../components/ResuableComponents/ImageContainer";
import img from "./TarinaTestiKuva.png";

const TarinaSivu = () => {
  const [imgUrls, setImgUrls] = useState([]);

  const haeTarina = async () => {};
  useEffect(() => {}, []);

  return (
    <Wrapper>
      <div className="kuva-container">
        <ImageContainer imgUrls={imgUrls} />

        <img className="kayttajaKuva" src={img} alt="" />
        <h3 className="kayttaja">Juha Myller</h3>
        <div className="tiedot">
          <div className="lukenut">
            <AiOutlineRead className="lukenutIcon" />
            <h5>2</h5>
          </div>
          <div className="pvm">
            <MdDateRange className="paivaIcon" />
            <h5>01.04.2022</h5>
          </div>
        </div>
      </div>

      <div className="tarina-container">
        <h1 className="otsikko">Otsikko</h1>
        <p>
          lorem ipsum dolor lorem ipsum dolor sit amet, consectetur adip Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti
          omnis at a deleniti quae dolores labore explicabo consectetur
          blanditiis vero, quasi qui amet iure, voluptate ullam accusantium
          repellendus. Dolor? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Sit ducimus ratione eos mollitia velit vitae
          blanditiis saepe ipsam, nihil exercitationem perspiciatis natus id
          aspernatur? Nemo deserunt provident modi quas quod! Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Debitis id itaque praesentium,
          aliquid rerum impedit esse cumque reprehenderit libero laboriosam
          quibusdam deleniti ut vero nemo et repellendus sed non illum.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  max-width: 1440px;

  display: flex;
  flex-wrap: wrap;
  position: relative;
  top: 50px;
  left: 50px;

  .lukenutIcon {
    margin-right: 5px;
  }
  .paivaIcon {
    margin-right: 5px;
  }
  .kayttajaKuva {
    border-radius: 110px;
    display: flex;
    flex-wrap: wrap;
    width: 200px;
    position: relative;
    left: 100px;
    top: 10px;
  }
  .kayttaja {
    top: 10px;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    left: 144px;
  }
  .tiedot {
    top: 10px;
    left: 144px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
  }
  .pvm {
    display: flex;
    margin-left: 10px;
  }
  .lukenut {
    display: flex;
  }

  .kuva-container {
    width: 40%;
    min-width: 250px;
  }
  .tarina-container {
    width: 60%;
  }
  .otsikko {
    margin-bottom: 10px;
  }
  @media only screen and (max-width: 875px) {
    .kuva-container {
      width: 90%;
    }
    .tarina-container {
      width: 90%;
    }
  }
`;

export default TarinaSivu;

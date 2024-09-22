import React from "react";
import Navigation from "../components/Navigation";
import TrainingInfo from "../components/TrainingInfo";
import porscheImage from "../asset/img/etude.png";
import d1 from "../asset/img/d-1.png";
import fa from "../asset/img/fa.jpg";
import f from "../asset/img/f.jpg";
import Formulaire from "../components/Formulaire";

import "../style/Home.css";

const Home = () => {
  return (
    <div style={{ position: "relative" }}>
      <Navigation />
      <img
        src={porscheImage}
        alt="Porsche"
        style={{ width: "100%", height: "auto" }}
      />

      <div className="content-container">
        <div className="description">
          <h1>Des formations pour tous</h1>
          <p>
            Parce que votre avenir est important, notre équipe vous assure toute
            l’ingénierie pour réaliser votre projet.
            <br /> Qu’il s’agisse de la partie administrative et pédagogique,
            nous mettons tout en œuvre pour vous faciliter l’accès à la
            formation et ainsi atteindre votre objectif plus efficacement.
            <br /> Différents dispositifs s’offriront à vous en fonction de la
            stratégie qui sera menée par votre entreprise et l’objectif que vous
            ou votre hiérarchie souhaitez vous faire atteindre.
            <br />
            <em>
              « Nos formation pour tous communautés handicap prise en charge »
            </em>
            <p>Délais d'accés : Un Minimax entre 7 et 20 jours</p>
          </p>
          <p>RÉFÉRENT HANDICAP AGEFIPH : COHEN VICTOR 06.68.72.65.96</p>
          <p>Pour Tout Autre Renseignement 06.68.72.65.96 / 06.69.03.93.45</p>
        </div>
        <Formulaire />
      </div>
      <div className="NosCometance">
        <h1 className="title">Nos compétences</h1>
        <p className="txtTitle">
          Si vous cherchez à développer vos compétences à titre personnel ou
          professionnel pour évoluer dans votre secteur
          <br /> d’activité, notre équipe pédagogique est capable d’élaborer une
          stratégie pour mener à bien votre projet.
        </p>
        <div className="capacite">
          <div className="cube">Plusieurs années d’expérience</div>
          <div className="cube">Des stagiaires satisfaits</div>
          <div className="cube">Heures de formation</div>
          <div className="cube">Un suivi annuel</div>
          <div className="cube">Assistance technique</div>
          <div className="cube">Garantie de résultat</div>
        </div>
        <img src={d1} alt="Porsche" style={{ width: "100%", height: "auto" }} />
      </div>
      <div className="NosFormation">
        <h1 className="title">Nos Formation</h1>
        <div className="fa">
          <img
            src={fa}
            alt="Porsche"
            style={{ width: "600px", height: "365" }}
          />
          <div>
            <h1>FORMATION ANGLAIS</h1>
            <p>
              Grâce à son contenu en Anglais orienté métiers et en lien avec
              l’actualité, notre <br />
              formation offre aux apprenants une approche linguistique
              opérationnelle dans
              <br /> un contexte professionnel (réunions, présentations,
              négociations, etc.)
            </p>
          </div>
        </div>
        <div className="fa">
          <div>
            <h1>FORMATION ANGLAIS</h1>
            <p>
              Grâce à son contenu en Anglais orienté métiers et en lien avec
              l’actualité, notre <br />
              formation offre aux apprenants une approche linguistique
              opérationnelle dans
              <br /> un contexte professionnel (réunions, présentations,
              négociations, etc.)
            </p>
          </div>
          <img
            src={f}
            alt="Porsche"
            style={{ width: "600px", height: "365" }}
          />
        </div>
        <TrainingInfo />
      </div>
    </div>
  );
};

export default Home;

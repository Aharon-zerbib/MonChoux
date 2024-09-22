import React, { useState } from "react";
import "../style/TrainingInfo.css";

const TrainingInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="training-info">
      <button className="toggle-button" onClick={toggleContent}>
        {isOpen ? "Masquer le contenu" : "Afficher le contenu"}
      </button>

      {isOpen && (
        <div
          id="elementor-tab-content-2421"
          className="content"
          data-tab="1"
          role="tabpanel"
          aria-labelledby="elementor-tab-title-2421"
        >
          <h2>Formation à distance</h2>
          <p>
            UNIFORMAT 13 vous propose une offre de formations à distance,
            variées, associant aux approches classiques les avantages du
            multimédia pour un apprentissage encore plus efficace et accessible
            à tous.
          </p>
          <p>
            Rapide, sans contrainte de temps ni de lieu, l’utilisation de nos
            modules e-learning présente de nombreux avantages :
          </p>
          <ul>
            <li>
              L’accessibilité par un enseignement qui tient compte des
              contraintes individuelles de chaque apprenant.
            </li>
            <li>
              <span>
                La contextualisation pour vous permettre d’apprendre dans votre
                contexte immédiat. Elle maintient ainsi un contact direct,
                immédiat et permanent avec les différentes composantes de votre
                environnement, facilitant l’intégration des savoirs via un
                transfert immédiat des connaissances.
              </span>
            </li>
            <li>
              <span>
                La flexibilité dans l’organisation de votre formation qui vous
                permet de planifier vos activités tout en gardant la maîtrise de
                votre rythme d’apprentissage.
              </span>
            </li>
          </ul>
          <p>Les modules e-Learning vous assurent:</p>
          <ul>
            <li>Un soutien à la motivation.</li>
            <li>Une formation ludique et interactive.</li>
            <li>
              Des séquences d’apprentissage qui permettent de s’interrompre sans
              perdre le fil.
            </li>
            <li>Une plateforme disponible 24H/24H, 7J/7, illimitée.</li>
            <li>L’accès à des supports de cours en ligne.</li>
            <li>
              L’accès à des cours, en Visio, ou en présentiel avec une
              formatrice dédiée (en moyenne 6h par formation, mais pouvant être
              extensible en fonction des disponibilités de l’apprenant et du
              formateur).
            </li>
          </ul>
          <p>
            <b>Les avantages de notre plate-forme e-learning&nbsp;:</b>
          </p>
          <p>
            Elle offre des modalités de formation variées et une grande
            souplesse d’organisation.
          </p>
          <p>
            L’apprenant peut travailler à son rythme, accéder à l’information
            quand et d’où il le souhaite (depuis son poste de travail, son
            domicile ou son lieu de vacances, etc.)
          </p>
          <p>
            Destinée à un public de tous horizons, notamment aux personnes qui
            accèdent difficilement à la formation en présentiel : publics ayant
            des problématiques de mobilité géographique ou physique, en
            difficulté avec les apprentissages traditionnels, etc.
          </p>
          <p>
            L’utilisation de notre plate-forme dispense les stagiaires de toute
            installation logicielle sur leurs postes utilisateurs. L’ensemble
            des outils et formation ne nécessite qu’un navigateur internet. Par
            conséquent, les outils et les formations sont accessibles sans
            contrainte de lieu ni de temps.
            <span>
              La formation comporte des cours, des exercices pratiques, des
              questionnaires, et une aide intuitive accessible à partir du
              bureau virtuel et permet de trouver des outils.
            </span>
            <span>
              Des auto-évaluations, à la fois quantitative et qualitative, sont
              disponibles et servent à informer l’apprenant du degré de maîtrise
              atteint et à remédier aux lacunes.
            </span>
            <span>
              Une prise en charge régulière personnalisée des apprenants par un
              tuteur améliore leur niveau de connaissances et complète en
              continu les méthodes utilisées.
            </span>
            <span>
              Les moyens et supports mis à disposition des stagiaires.
            </span>
          </p>
          <p>
            <b>Moyens pédagogiques et encadrement</b>
          </p>
          <p>Nos formations vous assurent :</p>
          <ul>
            <li>
              Une interactivité riche et diversifiée, des activités pédagogiques
              et multimédia, variées et ludiques.
            </li>
            <li>
              Des mises en application permettant de s’entraîner et de mettre
              immédiatement en pratique les connaissances acquises.
            </li>
            <li>
              Des documents d’apprentissage à disposition, synthèse complète du
              module, documents de référence, des cours, des exercices
              pratiques, des questionnaires…
            </li>
            <li>
              Les programmes de formation présents sur le site internet servent
              de base, ils sont modifiables à souhaits et réadaptés aux besoins.
            </li>
          </ul>
          <p>
            <b>L’ENCADREMENT&nbsp;:</b>
          </p>
          <p>Nos formateurs sont sélectionnés selon:</p>
          <ul>
            <li>Leur expérience.</li>
            <li>Leurs qualifications.</li>
            <li>Leur pédagogie.</li>
            <li>Leur disponibilité.</li>
          </ul>
          <p>
            L’encadrement et le suivi sont assurés par un coordinateur
            pédagogique joignable en permanence aux horaires de bureau par mail
            à&nbsp;: contact.uniformat13@gmail.com
          </p>
          <p>
            <b>Notre plateforme de formation</b>
          </p>
          <p>
            Elle dispose de fonctions collaboratives qui vous permettront
            d’échanger avec votre tuteur ou entre apprenants&nbsp;:
          </p>
          <ul>
            <li>
              La messagerie&nbsp;vous permet d’écrire à un tuteur ou à un ou
              plusieurs apprenants.
            </li>
            <li>
              Le forum de discussion&nbsp;est un espace qui vous permet de
              discuter entre apprenants.
            </li>
            <li>
              L’annuaire&nbsp;permet de visualiser les coordonnées de tous les
              apprenants qui ont&nbsp; accepté de partager leur carte de visite.
            </li>
            <li>
              Les dossiers partagés&nbsp;permettent de partager des fichiers
              avec les autres apprenants en créant des dossiers en lecture ou
              lecture/écriture.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default TrainingInfo;

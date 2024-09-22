import React from "react";
import "../style/Formulaire.css";

const Formulaire = () => {
  return (
    <div className="contact-form">
      <h2>Inscription à une formation</h2>
      <form>
        <label htmlFor="nom">Nom</label>
        <input type="text" id="nom" name="nom" required />

        <label htmlFor="prenom">Prénom</label>
        <input type="text" id="prenom" name="prenom" required />

        <label htmlFor="telephone">Téléphone</label>
        <input type="tel" id="telephone" name="telephone" required />

        <label htmlFor="formation">Votre formation</label>
        <input type="text" id="formation" name="formation" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Formulaire;

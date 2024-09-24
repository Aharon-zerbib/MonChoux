import React from "react";
import "../style/Formulaire.css";
import Swal from "sweetalert2";

const Formulaire = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "eda7b037-8bf0-4fb7-a4bc-5efcec6f52dc");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
      });
    }
  };
  return (
    <section className="contact">
      <form onSubmit={onSubmit}>
        <h2>Contact form</h2>

        {/* Full name input */}
        <div className="input-box">
          <label>Full name</label>
          <input
            type="text"
            className="field"
            placeholder="Nom prénom"
            name="name"
            required
          />
        </div>

        {/* Email input */}
        <div className="input-box">
          <label>Email Address</label>
          <input
            type="email"
            className="field"
            placeholder="email"
            name="email"
            required
          />
        </div>

        {/* Phone number input */}
        <div className="input-box">
          <label>Phone Number</label>
          <input
            type="tel"
            className="field"
            placeholder="Votre numéro de téléphone"
            name="phone"
            required
          />
        </div>

        {/* Message input */}
        <div className="input-box">
          <label>Your message</label>
          <textarea
            name="message"
            className="field mess"
            placeholder="Entrez votre message"
            required
          ></textarea>
        </div>

        {/* Submit button */}
        <button type="submit">Send message</button>
      </form>
    </section>
  );
};

export default Formulaire;

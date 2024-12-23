import React, { useState } from "react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://example.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    }
  };

  return (
    <div
        className="contact-container"
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "2rem",
            marginTop: "150px",
        }}
        >
        <div className="ContactTextside">
            <h3>Contactame</h3>
            <p className="text-start fs-5 lh-lg">
            Puedes hacerlo a través de mis redes sociales, o a través del siguiente
            formulario de contacto. Responderé lo antes posible. Gracias
            </p>
        </div>
        <div className="FormSide">
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
                </label>
                <label>
                    Email:
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </label>
                <label>
                    Asunto:
                    <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    />
                </label>
                <label>
                    Mensaje:
                    <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    />
                </label>
                <button type="submit">Enviar</button>
            </form>
        </div>
    </div>
  );
};

export default ContactMe;
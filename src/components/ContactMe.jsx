import React, { useRef, useState } from "react";
import myLogo2 from '../assets/edscodesLogo.jpg';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

const ContactMe = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        'service_v5pozpq',
        'template_pe4n1zp',
        {
          user_name: formData.name,
          user_email: formData.email,
          user_subject: formData.subject,
          message: formData.message,
        },
        '5jXW4CsbGLMOOMVCi'
      )
      .then(
        () => {
          Swal.fire({
            title: 'Correo enviado exitosamente.',
            text: 'Me pondré en contacto contigo lo mas pronto posible.',
            icon: 'success',
          }),
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setIsSending(false);
        },
        (error) => {
          console.error("Error:", error);
          alert("Ocurrió un error, correo no enviado.");
          setIsSending(false);
        }
      );
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
        <img
          src={myLogo2}
          className="myLogo2 img-fluid rounded mx-auto d-block custom-img"
          alt="edsCodesLogo"
        />
      </div>
      <div className="FormSide">
        <form ref={form} onSubmit={sendEmail}>
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
          <button
            type="submit"
            disabled={isSending}
            style={{
              backgroundColor: isSending ? '#80C4E9' : '#fc8f54',
              color: 'white',
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '4px',
              cursor: isSending ? 'not-allowed' : 'pointer',
            }}
          >
            {isSending ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
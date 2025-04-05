import React, { useState } from "react";
import myLogo2 from '../assets/edscodesLogo.jpg';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

const ContactMe = () => {
  const { t } = useTranslation('ContactMe'); 
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
            title: t('SuccessTitle'),
            text: t('SuccessMessage'),
            icon: 'success',
          });
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
          Swal.fire({
            title: t('ErrorTitle'),
            text: t('ErrorMessage'),
            icon: 'error',
          });
          setIsSending(false);
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="ContactTextside">
        <h3>{t('ContactMe')}</h3>
        <p className="text-start fs-5 lh-lg">{t('ContactMeText')}</p>
        <img
          src={myLogo2}
          className="myLogo2 img-fluid rounded mx-auto d-block custom-img"
          alt="edsCodesLogo"
        />
      </div>
      <div className="FormSide">
        <form onSubmit={sendEmail}>
          <label htmlFor="name">{t('Name')}</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">{t('Email')}</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="subject">{t('Subject')}</label>
          <input
            id="subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">{t('Message')}</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            disabled={isSending}
            className={`submit-btn ${isSending ? 'disabled' : ''}`}
          >
            {isSending ? t('Sending') : t('Send')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
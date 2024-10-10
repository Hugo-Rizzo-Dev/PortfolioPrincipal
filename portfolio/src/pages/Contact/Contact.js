import React from 'react';
import "../../style/App.css";
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import Navbar from "../../components/navbar/navbar.js";
import Footer from "../../components/footer/footer.js";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const templateParams = {
      name: data.name,
      reply_to: data.email,
      subject: data.subject,
      message: data.message,
      birthdate: data.birthdate,
    };

    emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, 
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
        templateParams, 
        process.env.REACT_APP_EMAILJS_USER_ID
      )      
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Mensagem enviada com sucesso!');
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Falha ao enviar a mensagem. Tente novamente.');
      });
  };

  return (
<main className='contactForm'>  
  <Navbar />

<div className="contact-container">
      <h2>Entre em Contato</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            type="text"
            {...register('name', { required: true })}
          />
          {errors.name && <span>Este campo é obrigatório</span>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register('email', { required: true })}
          />
          {errors.email && <span>Este campo é obrigatório</span>}
        </div>

        <div>
          <label htmlFor="subject">Assunto</label>
          <input
            id="subject"
            type="text"
            {...register('subject', { required: true })}
          />
          {errors.subject && <span>Este campo é obrigatório</span>}
        </div>

        <div>
          <label htmlFor="birthdate">Data de Nascimento</label>
          <input
            id="birthdate"
            type="date"
            {...register('birthdate', { required: true })}
          />
          {errors.birthdate && <span>Este campo é obrigatório</span>}
        </div>

        <div>
          <label htmlFor="message">Mensagem</label>
          <textarea
            id="message"
            {...register('message', { required: true })}
          />
          {errors.message && <span>Este campo é obrigatório</span>}
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
    <Footer/>
    </main>
  );
};

export default Contact;

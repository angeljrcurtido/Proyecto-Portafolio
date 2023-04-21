import { useState } from 'react';
import emailjs from 'emailjs-com';
import './style.css'

function Email() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  function handleSubmit(evento) {
    evento.preventDefault(); // Prevenimos el comportamiento por defecto del formulario

    // Configuramos la información necesaria para enviar el correo con emailjs
    const serviceID = 'service_zqr88u4'; // Reemplaza con tu servicio ID
    const plantillaID = 'template_ftzgwkm'; // Reemplaza con tu plantilla ID
    const publicKey = 'NFCEPlXLzUnhr14zo'; // Reemplaza con tu user ID

    // Enviamos los datos del formulario usando emailjs
    emailjs.send(serviceID, plantillaID, { to_name: nombre, from_name: email, message: mensaje }, publicKey)
      .then(() => alert('El correo ha sido enviado correctamente.'))
      .catch(error => console.log('Hubo un error al enviar el correo:', error));

    // Limpiamos los campos del formulario
    setNombre('');
    setEmail('');
    setMensaje('');
  }
  return (
   <form className='formularioemail' onSubmit={handleSubmit}>

      <div className='emails'>
        <div className='misservicios'>
          <h2>Correo</h2>
        </div>
        <label className="form-label" htmlFor="nombre">Nombre:</label>
        <input className='form-control' type="text" id="nombre" value={nombre} onChange={evento => setNombre(evento.target.value)} />

        <label className="form-label" htmlFor="email">Email:</label>
        <input className='form-control' type="email" id="email" value={email} onChange={evento => setEmail(evento.target.value)} />

        <label className="form-label" htmlFor="mensaje">Mensaje:</label>
        <textarea className='form-control' id="mensaje" value={mensaje} onChange={evento => setMensaje(evento.target.value)}></textarea>

        <button className='btn btn-success mt-1' type="submit">Enviar</button>
      </div>
      <div className='misservicios'>
        <h2>Redes Sociales</h2>
        <div id="social" className="aside-box">
          <div className="twitter">
            <a href="https://github.com/angeljrcurtido" class="icon">Q</a>
            <p className="overlay">
              Github
            </p>
          </div>
          <div class="facebook">
            <a href="https://www.facebook.com/junior.curtido"  class="icon">f</a>
            <p className="overlay">
              Facebook
            </p>
          </div>
          <div className="youtube">
            <a href="https://www.linkedin.com/in/%E2%99%BE%EF%B8%8F-angel-junior-curtido-qui%C3%B1onez%E2%99%BE%EF%B8%8F-7a410323b" class="icon">l</a>
            <p className="overlay">
              Linkedin
            </p>
          </div>
        </div>
      </div>

    </form>

  );
}

export default Email;

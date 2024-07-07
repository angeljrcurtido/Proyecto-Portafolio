import React from 'react';
import { Document } from 'react-pdf/dist/esm/entry.webpack';
import './style.css';
import mongodblogo from '../imagenes/mongodblogo.png';
import expresslogo from '../imagenes/expresslogo2.png';
import logoreact from '../imagenes/logoreact.png';
import logonode from '../imagenes/logonodejs.png';
import logohtml from '../imagenes/logohtml.png';
import sistemventa from '../imagenes/SISTEMAVENTAS.PNG';
import logocss from '../imagenes/logocss.png';
import logoboost from '../imagenes/logobootstratp.png';
import rickandmorty from '../imagenes/RICKANDMORTY.PNG';
import bibliosistem from '../imagenes/SISTEMABIBLIOTECA.PNG';
import frontend from '../imagenes/FRONTENDWEB.PNG';
import pelismedia from '../imagenes/PELISMEDIA.PNG'
import Email from './email';
import firefox from '../imagenes/firefox-icon.png';
import opera from '../imagenes/Opera_256x256.png';
import safari from '../imagenes/safari.png';
import chrome from '../imagenes/chrome.png';
import android from '../imagenes/android.png';
import ios from '../imagenes/ios.png';
import html5 from '../imagenes/logotiposfull.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Portafolio() {


    document.addEventListener('DOMContentLoaded', function () {
        const circlesContainer = document.querySelector('.logo-container');
        let position = 0;

        function animateCircles() {
            position -= 70; // Ajusta esta medida según el tamaño de tus círculos y margen
            if (position < -(circlesContainer.clientWidth)) {
                position = 0;
            }
            circlesContainer.style.transform = `translateX(${position}px)`;
        }

        setInterval(animateCircles, 2000); // Ajusta el intervalo según la velocidad que quieras
    });

    return (

           <div className='body' >
            {/*INICIO CABECERA*/}
            <header id="header">
                <div className="wrap">
                    <div id="logo">
                        <span className="gear">S</span>
                        <h3>PORTAFOLIO</h3>
                    </div>
                    <nav id="menu">
                        <ul>
                            <li><a href="#inicio">INICIO</a></li>
                            <li><a href="#proyectos2">PROYECTOS</a></li>
                            <li><a href="#contactos">CONTACTO</a></li>
                        </ul>
                    </nav>
                </div>

            </header>
            {/*FIN CABECERA*/}
            {/*INICIO BANNER*/}
            <div className='banner' id='inicio'>
                <h1>PORTAFOLIO WEB ANGEL JR CURTIDO</h1>
            </div>
            {/*FIN BANNER*/}
            {/*DESCRIPCION*/}
            <p>¡Saludos! Soy un estudiante que se encuentra realizando la Tesis
                de la carrera de Licenciatura de Analisis de Sistemas; Durante estos dos años, he estado aprendiendo
                En cuanto al desarrollo web, he estado aprendiendo acerca de tecnologías
                importantes como Mongoose, Express, y Node.js en conjunto con React.js.
                De esta manera, estoy preparado para trabajar en proyectos web complejos
                y colaborar con otros desarrolladores para crear soluciones innovadoras.
                Además, he llevado a cabo proyecto tanto
                en solitario como en conjunto con equipos.</p>
            <Document file={require('../cv/mi_cv.pdf')} />
            <div className='botondescarga'>
                <a href={require('../cv/mi_cv.pdf')} download>Descargar mi CV</a>
            </div>

            {/*FIN DESCRIPCION*/}
            {/*INICIO DE STACKS-SERVICIOS*/}
            <div className='misservicios'>
                <h2>Mis Servicios</h2>
            </div>
            {/*FIN DE STACKS-SERVICIOS*/}
            <div className="subcaja2">

                <div className="card">
                    <p className='icon'>_</p>
                    <h2 className="category"><strong>Website manageable</strong></h2>
                    <p className="description">Poseo un conocimiento profundo en el flujo
                        de trabajo que abarca desde el backend hasta el frontend en el
                        desarrollo de aplicaciones </p>
                </div>
                <div className="card"> {/*Aqui se inserta la clase*/}
                    <p className="icon">H</p>{/*Aqui el icono*/}
                    <h2 className="category">Desarrollo Web</h2>{/*Titulo del card*/}
                    <p className="description">{/*Aqui la descripcion del card*/}
                        Creo completamente una estructura para el desarrollo del prototipo, me adapto a los problemas y nuevos retos con tal de llevar tus diseños a código
                    </p>
                </div>
                <div className="card"> {/*Aqui se inserta la clase*/}
                    <p className="icon">a</p>{/*Aqui el icono*/}
                    <h2 className="category">Base de datos</h2>{/*Titulo del card*/}
                    <p className="description">{/*Aqui la descripcion del card*/}
                        Amplios conocimientos en manejo de Bases de datos experiencia en MongoDB y Sql
                    </p>
                </div>
                <div className="card"> {/*Aqui se inserta la clase*/}
                    <p className="icon">.</p>{/*Aqui el icono*/}
                    <h2 className="category">Front-End</h2>{/*Titulo del card*/}
                    <p className="description">{/*Aqui la descripcion del card*/}
                        Desarrollo de diseños enfocados en lo requerimientos proporcionados
                    </p>
                </div>
                <div className="card"> {/*Aqui se inserta la clase*/}
                    <p className="icon">p</p>{/*Aqui el icono*/}
                    <h2 className="category">Back-End</h2>{/*Titulo del card*/}
                    <p className="description">{/*Aqui la descripcion del card*/}
                        Implementación de backend a los diseños front-end proporcionados
                    </p>
                </div>
            </div>

            <div className="skills">

                <div className='misservicios'>
                    <h2>Mis Skills</h2>
                </div>

                <div>
                    <Slider
                        infinite={true}
                        speed={500}
                        autoplay={true}
                        autoplaySpeed={3000}
                        slidesToShow={6}
                        slidesToScroll={1}>
                        <div className='skill-logo'>
                            <div className='logo-circle' >
                                <img src={mongodblogo} alt="Logo de Mongodb" />
                            </div>
                            <p>MongoDB</p>
                        </div>
                        <div className='skill-logo'>
                            <div className='logo-circle' >
                                <img src={expresslogo} alt="Logo de Express js" />
                            </div>
                            <p>Express Js</p>
                        </div>
                        <div className='skill-logo'>
                            <div className='logo-circle'>
                                <img src={logoreact} alt="Logo de React js" />
                            </div>
                            <p>React Js</p>
                        </div>
                        <div className='skill-logo' >
                            <div className='logo-circle'>
                                <img src={logonode} alt="Logo de Node js" />
                            </div>
                            <p>Node Js</p>
                        </div>
                        <div className='skill-logo'>
                            <div className='logo-circle'>
                                <img src={logohtml} alt="Logo de Html" />
                            </div>
                            <p>Html</p>
                        </div>
                        <div className='skill-logo'>
                            <div className='logo-circle'>
                                <img src={logocss} alt="Logo de Css" />
                            </div>
                            <p>Css3</p>
                        </div>
                        <div className='skill-logo'>
                            <div className='logo-circle'>
                                <img src={logoboost} alt="Logo de Bootstratp" />
                            </div>
                            <p>Boostratp</p>
                        </div>
                    </Slider>
                </div>

            </div>

            <div className='Proyectos' id='proyectos2'>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={rickandmorty} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">APIRest RickandMorty</h5>
                        <p className="card-title">React Js, APIRest, Boostratp,FlexBox</p>
                        <a href="https://incandescent-entremet-8c4174.netlify.app"  style={{ marginTop: "5%" }} className="btn btn-primary">Demo</a>
                        <a href="https://github.com/angeljrcurtido/Rickandmorty"  style={{ marginLeft: "5%", marginTop: "5%" }} className="btn btn-primary">Code</a>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={frontend} className="card-img-top" style={{ width: "286px", height: "145.72px" }} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">FrontEnd Proyect</h5>
                        <p className="card-title">CSS, Flexbox, Boostratp, Sass, Js</p>
                        <a href="https://stellar-hotteok-29adaf.netlify.app"  style={{ marginTop: "5%" }} className="btn btn-primary">Demo</a>
                        <a href="https://github.com/angeljrcurtido/Maquetacion-FrontEnd"  style={{ marginLeft: "5%", marginTop: "5%" }} className="btn btn-primary">Code</a>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={pelismedia} className="card-img-top" style={{ width: "286px", height: "145.72px" }} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Pelis Media</h5>
                        <p className="card-title">React Js, Node Js, Mongoose, Boostratp, JavaScript, </p>
                        <a href="http://44.210.111.255/registro"  style={{ marginTop: "5%" }} className="btn btn-primary">Demo</a>
                        <a href="https://github.com/angeljrcurtido/Proyecto-pelis-media.git" style={{ marginLeft: "5%", marginTop: "5%" }} className="btn btn-primary">Code</a>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={bibliosistem} className="card-img-top" style={{ width: "286px", height: "145.72px" }} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Gestion de Biblioteca</h5>
                        <p className="card-title" style={{ fontSize: "12px" }}>React Js, Node Js, Mongoose, Boostratp, JavaScript, Credenciales Email: sistemapro@gmail.com | Password: 123456789</p>
                        <a href="https://chimerical-lolly-73d9b9.netlify.app/inicio"  style={{ marginTop: "5%" }} className="btn btn-primary">Demo</a>
                        <a href="https://github.com/angeljrcurtido/Bibliotecaclienteprueba.git" style={{ marginLeft: "5%", marginTop: "5%" }} className="btn btn-primary">Code</a>
                    </div>
                </div>
                 <div className="card" style={{ width: "18rem" }}>
                    <img src={sistemventa} className="card-img-top" style={{ width: "286px", height: "145.72px" }} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Sistema de Ventas</h5>
                        <p className="card-title" style={{ fontSize: "12px" }}>React Js, Node Js, Mongoose, Boostratp, JavaScript, Credenciales User: Admin | Password: 12345678</p>
                        <a href="https://656f82bbbfa59233e1429b5e--inquisitive-parfait-6c2d3e.netlify.app/login"  style={{ marginTop: "5%" }} className="btn btn-primary">Demo</a>
                        <a href="https://github.com/angeljrcurtido/Sistema-de-Ventas.git" style={{ marginLeft: "5%", marginTop: "5%" }} className="btn btn-primary">Code</a>
                    </div>
                </div>
                 <div className="card" style={{ width: "18rem" }}>
                    <img src={sistemventa} className="card-img-top" style={{ width: "286px", height: "145.72px" }} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Sistema de Ventas V2 Ejecutable</h5>
                        <p className="card-title" style={{ fontSize: "12px" }}>React Js, Node Js, Mongoose, Boostratp, JavaScript, Credenciales User: Admin | Password: 12345678</p>
                        <a href="https://656f82bbbfa59233e1429b5e--inquisitive-parfait-6c2d3e.netlify.app/login"  style={{ marginTop: "5%" }} className="btn btn-primary">Demo</a>
                        <a href="https://github.com/angeljrcurtido/Sistema-de-Ventas.git" style={{ marginLeft: "5%", marginTop: "5%" }} className="btn btn-primary">Code</a>
                    </div>
                </div>
            </div>
            <div className='contactos'>
                <div className='misservicios' id='contactos'>
                    <h2>Contacto</h2>
                </div>
                <Email />
            </div>
            {/*INICIO DE PIE DE PAGINA */}
            <div className="clearfix"></div>
            <footer id="footer">
                <div className="wrap2">
                    <div id="menu_footer">
                        <h5>MENÚ</h5>
                        <ul>
                            <li><a href="#inicio">INICIO</a></li>
                            <li><a href="#proyectos2">PROYECTOS</a></li>          
                            <li><a href="#contactos">CONTACTO</a></li>
                        </ul>
                    </div>
                    <div id="info">
                        <h5>Desarrollado con </h5>
                        <p>
                            <img src={html5}
                                alt="Creado con Html y CSS" />
                        </p>
                        <h5>Optimizado para </h5>
                        <p id="browsers">
                            <a href="#inicio">
                                <img src={firefox} alt="Firefox" title="Firefox" />
                            </a>
                            <a href="#inicio">
                                <img src={chrome} alt="Chrome" title="Chrome" />
                            </a>
                            <a href="#inicio">
                                <img src={opera} alt="Opera" title="Opera" />
                            </a>
                            <a href="#inicio">
                                <img src={safari} alt="Safari" title="Safari" />
                            </a>
                            <a href="#inicio">
                                <img src={android} alt="Android" title="Android" />
                            </a>
                            <a href='#inicio'>
                                <img src={ios} alt="Apple" title="Apple" />
                            </a>

                        </p>
                        <h5>AUTOR </h5>
                        <p>&copy; ANGEL CURTIDO WEB - Angel Junior Curtido</p>
                    </div>
                </div>
            </footer>
            {/*FIN DE PIE DE PAGINA */}
        </div>
    );

}

export default Portafolio;


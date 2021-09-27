
import Header from '../components/header/Header';
import Contact from '../components/contacto/Contact';
import About from '../components/about/About';
import Formacion from '../components/formacion/Formacion';
import header from './fondo 1.png';
import footer from './fondo 2.png';
import { Link } from "react-router-dom";
import  './Portafolio.css';

function Portafolio(){
    return(
        <div >
            <header>
                <img className="header-img" src={header} alt="" />
            </header>
            <div className="contenedor"> 
            <><Header></Header>
            <About></About>
            <Contact></Contact>
            <Formacion></Formacion>
            </>
            </div>
            <div className="portafolio">
            <a className="bottom2"><Link to="/">Volver</Link></a>
            </div>
            <div>
                <footer>
                    <img className="footer" src={footer} alt="" />
                </footer>
            </div>
        </div>
    );
}

export default Portafolio;
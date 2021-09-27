import './Formacion1.css';
import { Link } from "react-router-dom";
import header from '../../pages/fondo 1.png';
import footer from '../../pages/fondo 2.png';
function Formacion1(){
    return(
        <div className="">
            <header>
            <img className="header-img" src={header} alt="" />
            </header>
        <div className="formacion1">
            <div className="formacion">
            <h3 className="title">Formación académica</h3>
                <p>
                Fecha de terminación: 2711/2020 <br/>
                Institución formadora: Colegio Claretiano de Bosa <br/>
                Titulación: Bachiller<br/><br/>

                Fecha de terminación: 30/11/2020<br/>
                Institución formadora: SENA<br/>
                Titulación: Técnica en programación de software <br/><br/>
               
                Fecha de terminación: En proceso<br/>
                Institución formadora: SENA<br/>
                Titulación: Tecnóloga en Análisis y Desarrollo de Sistemas de Información – ADSI <br/>
                </p>
            </div>
            <div className="formacion">
            <h3 className="title">Otras</h3>
                <p>
                Fecha de terminación: 04/07/2020<br/>
                Institución formadora: Google actívate<br/>
                Titulación: Curso de Desarrollo de Apps Móviles <br/><br/>
                
                Fecha de terminación: 04/12/2020<br/>
                Institución formadora: Servicio Nacional de Aprendizaje -SENA<br/>
                Titulación: Curso de ENGLISH DOT WORKS 1 (INGLES)<br/><br/>
                
                Fecha de terminación: En proceso<br/>
                Institución formadora: YouTube<br/>
                Titulación: Curso de Laravel<br/>
                </p>
                </div>
        </div>
        <a className="bottom2"><Link to="/portafolio">Volver</Link></a>
       <footer>
            <img className="footer" src={footer} alt="" />
        </footer>
        </div>
         
    );
}

export default Formacion1;
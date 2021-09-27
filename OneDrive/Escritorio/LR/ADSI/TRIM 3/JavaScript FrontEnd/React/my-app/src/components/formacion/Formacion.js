import './Formacion.css';
import { Link } from "react-router-dom";

function Formacion(){
    return(
        <div className="Formacion">
            <div className="formacion">
            <h3 className="title">Formación académica</h3>
                <p>
                Fecha de terminación: 2711/2020 <br/>
                Institución formadora: Colegio Claretiano de Bosa <br/>
                Titulación: Bachiller<br/>

                Fecha de terminación: 30/11/2020<br/>
                Institución formadora: SENA<br/>
                Titulación: Técnica en programación de software <br/>
               
                Fecha de terminación: En proceso<br/>
                Institución formadora: SENA<br/>
                Titulación: Tecnóloga en Análisis y Desarrollo de Sistemas de Información – ADSI <br/>

                </p>
                <a className="bottom1"><Link to="/formacion">Ver más</Link></a>
            </div>

        </div>
    );
}

export default Formacion;
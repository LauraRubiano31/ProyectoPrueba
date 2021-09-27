import './About.css';
import { Link } from "react-router-dom";

function About(){
    return(
        <div className="about">
            <div className="about-me">
                <h3 className="title">Quién soy</h3>
                <p>
                    Soy una estudiante de análisis y desarrollo de sistemas de 
                    información, que busca aprender y ampliar sus conocimientos, 
                    disfrutar mientras lo hace y que ama la música, el arte y la tecnología.
                </p>
                <a className="bottom1"><Link to="/about">Ver más</Link></a>
            </div>
            <div className="experiencia">
            <h3 className="title">Experiencia laboral</h3>
                <p>
                Fecha: En proceso
                Empresa: Maderas Millán 
                Cargo/Actividad desarrollada: Asistente, vendedora. <br/>	
                <br/>
                Fecha: En proceso
                Empresa: Mini fruver
                Cargo/Actividad desarrollada: Asistente, vendedora. 

                </p>
            </div>
        </div>
    );
}

export default About;
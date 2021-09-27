import './about1.css';
import header from '../../pages/fondo 1.png';
import footer from '../../pages/fondo 2.png';
import music from './music.jpg';
import book from './book.jpg';
import dog from './dog.jpg';
import movie from './movie.jpg';
import { Link } from "react-router-dom";

function about1(){
    return(
        <div className="">
            <header>
            <img className="header-img" src={header} alt="" />
            </header>
        <div className="about1">
            <div className="about-me">
            <h3 className="title">Quién soy</h3>
                <p>
                    Soy una estudiante de análisis y desarrollo de sistemas de 
                    información, que busca aprender y ampliar sus conocimientos, 
                    disfrutar mientras lo hace y que ama la música, los animales, el arte y la tecnología.
                </p>
            </div>
            <div className="about-me">
            <h3 className="title">Hobbies</h3>
                <ul>
                    <li>Escuchar música</li>
                    <li>Leer</li>
                    <li>Ver anime, series, peliculas</li>
                    <li>Manejar bicicleta</li>
                    <li>Bailar</li>
                </ul>
            </div>
            <div className="about-me">
            <h3 className="title">Como soy</h3>
                <p>Generalmente soy una persona alegre, paciente, amable,que le gusta ayudar a las personas, 
                pero como todo también tengo defectos, entre ellos que tengo miedos, no suelo ser tan paciente
                y aveces un poco malgeniada.
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

export default about1;
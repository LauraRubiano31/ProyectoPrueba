import { Link } from "react-router-dom";
import './Home.css';
import footer from './fondo 2.png';
import header from './fondo 1.png';
import shrek from './shrek.jpg';

function Home(){
    return (
        <div>
       <header>
            <img className="header-img" src={header} alt="" />
            </header>
        <div className="home">
            <div>
                <img className="gif-home" src={shrek} alt="" />
            </div>
            <h1 className="title-prin">Laura Camila Rubiano Torres</h1>
            <a className="bottom"><Link to="/portafolio">Portafolio</Link></a>
        </div>
        
                <footer>
                    <img className="footer" src={footer} alt="" />
                </footer>
            
        </div>
    );
}

export default Home;
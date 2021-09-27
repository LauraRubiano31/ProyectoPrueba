import './Header.css';
import foto from './foto1.jpg';
import gif from './gato.gif';

function Header(){
    return(
        <header>
        <div className="header">
            <div >
                <img className="header-foto" src={foto} alt="" />
            </div>
            <div className="header-me">
                <h2 className="header-name">Laura Camila Rubiano Torres</h2>
                <span>Desarrolladora web</span>
                
            </div>
            <div className="gato">
                <img className="gif" src={gif} alt=""/>
            </div>
        </div>
              
        </header>

    );
}

export default Header;
import './Error404.css';
import error from './error.jpg';
import { Link } from "react-router-dom";

function Error404(){
    return(
        <div>
        <div className="Error">
            <img className="error-img" src={error} alt=""/>
          <h1 className="error">Error 404<br/>
          <strong className="strong">Página no encontrada</strong>
         
          </h1>
          <h1 className="page">Upss...</h1>
        </div>
         <a className="bottom2"><Link to="/">Volver</Link></a>
        </div>
    );
}

export default Error404;
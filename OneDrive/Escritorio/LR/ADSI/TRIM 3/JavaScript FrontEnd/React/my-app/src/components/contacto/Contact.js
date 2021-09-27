import './Contact.css';
 

function Contact(){
    return(
        
       <div className="contacto">
           <h3 className="titulo">Contacto </h3>
           <ul className="contacto__info">
            <li>Ciudad: Bogotá D.C</li>
            <li>Email: lcrubiano0@misena.edu.co</li>
            <li>Número de teléfono: 812 1117</li>
            <li>Número de celular: 3013835286</li>
            <li>LinkedIn: Laura Rubiano</li>
           </ul>
           <h3 className="titulo">Referencias</h3>
           <ul className="contacto__info">
            <li>Alicia Rubiano</li>
            <li>Cargo:Analista de software</li>
            <li>Email: aliciar30@gmail.com</li>
            <li>Número de teléfono: 812 1117</li>
            <li>Número de celular: 3201556232</li>
            <li>LinkedIn: Alicia Rubiano</li>
           </ul>
       </div>

    );
}

export default Contact;
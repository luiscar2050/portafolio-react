import './AboutMe.css'
import img from "../../img/perfil-sinfondo.webp"

export const InterpersonalSkills = () => {
    return(
        <div className="card">
        <div className="card-content2">
            <h1>Luis Carlos</h1>
            <h1>Salazar Cortes</h1>
            <button>Desarrolador De Software</button>    
        </div>
        
        <img src={img} alt=""/>
    <div className="card-content">
        <p>Soy un desarrollador de software capaz de trabajar en todas las etapas del ciclo de vida del software y colaborar eficazmente en equipos multidisciplinarios. Comprometido con el aprendizaje continuo y la entrega de soluciones de alta calidad</p>
    </div>  
    
    </div>
    )

}
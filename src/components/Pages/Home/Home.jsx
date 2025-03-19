import Img from '../../img/IMG-20240422-WA0001.jpg'
import './Home.css'


export const Home = () => {
    return(
        <div className="Home">
            <div className="title">
            <img src={Img} alt="" className="Img"/>
                <h2>Luis Carlos Salazar Cortes</h2>
                <p>
                Desarrollador FullStack & UI/UX Designer
                </p>
            <button>Saber Mas</button>
            
            </div>       
        </div>
    )
}
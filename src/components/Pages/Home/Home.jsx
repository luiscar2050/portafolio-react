import BlurText from '../../../TextAnimations/BlurText/BlurText';
import Img from '../../img/IMG-20240422-WA0001.jpg'
import "./Home.css";


export const Home = () => {
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
      };
    return(
        <div className="Home">
            <div className="title">
            <img src={Img} alt="" className="Img"/>
            <h2>
  <BlurText
    text="Luis Carlos Salazar Cortes"
    delay={150}
    animateBy="words"
    direction="top"
    onAnimationComplete={handleAnimationComplete}
    className="text-2xl mb-8 flex-text" /* Add flex-text class */
  />
</h2>
                <p>
                Desarrollador FullStack & UI/UX Designer
                </p>
            <button>Saber Mas</button>
            
            </div>       
        </div>
    )
}
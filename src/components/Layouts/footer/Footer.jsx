import './Footer.css'
import linkedin from '../../../components/icon/linkedin.png'
import github from '../../../components/icon/github.png'
import whatsapp from '../../../components/icon/social.png'


export const Footer = () => {
    return(
        <>
            <footer className="footer">
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/tu-usuario-linkedin" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn" className="social-icon" />
                    </a>
                    <a href="https://github.com/tu-usuario-github">
                        <img src={github} alt="Github" className="social-icon" />
                    </a>
                    <a href="https://wa.me/tu-numero-whatsapp" target="_blank" rel="noopener noreferrer">
                        <img src={whatsapp} alt="WhatsApp" className="social-icon"/>
                    </a>
                </div>
            </footer>
        </>
    )
}
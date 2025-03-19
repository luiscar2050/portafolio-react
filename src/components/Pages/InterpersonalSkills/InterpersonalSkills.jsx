import './AboutMe.css'
import Im from '../../img/IMG-20240422-WA0001.jpg'

export const InterpersonalSkills = () => {
    return(
        <div>
            <div>
            <box-icon name='chevron-left' color='#f2e9dd' size="80px"></box-icon>
                    <h2>Luis Carlos Salazar Cortes</h2> 
                    <box-icon name='chevron-right' color='#f2e9dd' size="80px"></box-icon>
            </div>
        <div>
                <img src={Im} alt="" className="Im" />
            <div>
                <h3>

                </h3>
            </div>
        </div>
    
        <div>
            <box-icon name='chevron-left' color='#f2e9dd' size="80px"></box-icon>
            <h2>/</h2>
            <box-icon name='chevron-right' color='#f2e9dd' size="80px"></box-icon>
        </div>
    
    </div>
    )

}
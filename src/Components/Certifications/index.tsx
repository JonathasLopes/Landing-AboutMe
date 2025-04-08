import { CertificationsList } from '../../Utils/CertificationsList';
import './styles.css';

interface ICertificationsProps {
    t: (text: string) => any
}

const Certifications = ({ t }: ICertificationsProps) => {
    return (
        <div id="certifications" className='certi-container'>
            <h2>{t("certifications")}</h2>
            <div className='cards-container'>
                {CertificationsList.map((certification, index) => {
                    return (
                        <div key={index} className='card card-certi'>
                            <div className='card-img img-certification'>
                                <img src={certification.logo} alt="img-certification" />
                            </div>
                            <div className='card-infos'>
                                <span className='card-title'>{certification.title}</span>
                                <span className='card-place'>{certification.place}</span>
                                <span className='year-card'>{t("completedIn")} {certification.year}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Certifications;
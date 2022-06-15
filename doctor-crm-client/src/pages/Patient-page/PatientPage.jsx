import style from './patient-page.module.css'
import PatientInfo from './PatientInfo'
import IndicationForm from './IndicationForm'
import Diagram from './Diagram'

function PatientPage(props) {
    return (
        <>
            <div className={style.patient_page_head}>
                <div className={style.mr_left_info}>
                    <PatientInfo />
                </div>
                <div className={style.patient_info_righth}>
                    <Diagram />
                    <div className={style.mr}>
                        <IndicationForm />
                    </div>
                </div>
            </div>
        </>
    )
}
export default PatientPage

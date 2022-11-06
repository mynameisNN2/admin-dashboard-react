import './widgetsmall.css';
import { Visibility } from '@mui/icons-material';




export default function WidgetSmall() {
    return (
        <div className='widgetsm'>
            <span className="widgetsmTitle">New Join Members</span>
            <ul className="widgetsmlist">

                <li className="widgetsmlistItem">
                    <img src="assets/myself.jpg" alt="" className="widgetsmImg" />
                    <div className="widgetsmUser">
                        <span className="widgetsmUsername">Nima Noorali</span>
                        <span className="widgetsmUserTitle">Web Developer</span>
                    </div>
                    <button className="widgetsmbtn">
                        <Visibility className='widgetsmIcon' />
                        Display
                    </button>
                </li>

                <li className="widgetsmlistItem">
                    <img src="assets/myself.jpg" alt="" className="widgetsmImg" />
                    <div className="widgetsmUser">
                        <span className="widgetsmUsername">Nima Noorali</span>
                        <span className="widgetsmUserTitle">Web Developer</span>
                    </div>
                    <button className="widgetsmbtn">
                        <Visibility className='widgetsmIcon' />
                        Display
                    </button>
                </li>

                <li className="widgetsmlistItem">
                    <img src="assets/myself.jpg" alt="" className="widgetsmImg" />
                    <div className="widgetsmUser">
                        <span className="widgetsmUsername">Nima Noorali</span>
                        <span className="widgetsmUserTitle">Web Developer</span>
                    </div>
                    <button className="widgetsmbtn">
                        <Visibility className='widgetsmIcon' />
                        Display
                    </button>
                </li>

                <li className="widgetsmlistItem">
                    <img src="assets/myself.jpg" alt="" className="widgetsmImg" />
                    <div className="widgetsmUser">
                        <span className="widgetsmUsername">Nima Noorali</span>
                        <span className="widgetsmUserTitle">Web Developer</span>
                    </div>
                    <button className="widgetsmbtn">
                        <Visibility className='widgetsmIcon' />
                        Display
                    </button>
                </li>

                <li className="widgetsmlistItem">
                    <img src="assets/myself.jpg" alt="" className="widgetsmImg" />
                    <div className="widgetsmUser">
                        <span className="widgetsmUsername">Nima Noorali</span>
                        <span className="widgetsmUserTitle">Web Developer</span>
                    </div>
                    <button className="widgetsmbtn">
                        <Visibility className='widgetsmIcon' />
                        Display
                    </button>
                </li>

            </ul>
        </div>
    );
}

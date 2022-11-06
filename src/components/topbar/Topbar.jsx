import './topbar.css';
import { NotificationsNone, Language, Settings } from '@mui/icons-material';



export default function Topbar() {

    return (
        <div className='topbar'>
            <div className="topbarwrapper">
                <div className="topleft">
                    <span className="logo">NimaAdmin</span>
                </div>
                <div className="topright">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="assets/myself.jpg" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    );
}

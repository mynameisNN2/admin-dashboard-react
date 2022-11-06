import './feature.css';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';





export default function Featured() {

    return (
        <div className='featured'>

            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredmoney">$2,415</span>
                    <span className="featuredmoneyRate">-11.4 <ArrowDownward className='featuredIcon negative' /></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredmoney">$4,415</span>
                    <span className="featuredmoneyRate">-1.4
                        <ArrowDownward className='featuredIcon negative' /></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredmoney">$3,815</span>
                    <span className="featuredmoneyRate">2.4
                        <ArrowUpward className='featuredIcon' /></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

        </div>
    );
}

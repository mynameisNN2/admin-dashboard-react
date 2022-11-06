import Charts from '../../components/charts/Charts';
import Featured from '../../components/featuredinfo/Featured';
import './home.css';
import { userData } from '../../dummydata';
import WidgetSmall from '../../components/widgetSmall/WidgetSmall';
import WidgetLarge from '../../components/widgetlarge/WidgetLarge';




export default function Home() {

    return (
        <div className='home'>
            <Featured />
            <Charts data={userData} title="User Analytics" grid dataKey="Active User" />
            <div className="homewidgets">
                <WidgetSmall />
                <WidgetLarge />
            </div>
        </div>
    );
}

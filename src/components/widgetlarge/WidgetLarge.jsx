import './widgetlarge.css';

export default function WidgetLarge() {


    const Button = ({ type }) => {
        return (
            <button className={'widgetlargebtn ' + type}>{type}</button>
        );
    };

    return (
        <div className='widgetlg'>
            <h3 className="widgetlargetitle">Latest transactions</h3>
            <table className="widgetlargetable">

                <tr className="widgetlargetr">
                    <th className="widgetlargeth">Customers</th>
                    <th className="widgetlargeth">Date</th>
                    <th className="widgetlargeth">Amount</th>
                    <th className="widgetlargeth">Status</th>
                </tr>

                <tr className="widgetlargetr">
                    <td className="widgetlargeuser">
                        <img src="assets/myself.jpg" alt="" className="widgetlargeImg" />
                        <span className="widgetlargeName">Hasan Mahmoodi</span>
                    </td>
                    <td className="widgetlargeDate">2 June 2022</td>
                    <td className="widgetlargeAmount">$114.00</td>
                    <td className="widgetlargeStatus"><Button type="Approved"/></td>
                </tr>

                <tr className="widgetlargetr">
                    <td className="widgetlargeuser">
                        <img src="assets/myself.jpg" alt="" className="widgetlargeImg" />
                        <span className="widgetlargeName">Hasan Mahmoodi</span>
                    </td>
                    <td className="widgetlargeDate">2 June 2022</td>
                    <td className="widgetlargeAmount">$114.00</td>
                    <td className="widgetlargeStatus"><Button type="Declined"/></td>
                </tr>

                <tr className="widgetlargetr">
                    <td className="widgetlargeuser">
                        <img src="assets/myself.jpg" alt="" className="widgetlargeImg" />
                        <span className="widgetlargeName">Hasan Mahmoodi</span>
                    </td>
                    <td className="widgetlargeDate">2 June 2022</td>
                    <td className="widgetlargeAmount">$114.00</td>
                    <td className="widgetlargeStatus"><Button type="Pending"/></td>
                </tr>

                <tr className="widgetlargetr">
                    <td className="widgetlargeuser">
                        <img src="assets/myself.jpg" alt="" className="widgetlargeImg" />
                        <span className="widgetlargeName">Hasan Mahmoodi</span>
                    </td>
                    <td className="widgetlargeDate">2 June 2022</td>
                    <td className="widgetlargeAmount">$114.00</td>
                    <td className="widgetlargeStatus"><Button type="Approved"/></td>
                </tr>

            </table>
        </div>
    );
}

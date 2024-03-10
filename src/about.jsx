import "./styles.css"

export default function About() {
    let t = (
    <table>
        <thead>
            <tr>
                <th>DATE</th>
                <th>OPPONENT</th>
                <th>HOME/AWAY</th>
                <th>PREDICTION</th>
           </tr>
        </thead>
        <tbody>
            <tr>
                <td>10 Mar 2024</td>
                <td>Manchester City</td>
                <td>H</td>
                <td>D 2-2</td>
            </tr>
            <tr>
                <td>17 Mar 2024</td>
                <td>Manchester United</td>
                <td>A</td>
                <td>W 0-3</td>
            </tr>
            <tr>
                <td>31 Mar 2024</td>
                <td>Brighton & Hove Albion</td>
                <td>H</td>
                <td>L 1-2</td>
            </tr>
            <tr>
                <td>4 Apr 2024</td>
                <td>Sheffield United</td>
                <td>H</td>
                <td>W 5-0</td>
            </tr>
            <tr>
                <td>20 Apr 2024</td>
                <td>Fulham</td>
                <td>A</td>
                <td>W 2-0</td>
            </tr>
        </tbody>
    </table>
    );

    let i = (<div id="info" className="hidden">Some useful info!</div>);

    return (
        <div>
            <p>Come here to find out more about Liverpool's upcoming match fixtures:</p>
            {t}
            {i}
        </div>
    );
}
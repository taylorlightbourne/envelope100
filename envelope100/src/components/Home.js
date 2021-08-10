import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="home-main-container">
            <div className="app-name-header">
                <h1>Envelope 100</h1>
            </div>
            <div>
                <h1>How Much are You Stuffing?</h1>
            </div>
            <div>
                <input className="stuffing-amount" type="text" placeholder="Enter Amount"></input>
            </div>
            <div>
                <Link to="/breakdown">
                    <button className="home-btn">Enter</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;
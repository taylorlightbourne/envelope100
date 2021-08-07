import './Home.css';
function Home() {
    return (
        <div className="home-main-container">
                    <div className="header">
                        <h1>Envelope 100</h1>
                        <h1>How Much are You Stuffing?</h1>
                    </div>
                    <br></br>
                    <form>
                        <div>
                            <input type="text" placeholder="Enter Amount"></input>
                        </div>
                        <div>
                            <button>Enter</button>
                        </div>
                    </form>
            </div>
    )
}

export default Home;
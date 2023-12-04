import Header from '../componants/Header';
import '../styles/Home.css'

function Home(){
    return(
        <div className="home">
            <Header />
            <div className="homeContent">
                <div className="homeAbout">
                    <h1>
                        QR Code Menu,
                    </h1>
                    <p>that works for you</p>
                    <div className="homeButtons">
                        <button className="homeButton">Menu example</button>
                        <button className="homeButton">Create QR menu</button>
                    </div>
                </div>
                <div className="homeImage">
                </div>
            </div>
        </div>
    )
}

export default Home;
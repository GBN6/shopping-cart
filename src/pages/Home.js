import React from "react";
import { Link } from "react-router-dom";
import homeImage from '../assets/home-page.jpg'
import shopping from '../assets/shopping.jpg'

const Home = () => {
    return (
        <div className="home-page-container">
            <div className="home-page" >
                <div className="message">
                    <div className="small-message">
                        Best online fake store in the world
                    </div>
                    <div className="big-message">
                        Buy everything, and nothing simultaneously!
                    </div>
                    <Link to='/shop'>
                        <button className="shop-now-button" type="button">Shop now</button>
                    </Link>
                </div>
                <img className="home-page-image" src={shopping} alt='homepage' />
            </div>
        </div>
    )
}

export default Home;
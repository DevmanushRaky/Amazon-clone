import React from "react";
import "./Home.css"
import Product from "./Product";


function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="Loading please wait.."
            />
            
            {/* product id ,title,price,rating,image */}
            <div className="home__row">
                <Product
                    id="12345"
                    title="The Legend:  Devmanush Raky a multitalented boi with mindblowing extra ordinary super power "
                    price={11999}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                />
                <Product
                    id="49538094"
                    title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                    price={239.0}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                />
               
                <Product
                    id="49532064"
                    title="(Renewed) ASUS ROG Zephyrus M GU502GU-ES003T 15.6-inch FHD 144Hz Gaming Laptop (9th Gen Core i7-9750H/16GB RAM/512GB SSD/Windows10/6GBNVIDIA"
                    price={10200000}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/71KMMy2S07L._AC_UY218_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="4903850"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                    price={199.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />
                 <Product
                    id="49538064"
                    title="boAt Rockerz 255 Sports in-Ear Bluetooth Neckband Earphone with Mic (Active Black)"
                    price={13999.0}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61ku39qVEzL._SY450_.jpg"
                />
                <Product
                    id="23445930"
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={98.99}
                    rating={5}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
                <Product
                    id="3254354345"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    price={1598.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="90829339"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                    price={1094.98}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="90829342"
                    title="Cracking the Coding Interview: 150 Programming Interview Questions and Solutions"
                    price={15999.98}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51myoYzySML._SX329_BO1,204,203,200_.jpg"
                />
                <Product
                    id="90829332"
                    title="Operating System Principles"
                    price={280}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/413Nwx4UyML._SX318_BO1,204,203,200_.jpg"
                />
                <Product
                    id="90829331"
                    title="Computer Networking and Cryptography and Network Security"
                    price={969}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51xi9DMyWdL._SY331_BO1,204,203,200_.jpg"
                />
                <Product
                    id="90829234"
                    title="The Pursuit of Happiness: A Book of Studies and Strowings"
                    price={1969}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71F5IrJH0NL._AC_UY218_.jpg"
                />
            </div>
        </div>
    );
}

export default Home

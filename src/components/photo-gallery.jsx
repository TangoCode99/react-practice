import React from "react";
import beach from "../assets/blackbeach.jpg";
import lake from "../assets/lake.jpg";
import needle from "../assets/spaceneedle.jpg";
import forest from "../assets/forest.jpg";
import waterfall from "../assets/waterfall.jpg";
import market from "../assets/market.jpg";
import museum from "../assets/museum.jpg";
import vessel from "../assets/vessel.jpeg";
import trees from "../assets/palmtrees.jpg"
import "./photo-gallery.css";

const handleOpen = () => {
    console.log("open modal");
};

export default function PhotoGallery() {
    return (
        <div className="photo-gallery">
            <div className="block">
                <button onClick={handleOpen}>
                    <img src={beach} alt="Rialto Beach in Seattle" />
                    <div className="overlay">
                        <div className="text">
                            <h2>Rialto Beach</h2>
                            <h3>- view -</h3>
                        </div>
                    </div>
                </button>
            </div>
            <div className="block">
                <button>
                    <img src={lake} alt="lake in Seattle" />
                    <div className="overlay">
                        <div className="text">
                            <h2>Lake Crescent</h2>
                            <h3>- view -</h3>
                        </div>
                    </div>
                </button>
            </div>
            <div className="block">
                <button>
                    <img src={needle} alt="Space Needle in Seattle" />
                    <div className="overlay">
                        <div className="text">
                            <h2>Space Needle</h2>
                            <h3>- view -</h3>
                        </div>
                    </div>
                </button>
            </div>
            <div className="block">
                <button>
                    <img src={forest} alt="forest in Seattle" />
                    <div className="overlay">
                        <div className="text">
                            <h2>Forest</h2>
                            <h3>- view -</h3>
                        </div>
                    </div>
                </button>
            </div>
            <div className="block">
                <button>
                    <img src={waterfall} alt="Mountainside in Seattle" />
                    <div className="overlay">
                        <div className="text">
                            <h2>Waterfall</h2>
                            <h3>- view -</h3>
                        </div>
                    </div>
                </button>
            </div>
            <div className="block">
                <button>
                    <img src={market} alt="Public Market in Seattle" />
                    <div className="overlay">
                        <div className="text">
                            <h2>Public Market</h2>
                            <h3>- view -</h3>
                        </div>
                    </div>
                </button>
            </div>
            <div className="block">
                <button>
                    <img src={museum} alt="The Getty in Los Angeles" />
                    <div className="overlay">
                        <div className="text">
                            <h2>The Getty</h2>
                            <h3>- view -</h3>
                        </div>
                    </div>
                </button>
            </div>
            <div className="block">
                <button>
                    <img src={trees} alt="Palm Trees in Los Angelese" />
                    <div className="overlay">
                        <div className="text">
                            <h2>Palm Trees</h2>
                            <h3>- view -</h3>
                        </div>
                    </div>
                </button>
            </div>
            <div className="block">
                <button>
                    <img src={vessel} alt="The Vessel in New York City"/>
                    <div className="overlay">
                        <div className="text">
                            <h2>The Vessel</h2>
                            <h3>- view -</h3>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    );
}

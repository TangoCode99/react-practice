import React from "react";
import { Rialto, 
    CapriBeach,
    Capri,
    Forest,
    Lake,
    Market,
    Museum,
    PalmTrees,
    Sorrento,
    SpaceNeedle,
    Vessel,
    WaterFall
} from "../assets";
import "./photo-gallery.css";

const handleOpen = () => {
    console.log("open modal");
};

export default function PhotoGallery() {
    return (
        <div className="photo-gallery">
            <div className="block">
                <button onClick={handleOpen}>
                    <img src={Rialto} alt="Rialto Beach in Seattle" />
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
                    <img src={Lake} alt="lake in Seattle" />
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
                    <img src={SpaceNeedle} alt="Space Needle in Seattle" />
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
                    <img src={Forest} alt="forest in Seattle" />
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
                    <img src={WaterFall} alt="Mountainside in Seattle" />
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
                    <img src={Market} alt="Public Market in Seattle" />
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
                    <img src={Museum} alt="The Getty in Los Angeles" />
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
                    <img src={PalmTrees} alt="Palm Trees in Los Angelese" />
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
                    <img src={Vessel} alt="The Vessel in New York City"/>
                    <div className="overlay">
                        <div className="text">
                            <h2>The Vessel</h2>
                            <h3>- view -</h3>
                        </div>
                    </div>
                </button>
            </div>
            <div className="block">
                <button>
                    <img src={Sorrento} alt="Sorrento, Italy"/>
                    <div className="overlay">
                        <div className="text">
                            <h2>Sorrento</h2>
                            <h3>- view -</h3>
                        </div>
                    </div>
                </button>
            </div>
            <div className="block">
                <button>
                    <img src={Capri} alt="Capri, Italy"/>
                    <div className="overlay">
                        <div className="text">
                            <h2>Capri</h2>
                            <h3>- view -</h3>
                        </div>
                    </div>
                </button>
            </div>
            <div className="block">
                <button>
                    <img src={CapriBeach} alt="Capri Beach, Italy"/>
                    <div className="overlay">
                        <div className="text">
                            <h2>Capri Beach</h2>
                            <h3>- view -</h3>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    );
}

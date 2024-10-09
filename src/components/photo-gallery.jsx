import React from "react";
import {
    Rialto,
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
    WaterFall,
    BeechMtn,
    Epcot,
    Flower,
    Jekyll,
    MercedesBenz,
    TruistPark,
    VeniceBeach,
    Williamsburg
} from "../assets";
import { useEffect, useState } from "react";
import "./photo-gallery.css";

const images = [
    { src: Rialto, alt: 'Rialto Beach', desc: 'Rialto Beach' },
    { src: CapriBeach, alt: 'Capri Beach', desc: 'Marina Grande Beach' },
    { src: Capri, alt: 'Capri', desc: 'Capri' },
    { src: Forest, alt: 'Forest', desc: 'Marymere Falls' },
    { src: Lake, alt: 'Lake Crescent', desc: 'Lake Crescent' },
    { src: Market, alt: 'Public Market', desc: 'Public Market' },
    { src: Museum, alt: 'The Getty', desc: 'The Getty' },
    { src: PalmTrees, alt: 'Palm Trees', desc: 'Venice Beach' },
    { src: Sorrento, alt: 'Positano', desc: 'Positano' },
    { src: SpaceNeedle, alt: 'Space Needle', desc: 'Space Needle' },
    { src: Vessel, alt: 'The Vessel', desc: 'The Vessel' },
    { src: WaterFall, alt: 'Waterfall', desc: 'Olallie State Park' },
    { src: BeechMtn, alt: 'Beech Mtn', desc: 'Beech Mountain' },
    { src: Epcot, alt: 'Epcot World', desc: 'Epcot World' },
    { src: Flower, alt: 'Flower', desc: 'Blue Flower' },
    { src: Jekyll, alt: 'Jekyll Island', desc: 'Jekyll Island' },
    { src: MercedesBenz, alt: 'Mercedes-Benz', desc: 'Mercedes-Benz' },
    { src: TruistPark, alt: 'Truist Park', desc: 'Truist Park' },
    { src: VeniceBeach, alt: 'Lifeguard Post', desc: 'Venice Beach' },
    { src: Williamsburg, alt: 'Williamsburg Bridge', desc: 'Williamsburg Bridge' },
];

const Gallery = ({ images }) => {
    const [loaded, setLoaded] = useState(false);

    // Trigger the images to load in with animation after component mounts
    useEffect(() => {
        setTimeout(() => setLoaded(true), 100); // Slight delay for smooth transition
    }, []);
    return (
        <div className={`gallery-grid ${loaded ? 'loaded' : ''}`}>
            {images.map((image, index) => (
                <div key={index} className="gallery-item">
                    <img src={image.src} alt={image.alt} />
                    <div className="description">
                        <p>{image.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function PhotoGallery() {
    return (
        <div className="PhotoGallery">
            <Gallery images={images} />
        </div>
    );
}

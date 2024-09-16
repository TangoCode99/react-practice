import React from "react";
import beach from "../assets/blackbeach.jpg";
import lake from "../assets/lake.jpg";
import needle from "../assets/spaceneedle.jpg";
import forest from "../assets/forest.jpg";
import waterfall from "../assets/waterfall.jpg";
import market from "../assets/market.jpg";
import "./photo-gallery.css";

export default function PhotoGallery() {
    return (
        <div className="photo-gallery">
            <div className="block">
                <img src={beach} alt="black beach in Seattle" />
            </div>
            <div className="block">
                <img src={lake} alt="lake in Seattle" />
            </div>
            <div className="block">
                <img src={needle} alt="Space Needle in Seattle" />
            </div>
            <div className="block">
                <img src={forest} alt="forest in Seattle" />
            </div>
            <div className="block">
                <img src={waterfall} alt="Mountainside in Seattle" />
            </div>
            <div className="block">
                <img src={market} alt="Public Market in Seattle" />
            </div>
            <div className="block">
                <img src={beach} alt="black beach in Seattle" />
            </div>
        </div>
    );
}

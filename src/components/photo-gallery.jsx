import React, { useEffect, useRef, useState } from "react";
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
    Williamsburg,
    IndianBeach,
    CannonBeach,
    EcolaPark,
    EndertsBeach,
    IndianBeachRocks,
    MountHood,
    Multnomah,
    Portland,
    PortOrford,
    AustralianShepherd,
    SouthFalls,
    WahclellaFalls
} from "../assets";
import "../styles/photo-gallery.css";

const images = [
    { src: IndianBeach, alt: 'Indian Beach', desc: 'Indian Beach' },
    { src: CannonBeach, alt: 'Cannon Beach', desc: 'Cannon Beach' },
    { src: EcolaPark, alt: 'Ecola State Park', desc: 'Ecola State Park' },
    { src: EndertsBeach, alt: 'Enderts Beach', desc: 'Enderts Beach' },
    { src: IndianBeachRocks, alt: 'Indian Beach Rocks', desc: 'Indian Beach Rocks' },
    { src: MountHood, alt: 'Mount Hood', desc: 'Mount Hood' },
    { src: Multnomah, alt: 'Multnomah Falls', desc: 'Multnomah Falls' },
    { src: Portland, alt: 'Portland, Oregon', desc: 'Portland, Oregon' },
    { src: PortOrford, alt: 'Port Orford', desc: 'Port Orford' },
    { src: SouthFalls, alt: 'South Falls', desc: 'South Falls' },
    { src: AustralianShepherd, alt: 'Australian Shepherd', desc: 'Australian Shepherd' },
    { src: WahclellaFalls, alt: 'Wahclella Falls', desc: 'Wahclella Falls' },
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

// Pre-warm the browser image cache for all assets on mount.
// Since images are bundled JS imports (not network URLs), this forces
// the browser to decode & retain them so fast scrolling never re-fetches.
function useImagePreloader(imageSrcs) {
    useEffect(() => {
        imageSrcs.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
}

// Individual gallery item with Intersection Observer for entrance animation.
// Uses a large rootMargin so the animation triggers well before the item
// is visible — keeping the UX snappy without a jarring pop-in.
const GalleryItem = React.memo(({ image, index }) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect(); // Only animate in once
                }
            },
            {
                // Large margin: start animating 300px before the item enters view
                rootMargin: "300px 0px 300px 0px",
                threshold: 0,
            }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    // Stagger delay capped at 500ms so items deep in the grid don't wait forever
    const delay = Math.min(index * 60, 500);

    return (
        <div
            ref={ref}
            className={`gallery-item ${visible ? "gallery-item--visible" : ""}`}
            style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
        >
            {/*
              No loading="lazy" — images are already local JS bundle imports.
              decoding="async" offloads JPEG/PNG decode to a worker thread so
              the main thread (and scroll) stays smooth.
              fetchpriority="low" for below-fold images keeps LCP fast.
            */}
            <img
                src={image.src}
                alt={image.alt}
                decoding="async"
                fetchpriority={index < 6 ? "high" : "low"}
            />
            <div className="description">
                <p>{image.desc}</p>
            </div>
        </div>
    );
});

GalleryItem.displayName = "GalleryItem";

const Gallery = ({ images }) => {
    // Kick off pre-loading for every image src as soon as the component mounts
    useImagePreloader(images.map((img) => img.src));

    return (
        <div className="gallery-grid">
            {images.map((image, index) => (
                <GalleryItem key={image.alt} image={image} index={index} />
            ))}
        </div>
    );
};

export default function PhotoGallery() {
    return (
        <div className="PhotoGallery">
            <Gallery images={images} />
        </div>
    );
}
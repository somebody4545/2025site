"use client"
import React, {useEffect} from 'react';
import {gsap} from 'gsap';

const FullScreen4545Grid: React.FC = () => {
    const numRows = 50;
    const numCols = 50;

    useEffect(() => {
        const evenRows = document.querySelectorAll('.even-row');
        const oddRows = document.querySelectorAll('.odd-row');

        // Set initial positions
        gsap.set(evenRows, {x: 0});
        gsap.set(oddRows, {x: 0});

        // Animate to move continuously
        gsap.to(evenRows, {
            x: 1000, // Move to a large value to create a continuous effect
            duration: 90, // Adjust duration for speed
            repeat: -1,
            ease: "none", // No easing for continuous movement
        });

        gsap.to(oddRows, {
            x: -1000, // Move to a large value to create a continuous effect
            duration: 90, // Adjust duration for speed
            repeat: -1,
            ease: "none", // No easing for continuous movement
        });
    }, []);

    return (
        <div
            className="w-screen h-screen flex flex-col items-center justify-center overflow-hidden cursor-default select-none">
            <div className="rotate-12">
                {Array.from({length: numRows}, (_, rowIndex) => (
                    <div
                        key={rowIndex}
                        className={`flex ${rowIndex % 2 === 0 ? 'ml-16 even-row' : 'ml-0 odd-row'}`}
                    >
                        {Array.from({length: numCols}, (_, colIndex) => (
                            <span key={colIndex}
                                  className="text-6xl/none font-bold text-text italic spacing-1 hover:text-primary transition-colors">
                            4545
                        </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FullScreen4545Grid; 
"use client"
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const FullScreen4545Grid: React.FC = () => {
    const numRows = 50;
    const numCols = 50;

    useEffect(() => {
        // Animation logic can be handled with Framer Motion's variants
    }, []);

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center overflow-hidden cursor-default select-none">
            <div className="rotate-12">
                {Array.from({ length: numRows }, (_, rowIndex) => (
                    <motion.div
                        key={rowIndex}
                        className={`flex ${rowIndex % 2 === 0 ? 'ml-16 even-row' : 'ml-0 odd-row'}`}
                        animate={{ x: rowIndex % 2 === 0 ? 1000 : -1000 }}
                        transition={{ duration: 90, ease: "linear", repeat: Infinity }}
                    >
                        {Array.from({ length: numCols }, (_, colIndex) => (
                            <span key={colIndex}
                                className="text-6xl/none font-bold text-text italic spacing-1 hover:text-primary transition-colors">
                                4545
                            </span>
                        ))}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default FullScreen4545Grid; 
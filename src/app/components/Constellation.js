'use client'
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";


function generateRandomPoints(n) {
    const points = [];
    for (let i = 0; i < n; i++) {
        points.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
        });
    }
    return points;
}

function calculateDistance(point1, point2) {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    return Math.sqrt(dx * dx + dy * dy);
}

const Star = ({ point }) => {
    const randsize = Math.random() * 3 + 1;
    return (
        <motion.div
            style={{
                position: "absolute",
                top: point.y,
                left: point.x,
                width: randsize,
                height: randsize,
                borderRadius: 2,
                backgroundColor: "white"
            }}
            animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.5, 1],
                rotate: [0, 360, 0],
                borderRadius: ["20%", "50%", "20%"],
                transition: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse" // "loop"
                }
            }}
        />
    );
}

const Constellation = () => {
    // generate a random number between 10 and 20
    const num_stars = Math.floor(Math.random() * 20) + 20;

    const star_points = generateRandomPoints(num_stars);
    return (
    <div className='absolute -z-10'>
        {star_points.map((point, index) => {
            return (
                <Star point={point} key={index} />
            )
        }
        )}
    </div>
  )
}

export default Constellation
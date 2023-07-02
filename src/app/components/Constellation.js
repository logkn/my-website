'use client'
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";


function generateRandomPoints(n) {
    const points = [];
    for (let i = 0; i < n; i++) {
        points.push({
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
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
    const randsize = Math.random() * 4 + 1;
    return (
        <motion.div
            className='absolute'
            style={{
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
    const num_stars = 50;

    const star_points = generateRandomPoints(num_stars);
    return (
    <div className='stars-outter -z-50 absolute w-screen h-screen'>
        <div className='overflow-hidden'>
            {star_points.map((point, index) => {
                return (
                    <Star point={point} key={index} />
                )
            }
            )}
        </div>
    </div>
  )
}

export default Constellation
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const Loading = () => {
    const emotionData = [
        { emotion: "😊", color: "#00FF00" },  // happy - green
        { emotion: "😢", color: "#0000FF" },  // sad - blue
        { emotion: "😡", color: "#FF0000" }, // angry - red
        { emotion: "😋", color: "#ff65b3"},
        { emotion: "🫠", color: "#ffee32"},
        { emotion: "😈", color: "#3d0066"},
    ];

    const [randomEmotion, setRandomEmotion] = useState(emotionData[0]);

    const pickRandomEmotion = () => {
        const randomIndex = Math.floor(Math.random() * emotionData.length);
        setRandomEmotion(emotionData[randomIndex]);
    };

    useEffect(() => {
        pickRandomEmotion();
    }, []);

    return (
        <div className="bg-lightBlue min-h-screen flex items-center justify-center">
            <motion.div
                animate={{ scale: 1.2 }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            >
                <svg width="300" height="300" viewBox="0 0 300 300">
                    {/* White background circle */}
                    <circle
                        cx="150"
                        cy="150"
                        r="140"
                        fill="white"
                    />
                    {/* Animated border */}
                    <motion.circle
                        cx="150"
                        cy="150"
                        r="140"
                        stroke={randomEmotion.color}
                        strokeWidth="4"
                        fill="none"
                        initial={{pathLength: 0}}
                        animate={{pathLength: 1}}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                    <text
                        x="150"
                        y="150"
                        fontSize="60"
                        textAnchor="middle"
                        dominantBaseline="middle"
                    >
                        {randomEmotion.emotion}
                    </text>
                </svg>
            </motion.div>
        </div>
    );
};
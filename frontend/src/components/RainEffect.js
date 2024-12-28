import React, { useEffect, useState } from 'react';

const RainEffect = () => {
    const [drops, setDrops] = useState([]);

    useEffect(() => {
        generateRain();
    }, []);

    const generateRain = () => {
        let increment = 0;
        const newDrops = [];

        while (increment < 95) {
            const randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
            const randoFiver = Math.floor(Math.random() * (4 - 2 + 1) + 2);
            increment += randoFiver;

            newDrops.push({
                id: increment,
                left: increment,
                bottom: randoFiver + randoFiver - 1 + 100,
                delay: `0.${randoHundo}`,
                duration: `0.5${randoHundo}`
            });
        }

        setDrops(newDrops);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#2d303a] text-white font-['Teko'] text-5xl">

            <div className="rain absolute inset-0 overflow-hidden">
                {drops.map((drop) => (
                    <div
                        key={drop.id}
                        className="drop absolute pointer-events-none"
                        style={{
                            left: `${drop.left}%`,
                            bottom: `${drop.bottom}%`,
                            animationDelay: `${drop.delay}s`,
                            animationDuration: `${drop.duration}s`,
                        }}
                    >
                        <div
                            className="stem"
                            style={{
                                animationDelay: `${drop.delay}s`,
                                animationDuration: `${drop.duration}s`,
                            }}
                        />
                        <div
                            className="splat"
                            style={{
                                animationDelay: `${drop.delay}s`,
                                animationDuration: `${drop.duration}s`,
                            }}
                        />
                    </div>
                ))}
            </div>

            <style jsx global>{`
        .drop {
          position: absolute;
          bottom: 100%;
          width: 10px;
          height: 120px;
          pointer-events: none;
          animation: drop 0.5s linear infinite;
        }

        @keyframes drop {
          0% { transform: translateY(0vh); }
          75% { transform: translateY(90vh); }
          100% { transform: translateY(90vh); }
        }

        .stem {
          width: 2px;
          height: 60%;
          margin-left: 7px;
          background: linear-gradient(to bottom, 
            rgba(255, 255, 255, 0), 
            rgba(255, 255, 255, 0.25));
          animation: stem 0.5s linear infinite;
        }

        @keyframes stem {
          0% { opacity: 1; }
          65% { opacity: 1; }
          75% { opacity: 0; }
          100% { opacity: 0; }
        }

        .splat {
          width: 15px;
          height: 10px;
          border-top: 2px dotted rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          opacity: 1;
          transform: scale(0);
          animation: splat 0.5s linear infinite;
          display: block;
        }

        @keyframes splat {
          0% {
            opacity: 1;
            transform: scale(0);
          }
          80% {
            opacity: 1;
            transform: scale(0);
          }
          90% {
            opacity: 0.5;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(1.5);
          }
        }
      `}</style>
        </div>
    );
};

export default RainEffect;
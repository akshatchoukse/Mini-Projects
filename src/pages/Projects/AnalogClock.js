import React, { useEffect, useState } from 'react';

function AnalogClock() {
    const [currDate, setCurrDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            setCurrDate(date);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const currHour = currDate.getHours();
    const currMin = currDate.getMinutes();
    const currSec = currDate.getSeconds();

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-blue-200">
            <div className="text-3xl font-mono mb-8 text-gray-700">
                {currHour.toString().padStart(2, '0')} :
                {currMin.toString().padStart(2, '0')} :
                {currSec.toString().padStart(2, '0')}
            </div>
            <div className="relative h-[400px] w-[400px] rounded-full border-[10px] border-white shadow-2xl bg-white flex items-center justify-center">
                <div className="mb-3 h-3 w-3 rounded-full bg-black z-10"></div>
                {/* Hour hand */}
                <div
                    style={{
                        transform: `rotate(${30 * (currHour % 12) + currMin / 2}deg)`,
                        transition: 'transform 0.5s ease-in-out'
                    }}
                    className="absolute origin-bottom bottom-[200px] h-[100px] w-[6px] bg-red-500 rounded-md shadow-md"
                ></div>
                {/* Minute hand */}
                <div
                    style={{
                        transform: `rotate(${6 * currMin + currSec / 10}deg)`,
                        transition: 'transform 0.5s ease-in-out'
                    }}
                    className="absolute origin-bottom bottom-[200px] h-[140px] w-[4px] bg-blue-500 rounded-md shadow-sm"
                ></div>
                {/* Second hand */}
                <div
                    style={{
                        transform: `rotate(${6 * currSec}deg)`,
                        transition: 'transform 0.2s linear'
                    }}
                    className="absolute origin-bottom bottom-[200px] h-[170px] w-[2px] bg-gray-700 rounded-full"
                ></div>
            </div>
        </div>
    );
}

export default AnalogClock;

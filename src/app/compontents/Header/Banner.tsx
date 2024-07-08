import React, { useState } from 'react'

const Banner = () => {
    const [showBanner, setShowBanner] = useState(true);

    const handleCloseBanner = () => {
        setShowBanner(false);
    };
    return (
        <>
            {showBanner && (
                <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
                    <p className="text-lg font-bold">A better version of this website is coming! Stay tuned!</p>
                    <button onClick={handleCloseBanner} className="text-white">&times;</button>
                </div>
            )}
        </>
    );
}

export default Banner
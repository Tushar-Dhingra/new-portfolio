import Image from "next/image";
import React from "react";

const BannerIcon = () => {
    const icons = [
        "/assets/img/icon1.png",
        "/assets/img/icon3.png",
        "/assets/img/icon4.png",
        "/assets/img/icon5.png",
        "/assets/img/icon6.png",
        "/assets/img/icon7.png",
        "/assets/img/icon8.png",
        "/assets/img/icon9.png",
        "/assets/img/icon10.png",
        "/assets/img/icon11.png",
        "/assets/img/icon12.png",
        "/assets/img/icon13.png",
        "/assets/img/icon14.png",
        "/assets/img/icon15.png",
        "/assets/img/icon16.png",
        "/assets/img/icon17.png",
        "/assets/img/icon18.png",
    ];

    return (
        <div className="overflow-hidden w-full framer-animation">
            <div className="flex items-center space-x-16 animate-marquee">
                {icons.map((icon, index) => (
                    <div
                        key={index}
                        className="group flex-shrink-0 transform transition-all duration-300 hover:scale-110"
                    >
                        <Image
                        width={600}
                        height={600}
                            src={icon}
                            alt={`Icon ${index + 1}`}
                            className="w-16 h-16 mx-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BannerIcon;

import React from "react";
import { Link } from "react-router-dom";
import "../../../css/universal-components/product-card.css";

class ProductCardHotel extends React.Component<{
    message: string,
    imagePath: string,
    contentMessageTop: string,
    contentMessageBottom?: string,
    bottomMessage?: string
}> {
    render() {
        const { message,  imagePath, bottomMessage, contentMessageTop, contentMessageBottom } = this.props;
        const filterId = `imageFilter_${Math.random().toString(36).substr(2, 9)}`;
        const linearGradientId = `paint0_linear_${Math.random().toString(36).substr(2, 9)}`;
        const patternId = `image_${Math.random().toString(36).substr(2, 9)}`;

        const svgWidth = window.innerWidth < 768 ? "100%" : "400";
        const svgHeight = window.innerWidth < 768 ? "auto" : "388";

        return (
            <div className={"product-card-hotel"}>
                <svg
                    preserveAspectRatio="none"
                    width={svgWidth}
                    height={svgHeight}
                    viewBox="0 0 384 366"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"}}
                >
                    <defs>
                        <filter id={filterId}>
                            <feColorMatrix
                                type="matrix"
                                values="0.1 0 0 0 0
                0 0.1 0 0 0
                0 0 0.1 0 0
                0 0 0 0.72 0"
                            />
                        </filter>
                        <linearGradient
                            id={linearGradientId}
                            x1="192"
                            y1="0"
                            x2="192"
                            y2="366"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#33CEFF"/>
                            <stop offset="0.562842" stopColor="#D633FF" stopOpacity="0"/>
                        </linearGradient>
                        <pattern
                            id={patternId}
                            x="0"
                            y="0"
                            patternUnits="userSpaceOnUse"
                            width="484"
                            height="466"
                        >
                            <image
                                href={imagePath}
                                x="0"
                                y="0"
                                width="384"
                                height="366"
                                preserveAspectRatio="xMidYMid slice"
                                filter={`url(#${filterId})`}
                            />
                        </pattern>
                    </defs>
                    <path
                        vectorEffect="non-scaling-stroke"
                        d="M32 1H319.453C328.037 1 336.238 4.5601 342.1 10.832L374.648 45.6545C380.015 51.3966 383 58.9629 383 66.8225V334C383 351.121 369.121 365 352 365H32C14.8792 365 1 351.121 1 334V32C1 14.8792 14.8792 1 32 1Z"
                        fill={`url(#${patternId})`}
                        stroke="#545151"
                        strokeOpacity="1"
                        strokeWidth="2"
                    />
                    <path
                        vectorEffect="non-scaling-stroke"
                        d="M32 1H319.453C328.037 1 336.238 4.5601 342.1 10.832L374.648 45.6545C380.015 51.3966 383 58.9629 383 66.8225V334C383 351.121 369.121 365 352 365H32C14.8792 365 1 351.121 1 334V32C1 14.8792 14.8792 1 32 1Z"
                        stroke="#545151"
                        strokeOpacity="1"
                        strokeWidth="2"
                    />
                    <rect x="0" y="80" width="384" height="220" fill="rgba(234, 234, 234, 0.5)"/>
                    {contentMessageBottom ? (
                        <>
                            <text x="192" y="105" fill="#FFFFFF" textAnchor="middle" dominantBaseline="middle" fontSize="31" className={"card-text"}>
                                {message}
                            </text>
                            <text x="192" y="140" fill="#FFFFFF" textAnchor="middle" dominantBaseline="middle" fontSize="31" className={"card-text"}>
                                {bottomMessage}
                            </text>
                            <text x="192" y="210" fill="#FFFFFF" textAnchor="middle" dominantBaseline="middle" fontSize="27" className={"card-text"}>
                                {contentMessageTop}
                            </text>
                            <text x="192" y="250" fill="#FFFFFF" textAnchor="middle" dominantBaseline="middle" fontSize="27" className={"card-text"}>
                                {contentMessageBottom}
                            </text>
                        </>
                    ) : (
                        <>
                            <text x="192" y="105" fill="#FFFFFF" textAnchor="middle" dominantBaseline="middle" fontSize="31" className={"card-text"}>
                                {message}
                            </text>
                            <text x="192" y="140" fill="#FFFFFF" textAnchor="middle" dominantBaseline="middle" fontSize="31" className={"card-text"}>
                                {bottomMessage}
                            </text>
                            <text x="192" y="230" fill="#FFFFFF" textAnchor="middle" dominantBaseline="middle" fontSize="27" className={"card-text"}>
                                {contentMessageTop}
                            </text>
                        </>
                    )}
                </svg>
            </div>
        );
    }
}

export default ProductCardHotel;

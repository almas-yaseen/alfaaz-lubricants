import React, { useEffect, useRef } from "react";
import "./CardComponent.css"; // Import the external CSS file

const FlagComponent = () => {
  const flags = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/255px-Flag_of_the_People%27s_Republic_of_China.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/1200px-Flag_of_Malaysia.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/800px-Flag_of_South_Korea.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/1200px-Flag_of_the_United_Arab_Emirates.svg.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX-9asYDW6ticYGbnj54ZvS2nhnKjv67KHEg&s",
    "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/800px-Flag_of_India.svg.png",
    "https://cdn.britannica.com/27/4227-050-00DBD10A/Flag-South-Africa.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg",
    "https://cdn.britannica.com/69/5869-050-6DD75C6F/Flag-Argentina.jpg",
  ];

  const countryNames = [
    "China",
    "Japan",
    "Malaysia",
    "South Korea",
    "UAE",
    "Unknown",
    "India",
    "South Africa",
    "Indonesia",
    "Argentina",
  ];

  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (!container || !content) return;

    const totalWidth = content.offsetWidth;
    let currentPosition = 0;
    let animationFrameId;

    const scroll = () => {
      currentPosition += 1;
      if (currentPosition >= totalWidth / 2) {
        currentPosition = 0;
      }
      container.scrollLeft = currentPosition;
      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="main-container">
      <h5
        style={{
          fontWeight: "600",
          textAlign: "center",
          fontFamily: "sans-serif",
        }}
      >
        Our Global Presence
      </h5>

      <div
        ref={containerRef}
        className="card-container top-container"
        style={{
          overflowX: "hidden",
          whiteSpace: "nowrap",
          padding: "2px",
        }}
      >
        <div ref={contentRef} style={{ display: "inline-block" }}>
          {flags.concat(flags).map((flagSrc, index) => (
            <div
              className="top-brand-card"
              key={index}
              style={{
                textAlign: "center",
                margin: "0 10px",
                display: "inline-block",
                verticalAlign: "top",
                borderRadius: "10px",
                boxShadow: "0px 0.2px 2px 0px rgba(0, 0, 0, 0.2)",
                padding: "10px",
                backgroundColor: "white",
              }}
            >
              <img
                src={flagSrc}
                className="top-brand-image"
                alt={`flag-${index % flags.length}`}
                style={{
                  width: "100px",
                  height: "60px",
                  objectFit: "contain",
                  marginBottom: "10px",
                }}
              />
              <div
                className="top-brand-name"
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#333",
                }}
              >
                {countryNames[index % countryNames.length]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlagComponent;

import React, { useEffect, useRef } from "react";
import "./CardComponent.css"; // Import the external CSS file

const TopBrands = () => {
  const images = [
    "https://etimg.etb2bimg.com/photo/98300892.cms",
    "https://www.logodesignlove.com/wp-content/uploads/2008/04/shell-logo-design-1.gif",
    "https://www.misteroil.eu/images/shop_brand/s_c/1024x512/liqui-moly_1519305453.webp",
    "https://images.seeklogo.com/logo-png/9/1/motul-logo-png_seeklogo-95224.png",
    "https://cms.suse.net/sites/default/files/logo_images/repsol.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTpIq4hBcTgPSPp_3TFH7yek9jBr9FZclqEQ&s",
    "https://mma.prnewswire.com/media/2621034/MobilDelvac100Years_Logo.jpg?p=twitter",
    "https://thepride.in/wp-content/uploads/2021/11/Pride-logo.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvUqy3ewOlYJvxMyqt83AA69YXx4wd9Ixcbw&s",
  ];

  const names = [
    "Castrol",
    "Shell",
    "Liqui Moly",
    "Motul",
    "Repsol",
    "Servo",
    "Mobile Delvac",
    "Pride",
    "Valvoline",
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
          textAlign: "left",
          fontFamily: "sans-serif",
        }}
      >
        Shop from Top Brands
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
          {images.concat(images).map((imageSrc, index) => (
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
                src={imageSrc}
                className="top-brand-image"
                alt={`brand-${index % images.length}`}
                style={{
                  width: "100px",
                  height: "100px",
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
                {names[index % names.length]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBrands;

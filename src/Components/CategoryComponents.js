import React, { useEffect, useRef, useState } from "react";
import { getBrands } from "../services/brandService";
import { useNavigate } from "react-router-dom";

const CategoryComponents = () => {
  const [adminBrands, setAdminBrands] = useState([]);
  const hasFetchedData = useRef(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!hasFetchedData.current) {
      hasFetchedData.current = true;
      getBrands()
        .then((data) => {
          if (data.length) {
            setAdminBrands(data);
          } else {
            // Use the default products if API returns an empty array
            setAdminBrands(images);
          }
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
          // Fall back to default products on error
          setAdminBrands(images);
        });
    }
  }, []);

  const handleSelectBrand = (name) => {
    navigate(`/products/${name}`);
  };
  const images = [
    {
      image:
        "https://dms.mydukaan.io/original/webp/media/c74f22ef-eaa2-404b-832c-7d43fc0c8d86.gif",
      _id: 1,
      name: "Offer Zone",
    },
    {
      image: "https://etimg.etb2bimg.com/photo/98300892.cms",
      _id: 2,
      name: "Castrol",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTpIq4hBcTgPSPp_3TFH7yek9jBr9FZclqEQ&s",
      _id: 3,
      name: "Servo",
    },
    {
      image:
        "https://www.misteroil.eu/images/shop_brand/s_c/1024x512/liqui-moly_1519305453.webp",
      _id: 4,
      name: "Liqui molly",
    },
    {
      image:
        "https://images.seeklogo.com/logo-png/9/1/motul-logo-png_seeklogo-95224.png",
      _id: 5,
      name: "Motul",
    },
    {
      image: "https://cms.suse.net/sites/default/files/logo_images/repsol.png",
      _id: 6,
      name: "Repsol",
    },
  ];

  return (
    <div className="category-top">
      {adminBrands.map((item) => (
        <div
          key={item._id}
          onClick={() => handleSelectBrand(item.name)}
          style={{ textAlign: "center", margin: "0 10px" }}
        >
          <img
            src={item.image}
            className="img-fluid category-image"
            alt={`category-${item._id}`}
            style={{ width: "80px", height: "80px" }} // Adjust image size as needed
          />
          <div
            className="black-text category-text"
            style={{ marginTop: "5px", color: "var(--black-12)" }}
          >
            {item.name} {/* Display the name under each image */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryComponents;

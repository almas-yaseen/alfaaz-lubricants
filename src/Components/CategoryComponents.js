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
      image:
        "https://www.classeq.co.uk/uploads/products/classeq-g400/G400-basket-on-door.png",
      _id: 2,
      name: "Blue star",
    },
    {
      image: "https://www.dihr.com/sync/img/HT 11 ECO.jpg",
      _id: 3,
      name: "Winter halter",
    },
    {
      image: "https://www.scotsice.com.au/_images/_dihr/RX101E.jpg",
      _id: 4,
      name: "Bosch",
    },
    {
      image:
        "https://www.classeq.co.uk/uploads/products/classeq-g500/G500_Rack_On_Door.png",
      _id: 5,
      name: "Convotherm",
    },
    {
      image:
        "https://www.angliacateringequipment.com/wp-content/uploads/2022/09/Convotherm-Maxx-10.10-Electric-Combi-Oven-101-Shelves-GN-11-400x400.webp",
      _id: 6,
      name: "Classeq",
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

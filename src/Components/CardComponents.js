import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import products from "../Constants/Products";
import "./CardComponent.css";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../services/productService";

function CardComponent(props) {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const [adminProducts, setAdminProducts] = useState([]);
  const hasFetchedData = useRef(false);

  useEffect(() => {
    if (!hasFetchedData.current) {
      hasFetchedData.current = true;
      getProducts()
        .then((data) => {
          if (data.length) {
            setAdminProducts(data);
          } else {
            // Use the default products if API returns an empty array
            setAdminProducts(products);
          }
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
          // Fall back to default products on error
          setAdminProducts(products);
        });
    }
  }, []);

  const handleSelectProduct = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="main-container">
      <h4
        style={{
          fontWeight: "600",
          textAlign: "left",
          fontFamily: "sans-serif",
        }}
      >
        {props.title}
      </h4>

      <div className="card-container">
        {adminProducts.map((el) => (
          <div
            className="card-wrapper"
            key={el._id}
            onClick={() => handleSelectProduct(el._id)}
          >
            <Card className="card">
              <Card.Img
                className="card-image img-fluid"
                variant="top"
                src={el.images[0]}
              />
              <Card.Body>
                <Card.Title className="card-title">{el.name}</Card.Title>
              </Card.Body>
              <Button className="card-button">
                {isMobile ? "ADD +" : "ADD TO CART"}
              </Button>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardComponent;

import React, { useEffect, useState } from "react";
import "./ProductPage.css";
import ProductImageZoom from "./ProductImageZoom";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import { useParams } from "react-router-dom";
import products from "../Constants/Products";
import { getSingleProduct } from "../services/productService";
const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const selectedProduct = await getSingleProduct(id);
        setProduct(selectedProduct);
        setMainImage(selectedProduct.images[0]);
      } catch (error) {
        console.error(
          "Error fetching product, falling back to local data:",
          error
        );
        const fallbackProduct = products.find(
          (item) => item._id === parseInt(id)
        );

        if (fallbackProduct) {
          setProduct(fallbackProduct);
          setMainImage(fallbackProduct.images[0]);
        }
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <>
        <div className="loader-container">
          <div className="spinner"></div>
          <div>Loading...</div>
        </div>
      </>
    );
  }
  return (
    <>
      <HeaderComponent />
      <div className="product-page">
        <div className="product-image-container">
          <div className="product-main-image">
            <ProductImageZoom imageSrc={mainImage} />
          </div>
          <div className="product-preview-images">
            {product.images?.map((image) => (
              <img
                key={product.id} // Use the index as key since each image might be different
                src={image}
                alt={`Product Preview`}
                className="product-preview-image"
                onClick={() => setMainImage(image)}
              />
            ))}
          </div>
        </div>
        <div className="product-details">
          <span
            style={{
              textAlign: "left",
              fontFamily: "sans-serif",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            {product.name}
          </span>
          <h6 style={{ textAlign: "left", color: "black", paddingTop: "5px" }}>
            Availability:{" "}
            <span style={{ color: "green", fontWeight: "bold" }}>
              {product.availability}
            </span>
          </h6>
          <div className="product-actions">
            <a
              href="https://wa.me/+919447458735?text=Hi, I would like to enquire about your services."
              className="enquire-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enquire Now
            </a>{" "}
          </div>
          <div className="product-description">
            <p>
              <ol style={{ padding: "12px", margin: "0px" }}>
                <li>8mm toughened clear glass</li>
                <li>Electronic digital thermostat for refrigeration counter</li>
                <li>Rear removable electrocoated aluminium sliding doors</li>
                <li>6mm shelf glass with ss mirror finish stopper</li>
                <li>High bright led lighting: pure white / warm white</li>
                <li>304 grade steel finish with matte & mirror combination</li>
                <li>
                  Changeable Corian and engraving work with unique insertion
                </li>
              </ol>
            </p>
          </div>
          <div className="more-details">
            <div style={{ margin: "0px", padding: "0px" }}>
              <p style={{ color: "#878787", textAlign: "left" }}>
                Delivery:{" "}
                <span style={{ color: "#212121" }}>Within 2 days.</span>
              </p>
            </div>

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th colSpan="2">
                      <h3 className="specifications-title">Specifications</h3>
                    </th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  {product?.specifications?.map((item) => (
                    <tr>
                      <td style={{ color: "#878787" }}>{item.word}</td>
                      <td style={{ fontSize: "bold", color: "black" }}>
                        {item}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default ProductPage;

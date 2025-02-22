import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const FooterComponent = () => {
  return (
    <footer style={{ padding: "0px 0px" }}>
      <div id="last">
        {/* Logo and description on the left */}
        <section id="footer-logo">
          <img
            src={require("../images/CompanyLogo.webp")}
            alt="Company Logo"
            className="image-fluid"
          />
          <p
            style={{
              width: "100%",
              textWrap: "none",
              fontWeight: "normal",
              color: "grey",
            }}
          >
            Since our establishment, Alfaaz Lubricants has emerged as a trusted
            name in the petrochemical industry, delivering high-performance
            lubricants tailored for automotive, industrial, and commercial
            applications. With a commitment to innovation and quality, our
            products ensure superior engine protection, enhanced efficiency, and
            long-lasting performance. Operating across multiple markets, Alfaaz
            Lubricants continues to expand its reach, providing advanced
            lubrication solutions that power industries and keep machines
            running smoothly. Backed by cutting-edge research and a
            customer-centric approach, we drive excellence in every drop.
          </p>
        </section>

        {/* Links */}
        <section id="links">
          <ul>
            <h5 className="footer-links">Links</h5>
            <li>Castrol</li>
            <li>Petrochemical</li>
            <li>Shops</li>
          </ul>
        </section>

        {/* Contact Us */}
        <section id="contact-us">
          <ul>
            <h5 className="footer-contact">Contact Us</h5>
            <li style={{ marginBottom: "8px" }}>Call Us at 8606387883</li>
            <li style={{ marginBottom: "8px" }}>www.alfaazlubricants.in</li>
            <li style={{ marginBottom: "8px" }}>
              <div
                style={{
                  listStyle: "none",
                  gap: "10px",
                  display: "flex",
                  marginTop: "25px",
                  justifyContent: "center",
                }}
              >
                <li>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    style={{ color: "black" }}
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    style={{ color: "black" }}
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faYoutube}
                    style={{ color: "black" }}
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ color: "black" }}
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{ color: "black" }}
                  />
                </li>
              </div>
            </li>
          </ul>
        </section>
      </div>
      <h6>© 2024 Alfaaz Lubricants Private Limited</h6>
    </footer>
  );
};

export default FooterComponent;

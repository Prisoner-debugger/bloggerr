import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_about">
        <h1>About Us</h1>
        <p>
          CODE-BLOGGER is a unique, interactive online publishing house that
          provides integrated and updated news and information focusing on the
          new technologies and programming realted articles.
        </p>
      </div>
      <div className="footer_news">
        <h1>News Letter</h1>
        <p>Stay update with our latest</p>
        <input
          type="text"
          placeholder="Email"
          id="newsletter"
          name="newsletter"
        />
        <span>
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
      </div>
      <div className="footer_follow">
        <h1>Follow Us</h1>
        <p>Let us be Social</p>
        <div className="footer_follow_icon">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
          <FontAwesomeIcon icon={faTwitter} size="2x" />
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </div>
      </div>
    </div>
  );
}

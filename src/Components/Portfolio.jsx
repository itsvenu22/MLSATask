/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  [
    {
      "title": "eBraille-Vision Braille Display",
      "description": "A device tailored for the visually impaired, providing an intuitive and tactile interface for accessing digital content. It offers multiple connectivity options, including Bluetooth and USB, ensuring seamless integration with computers, smartphones, and tablets.",
      "url": "https://github.com/itsvenu22/eBraille-Vision"
    },
    {
      "title": "Door Log Alert System",
      "description": "An all-in-one solution for monitoring and managing door access effortlessly. With this system, you can track every door access event, create detailed logs, and receive instant alerts when something requires your attention.",
      "url": "https://github.com/itsvenu22/Door-Log-Alert-System"
    },
    {
      "title": "RFID-ClubConnectPro",
      "description": "An exciting and versatile solution designed to supercharge attendance tracking for clubs and organizations. This system harnesses the power of RFID (Radio-Frequency Identification) technology to elegantly record attendance.",
      "url": "https://github.com/itsvenu22/RFID-ClubConnectPro"
    }
  ]
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

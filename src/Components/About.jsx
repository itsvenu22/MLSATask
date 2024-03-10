/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm studying at Vellore Institute of Technology Chennai. I'm delving into a wide range of tech fields. From server management to network security, bash scripting to IoT device protection, my expertise covers diverse areas. Specializing in ethical hacking and RF engineering, I aim to create innovative, user-friendly solutions driven by simplicity and creativity.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Server Administration",
  "Network Security",
  "Bash Scripting",
  "Embedded Linux",
  "Hardware Hacking",
  "Wardriving",
  "Ethical Hacking",
  "IoT Device Security",
  "Gerber File Interpretation",
  "Radio Frequency (RF) Engineering",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. Leveraging my skills in server administration, network security, bash scripting, embedded Linux, hardware hacking, wardriving, ethical hacking, IoT device security, gerber file interpretation, and radio frequency (RF) engineering, I continually strive to find new and better ways to make technology accessible to all through my UI/UX experience.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;

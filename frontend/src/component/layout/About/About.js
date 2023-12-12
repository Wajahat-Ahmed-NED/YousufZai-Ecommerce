import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location.reload();
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <Typography variant="h4"> Get My Trainer</Typography>
            <br />
            <p style={{ textAlign: "justify" }}>
              This is a LMS made by Get My Trainer. Welcome to Get My Trainer,
              where learning meets innovation! Our Mission At Get My Trainer is
              to provide a cutting-edge learning experience that empowers
              individuals and organizations to achieve their full potential. We
              aim to foster a dynamic and inclusive educational environment that
              embraces innovation, technology, and continuous growth. Our vision
              is to revolutionize learning by offering a platform that
              facilitates accessible, personalized, and engaging educational
              resources. We aspire to be the forefront of educational
              advancement, bridging the gap between knowledge seekers and
              quality learning content.
            </p>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a href="https://www.youtube.com/" target="blank">
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <div>
              <a href="mailto:abc@gmail.com">
                <Button>Contact: abc@gmail.com</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

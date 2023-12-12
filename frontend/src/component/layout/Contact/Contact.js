// import * from "react";
import React from "react";
import "./Contact.css";
import img from "../../../images/4.jpg";
import img2 from "../../../images/2.jpg";
import img3 from "../../../images/3.jpg";
import {
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

const Contact = () => {
  const arr = [
    {
      name: "Wajahat Ahmed",
      desc: "Expert Software Engineer @ SystemsLimited, having keen interest in DevOps, Data Science, Networking.",
      subjects: ["DevOps", "DSA"],
      img: img,
    },
    {
      name: "Junaid Khan",
      desc: "Expert Data Engineer, having keen interest in DevOps, Data Science, Networking.",
      subjects: ["Data Science", "Python"],
      img: img2,
    },
    {
      name: "Asad Mumtza",
      desc: "Expert Software Engineer, having keen interest in DevOps, Data Science, Networking.",
      subjects: ["DevOps", "DSA"],
      img: img3,
    },
  ];
  return (
    <div style={{ marginTop: "10%", marginLeft: "30%", marginRight: "30%" }}>
      <Typography variant="h4" style={{ color: "tomato" }}>
        Teaching From The Best Trainers
      </Typography>
      <br />
      <hr />
      <br />
      <Typography variant="h5" style={{ color: "tomato" }}>
        Trainer's Profiles
      </Typography>
      <br />

      <br />

      {arr?.map((e, i) => (
        <>
          <Card sx={{ maxWidth: 85 }} key={i}>
            <CardMedia
              sx={{ height: 40 }}
              component="img"
              image={e.img}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {e.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {e.desc}
              </Typography>
            </CardContent>
            <CardActions>
              {e.subjects?.map((e, i) => (
                <Button size="small" variant="outlined" color="secondary">
                  {e}
                </Button>
              ))}
              {/* 
              <Button size="small" variant="outlined">
                DSA
              </Button> */}
            </CardActions>
          </Card>
          <br />
          <br />
        </>
      ))}
    </div>
  );
};

export default Contact;

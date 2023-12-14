import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import ExamplePDF from "./ExamplePDF.pdf";
import BasicModal from "./Modal";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions({ courseName }) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div style={{ marginLeft: "2%", marginRight: "2%" }}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Lecture #1 - Intro to Web Basics</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{ textAlign: "center" }}>
            <iframe
              src="https://drive.google.com/file/d/1dc2vaNj23jGXovXeH7UVHfPmatvTQKHu/preview"
              width="70%"
              height="400"
              allow="autoplay"
              // style={{ textAlign: "center" }}
            ></iframe>
          </div>
          <br />
          <Typography variant="h5">Description Of Video</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <br />
          <div style={{ display: "flex", justifyContent: "start" }}>
            <Link
              to={ExamplePDF}
              download="Example-PDF-document"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="contained" color="secondary">
                Download Material
              </Button>
            </Link>
            &nbsp;
            <BasicModal title="Lecture # 1" />
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Lecture #2 - Intro to Networking</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{ textAlign: "center" }}>
            <iframe
              src="https://drive.google.com/file/d/1dc2vaNj23jGXovXeH7UVHfPmatvTQKHu/preview"
              width="70%"
              height="400"
              allow="autoplay"
              // style={{ textAlign: "center" }}
            ></iframe>
          </div>
          <br />
          <Typography variant="h5">Description Of Video</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <br />
          <div style={{ display: "flex", justifyContent: "start" }}>
            <Link
              to={ExamplePDF}
              download="Example-PDF-document"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="contained" color="secondary">
                Download Material
              </Button>
            </Link>
            &nbsp;
            <BasicModal title="Lecture # 2" />
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Lecture # 3 - MERN Stack In Detail</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{ textAlign: "center" }}>
            <iframe
              src="https://drive.google.com/file/d/1dc2vaNj23jGXovXeH7UVHfPmatvTQKHu/preview"
              width="70%"
              height="400"
              allow="autoplay"
              // style={{ textAlign: "center" }}
            ></iframe>
          </div>
          <br />
          <Typography variant="h5">Description Of Video</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <br />
          <div style={{ display: "flex", justifyContent: "start" }}>
            <Link
              to={ExamplePDF}
              download="Example-PDF-document"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="contained" color="secondary">
                Download Material
              </Button>
            </Link>
            &nbsp;
            <BasicModal title="Lecture # 3" />
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Lecture # 4 - Working on Live Projects</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{ textAlign: "center" }}>
            <iframe
              src="https://drive.google.com/file/d/1dc2vaNj23jGXovXeH7UVHfPmatvTQKHu/preview"
              width="70%"
              height="400"
              allow="autoplay"
              // style={{ textAlign: "center" }}
            ></iframe>
          </div>
          <br />
          <Typography variant="h5">Description Of Video</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <br />
          <div style={{ display: "flex", justifyContent: "start" }}>
            <Link
              to={ExamplePDF}
              download="Example-PDF-document"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="contained" color="secondary">
                Download Material
              </Button>
            </Link>
            &nbsp;
            <BasicModal title="Lecture #4" />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

import React from "react";
import "./sidebar.css";
import logo from "../../images/download.png";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={logo} alt="LMS" style={{ marginTop: 50 }} />

      <Link to="/trainer/dashboard">
        <p>
          <DashboardIcon /> Trainer Dashboard
        </p>
      </Link>

      <Link to="/trainer/products">
        <p>
          {/* <ExpandMoreIcon /> */}
          <ImportExportIcon />
          My Courses
        </p>
      </Link>

      <Link to="/trainer/orders">
        <p>
          <ListAltIcon />
          Quiz
        </p>
      </Link>
      <Link to="/trainer/users">
        <p>
          <PeopleIcon /> Content
        </p>
      </Link>
      <Link to="/trainer/reviews">
        <p>
          <RateReviewIcon />
          Course Details
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;
/*
<Link to="#">
<TreeView
  defaultCollapseIcon={<ExpandMoreIcon />}
  defaultExpandIcon={<ImportExportIcon />}
>
  <TreeItem nodeId="1" label="Courses">
    <Link to="/admin/products">
      <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
    </Link>

    {/* <Link to="/admin/product">
      <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
    </Link> 
  </TreeItem>
</TreeView>
</Link>*/

import React from "react";
import "./Sidebar.css";
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
      <Link to="/">
        <img
          src="https://res.cloudinary.com/tdc-watches/image/upload/v1651137603/samples/logo1_kd3fz7.jpg"
          alt="TDC Watches"
        />
      </Link>
      <Link to="/dashboard">
        <p>
          <DashboardIcon /> Dashboard
        </p>
      </Link>

      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ImportExportIcon />}
        style={{
          padding: "30px",
        }}
      >
        <TreeItem nodeId="1" label="Products" className="treeItem">
          <Link to="/admin/products">
            <TreeItem
              nodeId="2"
              label="All"
              icon={<PostAddIcon />}
              className="treeItem1"
            />
          </Link>

          <Link to="/admin/product">
            <TreeItem
              nodeId="3"
              label="Create"
              icon={<AddIcon />}
              className="treeItem2"
            />
          </Link>
        </TreeItem>
      </TreeView>

      <Link to="/admin/orders">
        <p>
          <ListAltIcon />
          Orders
        </p>
      </Link>
      <Link to="/admin/users">
        <p>
          <PeopleIcon /> Users
        </p>
      </Link>
      <Link to="/admin/reviews">
        <p>
          <RateReviewIcon />
          Reviews
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;

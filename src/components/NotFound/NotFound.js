import React from "react";
import classes from "./NotFound.module.css";

const NotFound = (props) => {
  return (
    <div className={classes.notFound}>
      <div className="display-1">Page Not found</div>
    </div>
  );
};

export default NotFound;

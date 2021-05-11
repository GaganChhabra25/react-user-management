import React from "react";
import classes from "./ConfirmModal.module.css";
import About from "./../About/About";

function ConfirmModal(props) {
  return (
    <div className={classes.container}>
      <div className={classes.headerContent}>
        Are you sure you want to delete user ?
      </div>
      <div className={classes.body}>
        Once deleted, operation can not be reverted.
      </div>
      <div className={classes.buttons}>
        <button className="btn btn-primary" onClick={() => props.handleYesButton()}>Yes</button>
        <button
          className="btn btn-primary"
          onClick={() => props.handleCancelButton()}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ConfirmModal;

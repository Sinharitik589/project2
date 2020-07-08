import React, { Component } from "react";
import { connect } from "react-redux";

const Submit = (props) => {
  const {
    companyReducer,
    logoReducer,
    openingReducer,
    openingnoReducer,
    tagReducer,
    descriptionReducer,
    assignmentReducer,
    techstackReducer,
    locationReducer,
    customlocationReducer,
  } = props;
  return (
    <button
      onClick={() => {
        console.log(props);
      }}
    >
      Submit
    </button>
  );
};

const mapStateToProps = ({
  companyReducer,
  logoReducer,
  openingReducer,
  openingnoReducer,
  tagReducer,
  descriptionReducer,
  assignmentReducer,
  techstackReducer,
  locationReducer,
  customlocationReducer,
}) => {
  return {
    companyReducer,
    logoReducer,
    openingReducer,
    openingnoReducer,
    tagReducer,
    descriptionReducer,
    assignmentReducer,
    techstackReducer,
    locationReducer,
    customlocationReducer,
  };
};

export default connect(mapStateToProps)(Submit);

import { combineReducers } from "redux";

const companyReducer = (state = "", action) => {
  switch (action.type) {
    case "Company_Value":
      return action.payload;

    default:
      return state;
  }
};
const logoReducer = (state = "", action) => {
  switch (action.type) {
    case "Logo_Value":
      return action.payload;

    default:
      return state;
  }
};
const assignmentReducer = (state = "", action) => {
  switch (action.type) {
    case "Assignment_Value":
      return action.payload;

    default:
      return state;
  }
};
const openingnoReducer = (state = 0, action) => {
  switch (action.type) {
    case "Openingno_Value":
      return action.payload;

    default:
      return state;
  }
};
const descriptionReducer = (state = "", action) => {
  switch (action.type) {
    case "Description_Value":
      return action.payload;

    default:
      return state;
  }
};
const tagReducer = (state = [], action) => {
  switch (action.type) {
    case "Tags_Value":
      return action.payload;

    default:
      return state;
  }
};
const techstackReducer = (state = [], action) => {
  switch (action.type) {
    case "Techstack_Value":
      return action.payload;

    default:
      return state;
  }
};
const openingReducer = (state = [], action) => {
  switch (action.type) {
    case "Opening_Value":
      return action.payload;

    default:
      return state;
  }
};
const customlocationReducer = (state = [], action) => {
  switch (action.type) {
    case "Custom_Location_Value":
      return action.payload;

    default:
      return state;
  }
};
const locationReducer = (state = [], action) => {
  switch (action.type) {
    case "Location_Value":
      return action.payload;

    default:
      return state;
  }
};

export default combineReducers({
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
});

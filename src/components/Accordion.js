import React from "react";
import $ from "jquery";

const Accordion = (props) => {
  console.log(props.id);
  const countryData = {
    Asia: ["India", "Pakistan", "Indonesia", "China"],
    Europe: [],
    Australia: [],
  };
  const cityData = {
    India: ["Mumbai", "Chennai", "Delhi"],
    Pakistan: ["Islamabad", "Lahore", "Karachi"],
    Indonesia: ["Jakarta", "Bandung"],
    China: ["Beijing", "Wuhan"],
  };

  const renderCity = (id) => {
    let z = [];
    let array = cityData[id];
    z = array.map((value) => {
      return (
        <div
          className="schip"
          onClick={(e) => {
            const { id } = e.target;
            $(`#${id}`).toggleClass("chip_change");
          }}
          id={`${value}`}
        >
          {value}
        </div>
      );
    });
    z.push(
      <div style={{ display: "flex", marginLeft: 10 }}>
        <label style={{ color: "black" }}> Remote</label>
        <input type="checkbox" />
      </div>
    );
    return z;
  };
  const renderCountry = (id) => {
    let z = [];
    let array = countryData[id];
    z = array.map((value) => {
      return (
        <div className="city">
          <div style={{ flex: 1 }}> {value}</div>
          <div className="city_wrapper">{renderCity(value)}</div>
        </div>
      );
    });

    return z;
  };

  const x = `elements_${props.id}`;

  return (
    <div
      className="accordion_container"
      id={props.id}
      /* onClick={() => {
        
      }} */
    >
      <div className="continent_header">
        {props.id}
        <span
          className="expand"
          onClick={() => {
            $(`#${x}`).toggle(400);
            var c = document.getElementById(`b${x}`);
            if (c.innerHTML === "Expand") {
              c.innerHTML = "Close";
            } else {
              c.innerHTML = "Expand";
            }
          }}
        >
          <button id={`b${x}`}>Expand</button>
        </span>
      </div>
      <div className="accordion_elements" id={x}>
        <div className="country">{renderCountry(props.id)}</div>
      </div>
    </div>
  );
};

export default Accordion;

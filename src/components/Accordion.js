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
          className="city_chip"
          onClick={(e) => {
            console.log("clicked");
            const { id } = e.target;
            $(`#${id}`).toggleClass("city_chip_change");
          }}
          id={`${value}`}
        >
          {value}
        </div>
      );
    });
    z.push(
      <span style={{ position: "absolute", right: 2 }}>
        <div
          className="city_chip btn btn-outline-primary"
          onClick={(e) => {
            console.log("clicked");
            const { id } = e.target;
            $(`#${id}`).toggleClass("city_chip_change");
            $(`#${id}`).toggleClass("btn-outline-primary").toggleClass("btn-primary");
            
          }}
          id={`${id}`}
        >
          Remote
        </div>
      </span>
    );
    return z;
  };
  const renderCountry = (id) => {
    let z = [];
    let array = countryData[id];
    z = array.map((value) => {
      return (
        <div className="city">
          <div style={{ flex: 1, fontSize: 12, paddingLeft: 10 }}> {value}</div>
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
          id={`b${x}`}
          onClick={(e) => {
            $(`#${x}`).toggle(400);
            var c = document.getElementById(`${e.target.id}`);
            if (c.innerHTML === "+") {
              c.innerHTML = "-";
            } else {
              c.innerHTML = "+";
            }
          }}
        >
          +
        </span>
      </div>
      <div className="accordion_elements" id={x}>
        <div className="country">{renderCountry(props.id)}</div>
      </div>
    </div>
  );
};

export default Accordion;

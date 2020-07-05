import React from "react";
import $ from "jquery";
import data from "../countryStats.json";

const Accordion = (props) => {
  console.log(data.cityData["India"]);
  const { countryData, cityData } = data;
  const renderCity = (id) => {
    let z = [];

    let array = cityData[id];
    console.log(cityData[id], id);
    z = array.map((value, index) => {
      return (
        <div
          id={`${value}`}
          onClick={(e) => {
            const { id } = e.target;
            $(`#${id}`).toggleClass("city_chip_change");
          }}
          className="city_chip"
        >
          {value}
        </div>
      );
    });
    z.push(
      <div
        id={`c_${id}`}
        className="city_chip"
        onClick={(e) => {
          const { id } = e.target;

          $(`#${id}`).toggleClass("city_chip_change");
          $(`#${id}`)
            .toggleClass("btn-outline-primary")
            .toggleClass("btn-primary");
        }}
      >
        Remote
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

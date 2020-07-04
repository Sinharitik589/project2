import React from "react";
import $ from "jquery";

const Accordion = (props) => {
  console.log(props.id);
  const countryData = {
    Asia: [
      "India",
      "Pakistan",
      "Indonesia",
      "China",
      "Bangladesh",
      "Vietnam",
      "Myanmar",
      "Japan",
      "Thailand",
      "Combodia",
    ],
    Europe: ["Germany", "Italy", "Spain"],
    Australia: [],
  };
  const cityData = {
    India: [
      "Mumbai",
      "Chennai",
      "Delhi",
      "Bangalore",
      "Hyderabad",
      "Noida",
      "Jaipur",
      "Kolkata",
      "Pune",
      "Gurugram",
      "Ahemedabad",
    ],
    Pakistan: ["Islamabad", "Lahore", "Karachi"],
    Indonesia: ["Jakarta", "Bandung"],
    China: [
      "Beijing",
      "Wuhan",
      "Shanghai",
      "Shenzhen",
      "Tianjin",
      "Chengdu",
      "Chongqing",
      "Hangzhou",
      "Guangzhou",
      "Nanjing",
      "Zhengzhou",
      "Wuhan",
    ],
    Bangladesh: [],
    Vietnam: [],
    Myanmar: [],
    Japan: [],
    Thailand: [],
    Combodia: [],
    Germany: ["Berlin", "Hamburg", "Munich", "Cologne"],
    Italy: [
      "Rome",
      "Venice",
      "Florence",
      "Milan",
      "Turin",
      "Bologna",
      "Naples",
    ],
    Spain: ["Barcelona"],
  };

  const renderCity = (id) => {
    let z = [];
    console.log(id);
    let array = cityData[id];
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

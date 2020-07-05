import React from "react";
import $ from "jquery";

const Renderchip = (props) => {
  const { array } = props;

  const renderElement = (array) => {
    let z = [];
    z = array.map((value) => {
      let x = value.replace(/ /g, "");
      return (
        <div className="chip_wrapper">
          <div
            onClick={(e) => {
              const { id } = e.target;
              $(`#${id}`).toggleClass("new_chip_change");
            }}
            className="chip"
            id={`${x}`}
          >
            {value}
            <span
              class="closebtn"
              id={`btn_${value}`}
              onClick={(e) => {
                console.log(e.target.id);
                let element = document.getElementById(e.target.id);
                element.parentElement.style.display = "none";
              }}
            >
              &times;
            </span>
          </div>
        </div>
      );
    });
    return z;
  };

  return <React.Fragment>{renderElement(array)}</React.Fragment>;
};

export default Renderchip;

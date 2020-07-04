import React, { Component } from "react";
import LocationSelect from "./LocationEmployer";

import $ from "jquery";
class Form extends Component {
  state = {
    add_tag: [],
    add_techStack: [],
    add_openings: [],
    tag: [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Neural Networks",
      "Fintech",
      "Financial Services",
      " Saas",
      "E-Commerce",
      "Edtech",
      "Software as a Service",
      "Logistics",
      "Healthcare",
      "Computer Vision",
      "Ride hailing",
      "Transportation",
      "Food Delivery",
      "Big Data",
      "Data Analytics",
      "Developer Tools",
      "Nonprofit",
      "Design",
      "Cybersecurity",
      "Data Security",
      "Blockchain",
      "Agritech",
      "Supply Chain",
    ],
    techStack: ["AWS", "React", "Python"],
    openings: [
      "Software Development Internship",
      "Full Stack Development",
      "Supply Chain Intern",
    ],
  };

  componentDidMount() {
    var inputTechStack = document.getElementById("add_techstack");
    inputTechStack.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();

        let array = this.state.add_techStack;
        array.push(event.target.value);
        this.setState({ add_techStack: array });
        event.target.value = "";
        $("#add_techstack,#tech_chip_wrapper").toggle();
      }
    });
    var inputOpening = document.getElementById("add_opening");
    inputOpening.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();

        let array = this.state.add_openings;
        array.push(event.target.value);
        this.setState({ add_openings: array });
        event.target.value = "";
        $("#add_opening,#opening_chip_wrapper").toggle();
      }
    });
    var inputTag = document.getElementById("add_tag");
    inputTag.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();

        let array = this.state.add_tag;
        array.push(event.target.value);
        this.setState({ add_tag: array });
        event.target.value = "";
        $("#add_tag,#tag_chip_wrapper").toggle();
      }
    });

    // TO Toggle all Add buttons and input Field
    $("#add-tag-button").click(() => {
      $("#add-tag-button").hide();
      $("#add_tag").show();
    });

    $("#add-techstack-button").click(() => {
      $("#add-techstack-button").hide();
      $("#add_techstack").show();
    });

    $("#add-openings-button").click(() => {
      $("#add-openings-button").hide();
      $("#add_openings").show();
    });
  }

  renderTag(array, key) {
    let z = [];
    z = array.map((value, index) => {
      return (
        <div className="chip_wrapper">
          <div
            onClick={(e) => {
              const { id } = e.target;
              $(`#${id}`).toggleClass("new_chip_change");
            }}
            className="chip"
            id={`${key + index}`}
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
  }

  changeBorder = (id) => {
    let style = document.getElementById(`${id}`).style;
    style.borderColor = "#2dc5a1";
    style.borderWidth = "2px";
  };
  addTagChip() {
    let array = this.state.add_tag;
    let z = [];
    z = array.map((value) => {
      return (
        <div class="new_chip_change">
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
      );
    });
    return z;
  }

  addTechChip() {
    let array = this.state.add_techStack;
    let z = [];
    z = array.map((value) => {
      return (
        <div class="new_chip_change">
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
      );
    });
    return z;
  }
  addOpeningChip() {
    let array = this.state.add_openings;
    let z = [];
    z = array.map((value) => {
      return (
        <div className="new_chip_change">
          {value}
          <span
            className="closebtn"
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
      );
    });
    return z;
  }
  render() {
    return (
      <div className="form_container" id="form">
        <div class="form-input">
          <div className="input_label">Company </div>
          <input
            className="input_field_container"
            id="i_1"
            placeholder="Name Of The Company"
          />
        </div>
        <div className="form_input">
          <div className="input_label">Logo </div>
          <input
            className="input_field_container"
            id="i_2"
            placeholder="Logo URL"
          />
        </div>

        <div className="form_input">
          <div className="input_label">No. Of Assignments </div>
          <input
            className="input_field_container"
            id="i_3"
            placeholder="No. Of assignments"
          />
        </div>
        <div className="form_input">
          <div className="input_label">No. of opening </div>

          <div style={{ display: "flex" }}>
            <div style={{ flex: 1 }}>
              <input
                className="input_field_container"
                id="i_4"
                placeholder="Number of openings"
              />
            </div>
            <div style={{ flex: 1 }}>
              <div className="chip_wrapper">
                <div
                  onClick={(e) => {
                    const { id } = e.target;
                    $(`#${id}`).toggleClass("new_chip_change");
                    $(`#${id}`)
                      .toggleClass("btn-outline-primary")
                      .toggleClass("btn-primary");

                    // Toogle Disable
                    if ($("#i_4").attr("disabled")) {
                      $("#i_4").removeAttr("disabled");
                    } else {
                      $("#i_4").attr("disabled", true);
                    }
                  }}
                  id="c_2"
                  className="schip_new btn btn-outline-primary"
                >
                  Yet to be Updated
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="form_input">
          <div className="input_label">Tags</div>
          <div className="chip_block">
            {this.renderTag(this.state.tag, "tag")}
            {this.addTagChip()}
            <input
              id="add_tag"
              placeholder="Add "
              style={{ display: "none" }}
              className="input_field_container"
            />
            <div className="chip_wrapper" id="tag_chip_wrapper">
              <div
                className="schip_new btn btn-outline-primary"
                onClick={(e) => {
                  $("#add_tag,#tag_chip_wrapper").toggle();
                }}
              >
                <span>Add Tags</span>
                <span className="closebtn">+</span>
              </div>
            </div>
          </div>
        </div>
        <div className="form_input">
          <div className="input_label">Company Description</div>
          <div className="chip_block">
            <textarea
              className="input_field_container"
              style={{ height: 150 }}
            />
          </div>
        </div>
        <div className="form_input">
          <div className="input_label">Tech Stack</div>
          <div className="chip_block">
            {this.renderTag(this.state.techStack, "tech")}
            {this.addTechChip()}
            <input
              id="add_techstack"
              placeholder="Add "
              style={{ display: "none" }}
              className="input_field_container"
            />
            <div className="chip_wrapper" id="tech_chip_wrapper">
              <div
                className="schip_new btn btn-outline-primary"
                id="tech_stack_chip"
                onClick={(e) => {
                  $("#add_techstack,#tech_chip_wrapper").toggle();
                }}
              >
                <span id="add_techstack_label">Add Tech-Stack</span>
                <span class="closebtn" id={"add_techstack_button"}>
                  +
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="form_input">
          <div className="input_label">Openings</div>
          <div className="chip_block">
            {this.renderTag(this.state.openings, "openings")}
            {this.addOpeningChip()}
            <input
              id="add_opening"
              placeholder="Add "
              style={{ display: "none" }}
              className="input_field_container"
            />
            <div className="chip_wrapper" id="opening_chip_wrapper">
              <div
                className="schip_new btn btn-outline-primary"
                onClick={(e) => {
                  $("#add_opening,#opening_chip_wrapper").toggle();
                }}
              >
                <span>Add Openings</span>
                <span class="closebtn">+</span>
              </div>
            </div>
          </div>
        </div>

        <div className="form_input">
          <div className="input_label"> Locations</div>
          <LocationSelect />
        </div>
      </div>
    );
  }
}

export default Form;

// import React, { useState } from 'react';
// import { makeStyles, withStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';

// // import Select from '@material-ui/core/Select';
// import InputBase from '@material-ui/core/InputBase';

// const BootstrapInput = withStyles((theme) => ({
//   root: {
//     'label + &': {
//       marginTop: theme.spacing(3),
//     },
//   },
//   input: {
//     borderRadius: 4,
//     position: 'relative',
//     backgroundColor: theme.palette.background.paper,
//     border: '1px solid #ced4da',
//     fontSize: 16,
//     padding: '10px 26px 10px 12px',
//     transition: theme.transitions.create(['border-color', 'box-shadow']),
//     // Use the system font instead of the default Roboto font.
//     fontFamily: [
//       '-apple-system',
//       'BlinkMacSystemFont',
//       '"Segoe UI"',
//       'Roboto',
//       '"Helvetica Neue"',
//       'Arial',
//       'sans-serif',
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(','),
//     '&:focus': {
//       borderRadius: 4,
//       borderColor: '#80bdff',
//       boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
//     },
//   },
// }))(InputBase);

// const useStyles = makeStyles((theme) => ({
//   margin: {
//     margin: theme.spacing(1),
//   },
// }));

// export default function LocationSelect() {
//   const classes = useStyles();
// 	const [continent, setContinent] = useState('');
// 	const [country, setCountry] = useState('');
// 	const [city, setCity] = useState('');

// 	// -------------- DUMMY DATA -----------
// 	const continentData = ['Asia', 'Europe', 'Australia'];
// 	const countryData = {
// 		'Asia' : ['India', 'Pakistan', 'Indonesia', 'China'],
// 		'Europe': [],
// 		'Australia': []
// 	};
// 	const cityData = {
// 		'India': ['Mumbai', 'Chennai', 'Delhi'],
// 		'Pakistan': ['Islamabad', 'Lahore', 'Karachi'],
// 		'Indonesia': ['Jakarta', 'Bandung'],
// 		'China': ['Beijing', 'Wuhan']
// 	};
// 	// ------------ END DUMMY DATA -----------

//   const handleContinent = (event) => {
// 		setContinent(event.target.value);
// 	};
// 	const handleCountry = (event) => {
// 		setCountry(event.target.value);
// 	};
// 	const handleCity = (event) => {
//     setCity(event.target.value);
// 	};

//   return (
//     <div>
// 			{/* For Continents */}
//       {/* <FormControl className={classes.margin}> */}
//         <label htmlFor="Continent">
//           Continent:
//           <select
//             id="select-continent"
//             value={continent}
//             onChange={handleContinent}
//             // onBlur={handleContinent}
//             // disabled={options.length === 0}
//           >
//             {continentData.map(item => (
//               <option key={item} value={item}>{item}</option>
//             ))}
//           </select>
//         </label>
//       {/* </FormControl> */}
//       <label htmlFor="Country">
//           Country:
//           <select
//             id="select-country"
//             value={country}
//             onChange={handleCountry}
//             // onBlur={handleContinent}
//             // disabled={options.length === 0}
//           >
//             {countryData[`${country}`].map(item => (
//               <option key={item} value={item}>{item}</option>
//             ))}
//           </select>
//         </label>
// 			{/* For Country */}
// 			{/* <FormControl className={classes.margin}>
//         <InputLabel id="select-country-label">Country</InputLabel>
//         <Select
//           labelId="select-country-label"
//           id="select-country"
//           value={country}
//           onChange={handleCountry}
//           input={<BootstrapInput />}
//         >
//           <MenuItem value="">
//             <em>Select Country</em>
//           </MenuItem>

// 					{countryData[`${continent}`].map((item) => (
// 						<MenuItem value={item}>{item}</MenuItem>
// 					))}
//         </Select>
//       </FormControl> */}
// 			{/* For City
// 			<FormControl className={classes.margin}>
//         <InputLabel id="select-city-label">City</InputLabel>
//         <Select
//           labelId="select-city-label"
//           id="select-city"
//           value={city}
//           onChange={handleCity}
//           input={<BootstrapInput />}
//         >
//           <MenuItem value="">
//             <em>Select City</em>
//           </MenuItem>
// 					{cityData[{country}].map((item) => (
// 						<MenuItem value={item}>{item}</MenuItem>
// 					))}
//         </Select>
//       </FormControl> */}
//     </div>
//   );
// }
import React from "react";
import $ from "jquery";
import Accordion from "./Accordion";

export default function LocationSelect() {
  const continentData = ["Asia", "Europe", "Australia"];
  const renderAccordions = () => {
    let z = [];
    z = continentData.map((value) => {
      return <Accordion id={value} />;
    });

    return z;
  };
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      <div className="select_country_header">
        Select Locations
        <span
          className="expand"
          onClick={() => {
            $("#select_continent").toggle(400);
            var x = document.getElementById("select_continent_button");
            if (x.innerHTML === "Expand") {
              x.innerHTML = "Close";
            } else {
              x.innerHTML = "Expand";
            }
          }}
        >
          <button
            id="select_continent_button"
            onClick={(e) => e.preventDefault()}
          >
            Expand
          </button>
        </span>
      </div>
      <div id="select_continent" className="continents">
        {renderAccordions()}
      </div>
    </div>
  );
}

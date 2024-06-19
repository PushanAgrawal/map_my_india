// import React from "react";
// import ReactDOM from "react-dom";
// // import MapComponent from "./MapComponent";
// import MapMyindia from "mapmyindia-react";
// import { mmi } from 'mapmyindia-map-cordova-ionic-beta';
// import "./index.css";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       pincode: "147004"
//     };
//     this.searchPINCode = this.searchPINCode.bind(this);
//   }
//   searchPINCode(e) {
//     const { value } = e.target;
//     this.setState(
//       {
//         pincode: value
//       },
//       () => {
//         fetch(
//           ` https://apis.mapmyindia.com/advancedmaps/v1/4set6qcqyawv6gwmelh3y5n9gwrxgrcv/geo_code?addr=147004`
//         )
//           .then(res => {
//             console.log(res);
//           })
//           // Catch any errors we hit and update the app
//           .catch(error => {
//             console.log(error);
//           });
//       }
//     );
//   }

//   onClick = value => {
//     console.log(":;;;;;;;;; val ", value);
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>Hello CodeSandbox</h1>
//         <div>Enter Pincode </div>
//         <input
//           style={{ margin: "10px", width: "200px", height: "20px" }}
//           type="text"
//           onChange={this.searchPINCode}
//           value={this.state.pincode}
//         />
//         <div id="mapyyy" style={{ width: "100%", height: "100%" }} />
//         {/* <MapMyindia onDblclick={this.onClick} /> */}
//       </div>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// import * as dotenv from "dotenv";

// dotenv.config();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

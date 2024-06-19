import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Map from "mapmyindia-react";
import { mmi } from "mapmyindia-map-cordova-ionic-beta";
import axios from "axios";
import decode from "./polylineencoding";

function App() {
  const [count, setCount] = useState(0);
  // var map = new mappls.Map('map', {center:{lat:28.612964,lng:77.229463} });
  // var map;

  // console.log(map)
  var map = new mmi();
  useEffect(() => {
    // console.log(import.meta.env.VITE_KEY);
    try {
      map.loadMaps("map", {
        center: [30.61, 77.23], // Initial map center coordinates
        zoom: 10,
        key: import.meta.env.VITE_KEY,
        location: { control: true, initial: true, bounds: true }, // Initial zoom level
      });
      var pts = [
        //   [ 28.59026, 77.35396 ],  [ 28.73334, 77.15429 ],
        // [ 30.33588, 76.8342 ],   [ 30.88648, 75.8847 ],
        // [ 30.97609, 75.79314 ],  [ 31.22535, 75.76583 ],
        // [ 31.35442, 75.59056 ],  [ 32.24993, 75.66531 ],
        // [ 32.27162, 75.59019 ],  [ 32.38386, 75.60295 ],
        // [ 32.57126, 75.09816 ],  [ 32.65647, 75.16543 ],
        // [ 32.9107, 75.13824 ],   [ 33.16505, 75.31039 ],
        // [ 33.26902, 75.1752 ],   [ 33.57762, 75.185 ],
        // [ 33.8325, 75.07042 ],   [ 34.22634, 74.77498 ],
        // [ 34.2897, 74.83266 ],   [ 34.22248, 75.01095 ],
        // [ 34.31131, 75.2689 ],   [ 34.26019, 75.44221 ],
        // [ 211.45488, 75.44878 ], [ 211.72559, 75.62235 ],
        // [ 211.842, 75.65848 ],   [ 211.98097, 75.96725 ],
        // [ 212.07086, 76.12762 ], [ 211.81919, 76.37213 ],
        // [ 211.66464, 76.33317 ], [ 211.39231, 76.62492 ],
        // [ 211.16486, 76.6256 ],  [ 210.92072, 76.74668 ],
        // [ 210.58819, 76.88371 ], [ 210.57483, 76.78424 ],
        // [ 210.45083, 77.2989 ],  [ 209.5034, 77.19434 ],
        // [ 208.99796, 77.19083 ], [ 208.51547, 77.19083 ],

        // [ 30.35227, 76.3739 ],  [ 30.3523, 76.37389 ],  [ 30.35236, 76.37386
        // ],
        //   [ 30.3524, 76.37384 ],  [ 30.35243, 76.37382 ], [ 30.35251, 76.37375
        // ],
        //   [ 30.35274, 76.37361 ], [ 30.35299, 76.37348 ], [ 30.35329, 76.37334
        // ],
        //   [ 30.35377, 76.37308 ], [ 30.35411, 76.37292 ], [ 30.35424, 76.37288
        // ],
        //   [ 30.35435, 76.37286 ], [ 30.35443, 76.37284 ], [ 30.35451, 76.37284
        // ],
        //   [ 30.35463, 76.37284 ], [ 30.35477, 76.37284 ], [ 30.35498, 76.37285
        // ],
        //   [ 30.35521, 76.37287 ], [ 30.35547, 76.37288 ], [ 30.3557, 76.3729 ],  [ 30.35608, 76.37295 ], [ 30.35674, 76.37305 ], [ 30.35717, 76.37311
        // ],
        //   [ 30.35724, 76.37312 ], [ 30.35752, 76.37316 ], [ 30.35807, 76.37322
        // ],
        //   [ 30.35863, 76.37329 ], [ 30.35918, 76.37336 ], [ 30.35997, 76.37346
        // ],
        //   [ 30.36018, 76.37348 ], [ 30.36032, 76.37348 ], [ 30.36045, 76.37348
        // ],
        //   [ 30.36055, 76.37347 ], [ 30.36068, 76.37345 ], [ 30.36068, 76.37353
        // ],
        //   [ 30.36066, 76.37363 ], [ 30.36062, 76.374 ],   [ 30.36054, 76.37486
        // ],
        //   [ 30.36048, 76.37547 ], [ 30.36043, 76.37598 ], [ 30.36042, 76.37609
        // ],
        //   [ 30.36042, 76.37613 ], [ 30.36044, 76.37617 ], [ 30.36051, 76.37629
        // ],
        //   [ 30.36104, 76.37698 ], [ 30.36126, 76.37727 ], [ 30.36158, 76.3777 ],
        //   [ 30.36159, 76.37779 ], [ 30.36161, 76.37799 ], [ 30.3617, 76.37845 ],
        //   [ 30.36176, 76.37884 ], [ 30.3623, 76.37955 ],  [ 30.36245, 76.37975
        // ]

        // [30.35227,76.37390],
        // [30.35230,76.37389],
        // [30.35236,76.37386],
        // [30.35240,76.37384],
        // [30.35243,76.37382],
        // [30.35251,76.37375],
        // [30.35274,76.37361],
        // [30.35299,76.37348],
        // [30.35329,76.37334],
        // [30.35377,76.37308],
        // [30.35411,76.37292],
        // [30.35424,76.37288],
        // [30.35435,76.37286],
        // [30.35443,76.37284],
        // [30.35451,76.37284],
        // [30.35463,76.37284],
        // [30.35477,76.37284],
        // [30.35498,76.37285],
        // [30.35521,76.37287],
        // [30.35547,76.37288],
        // [30.35570,76.37290],
        // [30.35608,76.37295],
        // [30.35674,76.37305],
        // [30.35717,76.37311],
        // [30.35724,76.37312],
        // [30.35752,76.37316],
        // [30.35807,76.37322],
        // [30.35863,76.37329],
        // [30.35918,76.37336],
        // [30.35997,76.37346],
        // [30.36018,76.37348],
        // [30.36032,76.37348],
        // [30.36045,76.37348],
        // [30.36055,76.37347],
        // [30.36068,76.37345],
        // [30.36068,76.37353],
        // [30.36066,76.37363],
        // [30.36062,76.37400],
        // [30.36054,76.37486],
        // [30.36048,76.37547],
        // [30.36043,76.37598],
        // [30.36042,76.37609],
        // [30.36042,76.37613],
        // [30.36044,76.37617],
        // [30.36051,76.37629],
        // [30.36104,76.37698],
        // [30.36126,76.37727],
        // [30.36158,76.37770],
        // [30.36159,76.37779],
        // [30.36161,76.37799],
        // [30.36170,76.37845],
        // [30.36176,76.37884],
        // [30.36230,76.37955],
        // [30.36245,76.37975]

        [28.61672, 77.21206],
        [28.61721, 77.21201],
        [28.61735, 77.21231],
        [28.61724, 77.21264],
        [28.6169, 77.21275],
        [28.61663, 77.21244],
        [28.6163, 77.21236],
        [28.61104, 77.21202],
        [28.61024, 77.21246],
        [28.60756, 77.21714],
        [28.60773, 77.21815],
        [28.60755, 77.21876],
        [28.60732, 77.21894],
        [28.60672, 77.21885],
        // [ 28.6065, 77.21899 ],  [ 28.60392, 77.22345 ],
        // [ 28.60393, 77.22439 ], [ 28.60406, 77.22457 ],
        // [ 28.60965, 77.22874 ], [ 28.61012, 77.22894 ],
        // [ 28.6105, 77.22885 ],  [ 28.61093, 77.22816 ],
        // [ 28.61105, 77.22743 ]
      ];
      var polyline = map.polyline(pts, {
        weight: 7,
        color: "green",
        fitbounds: true,
        tooltip: "polyline tooltip",
        popup: "this is first popup",
        openpopup: false,
      });
      // var polyline = map.prototype.L.polyline(pts, {weight:10,color:"red"})
      map.L.fitBounds(polyline.getBounds());
    } catch (e) {
      console.log(e);
    }
  }, []);

  // function initMap1() {
  //     map = new mappls.Map('map', {center:[28.638698386592438,77.27604556863412]});
  // }

  const [address1, setadress1] = useState("");
  const [address2, setadress2] = useState("");
  const [address3, setadress3] = useState("");
  const [polylineData, setPolylineData] = useState([]);

  const handleInputChange1 = (e) => {
    setadress1(e.target.value);
  };
  const handleInputChange2 = (e) => {
    setadress2(e.target.value);
  };
  const handleInputChange3 = (e) => {
    setadress3(e.target.value);
  };
  async function getencoding() {
    var str = address1 + ";" + address2 + ";" + address3;

    str = encodeURIComponent(str);
    console.log(str);
    const response = await axios.get(
      "https://apis.mappls.com/advancedmaps/v1/2ea801f6-78f1-4b60-aefc-c3717d4d6032/route_adv/biking/" +
        str,
      {
        params: {
          geometries: "polyline",
          steps: "false",
          exclude: "ferry",

          alternatives: "2",

          overview: "simplified",
        },
        headers: {
          accept: "application/json",
        },
      }
    );
    var geo = response.data.routes[0].geometry;
    var points = decode(geo);
    console.log(points);
    var polyline = map.polyline(points, {
      weight: 7,
      color: "green",
      fitbounds: true,
      tooltip: "polyline tooltip",
      popup: "this is first popup",
      openpopup: false,
    });
    // var polyline = map.prototype.L.polyline(pts, {weight:10,color:"red"})
    // map.L.fitBounds(polyline.getBounds());
  }

  return (
    <>
      <div id="map" style={{ width: "100%", height: "400px" }}></div>
      {/* <div id="mapss" style={{ width: '100%', height: '400px' }}></div> */}
      <input
        type="text"
        value={address1}
        onChange={handleInputChange1}
        placeholder="Enter encoded polyline"
      />
      <input
        type="text"
        value={address2}
        onChange={handleInputChange2}
        placeholder="Enter encoded polyline"
      />
      <input
        type="text"
        value={address3}
        onChange={handleInputChange3}
        placeholder="Enter encoded polyline"
      />
      <button
        style={{ width: "5rem", height: "2rem" }}
        onClick={() => getencoding()}
      >
        button
      </button>
    </>
  );
}

export default App;

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var defaults = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

const Activity = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "22 12 18 12 15 21 9 3 6 12 2 12"
}));

const Airplay = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
}), React.createElement("polygon", {
  points: "12 15 17 21 7 21 12 15"
}));

const AlertCircle = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 10
}), React.createElement("line", {
  x1: 12,
  y1: 8,
  x2: 12,
  y2: 12
}), React.createElement("line", {
  x1: 12,
  y1: 16,
  x2: 12,
  y2: 16
}));

const AlertOctagon = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polygon", {
  points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
}), React.createElement("line", {
  x1: 12,
  y1: 8,
  x2: 12,
  y2: 12
}), React.createElement("line", {
  x1: 12,
  y1: 16,
  x2: 12,
  y2: 16
}));

const AlertTriangle = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
}), React.createElement("line", {
  x1: 12,
  y1: 9,
  x2: 12,
  y2: 13
}), React.createElement("line", {
  x1: 12,
  y1: 17,
  x2: 12,
  y2: 17
}));

const AlignCenter = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("line", {
  x1: 18,
  y1: 10,
  x2: 6,
  y2: 10
}), React.createElement("line", {
  x1: 21,
  y1: 6,
  x2: 3,
  y2: 6
}), React.createElement("line", {
  x1: 21,
  y1: 14,
  x2: 3,
  y2: 14
}), React.createElement("line", {
  x1: 18,
  y1: 18,
  x2: 6,
  y2: 18
}));

const AlignJustify = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("line", {
  x1: 21,
  y1: 10,
  x2: 3,
  y2: 10
}), React.createElement("line", {
  x1: 21,
  y1: 6,
  x2: 3,
  y2: 6
}), React.createElement("line", {
  x1: 21,
  y1: 14,
  x2: 3,
  y2: 14
}), React.createElement("line", {
  x1: 21,
  y1: 18,
  x2: 3,
  y2: 18
}));

const AlignLeft = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("line", {
  x1: 17,
  y1: 10,
  x2: 3,
  y2: 10
}), React.createElement("line", {
  x1: 21,
  y1: 6,
  x2: 3,
  y2: 6
}), React.createElement("line", {
  x1: 21,
  y1: 14,
  x2: 3,
  y2: 14
}), React.createElement("line", {
  x1: 17,
  y1: 18,
  x2: 3,
  y2: 18
}));

const AlignRight = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("line", {
  x1: 21,
  y1: 10,
  x2: 7,
  y2: 10
}), React.createElement("line", {
  x1: 21,
  y1: 6,
  x2: 3,
  y2: 6
}), React.createElement("line", {
  x1: 21,
  y1: 14,
  x2: 3,
  y2: 14
}), React.createElement("line", {
  x1: 21,
  y1: 18,
  x2: 7,
  y2: 18
}));

const Anchor = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 12,
  cy: 5,
  r: 3
}), React.createElement("line", {
  x1: 12,
  y1: 22,
  x2: 12,
  y2: 8
}), React.createElement("path", {
  d: "M5 12H2a10 10 0 0 0 20 0h-3"
}));

const Aperture = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 10
}), React.createElement("line", {
  x1: 14.31,
  y1: 8,
  x2: 20.05,
  y2: 17.94
}), React.createElement("line", {
  x1: 9.69,
  y1: 8,
  x2: 21.17,
  y2: 8
}), React.createElement("line", {
  x1: 7.38,
  y1: 12,
  x2: 13.12,
  y2: 2.06
}), React.createElement("line", {
  x1: 9.69,
  y1: 16,
  x2: 3.95,
  y2: 6.06
}), React.createElement("line", {
  x1: 14.31,
  y1: 16,
  x2: 2.83,
  y2: 16
}), React.createElement("line", {
  x1: 16.62,
  y1: 12,
  x2: 10.88,
  y2: 21.94
}));

const Archive = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "21 8 21 21 3 21 3 8"
}), React.createElement("rect", {
  x: 1,
  y: 3,
  width: 22,
  height: 5
}), React.createElement("line", {
  x1: 10,
  y1: 12,
  x2: 14,
  y2: 12
}));

const ArrowDownCircle = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 10
}), React.createElement("polyline", {
  points: "8 12 12 16 16 12"
}), React.createElement("line", {
  x1: 12,
  y1: 8,
  x2: 12,
  y2: 16
}));

const ArrowDownLeft = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("line", {
  x1: 17,
  y1: 7,
  x2: 7,
  y2: 17
}), React.createElement("polyline", {
  points: "17 17 7 17 7 7"
}));

const ArrowDownRight = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("line", {
  x1: 7,
  y1: 7,
  x2: 17,
  y2: 17
}), React.createElement("polyline", {
  points: "17 7 17 17 7 17"
}));

const ArrowDown = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("line", {
  x1: 12,
  y1: 5,
  x2: 12,
  y2: 19
}), React.createElement("polyline", {
  points: "19 12 12 19 5 12"
}));

const ArrowLeftCircle = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 10
}), React.createElement("polyline", {
  points: "12 8 8 12 12 16"
}), React.createElement("line", {
  x1: 16,
  y1: 12,
  x2: 8,
  y2: 12
}));

const ArrowLeft = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("line", {
  x1: 19,
  y1: 12,
  x2: 5,
  y2: 12
}), React.createElement("polyline", {
  points: "12 19 5 12 12 5"
}));

const ArrowRightCircle = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 10
}), React.createElement("polyline", {
  points: "12 16 16 12 12 8"
}), React.createElement("line", {
  x1: 8,
  y1: 12,
  x2: 16,
  y2: 12
}));

const ArrowRight = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("line", {
  x1: 5,
  y1: 12,
  x2: 19,
  y2: 12
}), React.createElement("polyline", {
  points: "12 5 19 12 12 19"
}));

const ArrowUpCircle = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 10
}), React.createElement("polyline", {
  points: "16 12 12 8 8 12"
}), React.createElement("line", {
  x1: 12,
  y1: 16,
  x2: 12,
  y2: 8
}));

const ArrowUpLeft = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("line", {
  x1: 17,
  y1: 17,
  x2: 7,
  y2: 7
}), React.createElement("polyline", {
  points: "7 17 7 7 17 7"
}));

const ArrowUpRight = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("line", {
  x1: 7,
  y1: 17,
  x2: 17,
  y2: 7
}), React.createElement("polyline", {
  points: "7 7 17 7 17 17"
}));

const ArrowUp = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("line", {
  x1: 12,
  y1: 19,
  x2: 12,
  y2: 5
}), React.createElement("polyline", {
  points: "5 12 12 5 19 12"
}));

const AtSign = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 4
}), React.createElement("path", {
  d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"
}));

const Award = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 12,
  cy: 8,
  r: 7
}), React.createElement("polyline", {
  points: "8.21 13.89 7 23 12 20 17 23 15.79 13.88"
}));

const BarChart2 = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("line", {
  x1: 18,
  y1: 20,
  x2: 18,
  y2: 10
}), React.createElement("line", {
  x1: 12,
  y1: 20,
  x2: 12,
  y2: 4
}), React.createElement("line", {
  x1: 6,
  y1: 20,
  x2: 6,
  y2: 14
}));

const BarChart = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("line", {
  x1: 12,
  y1: 20,
  x2: 12,
  y2: 10
}), React.createElement("line", {
  x1: 18,
  y1: 20,
  x2: 18,
  y2: 4
}), React.createElement("line", {
  x1: 6,
  y1: 20,
  x2: 6,
  y2: 16
}));

const BatteryCharging = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"
}), React.createElement("line", {
  x1: 23,
  y1: 13,
  x2: 23,
  y2: 11
}), React.createElement("polyline", {
  points: "11 6 7 12 13 12 9 18"
}));

const Battery = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("rect", {
  x: 1,
  y: 6,
  width: 18,
  height: 12,
  rx: 2,
  ry: 2
}), React.createElement("line", {
  x1: 23,
  y1: 13,
  x2: 23,
  y2: 11
}));

const BellOff = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M13.73 21a2 2 0 0 1-3.46 0"
}), React.createElement("path", {
  d: "M18.63 13A17.89 17.89 0 0 1 18 8"
}), React.createElement("path", {
  d: "M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"
}), React.createElement("path", {
  d: "M18 8a6 6 0 0 0-9.33-5"
}), React.createElement("line", {
  x1: 1,
  y1: 1,
  x2: 23,
  y2: 23
}));

const Bell = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
}), React.createElement("path", {
  d: "M13.73 21a2 2 0 0 1-3.46 0"
}));

const Bluetooth = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"
}));

const Bold = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"
}), React.createElement("path", {
  d: "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"
}));

const BookOpen = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
}), React.createElement("path", {
  d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
}));

const Book = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
}), React.createElement("path", {
  d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
}));

const Bookmark = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
}));

const Box = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
}), React.createElement("polyline", {
  points: "3.27 6.96 12 12.01 20.73 6.96"
}), React.createElement("line", {
  x1: 12,
  y1: 22.08,
  x2: 12,
  y2: 12
}));

const Briefcase = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("rect", {
  x: 2,
  y: 7,
  width: 20,
  height: 14,
  rx: 2,
  ry: 2
}), React.createElement("path", {
  d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
}));

const Calendar = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("rect", {
  x: 3,
  y: 4,
  width: 18,
  height: 18,
  rx: 2,
  ry: 2
}), React.createElement("line", {
  x1: 16,
  y1: 2,
  x2: 16,
  y2: 6
}), React.createElement("line", {
  x1: 8,
  y1: 2,
  x2: 8,
  y2: 6
}), React.createElement("line", {
  x1: 3,
  y1: 10,
  x2: 21,
  y2: 10
}));

const CameraOff = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("line", {
  x1: 1,
  y1: 1,
  x2: 23,
  y2: 23
}), React.createElement("path", {
  d: "M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"
}));

const Camera = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
}), React.createElement("circle", {
  cx: 12,
  cy: 13,
  r: 4
}));

const Cast = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"
}), React.createElement("line", {
  x1: 2,
  y1: 20,
  x2: 2,
  y2: 20
}));

const CheckCircle = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
}), React.createElement("polyline", {
  points: "22 4 12 14.01 9 11.01"
}));

const CheckSquare = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "9 11 12 14 22 4"
}), React.createElement("path", {
  d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
}));

const Check = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "20 6 9 17 4 12"
}));

const ChevronDown = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "6 9 12 15 18 9"
}));

const ChevronLeft = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "15 18 9 12 15 6"
}));

const ChevronRight = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "9 18 15 12 9 6"
}));

const ChevronUp = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "18 15 12 9 6 15"
}));

const ChevronsDown = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "7 13 12 18 17 13"
}), React.createElement("polyline", {
  points: "7 6 12 11 17 6"
}));

const ChevronsLeft = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "11 17 6 12 11 7"
}), React.createElement("polyline", {
  points: "18 17 13 12 18 7"
}));

const ChevronsRight = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "13 17 18 12 13 7"
}), React.createElement("polyline", {
  points: "6 17 11 12 6 7"
}));

const ChevronsUp = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "17 11 12 6 7 11"
}), React.createElement("polyline", {
  points: "17 18 12 13 7 18"
}));

const Chrome = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 10
}), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 4
}), React.createElement("line", {
  x1: 21.17,
  y1: 8,
  x2: 12,
  y2: 8
}), React.createElement("line", {
  x1: 3.95,
  y1: 6.06,
  x2: 8.54,
  y2: 14
}), React.createElement("line", {
  x1: 10.88,
  y1: 21.94,
  x2: 15.46,
  y2: 14
}));

const Circle = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 10
}));

const Clipboard = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
}), React.createElement("rect", {
  x: 8,
  y: 2,
  width: 8,
  height: 4,
  rx: 1,
  ry: 1
}));

const Clock = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 10
}), React.createElement("polyline", {
  points: "12 6 12 12 16 14"
}));

const CloudDrizzle = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("line", {
  x1: 8,
  y1: 19,
  x2: 8,
  y2: 21
}), React.createElement("line", {
  x1: 8,
  y1: 13,
  x2: 8,
  y2: 15
}), React.createElement("line", {
  x1: 16,
  y1: 19,
  x2: 16,
  y2: 21
}), React.createElement("line", {
  x1: 16,
  y1: 13,
  x2: 16,
  y2: 15
}), React.createElement("line", {
  x1: 12,
  y1: 21,
  x2: 12,
  y2: 23
}), React.createElement("line", {
  x1: 12,
  y1: 15,
  x2: 12,
  y2: 17
}), React.createElement("path", {
  d: "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"
}));

const CloudLightning = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"
}), React.createElement("polyline", {
  points: "13 11 9 17 15 17 11 23"
}));

const CloudOff = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"
}), React.createElement("line", {
  x1: 1,
  y1: 1,
  x2: 23,
  y2: 23
}));

const CloudRain = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("line", {
  x1: 16,
  y1: 13,
  x2: 16,
  y2: 21
}), React.createElement("line", {
  x1: 8,
  y1: 13,
  x2: 8,
  y2: 21
}), React.createElement("line", {
  x1: 12,
  y1: 15,
  x2: 12,
  y2: 23
}), React.createElement("path", {
  d: "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"
}));

const CloudSnow = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"
}), React.createElement("line", {
  x1: 8,
  y1: 16,
  x2: 8,
  y2: 16
}), React.createElement("line", {
  x1: 8,
  y1: 20,
  x2: 8,
  y2: 20
}), React.createElement("line", {
  x1: 12,
  y1: 18,
  x2: 12,
  y2: 18
}), React.createElement("line", {
  x1: 12,
  y1: 22,
  x2: 12,
  y2: 22
}), React.createElement("line", {
  x1: 16,
  y1: 16,
  x2: 16,
  y2: 16
}), React.createElement("line", {
  x1: 16,
  y1: 20,
  x2: 16,
  y2: 20
}));

const Cloud = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"
}));

const Code = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "16 18 22 12 16 6"
}), React.createElement("polyline", {
  points: "8 6 2 12 8 18"
}));

const Codepen = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polygon", {
  points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"
}), React.createElement("line", {
  x1: 12,
  y1: 22,
  x2: 12,
  y2: 15.5
}), React.createElement("polyline", {
  points: "22 8.5 12 15.5 2 8.5"
}), React.createElement("polyline", {
  points: "2 15.5 12 8.5 22 15.5"
}), React.createElement("line", {
  x1: 12,
  y1: 2,
  x2: 12,
  y2: 8.5
}));

const Codesandbox = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
}), React.createElement("polyline", {
  points: "7.5 4.21 12 6.81 16.5 4.21"
}), React.createElement("polyline", {
  points: "7.5 19.79 7.5 14.6 3 12"
}), React.createElement("polyline", {
  points: "21 12 16.5 14.6 16.5 19.79"
}), React.createElement("polyline", {
  points: "3.27 6.96 12 12.01 20.73 6.96"
}), React.createElement("line", {
  x1: 12,
  y1: 22.08,
  x2: 12,
  y2: 12
}));

const Coffee = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M18 8h1a4 4 0 0 1 0 8h-1"
}), React.createElement("path", {
  d: "M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"
}), React.createElement("line", {
  x1: 6,
  y1: 1,
  x2: 6,
  y2: 4
}), React.createElement("line", {
  x1: 10,
  y1: 1,
  x2: 10,
  y2: 4
}), React.createElement("line", {
  x1: 14,
  y1: 1,
  x2: 14,
  y2: 4
}));

const Columns = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"
}));

const Command = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
}));

const Compass = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 10
}), React.createElement("polygon", {
  points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
}));

const Copy = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("rect", {
  x: 9,
  y: 9,
  width: 13,
  height: 13,
  rx: 2,
  ry: 2
}), React.createElement("path", {
  d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
}));

const CornerDownLeft = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "9 10 4 15 9 20"
}), React.createElement("path", {
  d: "M20 4v7a4 4 0 0 1-4 4H4"
}));

const CornerDownRight = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "15 10 20 15 15 20"
}), React.createElement("path", {
  d: "M4 4v7a4 4 0 0 0 4 4h12"
}));

const CornerLeftDown = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "14 15 9 20 4 15"
}), React.createElement("path", {
  d: "M20 4h-7a4 4 0 0 0-4 4v12"
}));

const CornerLeftUp = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "14 9 9 4 4 9"
}), React.createElement("path", {
  d: "M20 20h-7a4 4 0 0 1-4-4V4"
}));

const CornerRightDown = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "10 15 15 20 20 15"
}), React.createElement("path", {
  d: "M4 4h7a4 4 0 0 1 4 4v12"
}));

const CornerRightUp = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "10 9 15 4 20 9"
}), React.createElement("path", {
  d: "M4 20h7a4 4 0 0 0 4-4V4"
}));

const CornerUpLeft = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "9 14 4 9 9 4"
}), React.createElement("path", {
  d: "M20 20v-7a4 4 0 0 0-4-4H4"
}));

const CornerUpRight = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "15 14 20 9 15 4"
}), React.createElement("path", {
  d: "M4 20v-7a4 4 0 0 1 4-4h12"
}));

const Cpu = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("rect", {
  x: 4,
  y: 4,
  width: 16,
  height: 16,
  rx: 2,
  ry: 2
}), React.createElement("rect", {
  x: 9,
  y: 9,
  width: 6,
  height: 6
}), React.createElement("line", {
  x1: 9,
  y1: 1,
  x2: 9,
  y2: 4
}), React.createElement("line", {
  x1: 15,
  y1: 1,
  x2: 15,
  y2: 4
}), React.createElement("line", {
  x1: 9,
  y1: 20,
  x2: 9,
  y2: 23
}), React.createElement("line", {
  x1: 15,
  y1: 20,
  x2: 15,
  y2: 23
}), React.createElement("line", {
  x1: 20,
  y1: 9,
  x2: 23,
  y2: 9
}), React.createElement("line", {
  x1: 20,
  y1: 14,
  x2: 23,
  y2: 14
}), React.createElement("line", {
  x1: 1,
  y1: 9,
  x2: 4,
  y2: 9
}), React.createElement("line", {
  x1: 1,
  y1: 14,
  x2: 4,
  y2: 14
}));

const CreditCard = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("rect", {
  x: 1,
  y: 4,
  width: 22,
  height: 16,
  rx: 2,
  ry: 2
}), React.createElement("line", {
  x1: 1,
  y1: 10,
  x2: 23,
  y2: 10
}));

const Crop = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M6.13 1L6 16a2 2 0 0 0 2 2h15"
}), React.createElement("path", {
  d: "M1 6.13L16 6a2 2 0 0 1 2 2v15"
}));

const Crosshair = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 10
}), React.createElement("line", {
  x1: 22,
  y1: 12,
  x2: 18,
  y2: 12
}), React.createElement("line", {
  x1: 6,
  y1: 12,
  x2: 2,
  y2: 12
}), React.createElement("line", {
  x1: 12,
  y1: 6,
  x2: 12,
  y2: 2
}), React.createElement("line", {
  x1: 12,
  y1: 22,
  x2: 12,
  y2: 18
}));

const Database = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("ellipse", {
  cx: 12,
  cy: 5,
  rx: 9,
  ry: 3
}), React.createElement("path", {
  d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"
}), React.createElement("path", {
  d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"
}));

const Delete = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
}), React.createElement("line", {
  x1: 18,
  y1: 9,
  x2: 12,
  y2: 15
}), React.createElement("line", {
  x1: 12,
  y1: 9,
  x2: 18,
  y2: 15
}));

const Disc = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 10
}), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 3
}));

const DollarSign = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("line", {
  x1: 12,
  y1: 1,
  x2: 12,
  y2: 23
}), React.createElement("path", {
  d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
}));

const DownloadCloud = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "8 17 12 21 16 17"
}), React.createElement("line", {
  x1: 12,
  y1: 12,
  x2: 12,
  y2: 21
}), React.createElement("path", {
  d: "M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"
}));

const Download = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
}), React.createElement("polyline", {
  points: "7 10 12 15 17 10"
}), React.createElement("line", {
  x1: 12,
  y1: 15,
  x2: 12,
  y2: 3
}));

const Droplet = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"
}));

const Edit2 = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
}));

const Edit3 = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M12 20h9"
}), React.createElement("path", {
  d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
}));

const Edit = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
}), React.createElement("path", {
  d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
}));

const ExternalLink = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
}), React.createElement("polyline", {
  points: "15 3 21 3 21 9"
}), React.createElement("line", {
  x1: 10,
  y1: 14,
  x2: 21,
  y2: 3
}));

const EyeOff = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
}), React.createElement("line", {
  x1: 1,
  y1: 1,
  x2: 23,
  y2: 23
}));

const Eye = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
}), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 3
}));

const Facebook = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
}));

const FastForward = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polygon", {
  points: "13 19 22 12 13 5 13 19"
}), React.createElement("polygon", {
  points: "2 19 11 12 2 5 2 19"
}));

const Feather = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"
}), React.createElement("line", {
  x1: 16,
  y1: 8,
  x2: 2,
  y2: 22
}), React.createElement("line", {
  x1: 17.5,
  y1: 15,
  x2: 9,
  y2: 15
}));

const Figma = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"
}), React.createElement("path", {
  d: "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"
}), React.createElement("path", {
  d: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"
}), React.createElement("path", {
  d: "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"
}), React.createElement("path", {
  d: "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"
}));

const FileMinus = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
}), React.createElement("polyline", {
  points: "14 2 14 8 20 8"
}), React.createElement("line", {
  x1: 9,
  y1: 15,
  x2: 15,
  y2: 15
}));

const FilePlus = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
}), React.createElement("polyline", {
  points: "14 2 14 8 20 8"
}), React.createElement("line", {
  x1: 12,
  y1: 18,
  x2: 12,
  y2: 12
}), React.createElement("line", {
  x1: 9,
  y1: 15,
  x2: 15,
  y2: 15
}));

const FileText = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
}), React.createElement("polyline", {
  points: "14 2 14 8 20 8"
}), React.createElement("line", {
  x1: 16,
  y1: 13,
  x2: 8,
  y2: 13
}), React.createElement("line", {
  x1: 16,
  y1: 17,
  x2: 8,
  y2: 17
}), React.createElement("polyline", {
  points: "10 9 9 9 8 9"
}));

const File = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
}), React.createElement("polyline", {
  points: "13 2 13 9 20 9"
}));

const Film = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("rect", {
  x: 2,
  y: 2,
  width: 20,
  height: 20,
  rx: 2.18,
  ry: 2.18
}), React.createElement("line", {
  x1: 7,
  y1: 2,
  x2: 7,
  y2: 22
}), React.createElement("line", {
  x1: 17,
  y1: 2,
  x2: 17,
  y2: 22
}), React.createElement("line", {
  x1: 2,
  y1: 12,
  x2: 22,
  y2: 12
}), React.createElement("line", {
  x1: 2,
  y1: 7,
  x2: 7,
  y2: 7
}), React.createElement("line", {
  x1: 2,
  y1: 17,
  x2: 7,
  y2: 17
}), React.createElement("line", {
  x1: 17,
  y1: 17,
  x2: 22,
  y2: 17
}), React.createElement("line", {
  x1: 17,
  y1: 7,
  x2: 22,
  y2: 7
}));

const Filter = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polygon", {
  points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
}));

const Flag = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
}), React.createElement("line", {
  x1: 4,
  y1: 22,
  x2: 4,
  y2: 15
}));

const FolderMinus = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
}), React.createElement("line", {
  x1: 9,
  y1: 14,
  x2: 15,
  y2: 14
}));

const FolderPlus = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
}), React.createElement("line", {
  x1: 12,
  y1: 11,
  x2: 12,
  y2: 17
}), React.createElement("line", {
  x1: 9,
  y1: 14,
  x2: 15,
  y2: 14
}));

const Folder = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
}));

const Frown = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 10
}), React.createElement("path", {
  d: "M16 16s-1.5-2-4-2-4 2-4 2"
}), React.createElement("line", {
  x1: 9,
  y1: 9,
  x2: 9.01,
  y2: 9
}), React.createElement("line", {
  x1: 15,
  y1: 9,
  x2: 15.01,
  y2: 9
}));

const Gift = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "20 12 20 22 4 22 4 12"
}), React.createElement("rect", {
  x: 2,
  y: 7,
  width: 20,
  height: 5
}), React.createElement("line", {
  x1: 12,
  y1: 22,
  x2: 12,
  y2: 7
}), React.createElement("path", {
  d: "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"
}), React.createElement("path", {
  d: "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"
}));

const GitBranch = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("line", {
  x1: 6,
  y1: 3,
  x2: 6,
  y2: 15
}), React.createElement("circle", {
  cx: 18,
  cy: 6,
  r: 3
}), React.createElement("circle", {
  cx: 6,
  cy: 18,
  r: 3
}), React.createElement("path", {
  d: "M18 9a9 9 0 0 1-9 9"
}));

const GitCommit = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 4
}), React.createElement("line", {
  x1: 1.05,
  y1: 12,
  x2: 7,
  y2: 12
}), React.createElement("line", {
  x1: 17.01,
  y1: 12,
  x2: 22.96,
  y2: 12
}));

const GitMerge = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 18,
  cy: 18,
  r: 3
}), React.createElement("circle", {
  cx: 6,
  cy: 6,
  r: 3
}), React.createElement("path", {
  d: "M6 21V9a9 9 0 0 0 9 9"
}));

const GitPullRequest = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 18,
  cy: 18,
  r: 3
}), React.createElement("circle", {
  cx: 6,
  cy: 6,
  r: 3
}), React.createElement("path", {
  d: "M13 6h3a2 2 0 0 1 2 2v7"
}), React.createElement("line", {
  x1: 6,
  y1: 9,
  x2: 6,
  y2: 21
}));

const GitHub = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
}));

const Gitlab = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"
}));

const Globe = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 10
}), React.createElement("line", {
  x1: 2,
  y1: 12,
  x2: 22,
  y2: 12
}), React.createElement("path", {
  d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
}));

const Grid = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("rect", {
  x: 3,
  y: 3,
  width: 7,
  height: 7
}), React.createElement("rect", {
  x: 14,
  y: 3,
  width: 7,
  height: 7
}), React.createElement("rect", {
  x: 14,
  y: 14,
  width: 7,
  height: 7
}), React.createElement("rect", {
  x: 3,
  y: 14,
  width: 7,
  height: 7
}));

const HardDrive = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("line", {
  x1: 22,
  y1: 12,
  x2: 2,
  y2: 12
}), React.createElement("path", {
  d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
}), React.createElement("line", {
  x1: 6,
  y1: 16,
  x2: 6,
  y2: 16
}), React.createElement("line", {
  x1: 10,
  y1: 16,
  x2: 10,
  y2: 16
}));

const Hash = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("line", {
  x1: 4,
  y1: 9,
  x2: 20,
  y2: 9
}), React.createElement("line", {
  x1: 4,
  y1: 15,
  x2: 20,
  y2: 15
}), React.createElement("line", {
  x1: 10,
  y1: 3,
  x2: 8,
  y2: 21
}), React.createElement("line", {
  x1: 16,
  y1: 3,
  x2: 14,
  y2: 21
}));

const Headphones = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M3 18v-6a9 9 0 0 1 18 0v6"
}), React.createElement("path", {
  d: "M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"
}));

const Heart = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
}));

const HelpCircle = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 10
}), React.createElement("path", {
  d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
}), React.createElement("line", {
  x1: 12,
  y1: 17,
  x2: 12,
  y2: 17
}));

const Hexagon = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
}));

const Home = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
}), React.createElement("polyline", {
  points: "9 22 9 12 15 12 15 22"
}));

const Image = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("rect", {
  x: 3,
  y: 3,
  width: 18,
  height: 18,
  rx: 2,
  ry: 2
}), React.createElement("circle", {
  cx: 8.5,
  cy: 8.5,
  r: 1.5
}), React.createElement("polyline", {
  points: "21 15 16 10 5 21"
}));

const Inbox = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "22 12 16 12 14 15 10 15 8 12 2 12"
}), React.createElement("path", {
  d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
}));

const Info = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 10
}), React.createElement("line", {
  x1: 12,
  y1: 16,
  x2: 12,
  y2: 12
}), React.createElement("line", {
  x1: 12,
  y1: 8,
  x2: 12,
  y2: 8
}));

const Instagram = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("rect", {
  x: 2,
  y: 2,
  width: 20,
  height: 20,
  rx: 5,
  ry: 5
}), React.createElement("path", {
  d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
}), React.createElement("line", {
  x1: 17.5,
  y1: 6.5,
  x2: 17.5,
  y2: 6.5
}));

const Italic = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("line", {
  x1: 19,
  y1: 4,
  x2: 10,
  y2: 4
}), React.createElement("line", {
  x1: 14,
  y1: 20,
  x2: 5,
  y2: 20
}), React.createElement("line", {
  x1: 15,
  y1: 4,
  x2: 9,
  y2: 20
}));

const Key = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"
}));

const Layers = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polygon", {
  points: "12 2 2 7 12 12 22 7 12 2"
}), React.createElement("polyline", {
  points: "2 17 12 22 22 17"
}), React.createElement("polyline", {
  points: "2 12 12 17 22 12"
}));

const Layout = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("rect", {
  x: 3,
  y: 3,
  width: 18,
  height: 18,
  rx: 2,
  ry: 2
}), React.createElement("line", {
  x1: 3,
  y1: 9,
  x2: 21,
  y2: 9
}), React.createElement("line", {
  x1: 9,
  y1: 21,
  x2: 9,
  y2: 9
}));

const LifeBuoy = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 10
}), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 4
}), React.createElement("line", {
  x1: 4.93,
  y1: 4.93,
  x2: 9.17,
  y2: 9.17
}), React.createElement("line", {
  x1: 14.83,
  y1: 14.83,
  x2: 19.07,
  y2: 19.07
}), React.createElement("line", {
  x1: 14.83,
  y1: 9.17,
  x2: 19.07,
  y2: 4.93
}), React.createElement("line", {
  x1: 14.83,
  y1: 9.17,
  x2: 18.36,
  y2: 5.64
}), React.createElement("line", {
  x1: 4.93,
  y1: 19.07,
  x2: 9.17,
  y2: 14.83
}));

const Link2 = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"
}), React.createElement("line", {
  x1: 8,
  y1: 12,
  x2: 16,
  y2: 12
}));

const Link = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
}), React.createElement("path", {
  d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
}));

const Linkedin = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
}), React.createElement("rect", {
  x: 2,
  y: 9,
  width: 4,
  height: 12
}), React.createElement("circle", {
  cx: 4,
  cy: 4,
  r: 2
}));

const List = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("line", {
  x1: 8,
  y1: 6,
  x2: 21,
  y2: 6
}), React.createElement("line", {
  x1: 8,
  y1: 12,
  x2: 21,
  y2: 12
}), React.createElement("line", {
  x1: 8,
  y1: 18,
  x2: 21,
  y2: 18
}), React.createElement("line", {
  x1: 3,
  y1: 6,
  x2: 3,
  y2: 6
}), React.createElement("line", {
  x1: 3,
  y1: 12,
  x2: 3,
  y2: 12
}), React.createElement("line", {
  x1: 3,
  y1: 18,
  x2: 3,
  y2: 18
}));

const Loader = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("line", {
  x1: 12,
  y1: 2,
  x2: 12,
  y2: 6
}), React.createElement("line", {
  x1: 12,
  y1: 18,
  x2: 12,
  y2: 22
}), React.createElement("line", {
  x1: 4.93,
  y1: 4.93,
  x2: 7.76,
  y2: 7.76
}), React.createElement("line", {
  x1: 16.24,
  y1: 16.24,
  x2: 19.07,
  y2: 19.07
}), React.createElement("line", {
  x1: 2,
  y1: 12,
  x2: 6,
  y2: 12
}), React.createElement("line", {
  x1: 18,
  y1: 12,
  x2: 22,
  y2: 12
}), React.createElement("line", {
  x1: 4.93,
  y1: 19.07,
  x2: 7.76,
  y2: 16.24
}), React.createElement("line", {
  x1: 16.24,
  y1: 7.76,
  x2: 19.07,
  y2: 4.93
}));

const Lock = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("rect", {
  x: 3,
  y: 11,
  width: 18,
  height: 11,
  rx: 2,
  ry: 2
}), React.createElement("path", {
  d: "M7 11V7a5 5 0 0 1 10 0v4"
}));

const LogIn = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
}), React.createElement("polyline", {
  points: "10 17 15 12 10 7"
}), React.createElement("line", {
  x1: 15,
  y1: 12,
  x2: 3,
  y2: 12
}));

const LogOut = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
}), React.createElement("polyline", {
  points: "16 17 21 12 16 7"
}), React.createElement("line", {
  x1: 21,
  y1: 12,
  x2: 9,
  y2: 12
}));

const Mail = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
}), React.createElement("polyline", {
  points: "22,6 12,13 2,6"
}));

const MapPin = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
}), React.createElement("circle", {
  cx: 12,
  cy: 10,
  r: 3
}));

const Map = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polygon", {
  points: "1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"
}), React.createElement("line", {
  x1: 8,
  y1: 2,
  x2: 8,
  y2: 18
}), React.createElement("line", {
  x1: 16,
  y1: 6,
  x2: 16,
  y2: 22
}));

const Maximize2 = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "15 3 21 3 21 9"
}), React.createElement("polyline", {
  points: "9 21 3 21 3 15"
}), React.createElement("line", {
  x1: 21,
  y1: 3,
  x2: 14,
  y2: 10
}), React.createElement("line", {
  x1: 3,
  y1: 21,
  x2: 10,
  y2: 14
}));

const Maximize = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
}));

const Meh = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 10
}), React.createElement("line", {
  x1: 8,
  y1: 15,
  x2: 16,
  y2: 15
}), React.createElement("line", {
  x1: 9,
  y1: 9,
  x2: 9.01,
  y2: 9
}), React.createElement("line", {
  x1: 15,
  y1: 9,
  x2: 15.01,
  y2: 9
}));

const Menu = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("line", {
  x1: 3,
  y1: 12,
  x2: 21,
  y2: 12
}), React.createElement("line", {
  x1: 3,
  y1: 6,
  x2: 21,
  y2: 6
}), React.createElement("line", {
  x1: 3,
  y1: 18,
  x2: 21,
  y2: 18
}));

const MessageCircle = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
}));

const MessageSquare = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
}));

const MicOff = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("line", {
  x1: 1,
  y1: 1,
  x2: 23,
  y2: 23
}), React.createElement("path", {
  d: "M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"
}), React.createElement("path", {
  d: "M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"
}), React.createElement("line", {
  x1: 12,
  y1: 19,
  x2: 12,
  y2: 23
}), React.createElement("line", {
  x1: 8,
  y1: 23,
  x2: 16,
  y2: 23
}));

const Mic = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"
}), React.createElement("path", {
  d: "M19 10v2a7 7 0 0 1-14 0v-2"
}), React.createElement("line", {
  x1: 12,
  y1: 19,
  x2: 12,
  y2: 23
}), React.createElement("line", {
  x1: 8,
  y1: 23,
  x2: 16,
  y2: 23
}));

const Minimize2 = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "4 14 10 14 10 20"
}), React.createElement("polyline", {
  points: "20 10 14 10 14 4"
}), React.createElement("line", {
  x1: 14,
  y1: 10,
  x2: 21,
  y2: 3
}), React.createElement("line", {
  x1: 3,
  y1: 21,
  x2: 10,
  y2: 14
}));

const Minimize = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"
}));

const MinusCircle = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 10
}), React.createElement("line", {
  x1: 8,
  y1: 12,
  x2: 16,
  y2: 12
}));

const MinusSquare = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("rect", {
  x: 3,
  y: 3,
  width: 18,
  height: 18,
  rx: 2,
  ry: 2
}), React.createElement("line", {
  x1: 8,
  y1: 12,
  x2: 16,
  y2: 12
}));

const Minus = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("line", {
  x1: 5,
  y1: 12,
  x2: 19,
  y2: 12
}));

const Monitor = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("rect", {
  x: 2,
  y: 3,
  width: 20,
  height: 14,
  rx: 2,
  ry: 2
}), React.createElement("line", {
  x1: 8,
  y1: 21,
  x2: 16,
  y2: 21
}), React.createElement("line", {
  x1: 12,
  y1: 17,
  x2: 12,
  y2: 21
}));

const Moon = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
}));

const MoreHorizontal = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 1
}), React.createElement("circle", {
  cx: 19,
  cy: 12,
  r: 1
}), React.createElement("circle", {
  cx: 5,
  cy: 12,
  r: 1
}));

const MoreVertical = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 1
}), React.createElement("circle", {
  cx: 12,
  cy: 5,
  r: 1
}), React.createElement("circle", {
  cx: 12,
  cy: 19,
  r: 1
}));

const MousePointer = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"
}), React.createElement("path", {
  d: "M13 13l6 6"
}));

const Move = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "5 9 2 12 5 15"
}), React.createElement("polyline", {
  points: "9 5 12 2 15 5"
}), React.createElement("polyline", {
  points: "15 19 12 22 9 19"
}), React.createElement("polyline", {
  points: "19 9 22 12 19 15"
}), React.createElement("line", {
  x1: 2,
  y1: 12,
  x2: 22,
  y2: 12
}), React.createElement("line", {
  x1: 12,
  y1: 2,
  x2: 12,
  y2: 22
}));

const Music = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M9 18V5l12-2v13"
}), React.createElement("circle", {
  cx: 6,
  cy: 18,
  r: 3
}), React.createElement("circle", {
  cx: 18,
  cy: 16,
  r: 3
}));

const Navigation2 = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polygon", {
  points: "12 2 19 21 12 17 5 21 12 2"
}));

const Navigation = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polygon", {
  points: "3 11 22 2 13 21 11 13 3 11"
}));

const Octagon = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polygon", {
  points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
}));

const Package = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("line", {
  x1: 16.5,
  y1: 9.4,
  x2: 7.5,
  y2: 4.21
}), React.createElement("path", {
  d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
}), React.createElement("polyline", {
  points: "3.27 6.96 12 12.01 20.73 6.96"
}), React.createElement("line", {
  x1: 12,
  y1: 22.08,
  x2: 12,
  y2: 12
}));

const Paperclip = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"
}));

const PauseCircle = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 10
}), React.createElement("line", {
  x1: 10,
  y1: 15,
  x2: 10,
  y2: 9
}), React.createElement("line", {
  x1: 14,
  y1: 15,
  x2: 14,
  y2: 9
}));

const Pause = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("rect", {
  x: 6,
  y: 4,
  width: 4,
  height: 16
}), React.createElement("rect", {
  x: 14,
  y: 4,
  width: 4,
  height: 16
}));

const PenTool = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M12 19l7-7 3 3-7 7-3-3z"
}), React.createElement("path", {
  d: "M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"
}), React.createElement("path", {
  d: "M2 2l7.586 7.586"
}), React.createElement("circle", {
  cx: 11,
  cy: 11,
  r: 2
}));

const Percent = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("line", {
  x1: 19,
  y1: 5,
  x2: 5,
  y2: 19
}), React.createElement("circle", {
  cx: 6.5,
  cy: 6.5,
  r: 2.5
}), React.createElement("circle", {
  cx: 17.5,
  cy: 17.5,
  r: 2.5
}));

const PhoneCall = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
}));

const PhoneForwarded = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "19 1 23 5 19 9"
}), React.createElement("line", {
  x1: 15,
  y1: 5,
  x2: 23,
  y2: 5
}), React.createElement("path", {
  d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
}));

const PhoneIncoming = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "16 2 16 8 22 8"
}), React.createElement("line", {
  x1: 23,
  y1: 1,
  x2: 16,
  y2: 8
}), React.createElement("path", {
  d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
}));

const PhoneMissed = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("line", {
  x1: 23,
  y1: 1,
  x2: 17,
  y2: 7
}), React.createElement("line", {
  x1: 17,
  y1: 1,
  x2: 23,
  y2: 7
}), React.createElement("path", {
  d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
}));

const PhoneOff = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"
}), React.createElement("line", {
  x1: 23,
  y1: 1,
  x2: 1,
  y2: 23
}));

const PhoneOutgoing = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "23 7 23 1 17 1"
}), React.createElement("line", {
  x1: 16,
  y1: 8,
  x2: 23,
  y2: 1
}), React.createElement("path", {
  d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
}));

const Phone = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
}));

const PieChart = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M21.21 15.89A10 10 0 1 1 8 2.83"
}), React.createElement("path", {
  d: "M22 12A10 10 0 0 0 12 2v10z"
}));

const PlayCircle = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 10
}), React.createElement("polygon", {
  points: "10 8 16 12 10 16 10 8"
}));

const Play = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polygon", {
  points: "5 3 19 12 5 21 5 3"
}));

const PlusCircle = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 10
}), React.createElement("line", {
  x1: 12,
  y1: 8,
  x2: 12,
  y2: 16
}), React.createElement("line", {
  x1: 8,
  y1: 12,
  x2: 16,
  y2: 12
}));

const PlusSquare = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("rect", {
  x: 3,
  y: 3,
  width: 18,
  height: 18,
  rx: 2,
  ry: 2
}), React.createElement("line", {
  x1: 12,
  y1: 8,
  x2: 12,
  y2: 16
}), React.createElement("line", {
  x1: 8,
  y1: 12,
  x2: 16,
  y2: 12
}));

const Plus = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("line", {
  x1: 12,
  y1: 5,
  x2: 12,
  y2: 19
}), React.createElement("line", {
  x1: 5,
  y1: 12,
  x2: 19,
  y2: 12
}));

const Pocket = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"
}), React.createElement("polyline", {
  points: "8 10 12 14 16 10"
}));

const Power = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M18.36 6.64a9 9 0 1 1-12.73 0"
}), React.createElement("line", {
  x1: 12,
  y1: 2,
  x2: 12,
  y2: 12
}));

const Printer = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "6 9 6 2 18 2 18 9"
}), React.createElement("path", {
  d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
}), React.createElement("rect", {
  x: 6,
  y: 14,
  width: 12,
  height: 8
}));

const Radio = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 2
}), React.createElement("path", {
  d: "M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"
}));

const RefreshCcw = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "1 4 1 10 7 10"
}), React.createElement("polyline", {
  points: "23 20 23 14 17 14"
}), React.createElement("path", {
  d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"
}));

const RefreshCw = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "23 4 23 10 17 10"
}), React.createElement("polyline", {
  points: "1 20 1 14 7 14"
}), React.createElement("path", {
  d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
}));

const Repeat = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "17 1 21 5 17 9"
}), React.createElement("path", {
  d: "M3 11V9a4 4 0 0 1 4-4h14"
}), React.createElement("polyline", {
  points: "7 23 3 19 7 15"
}), React.createElement("path", {
  d: "M21 13v2a4 4 0 0 1-4 4H3"
}));

const Rewind = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polygon", {
  points: "11 19 2 12 11 5 11 19"
}), React.createElement("polygon", {
  points: "22 19 13 12 22 5 22 19"
}));

const RotateCcw = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "1 4 1 10 7 10"
}), React.createElement("path", {
  d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"
}));

const RotateCw = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "23 4 23 10 17 10"
}), React.createElement("path", {
  d: "M20.49 15a9 9 0 1 1-2.12-9.36L23 10"
}));

const Rss = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M4 11a9 9 0 0 1 9 9"
}), React.createElement("path", {
  d: "M4 4a16 16 0 0 1 16 16"
}), React.createElement("circle", {
  cx: 5,
  cy: 19,
  r: 1
}));

const Save = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
}), React.createElement("polyline", {
  points: "17 21 17 13 7 13 7 21"
}), React.createElement("polyline", {
  points: "7 3 7 8 15 8"
}));

const Scissors = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 6,
  cy: 6,
  r: 3
}), React.createElement("circle", {
  cx: 6,
  cy: 18,
  r: 3
}), React.createElement("line", {
  x1: 20,
  y1: 4,
  x2: 8.12,
  y2: 15.88
}), React.createElement("line", {
  x1: 14.47,
  y1: 14.48,
  x2: 20,
  y2: 20
}), React.createElement("line", {
  x1: 8.12,
  y1: 8.12,
  x2: 12,
  y2: 12
}));

const Search = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 11,
  cy: 11,
  r: 8
}), React.createElement("line", {
  x1: 21,
  y1: 21,
  x2: 16.65,
  y2: 16.65
}));

const Send = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("line", {
  x1: 22,
  y1: 2,
  x2: 11,
  y2: 13
}), React.createElement("polygon", {
  points: "22 2 15 22 11 13 2 9 22 2"
}));

const Server = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("rect", {
  x: 2,
  y: 2,
  width: 20,
  height: 8,
  rx: 2,
  ry: 2
}), React.createElement("rect", {
  x: 2,
  y: 14,
  width: 20,
  height: 8,
  rx: 2,
  ry: 2
}), React.createElement("line", {
  x1: 6,
  y1: 6,
  x2: 6,
  y2: 6
}), React.createElement("line", {
  x1: 6,
  y1: 18,
  x2: 6,
  y2: 18
}));

const Settings = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 3
}), React.createElement("path", {
  d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
}));

const Share2 = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 18,
  cy: 5,
  r: 3
}), React.createElement("circle", {
  cx: 6,
  cy: 12,
  r: 3
}), React.createElement("circle", {
  cx: 18,
  cy: 19,
  r: 3
}), React.createElement("line", {
  x1: 8.59,
  y1: 13.51,
  x2: 15.42,
  y2: 17.49
}), React.createElement("line", {
  x1: 15.41,
  y1: 6.51,
  x2: 8.59,
  y2: 10.49
}));

const Share = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
}), React.createElement("polyline", {
  points: "16 6 12 2 8 6"
}), React.createElement("line", {
  x1: 12,
  y1: 2,
  x2: 12,
  y2: 15
}));

const ShieldOff = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"
}), React.createElement("path", {
  d: "M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"
}), React.createElement("line", {
  x1: 1,
  y1: 1,
  x2: 23,
  y2: 23
}));

const Shield = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
}));

const ShoppingBag = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
}), React.createElement("line", {
  x1: 3,
  y1: 6,
  x2: 21,
  y2: 6
}), React.createElement("path", {
  d: "M16 10a4 4 0 0 1-8 0"
}));

const ShoppingCart = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 9,
  cy: 21,
  r: 1
}), React.createElement("circle", {
  cx: 20,
  cy: 21,
  r: 1
}), React.createElement("path", {
  d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
}));

const Shuffle = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "16 3 21 3 21 8"
}), React.createElement("line", {
  x1: 4,
  y1: 20,
  x2: 21,
  y2: 3
}), React.createElement("polyline", {
  points: "21 16 21 21 16 21"
}), React.createElement("line", {
  x1: 15,
  y1: 15,
  x2: 21,
  y2: 21
}), React.createElement("line", {
  x1: 4,
  y1: 4,
  x2: 9,
  y2: 9
}));

const Sidebar = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("rect", {
  x: 3,
  y: 3,
  width: 18,
  height: 18,
  rx: 2,
  ry: 2
}), React.createElement("line", {
  x1: 9,
  y1: 3,
  x2: 9,
  y2: 21
}));

const SkipBack = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polygon", {
  points: "19 20 9 12 19 4 19 20"
}), React.createElement("line", {
  x1: 5,
  y1: 19,
  x2: 5,
  y2: 5
}));

const SkipForward = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polygon", {
  points: "5 4 15 12 5 20 5 4"
}), React.createElement("line", {
  x1: 19,
  y1: 5,
  x2: 19,
  y2: 19
}));

const Slack = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"
}), React.createElement("path", {
  d: "M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
}), React.createElement("path", {
  d: "M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"
}), React.createElement("path", {
  d: "M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"
}), React.createElement("path", {
  d: "M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"
}), React.createElement("path", {
  d: "M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"
}), React.createElement("path", {
  d: "M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"
}), React.createElement("path", {
  d: "M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"
}));

const Slash = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 10
}), React.createElement("line", {
  x1: 4.93,
  y1: 4.93,
  x2: 19.07,
  y2: 19.07
}));

const Sliders = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("line", {
  x1: 4,
  y1: 21,
  x2: 4,
  y2: 14
}), React.createElement("line", {
  x1: 4,
  y1: 10,
  x2: 4,
  y2: 3
}), React.createElement("line", {
  x1: 12,
  y1: 21,
  x2: 12,
  y2: 12
}), React.createElement("line", {
  x1: 12,
  y1: 8,
  x2: 12,
  y2: 3
}), React.createElement("line", {
  x1: 20,
  y1: 21,
  x2: 20,
  y2: 16
}), React.createElement("line", {
  x1: 20,
  y1: 12,
  x2: 20,
  y2: 3
}), React.createElement("line", {
  x1: 1,
  y1: 14,
  x2: 7,
  y2: 14
}), React.createElement("line", {
  x1: 9,
  y1: 8,
  x2: 15,
  y2: 8
}), React.createElement("line", {
  x1: 17,
  y1: 16,
  x2: 23,
  y2: 16
}));

const Smartphone = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("rect", {
  x: 5,
  y: 2,
  width: 14,
  height: 20,
  rx: 2,
  ry: 2
}), React.createElement("line", {
  x1: 12,
  y1: 18,
  x2: 12,
  y2: 18
}));

const Smile = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 10
}), React.createElement("path", {
  d: "M8 14s1.5 2 4 2 4-2 4-2"
}), React.createElement("line", {
  x1: 9,
  y1: 9,
  x2: 9.01,
  y2: 9
}), React.createElement("line", {
  x1: 15,
  y1: 9,
  x2: 15.01,
  y2: 9
}));

const Speaker = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("rect", {
  x: 4,
  y: 2,
  width: 16,
  height: 20,
  rx: 2,
  ry: 2
}), React.createElement("circle", {
  cx: 12,
  cy: 14,
  r: 4
}), React.createElement("line", {
  x1: 12,
  y1: 6,
  x2: 12,
  y2: 6
}));

const Square = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("rect", {
  x: 3,
  y: 3,
  width: 18,
  height: 18,
  rx: 2,
  ry: 2
}));

const Star = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polygon", {
  points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
}));

const StopCircle = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 10
}), React.createElement("rect", {
  x: 9,
  y: 9,
  width: 6,
  height: 6
}));

const Sun = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 5
}), React.createElement("line", {
  x1: 12,
  y1: 1,
  x2: 12,
  y2: 3
}), React.createElement("line", {
  x1: 12,
  y1: 21,
  x2: 12,
  y2: 23
}), React.createElement("line", {
  x1: 4.22,
  y1: 4.22,
  x2: 5.64,
  y2: 5.64
}), React.createElement("line", {
  x1: 18.36,
  y1: 18.36,
  x2: 19.78,
  y2: 19.78
}), React.createElement("line", {
  x1: 1,
  y1: 12,
  x2: 3,
  y2: 12
}), React.createElement("line", {
  x1: 21,
  y1: 12,
  x2: 23,
  y2: 12
}), React.createElement("line", {
  x1: 4.22,
  y1: 19.78,
  x2: 5.64,
  y2: 18.36
}), React.createElement("line", {
  x1: 18.36,
  y1: 5.64,
  x2: 19.78,
  y2: 4.22
}));

const Sunrise = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M17 18a5 5 0 0 0-10 0"
}), React.createElement("line", {
  x1: 12,
  y1: 2,
  x2: 12,
  y2: 9
}), React.createElement("line", {
  x1: 4.22,
  y1: 10.22,
  x2: 5.64,
  y2: 11.64
}), React.createElement("line", {
  x1: 1,
  y1: 18,
  x2: 3,
  y2: 18
}), React.createElement("line", {
  x1: 21,
  y1: 18,
  x2: 23,
  y2: 18
}), React.createElement("line", {
  x1: 18.36,
  y1: 11.64,
  x2: 19.78,
  y2: 10.22
}), React.createElement("line", {
  x1: 23,
  y1: 22,
  x2: 1,
  y2: 22
}), React.createElement("polyline", {
  points: "8 6 12 2 16 6"
}));

const Sunset = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M17 18a5 5 0 0 0-10 0"
}), React.createElement("line", {
  x1: 12,
  y1: 9,
  x2: 12,
  y2: 2
}), React.createElement("line", {
  x1: 4.22,
  y1: 10.22,
  x2: 5.64,
  y2: 11.64
}), React.createElement("line", {
  x1: 1,
  y1: 18,
  x2: 3,
  y2: 18
}), React.createElement("line", {
  x1: 21,
  y1: 18,
  x2: 23,
  y2: 18
}), React.createElement("line", {
  x1: 18.36,
  y1: 11.64,
  x2: 19.78,
  y2: 10.22
}), React.createElement("line", {
  x1: 23,
  y1: 22,
  x2: 1,
  y2: 22
}), React.createElement("polyline", {
  points: "16 5 12 9 8 5"
}));

const Tablet = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("rect", {
  x: 4,
  y: 2,
  width: 16,
  height: 20,
  rx: 2,
  ry: 2,
  transform: "rotate(180 12 12)"
}), React.createElement("line", {
  x1: 12,
  y1: 18,
  x2: 12,
  y2: 18
}));

const Tag = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
}), React.createElement("line", {
  x1: 7,
  y1: 7,
  x2: 7,
  y2: 7
}));

const Target = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 10
}), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 6
}), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 2
}));

const Terminal = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "4 17 10 11 4 5"
}), React.createElement("line", {
  x1: 12,
  y1: 19,
  x2: 20,
  y2: 19
}));

const Thermometer = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"
}));

const ThumbsDown = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
}));

const ThumbsUp = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
}));

const ToggleLeft = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("rect", {
  x: 1,
  y: 5,
  width: 22,
  height: 14,
  rx: 7,
  ry: 7
}), React.createElement("circle", {
  cx: 8,
  cy: 12,
  r: 3
}));

const ToggleRight = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("rect", {
  x: 1,
  y: 5,
  width: 22,
  height: 14,
  rx: 7,
  ry: 7
}), React.createElement("circle", {
  cx: 16,
  cy: 12,
  r: 3
}));

const Trash2 = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "3 6 5 6 21 6"
}), React.createElement("path", {
  d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
}), React.createElement("line", {
  x1: 10,
  y1: 11,
  x2: 10,
  y2: 17
}), React.createElement("line", {
  x1: 14,
  y1: 11,
  x2: 14,
  y2: 17
}));

const Trash = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "3 6 5 6 21 6"
}), React.createElement("path", {
  d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
}));

const Trello = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("rect", {
  x: 3,
  y: 3,
  width: 18,
  height: 18,
  rx: 2,
  ry: 2
}), React.createElement("rect", {
  x: 7,
  y: 7,
  width: 3,
  height: 9
}), React.createElement("rect", {
  x: 14,
  y: 7,
  width: 3,
  height: 5
}));

const TrendingDown = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "23 18 13.5 8.5 8.5 13.5 1 6"
}), React.createElement("polyline", {
  points: "17 18 23 18 23 12"
}));

const TrendingUp = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "23 6 13.5 15.5 8.5 10.5 1 18"
}), React.createElement("polyline", {
  points: "17 6 23 6 23 12"
}));

const Triangle = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
}));

const Truck = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("rect", {
  x: 1,
  y: 3,
  width: 15,
  height: 13
}), React.createElement("polygon", {
  points: "16 8 20 8 23 11 23 16 16 16 16 8"
}), React.createElement("circle", {
  cx: 5.5,
  cy: 18.5,
  r: 2.5
}), React.createElement("circle", {
  cx: 18.5,
  cy: 18.5,
  r: 2.5
}));

const Tv = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("rect", {
  x: 2,
  y: 7,
  width: 20,
  height: 15,
  rx: 2,
  ry: 2
}), React.createElement("polyline", {
  points: "17 2 12 7 7 2"
}));

const Twitter = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
}));

const Type = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "4 7 4 4 20 4 20 7"
}), React.createElement("line", {
  x1: 9,
  y1: 20,
  x2: 15,
  y2: 20
}), React.createElement("line", {
  x1: 12,
  y1: 4,
  x2: 12,
  y2: 20
}));

const Umbrella = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"
}));

const Underline = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"
}), React.createElement("line", {
  x1: 4,
  y1: 21,
  x2: 20,
  y2: 21
}));

const Unlock = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("rect", {
  x: 3,
  y: 11,
  width: 18,
  height: 11,
  rx: 2,
  ry: 2
}), React.createElement("path", {
  d: "M7 11V7a5 5 0 0 1 9.9-1"
}));

const UploadCloud = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "16 16 12 12 8 16"
}), React.createElement("line", {
  x1: 12,
  y1: 12,
  x2: 12,
  y2: 21
}), React.createElement("path", {
  d: "M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"
}), React.createElement("polyline", {
  points: "16 16 12 12 8 16"
}));

const Upload = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
}), React.createElement("polyline", {
  points: "17 8 12 3 7 8"
}), React.createElement("line", {
  x1: 12,
  y1: 3,
  x2: 12,
  y2: 15
}));

const UserCheck = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
}), React.createElement("circle", {
  cx: 8.5,
  cy: 7,
  r: 4
}), React.createElement("polyline", {
  points: "17 11 19 13 23 9"
}));

const UserMinus = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
}), React.createElement("circle", {
  cx: 8.5,
  cy: 7,
  r: 4
}), React.createElement("line", {
  x1: 23,
  y1: 11,
  x2: 17,
  y2: 11
}));

const UserPlus = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
}), React.createElement("circle", {
  cx: 8.5,
  cy: 7,
  r: 4
}), React.createElement("line", {
  x1: 20,
  y1: 8,
  x2: 20,
  y2: 14
}), React.createElement("line", {
  x1: 23,
  y1: 11,
  x2: 17,
  y2: 11
}));

const UserX = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
}), React.createElement("circle", {
  cx: 8.5,
  cy: 7,
  r: 4
}), React.createElement("line", {
  x1: 18,
  y1: 8,
  x2: 23,
  y2: 13
}), React.createElement("line", {
  x1: 23,
  y1: 8,
  x2: 18,
  y2: 13
}));

const User = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
}), React.createElement("circle", {
  cx: 12,
  cy: 7,
  r: 4
}));

const Users = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
}), React.createElement("circle", {
  cx: 9,
  cy: 7,
  r: 4
}), React.createElement("path", {
  d: "M23 21v-2a4 4 0 0 0-3-3.87"
}), React.createElement("path", {
  d: "M16 3.13a4 4 0 0 1 0 7.75"
}));

const VideoOff = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"
}), React.createElement("line", {
  x1: 1,
  y1: 1,
  x2: 23,
  y2: 23
}));

const Video = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polygon", {
  points: "23 7 16 12 23 17 23 7"
}), React.createElement("rect", {
  x: 1,
  y: 5,
  width: 15,
  height: 14,
  rx: 2,
  ry: 2
}));

const Voicemail = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 5.5,
  cy: 11.5,
  r: 4.5
}), React.createElement("circle", {
  cx: 18.5,
  cy: 11.5,
  r: 4.5
}), React.createElement("line", {
  x1: 5.5,
  y1: 16,
  x2: 18.5,
  y2: 16
}));

const Volume1 = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polygon", {
  points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
}), React.createElement("path", {
  d: "M15.54 8.46a5 5 0 0 1 0 7.07"
}));

const Volume2 = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polygon", {
  points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
}), React.createElement("path", {
  d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"
}));

const VolumeX = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polygon", {
  points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
}), React.createElement("line", {
  x1: 23,
  y1: 9,
  x2: 17,
  y2: 15
}), React.createElement("line", {
  x1: 17,
  y1: 9,
  x2: 23,
  y2: 15
}));

const Volume = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polygon", {
  points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
}));

const Watch = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 7
}), React.createElement("polyline", {
  points: "12 9 12 12 13.5 13.5"
}), React.createElement("path", {
  d: "M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"
}));

const WifiOff = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("line", {
  x1: 1,
  y1: 1,
  x2: 23,
  y2: 23
}), React.createElement("path", {
  d: "M16.72 11.06A10.94 10.94 0 0 1 19 12.55"
}), React.createElement("path", {
  d: "M5 12.55a10.94 10.94 0 0 1 5.17-2.39"
}), React.createElement("path", {
  d: "M10.71 5.05A16 16 0 0 1 22.58 9"
}), React.createElement("path", {
  d: "M1.42 9a15.91 15.91 0 0 1 4.7-2.88"
}), React.createElement("path", {
  d: "M8.53 16.11a6 6 0 0 1 6.95 0"
}), React.createElement("line", {
  x1: 12,
  y1: 20,
  x2: 12,
  y2: 20
}));

const Wifi = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M5 12.55a11 11 0 0 1 14.08 0"
}), React.createElement("path", {
  d: "M1.42 9a16 16 0 0 1 21.16 0"
}), React.createElement("path", {
  d: "M8.53 16.11a6 6 0 0 1 6.95 0"
}), React.createElement("line", {
  x1: 12,
  y1: 20,
  x2: 12,
  y2: 20
}));

const Wind = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"
}));

const XCircle = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 10
}), React.createElement("line", {
  x1: 15,
  y1: 9,
  x2: 9,
  y2: 15
}), React.createElement("line", {
  x1: 9,
  y1: 9,
  x2: 15,
  y2: 15
}));

const XOctagon = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polygon", {
  points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
}), React.createElement("line", {
  x1: 15,
  y1: 9,
  x2: 9,
  y2: 15
}), React.createElement("line", {
  x1: 9,
  y1: 9,
  x2: 15,
  y2: 15
}));

const XSquare = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("rect", {
  x: 3,
  y: 3,
  width: 18,
  height: 18,
  rx: 2,
  ry: 2
}), React.createElement("line", {
  x1: 9,
  y1: 9,
  x2: 15,
  y2: 15
}), React.createElement("line", {
  x1: 15,
  y1: 9,
  x2: 9,
  y2: 15
}));

const X = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("line", {
  x1: 18,
  y1: 6,
  x2: 6,
  y2: 18
}), React.createElement("line", {
  x1: 6,
  y1: 6,
  x2: 18,
  y2: 18
}));

const Youtube = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("path", {
  d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
}), React.createElement("polygon", {
  points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
}));

const ZapOff = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polyline", {
  points: "12.41 6.75 13 2 10.57 4.92"
}), React.createElement("polyline", {
  points: "18.57 12.91 21 10 15.66 10"
}), React.createElement("polyline", {
  points: "8 8 3 14 12 14 11 22 16 16"
}), React.createElement("line", {
  x1: 1,
  y1: 1,
  x2: 23,
  y2: 23
}));

const Zap = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("polygon", {
  points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
}));

const ZoomIn = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 11,
  cy: 11,
  r: 8
}), React.createElement("line", {
  x1: 21,
  y1: 21,
  x2: 16.65,
  y2: 16.65
}), React.createElement("line", {
  x1: 11,
  y1: 8,
  x2: 11,
  y2: 14
}), React.createElement("line", {
  x1: 8,
  y1: 11,
  x2: 14,
  y2: 11
}));

const ZoomOut = props => React.createElement("svg", _extends({}, defaults, props), React.createElement("circle", {
  cx: 11,
  cy: 11,
  r: 8
}), React.createElement("line", {
  x1: 21,
  y1: 21,
  x2: 16.65,
  y2: 16.65
}), React.createElement("line", {
  x1: 8,
  y1: 11,
  x2: 14,
  y2: 11
}));

exports.Activity = Activity;
exports.Airplay = Airplay;
exports.AlertCircle = AlertCircle;
exports.AlertOctagon = AlertOctagon;
exports.AlertTriangle = AlertTriangle;
exports.AlignCenter = AlignCenter;
exports.AlignJustify = AlignJustify;
exports.AlignLeft = AlignLeft;
exports.AlignRight = AlignRight;
exports.Anchor = Anchor;
exports.Aperture = Aperture;
exports.Archive = Archive;
exports.ArrowDown = ArrowDown;
exports.ArrowDownCircle = ArrowDownCircle;
exports.ArrowDownLeft = ArrowDownLeft;
exports.ArrowDownRight = ArrowDownRight;
exports.ArrowLeft = ArrowLeft;
exports.ArrowLeftCircle = ArrowLeftCircle;
exports.ArrowRight = ArrowRight;
exports.ArrowRightCircle = ArrowRightCircle;
exports.ArrowUp = ArrowUp;
exports.ArrowUpCircle = ArrowUpCircle;
exports.ArrowUpLeft = ArrowUpLeft;
exports.ArrowUpRight = ArrowUpRight;
exports.AtSign = AtSign;
exports.Award = Award;
exports.BarChart = BarChart;
exports.BarChart2 = BarChart2;
exports.Battery = Battery;
exports.BatteryCharging = BatteryCharging;
exports.Bell = Bell;
exports.BellOff = BellOff;
exports.Bluetooth = Bluetooth;
exports.Bold = Bold;
exports.Book = Book;
exports.BookOpen = BookOpen;
exports.Bookmark = Bookmark;
exports.Box = Box;
exports.Briefcase = Briefcase;
exports.Calendar = Calendar;
exports.Camera = Camera;
exports.CameraOff = CameraOff;
exports.Cast = Cast;
exports.Check = Check;
exports.CheckCircle = CheckCircle;
exports.CheckSquare = CheckSquare;
exports.ChevronDown = ChevronDown;
exports.ChevronLeft = ChevronLeft;
exports.ChevronRight = ChevronRight;
exports.ChevronUp = ChevronUp;
exports.ChevronsDown = ChevronsDown;
exports.ChevronsLeft = ChevronsLeft;
exports.ChevronsRight = ChevronsRight;
exports.ChevronsUp = ChevronsUp;
exports.Chrome = Chrome;
exports.Circle = Circle;
exports.Clipboard = Clipboard;
exports.Clock = Clock;
exports.Cloud = Cloud;
exports.CloudDrizzle = CloudDrizzle;
exports.CloudLightning = CloudLightning;
exports.CloudOff = CloudOff;
exports.CloudRain = CloudRain;
exports.CloudSnow = CloudSnow;
exports.Code = Code;
exports.Codepen = Codepen;
exports.Codesandbox = Codesandbox;
exports.Coffee = Coffee;
exports.Columns = Columns;
exports.Command = Command;
exports.Compass = Compass;
exports.Copy = Copy;
exports.CornerDownLeft = CornerDownLeft;
exports.CornerDownRight = CornerDownRight;
exports.CornerLeftDown = CornerLeftDown;
exports.CornerLeftUp = CornerLeftUp;
exports.CornerRightDown = CornerRightDown;
exports.CornerRightUp = CornerRightUp;
exports.CornerUpLeft = CornerUpLeft;
exports.CornerUpRight = CornerUpRight;
exports.Cpu = Cpu;
exports.CreditCard = CreditCard;
exports.Crop = Crop;
exports.Crosshair = Crosshair;
exports.Database = Database;
exports.Delete = Delete;
exports.Disc = Disc;
exports.DollarSign = DollarSign;
exports.Download = Download;
exports.DownloadCloud = DownloadCloud;
exports.Droplet = Droplet;
exports.Edit = Edit;
exports.Edit2 = Edit2;
exports.Edit3 = Edit3;
exports.ExternalLink = ExternalLink;
exports.Eye = Eye;
exports.EyeOff = EyeOff;
exports.Facebook = Facebook;
exports.FastForward = FastForward;
exports.Feather = Feather;
exports.Figma = Figma;
exports.File = File;
exports.FileMinus = FileMinus;
exports.FilePlus = FilePlus;
exports.FileText = FileText;
exports.Film = Film;
exports.Filter = Filter;
exports.Flag = Flag;
exports.Folder = Folder;
exports.FolderMinus = FolderMinus;
exports.FolderPlus = FolderPlus;
exports.Frown = Frown;
exports.Gift = Gift;
exports.GitBranch = GitBranch;
exports.GitCommit = GitCommit;
exports.GitHub = GitHub;
exports.GitMerge = GitMerge;
exports.GitPullRequest = GitPullRequest;
exports.Gitlab = Gitlab;
exports.Globe = Globe;
exports.Grid = Grid;
exports.HardDrive = HardDrive;
exports.Hash = Hash;
exports.Headphones = Headphones;
exports.Heart = Heart;
exports.HelpCircle = HelpCircle;
exports.Hexagon = Hexagon;
exports.Home = Home;
exports.Image = Image;
exports.Inbox = Inbox;
exports.Info = Info;
exports.Instagram = Instagram;
exports.Italic = Italic;
exports.Key = Key;
exports.Layers = Layers;
exports.Layout = Layout;
exports.LifeBuoy = LifeBuoy;
exports.Link = Link;
exports.Link2 = Link2;
exports.Linkedin = Linkedin;
exports.List = List;
exports.Loader = Loader;
exports.Lock = Lock;
exports.LogIn = LogIn;
exports.LogOut = LogOut;
exports.Mail = Mail;
exports.Map = Map;
exports.MapPin = MapPin;
exports.Maximize = Maximize;
exports.Maximize2 = Maximize2;
exports.Meh = Meh;
exports.Menu = Menu;
exports.MessageCircle = MessageCircle;
exports.MessageSquare = MessageSquare;
exports.Mic = Mic;
exports.MicOff = MicOff;
exports.Minimize = Minimize;
exports.Minimize2 = Minimize2;
exports.Minus = Minus;
exports.MinusCircle = MinusCircle;
exports.MinusSquare = MinusSquare;
exports.Monitor = Monitor;
exports.Moon = Moon;
exports.MoreHorizontal = MoreHorizontal;
exports.MoreVertical = MoreVertical;
exports.MousePointer = MousePointer;
exports.Move = Move;
exports.Music = Music;
exports.Navigation = Navigation;
exports.Navigation2 = Navigation2;
exports.Octagon = Octagon;
exports.Package = Package;
exports.Paperclip = Paperclip;
exports.Pause = Pause;
exports.PauseCircle = PauseCircle;
exports.PenTool = PenTool;
exports.Percent = Percent;
exports.Phone = Phone;
exports.PhoneCall = PhoneCall;
exports.PhoneForwarded = PhoneForwarded;
exports.PhoneIncoming = PhoneIncoming;
exports.PhoneMissed = PhoneMissed;
exports.PhoneOff = PhoneOff;
exports.PhoneOutgoing = PhoneOutgoing;
exports.PieChart = PieChart;
exports.Play = Play;
exports.PlayCircle = PlayCircle;
exports.Plus = Plus;
exports.PlusCircle = PlusCircle;
exports.PlusSquare = PlusSquare;
exports.Pocket = Pocket;
exports.Power = Power;
exports.Printer = Printer;
exports.Radio = Radio;
exports.RefreshCcw = RefreshCcw;
exports.RefreshCw = RefreshCw;
exports.Repeat = Repeat;
exports.Rewind = Rewind;
exports.RotateCcw = RotateCcw;
exports.RotateCw = RotateCw;
exports.Rss = Rss;
exports.Save = Save;
exports.Scissors = Scissors;
exports.Search = Search;
exports.Send = Send;
exports.Server = Server;
exports.Settings = Settings;
exports.Share = Share;
exports.Share2 = Share2;
exports.Shield = Shield;
exports.ShieldOff = ShieldOff;
exports.ShoppingBag = ShoppingBag;
exports.ShoppingCart = ShoppingCart;
exports.Shuffle = Shuffle;
exports.Sidebar = Sidebar;
exports.SkipBack = SkipBack;
exports.SkipForward = SkipForward;
exports.Slack = Slack;
exports.Slash = Slash;
exports.Sliders = Sliders;
exports.Smartphone = Smartphone;
exports.Smile = Smile;
exports.Speaker = Speaker;
exports.Square = Square;
exports.Star = Star;
exports.StopCircle = StopCircle;
exports.Sun = Sun;
exports.Sunrise = Sunrise;
exports.Sunset = Sunset;
exports.Tablet = Tablet;
exports.Tag = Tag;
exports.Target = Target;
exports.Terminal = Terminal;
exports.Thermometer = Thermometer;
exports.ThumbsDown = ThumbsDown;
exports.ThumbsUp = ThumbsUp;
exports.ToggleLeft = ToggleLeft;
exports.ToggleRight = ToggleRight;
exports.Trash = Trash;
exports.Trash2 = Trash2;
exports.Trello = Trello;
exports.TrendingDown = TrendingDown;
exports.TrendingUp = TrendingUp;
exports.Triangle = Triangle;
exports.Truck = Truck;
exports.Tv = Tv;
exports.Twitter = Twitter;
exports.Type = Type;
exports.Umbrella = Umbrella;
exports.Underline = Underline;
exports.Unlock = Unlock;
exports.Upload = Upload;
exports.UploadCloud = UploadCloud;
exports.User = User;
exports.UserCheck = UserCheck;
exports.UserMinus = UserMinus;
exports.UserPlus = UserPlus;
exports.UserX = UserX;
exports.Users = Users;
exports.Video = Video;
exports.VideoOff = VideoOff;
exports.Voicemail = Voicemail;
exports.Volume = Volume;
exports.Volume1 = Volume1;
exports.Volume2 = Volume2;
exports.VolumeX = VolumeX;
exports.Watch = Watch;
exports.Wifi = Wifi;
exports.WifiOff = WifiOff;
exports.Wind = Wind;
exports.X = X;
exports.XCircle = XCircle;
exports.XOctagon = XOctagon;
exports.XSquare = XSquare;
exports.Youtube = Youtube;
exports.Zap = Zap;
exports.ZapOff = ZapOff;
exports.ZoomIn = ZoomIn;
exports.ZoomOut = ZoomOut;

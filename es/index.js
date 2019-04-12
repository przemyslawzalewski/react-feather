import React from 'react';
import PropTypes from 'prop-types';

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

const propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
const defaultProps = {
  color: 'currentColor',
  size: 24
};

const Activity = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "22 12 18 12 15 21 9 3 6 12 2 12"
}));

Activity.propTypes = propTypes;
Activity.defaultProps = defaultProps;

const Airplay = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
}), React.createElement("polygon", {
  points: "12 15 17 21 7 21 12 15"
}));

Airplay.propTypes = propTypes;
Airplay.defaultProps = defaultProps;

const AlertCircle = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), React.createElement("line", {
  x1: "12",
  y1: "8",
  x2: "12",
  y2: "12"
}), React.createElement("line", {
  x1: "12",
  y1: "16",
  x2: "12",
  y2: "16"
}));

AlertCircle.propTypes = propTypes;
AlertCircle.defaultProps = defaultProps;

const AlertOctagon = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polygon", {
  points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
}), React.createElement("line", {
  x1: "12",
  y1: "8",
  x2: "12",
  y2: "12"
}), React.createElement("line", {
  x1: "12",
  y1: "16",
  x2: "12",
  y2: "16"
}));

AlertOctagon.propTypes = propTypes;
AlertOctagon.defaultProps = defaultProps;

const AlertTriangle = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
}), React.createElement("line", {
  x1: "12",
  y1: "9",
  x2: "12",
  y2: "13"
}), React.createElement("line", {
  x1: "12",
  y1: "17",
  x2: "12",
  y2: "17"
}));

AlertTriangle.propTypes = propTypes;
AlertTriangle.defaultProps = defaultProps;

const AlignCenter = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("line", {
  x1: "18",
  y1: "10",
  x2: "6",
  y2: "10"
}), React.createElement("line", {
  x1: "21",
  y1: "6",
  x2: "3",
  y2: "6"
}), React.createElement("line", {
  x1: "21",
  y1: "14",
  x2: "3",
  y2: "14"
}), React.createElement("line", {
  x1: "18",
  y1: "18",
  x2: "6",
  y2: "18"
}));

AlignCenter.propTypes = propTypes;
AlignCenter.defaultProps = defaultProps;

const AlignJustify = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("line", {
  x1: "21",
  y1: "10",
  x2: "3",
  y2: "10"
}), React.createElement("line", {
  x1: "21",
  y1: "6",
  x2: "3",
  y2: "6"
}), React.createElement("line", {
  x1: "21",
  y1: "14",
  x2: "3",
  y2: "14"
}), React.createElement("line", {
  x1: "21",
  y1: "18",
  x2: "3",
  y2: "18"
}));

AlignJustify.propTypes = propTypes;
AlignJustify.defaultProps = defaultProps;

const AlignLeft = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("line", {
  x1: "17",
  y1: "10",
  x2: "3",
  y2: "10"
}), React.createElement("line", {
  x1: "21",
  y1: "6",
  x2: "3",
  y2: "6"
}), React.createElement("line", {
  x1: "21",
  y1: "14",
  x2: "3",
  y2: "14"
}), React.createElement("line", {
  x1: "17",
  y1: "18",
  x2: "3",
  y2: "18"
}));

AlignLeft.propTypes = propTypes;
AlignLeft.defaultProps = defaultProps;

const AlignRight = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("line", {
  x1: "21",
  y1: "10",
  x2: "7",
  y2: "10"
}), React.createElement("line", {
  x1: "21",
  y1: "6",
  x2: "3",
  y2: "6"
}), React.createElement("line", {
  x1: "21",
  y1: "14",
  x2: "3",
  y2: "14"
}), React.createElement("line", {
  x1: "21",
  y1: "18",
  x2: "7",
  y2: "18"
}));

AlignRight.propTypes = propTypes;
AlignRight.defaultProps = defaultProps;

const Anchor = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "12",
  cy: "5",
  r: "3"
}), React.createElement("line", {
  x1: "12",
  y1: "22",
  x2: "12",
  y2: "8"
}), React.createElement("path", {
  d: "M5 12H2a10 10 0 0 0 20 0h-3"
}));

Anchor.propTypes = propTypes;
Anchor.defaultProps = defaultProps;

const Aperture = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), React.createElement("line", {
  x1: "14.31",
  y1: "8",
  x2: "20.05",
  y2: "17.94"
}), React.createElement("line", {
  x1: "9.69",
  y1: "8",
  x2: "21.17",
  y2: "8"
}), React.createElement("line", {
  x1: "7.38",
  y1: "12",
  x2: "13.12",
  y2: "2.06"
}), React.createElement("line", {
  x1: "9.69",
  y1: "16",
  x2: "3.95",
  y2: "6.06"
}), React.createElement("line", {
  x1: "14.31",
  y1: "16",
  x2: "2.83",
  y2: "16"
}), React.createElement("line", {
  x1: "16.62",
  y1: "12",
  x2: "10.88",
  y2: "21.94"
}));

Aperture.propTypes = propTypes;
Aperture.defaultProps = defaultProps;

const Archive = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "21 8 21 21 3 21 3 8"
}), React.createElement("rect", {
  x: "1",
  y: "3",
  width: "22",
  height: "5"
}), React.createElement("line", {
  x1: "10",
  y1: "12",
  x2: "14",
  y2: "12"
}));

Archive.propTypes = propTypes;
Archive.defaultProps = defaultProps;

const ArrowDownCircle = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), React.createElement("polyline", {
  points: "8 12 12 16 16 12"
}), React.createElement("line", {
  x1: "12",
  y1: "8",
  x2: "12",
  y2: "16"
}));

ArrowDownCircle.propTypes = propTypes;
ArrowDownCircle.defaultProps = defaultProps;

const ArrowDownLeft = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("line", {
  x1: "17",
  y1: "7",
  x2: "7",
  y2: "17"
}), React.createElement("polyline", {
  points: "17 17 7 17 7 7"
}));

ArrowDownLeft.propTypes = propTypes;
ArrowDownLeft.defaultProps = defaultProps;

const ArrowDownRight = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("line", {
  x1: "7",
  y1: "7",
  x2: "17",
  y2: "17"
}), React.createElement("polyline", {
  points: "17 7 17 17 7 17"
}));

ArrowDownRight.propTypes = propTypes;
ArrowDownRight.defaultProps = defaultProps;

const ArrowDown = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("line", {
  x1: "12",
  y1: "5",
  x2: "12",
  y2: "19"
}), React.createElement("polyline", {
  points: "19 12 12 19 5 12"
}));

ArrowDown.propTypes = propTypes;
ArrowDown.defaultProps = defaultProps;

const ArrowLeftCircle = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), React.createElement("polyline", {
  points: "12 8 8 12 12 16"
}), React.createElement("line", {
  x1: "16",
  y1: "12",
  x2: "8",
  y2: "12"
}));

ArrowLeftCircle.propTypes = propTypes;
ArrowLeftCircle.defaultProps = defaultProps;

const ArrowLeft = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("line", {
  x1: "19",
  y1: "12",
  x2: "5",
  y2: "12"
}), React.createElement("polyline", {
  points: "12 19 5 12 12 5"
}));

ArrowLeft.propTypes = propTypes;
ArrowLeft.defaultProps = defaultProps;

const ArrowRightCircle = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), React.createElement("polyline", {
  points: "12 16 16 12 12 8"
}), React.createElement("line", {
  x1: "8",
  y1: "12",
  x2: "16",
  y2: "12"
}));

ArrowRightCircle.propTypes = propTypes;
ArrowRightCircle.defaultProps = defaultProps;

const ArrowRight = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("line", {
  x1: "5",
  y1: "12",
  x2: "19",
  y2: "12"
}), React.createElement("polyline", {
  points: "12 5 19 12 12 19"
}));

ArrowRight.propTypes = propTypes;
ArrowRight.defaultProps = defaultProps;

const ArrowUpCircle = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), React.createElement("polyline", {
  points: "16 12 12 8 8 12"
}), React.createElement("line", {
  x1: "12",
  y1: "16",
  x2: "12",
  y2: "8"
}));

ArrowUpCircle.propTypes = propTypes;
ArrowUpCircle.defaultProps = defaultProps;

const ArrowUpLeft = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("line", {
  x1: "17",
  y1: "17",
  x2: "7",
  y2: "7"
}), React.createElement("polyline", {
  points: "7 17 7 7 17 7"
}));

ArrowUpLeft.propTypes = propTypes;
ArrowUpLeft.defaultProps = defaultProps;

const ArrowUpRight = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("line", {
  x1: "7",
  y1: "17",
  x2: "17",
  y2: "7"
}), React.createElement("polyline", {
  points: "7 7 17 7 17 17"
}));

ArrowUpRight.propTypes = propTypes;
ArrowUpRight.defaultProps = defaultProps;

const ArrowUp = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("line", {
  x1: "12",
  y1: "19",
  x2: "12",
  y2: "5"
}), React.createElement("polyline", {
  points: "5 12 12 5 19 12"
}));

ArrowUp.propTypes = propTypes;
ArrowUp.defaultProps = defaultProps;

const AtSign = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4"
}), React.createElement("path", {
  d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"
}));

AtSign.propTypes = propTypes;
AtSign.defaultProps = defaultProps;

const Award = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "12",
  cy: "8",
  r: "7"
}), React.createElement("polyline", {
  points: "8.21 13.89 7 23 12 20 17 23 15.79 13.88"
}));

Award.propTypes = propTypes;
Award.defaultProps = defaultProps;

const BarChart2 = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("line", {
  x1: "18",
  y1: "20",
  x2: "18",
  y2: "10"
}), React.createElement("line", {
  x1: "12",
  y1: "20",
  x2: "12",
  y2: "4"
}), React.createElement("line", {
  x1: "6",
  y1: "20",
  x2: "6",
  y2: "14"
}));

BarChart2.propTypes = propTypes;
BarChart2.defaultProps = defaultProps;

const BarChart = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("line", {
  x1: "12",
  y1: "20",
  x2: "12",
  y2: "10"
}), React.createElement("line", {
  x1: "18",
  y1: "20",
  x2: "18",
  y2: "4"
}), React.createElement("line", {
  x1: "6",
  y1: "20",
  x2: "6",
  y2: "16"
}));

BarChart.propTypes = propTypes;
BarChart.defaultProps = defaultProps;

const BatteryCharging = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"
}), React.createElement("line", {
  x1: "23",
  y1: "13",
  x2: "23",
  y2: "11"
}), React.createElement("polyline", {
  points: "11 6 7 12 13 12 9 18"
}));

BatteryCharging.propTypes = propTypes;
BatteryCharging.defaultProps = defaultProps;

const Battery = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("rect", {
  x: "1",
  y: "6",
  width: "18",
  height: "12",
  rx: "2",
  ry: "2"
}), React.createElement("line", {
  x1: "23",
  y1: "13",
  x2: "23",
  y2: "11"
}));

Battery.propTypes = propTypes;
Battery.defaultProps = defaultProps;

const BellOff = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M13.73 21a2 2 0 0 1-3.46 0"
}), React.createElement("path", {
  d: "M18.63 13A17.89 17.89 0 0 1 18 8"
}), React.createElement("path", {
  d: "M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"
}), React.createElement("path", {
  d: "M18 8a6 6 0 0 0-9.33-5"
}), React.createElement("line", {
  x1: "1",
  y1: "1",
  x2: "23",
  y2: "23"
}));

BellOff.propTypes = propTypes;
BellOff.defaultProps = defaultProps;

const Bell = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
}), React.createElement("path", {
  d: "M13.73 21a2 2 0 0 1-3.46 0"
}));

Bell.propTypes = propTypes;
Bell.defaultProps = defaultProps;

const Bluetooth = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"
}));

Bluetooth.propTypes = propTypes;
Bluetooth.defaultProps = defaultProps;

const Bold = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"
}), React.createElement("path", {
  d: "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"
}));

Bold.propTypes = propTypes;
Bold.defaultProps = defaultProps;

const BookOpen = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
}), React.createElement("path", {
  d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
}));

BookOpen.propTypes = propTypes;
BookOpen.defaultProps = defaultProps;

const Book = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
}), React.createElement("path", {
  d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
}));

Book.propTypes = propTypes;
Book.defaultProps = defaultProps;

const Bookmark = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
}));

Bookmark.propTypes = propTypes;
Bookmark.defaultProps = defaultProps;

const Box = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
}), React.createElement("polyline", {
  points: "3.27 6.96 12 12.01 20.73 6.96"
}), React.createElement("line", {
  x1: "12",
  y1: "22.08",
  x2: "12",
  y2: "12"
}));

Box.propTypes = propTypes;
Box.defaultProps = defaultProps;

const Briefcase = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("rect", {
  x: "2",
  y: "7",
  width: "20",
  height: "14",
  rx: "2",
  ry: "2"
}), React.createElement("path", {
  d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
}));

Briefcase.propTypes = propTypes;
Briefcase.defaultProps = defaultProps;

const Calendar = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("rect", {
  x: "3",
  y: "4",
  width: "18",
  height: "18",
  rx: "2",
  ry: "2"
}), React.createElement("line", {
  x1: "16",
  y1: "2",
  x2: "16",
  y2: "6"
}), React.createElement("line", {
  x1: "8",
  y1: "2",
  x2: "8",
  y2: "6"
}), React.createElement("line", {
  x1: "3",
  y1: "10",
  x2: "21",
  y2: "10"
}));

Calendar.propTypes = propTypes;
Calendar.defaultProps = defaultProps;

const CameraOff = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("line", {
  x1: "1",
  y1: "1",
  x2: "23",
  y2: "23"
}), React.createElement("path", {
  d: "M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"
}));

CameraOff.propTypes = propTypes;
CameraOff.defaultProps = defaultProps;

const Camera = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
}), React.createElement("circle", {
  cx: "12",
  cy: "13",
  r: "4"
}));

Camera.propTypes = propTypes;
Camera.defaultProps = defaultProps;

const Cast = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"
}), React.createElement("line", {
  x1: "2",
  y1: "20",
  x2: "2",
  y2: "20"
}));

Cast.propTypes = propTypes;
Cast.defaultProps = defaultProps;

const CheckCircle = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
}), React.createElement("polyline", {
  points: "22 4 12 14.01 9 11.01"
}));

CheckCircle.propTypes = propTypes;
CheckCircle.defaultProps = defaultProps;

const CheckSquare = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "9 11 12 14 22 4"
}), React.createElement("path", {
  d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
}));

CheckSquare.propTypes = propTypes;
CheckSquare.defaultProps = defaultProps;

const Check = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "20 6 9 17 4 12"
}));

Check.propTypes = propTypes;
Check.defaultProps = defaultProps;

const ChevronDown = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "6 9 12 15 18 9"
}));

ChevronDown.propTypes = propTypes;
ChevronDown.defaultProps = defaultProps;

const ChevronLeft = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "15 18 9 12 15 6"
}));

ChevronLeft.propTypes = propTypes;
ChevronLeft.defaultProps = defaultProps;

const ChevronRight = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "9 18 15 12 9 6"
}));

ChevronRight.propTypes = propTypes;
ChevronRight.defaultProps = defaultProps;

const ChevronUp = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "18 15 12 9 6 15"
}));

ChevronUp.propTypes = propTypes;
ChevronUp.defaultProps = defaultProps;

const ChevronsDown = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "7 13 12 18 17 13"
}), React.createElement("polyline", {
  points: "7 6 12 11 17 6"
}));

ChevronsDown.propTypes = propTypes;
ChevronsDown.defaultProps = defaultProps;

const ChevronsLeft = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "11 17 6 12 11 7"
}), React.createElement("polyline", {
  points: "18 17 13 12 18 7"
}));

ChevronsLeft.propTypes = propTypes;
ChevronsLeft.defaultProps = defaultProps;

const ChevronsRight = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "13 17 18 12 13 7"
}), React.createElement("polyline", {
  points: "6 17 11 12 6 7"
}));

ChevronsRight.propTypes = propTypes;
ChevronsRight.defaultProps = defaultProps;

const ChevronsUp = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "17 11 12 6 7 11"
}), React.createElement("polyline", {
  points: "17 18 12 13 7 18"
}));

ChevronsUp.propTypes = propTypes;
ChevronsUp.defaultProps = defaultProps;

const Chrome = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4"
}), React.createElement("line", {
  x1: "21.17",
  y1: "8",
  x2: "12",
  y2: "8"
}), React.createElement("line", {
  x1: "3.95",
  y1: "6.06",
  x2: "8.54",
  y2: "14"
}), React.createElement("line", {
  x1: "10.88",
  y1: "21.94",
  x2: "15.46",
  y2: "14"
}));

Chrome.propTypes = propTypes;
Chrome.defaultProps = defaultProps;

const Circle = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}));

Circle.propTypes = propTypes;
Circle.defaultProps = defaultProps;

const Clipboard = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
}), React.createElement("rect", {
  x: "8",
  y: "2",
  width: "8",
  height: "4",
  rx: "1",
  ry: "1"
}));

Clipboard.propTypes = propTypes;
Clipboard.defaultProps = defaultProps;

const Clock = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), React.createElement("polyline", {
  points: "12 6 12 12 16 14"
}));

Clock.propTypes = propTypes;
Clock.defaultProps = defaultProps;

const CloudDrizzle = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("line", {
  x1: "8",
  y1: "19",
  x2: "8",
  y2: "21"
}), React.createElement("line", {
  x1: "8",
  y1: "13",
  x2: "8",
  y2: "15"
}), React.createElement("line", {
  x1: "16",
  y1: "19",
  x2: "16",
  y2: "21"
}), React.createElement("line", {
  x1: "16",
  y1: "13",
  x2: "16",
  y2: "15"
}), React.createElement("line", {
  x1: "12",
  y1: "21",
  x2: "12",
  y2: "23"
}), React.createElement("line", {
  x1: "12",
  y1: "15",
  x2: "12",
  y2: "17"
}), React.createElement("path", {
  d: "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"
}));

CloudDrizzle.propTypes = propTypes;
CloudDrizzle.defaultProps = defaultProps;

const CloudLightning = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"
}), React.createElement("polyline", {
  points: "13 11 9 17 15 17 11 23"
}));

CloudLightning.propTypes = propTypes;
CloudLightning.defaultProps = defaultProps;

const CloudOff = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"
}), React.createElement("line", {
  x1: "1",
  y1: "1",
  x2: "23",
  y2: "23"
}));

CloudOff.propTypes = propTypes;
CloudOff.defaultProps = defaultProps;

const CloudRain = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("line", {
  x1: "16",
  y1: "13",
  x2: "16",
  y2: "21"
}), React.createElement("line", {
  x1: "8",
  y1: "13",
  x2: "8",
  y2: "21"
}), React.createElement("line", {
  x1: "12",
  y1: "15",
  x2: "12",
  y2: "23"
}), React.createElement("path", {
  d: "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"
}));

CloudRain.propTypes = propTypes;
CloudRain.defaultProps = defaultProps;

const CloudSnow = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"
}), React.createElement("line", {
  x1: "8",
  y1: "16",
  x2: "8",
  y2: "16"
}), React.createElement("line", {
  x1: "8",
  y1: "20",
  x2: "8",
  y2: "20"
}), React.createElement("line", {
  x1: "12",
  y1: "18",
  x2: "12",
  y2: "18"
}), React.createElement("line", {
  x1: "12",
  y1: "22",
  x2: "12",
  y2: "22"
}), React.createElement("line", {
  x1: "16",
  y1: "16",
  x2: "16",
  y2: "16"
}), React.createElement("line", {
  x1: "16",
  y1: "20",
  x2: "16",
  y2: "20"
}));

CloudSnow.propTypes = propTypes;
CloudSnow.defaultProps = defaultProps;

const Cloud = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"
}));

Cloud.propTypes = propTypes;
Cloud.defaultProps = defaultProps;

const Code = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "16 18 22 12 16 6"
}), React.createElement("polyline", {
  points: "8 6 2 12 8 18"
}));

Code.propTypes = propTypes;
Code.defaultProps = defaultProps;

const Codepen = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polygon", {
  points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"
}), React.createElement("line", {
  x1: "12",
  y1: "22",
  x2: "12",
  y2: "15.5"
}), React.createElement("polyline", {
  points: "22 8.5 12 15.5 2 8.5"
}), React.createElement("polyline", {
  points: "2 15.5 12 8.5 22 15.5"
}), React.createElement("line", {
  x1: "12",
  y1: "2",
  x2: "12",
  y2: "8.5"
}));

Codepen.propTypes = propTypes;
Codepen.defaultProps = defaultProps;

const Codesandbox = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
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
  x1: "12",
  y1: "22.08",
  x2: "12",
  y2: "12"
}));

Codesandbox.propTypes = propTypes;
Codesandbox.defaultProps = defaultProps;

const Coffee = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  viewBox: "0 0 24 24",
  width: size,
  height: size,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M18 8h1a4 4 0 0 1 0 8h-1"
}), React.createElement("path", {
  d: "M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"
}), React.createElement("line", {
  x1: "6",
  y1: "1",
  x2: "6",
  y2: "4"
}), React.createElement("line", {
  x1: "10",
  y1: "1",
  x2: "10",
  y2: "4"
}), React.createElement("line", {
  x1: "14",
  y1: "1",
  x2: "14",
  y2: "4"
}));

Coffee.propTypes = propTypes;
Coffee.defaultProps = defaultProps;

const Columns = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"
}));

Columns.propTypes = propTypes;
Columns.defaultProps = defaultProps;

const Command = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
}));

Command.propTypes = propTypes;
Command.defaultProps = defaultProps;

const Compass = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), React.createElement("polygon", {
  points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
}));

Compass.propTypes = propTypes;
Compass.defaultProps = defaultProps;

const Copy = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("rect", {
  x: "9",
  y: "9",
  width: "13",
  height: "13",
  rx: "2",
  ry: "2"
}), React.createElement("path", {
  d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
}));

Copy.propTypes = propTypes;
Copy.defaultProps = defaultProps;

const CornerDownLeft = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "9 10 4 15 9 20"
}), React.createElement("path", {
  d: "M20 4v7a4 4 0 0 1-4 4H4"
}));

CornerDownLeft.propTypes = propTypes;
CornerDownLeft.defaultProps = defaultProps;

const CornerDownRight = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "15 10 20 15 15 20"
}), React.createElement("path", {
  d: "M4 4v7a4 4 0 0 0 4 4h12"
}));

CornerDownRight.propTypes = propTypes;
CornerDownRight.defaultProps = defaultProps;

const CornerLeftDown = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "14 15 9 20 4 15"
}), React.createElement("path", {
  d: "M20 4h-7a4 4 0 0 0-4 4v12"
}));

CornerLeftDown.propTypes = propTypes;
CornerLeftDown.defaultProps = defaultProps;

const CornerLeftUp = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "14 9 9 4 4 9"
}), React.createElement("path", {
  d: "M20 20h-7a4 4 0 0 1-4-4V4"
}));

CornerLeftUp.propTypes = propTypes;
CornerLeftUp.defaultProps = defaultProps;

const CornerRightDown = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "10 15 15 20 20 15"
}), React.createElement("path", {
  d: "M4 4h7a4 4 0 0 1 4 4v12"
}));

CornerRightDown.propTypes = propTypes;
CornerRightDown.defaultProps = defaultProps;

const CornerRightUp = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "10 9 15 4 20 9"
}), React.createElement("path", {
  d: "M4 20h7a4 4 0 0 0 4-4V4"
}));

CornerRightUp.propTypes = propTypes;
CornerRightUp.defaultProps = defaultProps;

const CornerUpLeft = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "9 14 4 9 9 4"
}), React.createElement("path", {
  d: "M20 20v-7a4 4 0 0 0-4-4H4"
}));

CornerUpLeft.propTypes = propTypes;
CornerUpLeft.defaultProps = defaultProps;

const CornerUpRight = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "15 14 20 9 15 4"
}), React.createElement("path", {
  d: "M4 20v-7a4 4 0 0 1 4-4h12"
}));

CornerUpRight.propTypes = propTypes;
CornerUpRight.defaultProps = defaultProps;

const Cpu = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("rect", {
  x: "4",
  y: "4",
  width: "16",
  height: "16",
  rx: "2",
  ry: "2"
}), React.createElement("rect", {
  x: "9",
  y: "9",
  width: "6",
  height: "6"
}), React.createElement("line", {
  x1: "9",
  y1: "1",
  x2: "9",
  y2: "4"
}), React.createElement("line", {
  x1: "15",
  y1: "1",
  x2: "15",
  y2: "4"
}), React.createElement("line", {
  x1: "9",
  y1: "20",
  x2: "9",
  y2: "23"
}), React.createElement("line", {
  x1: "15",
  y1: "20",
  x2: "15",
  y2: "23"
}), React.createElement("line", {
  x1: "20",
  y1: "9",
  x2: "23",
  y2: "9"
}), React.createElement("line", {
  x1: "20",
  y1: "14",
  x2: "23",
  y2: "14"
}), React.createElement("line", {
  x1: "1",
  y1: "9",
  x2: "4",
  y2: "9"
}), React.createElement("line", {
  x1: "1",
  y1: "14",
  x2: "4",
  y2: "14"
}));

Cpu.propTypes = propTypes;
Cpu.defaultProps = defaultProps;

const CreditCard = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("rect", {
  x: "1",
  y: "4",
  width: "22",
  height: "16",
  rx: "2",
  ry: "2"
}), React.createElement("line", {
  x1: "1",
  y1: "10",
  x2: "23",
  y2: "10"
}));

CreditCard.propTypes = propTypes;
CreditCard.defaultProps = defaultProps;

const Crop = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M6.13 1L6 16a2 2 0 0 0 2 2h15"
}), React.createElement("path", {
  d: "M1 6.13L16 6a2 2 0 0 1 2 2v15"
}));

Crop.propTypes = propTypes;
Crop.defaultProps = defaultProps;

const Crosshair = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), React.createElement("line", {
  x1: "22",
  y1: "12",
  x2: "18",
  y2: "12"
}), React.createElement("line", {
  x1: "6",
  y1: "12",
  x2: "2",
  y2: "12"
}), React.createElement("line", {
  x1: "12",
  y1: "6",
  x2: "12",
  y2: "2"
}), React.createElement("line", {
  x1: "12",
  y1: "22",
  x2: "12",
  y2: "18"
}));

Crosshair.propTypes = propTypes;
Crosshair.defaultProps = defaultProps;

const Database = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("ellipse", {
  cx: "12",
  cy: "5",
  rx: "9",
  ry: "3"
}), React.createElement("path", {
  d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"
}), React.createElement("path", {
  d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"
}));

Database.propTypes = propTypes;
Database.defaultProps = defaultProps;

const Delete = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
}), React.createElement("line", {
  x1: "18",
  y1: "9",
  x2: "12",
  y2: "15"
}), React.createElement("line", {
  x1: "12",
  y1: "9",
  x2: "18",
  y2: "15"
}));

Delete.propTypes = propTypes;
Delete.defaultProps = defaultProps;

const Disc = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}));

Disc.propTypes = propTypes;
Disc.defaultProps = defaultProps;

const DollarSign = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("line", {
  x1: "12",
  y1: "1",
  x2: "12",
  y2: "23"
}), React.createElement("path", {
  d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
}));

DollarSign.propTypes = propTypes;
DollarSign.defaultProps = defaultProps;

const DownloadCloud = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "8 17 12 21 16 17"
}), React.createElement("line", {
  x1: "12",
  y1: "12",
  x2: "12",
  y2: "21"
}), React.createElement("path", {
  d: "M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"
}));

DownloadCloud.propTypes = propTypes;
DownloadCloud.defaultProps = defaultProps;

const Download = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
}), React.createElement("polyline", {
  points: "7 10 12 15 17 10"
}), React.createElement("line", {
  x1: "12",
  y1: "15",
  x2: "12",
  y2: "3"
}));

Download.propTypes = propTypes;
Download.defaultProps = defaultProps;

const Droplet = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"
}));

Droplet.propTypes = propTypes;
Droplet.defaultProps = defaultProps;

const Edit2 = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
}));

Edit2.propTypes = propTypes;
Edit2.defaultProps = defaultProps;

const Edit3 = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M12 20h9"
}), React.createElement("path", {
  d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
}));

Edit3.propTypes = propTypes;
Edit3.defaultProps = defaultProps;

const Edit = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
}), React.createElement("path", {
  d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
}));

Edit.propTypes = propTypes;
Edit.defaultProps = defaultProps;

const ExternalLink = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
}), React.createElement("polyline", {
  points: "15 3 21 3 21 9"
}), React.createElement("line", {
  x1: "10",
  y1: "14",
  x2: "21",
  y2: "3"
}));

ExternalLink.propTypes = propTypes;
ExternalLink.defaultProps = defaultProps;

const EyeOff = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
}), React.createElement("line", {
  x1: "1",
  y1: "1",
  x2: "23",
  y2: "23"
}));

EyeOff.propTypes = propTypes;
EyeOff.defaultProps = defaultProps;

const Eye = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
}), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}));

Eye.propTypes = propTypes;
Eye.defaultProps = defaultProps;

const Facebook = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
}));

Facebook.propTypes = propTypes;
Facebook.defaultProps = defaultProps;

const FastForward = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polygon", {
  points: "13 19 22 12 13 5 13 19"
}), React.createElement("polygon", {
  points: "2 19 11 12 2 5 2 19"
}));

FastForward.propTypes = propTypes;
FastForward.defaultProps = defaultProps;

const Feather = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"
}), React.createElement("line", {
  x1: "16",
  y1: "8",
  x2: "2",
  y2: "22"
}), React.createElement("line", {
  x1: "17.5",
  y1: "15",
  x2: "9",
  y2: "15"
}));

Feather.propTypes = propTypes;
Feather.defaultProps = defaultProps;

const Figma = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
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

Figma.propTypes = propTypes;
Figma.defaultProps = defaultProps;

const FileMinus = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
}), React.createElement("polyline", {
  points: "14 2 14 8 20 8"
}), React.createElement("line", {
  x1: "9",
  y1: "15",
  x2: "15",
  y2: "15"
}));

FileMinus.propTypes = propTypes;
FileMinus.defaultProps = defaultProps;

const FilePlus = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
}), React.createElement("polyline", {
  points: "14 2 14 8 20 8"
}), React.createElement("line", {
  x1: "12",
  y1: "18",
  x2: "12",
  y2: "12"
}), React.createElement("line", {
  x1: "9",
  y1: "15",
  x2: "15",
  y2: "15"
}));

FilePlus.propTypes = propTypes;
FilePlus.defaultProps = defaultProps;

const FileText = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
}), React.createElement("polyline", {
  points: "14 2 14 8 20 8"
}), React.createElement("line", {
  x1: "16",
  y1: "13",
  x2: "8",
  y2: "13"
}), React.createElement("line", {
  x1: "16",
  y1: "17",
  x2: "8",
  y2: "17"
}), React.createElement("polyline", {
  points: "10 9 9 9 8 9"
}));

FileText.propTypes = propTypes;
FileText.defaultProps = defaultProps;

const File = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
}), React.createElement("polyline", {
  points: "13 2 13 9 20 9"
}));

File.propTypes = propTypes;
File.defaultProps = defaultProps;

const Film = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("rect", {
  x: "2",
  y: "2",
  width: "20",
  height: "20",
  rx: "2.18",
  ry: "2.18"
}), React.createElement("line", {
  x1: "7",
  y1: "2",
  x2: "7",
  y2: "22"
}), React.createElement("line", {
  x1: "17",
  y1: "2",
  x2: "17",
  y2: "22"
}), React.createElement("line", {
  x1: "2",
  y1: "12",
  x2: "22",
  y2: "12"
}), React.createElement("line", {
  x1: "2",
  y1: "7",
  x2: "7",
  y2: "7"
}), React.createElement("line", {
  x1: "2",
  y1: "17",
  x2: "7",
  y2: "17"
}), React.createElement("line", {
  x1: "17",
  y1: "17",
  x2: "22",
  y2: "17"
}), React.createElement("line", {
  x1: "17",
  y1: "7",
  x2: "22",
  y2: "7"
}));

Film.propTypes = propTypes;
Film.defaultProps = defaultProps;

const Filter = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polygon", {
  points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
}));

Filter.propTypes = propTypes;
Filter.defaultProps = defaultProps;

const Flag = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
}), React.createElement("line", {
  x1: "4",
  y1: "22",
  x2: "4",
  y2: "15"
}));

Flag.propTypes = propTypes;
Flag.defaultProps = defaultProps;

const FolderMinus = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
}), React.createElement("line", {
  x1: "9",
  y1: "14",
  x2: "15",
  y2: "14"
}));

FolderMinus.propTypes = propTypes;
FolderMinus.defaultProps = defaultProps;

const FolderPlus = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
}), React.createElement("line", {
  x1: "12",
  y1: "11",
  x2: "12",
  y2: "17"
}), React.createElement("line", {
  x1: "9",
  y1: "14",
  x2: "15",
  y2: "14"
}));

FolderPlus.propTypes = propTypes;
FolderPlus.defaultProps = defaultProps;

const Folder = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
}));

Folder.propTypes = propTypes;
Folder.defaultProps = defaultProps;

const Frown = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  viewBox: "0 0 24 24",
  width: size,
  height: size,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), React.createElement("path", {
  d: "M16 16s-1.5-2-4-2-4 2-4 2"
}), React.createElement("line", {
  x1: "9",
  y1: "9",
  x2: "9.01",
  y2: "9"
}), React.createElement("line", {
  x1: "15",
  y1: "9",
  x2: "15.01",
  y2: "9"
}));

Frown.propTypes = propTypes;
Frown.defaultProps = defaultProps;

const Gift = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "20 12 20 22 4 22 4 12"
}), React.createElement("rect", {
  x: "2",
  y: "7",
  width: "20",
  height: "5"
}), React.createElement("line", {
  x1: "12",
  y1: "22",
  x2: "12",
  y2: "7"
}), React.createElement("path", {
  d: "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"
}), React.createElement("path", {
  d: "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"
}));

Gift.propTypes = propTypes;
Gift.defaultProps = defaultProps;

const GitBranch = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("line", {
  x1: "6",
  y1: "3",
  x2: "6",
  y2: "15"
}), React.createElement("circle", {
  cx: "18",
  cy: "6",
  r: "3"
}), React.createElement("circle", {
  cx: "6",
  cy: "18",
  r: "3"
}), React.createElement("path", {
  d: "M18 9a9 9 0 0 1-9 9"
}));

GitBranch.propTypes = propTypes;
GitBranch.defaultProps = defaultProps;

const GitCommit = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4"
}), React.createElement("line", {
  x1: "1.05",
  y1: "12",
  x2: "7",
  y2: "12"
}), React.createElement("line", {
  x1: "17.01",
  y1: "12",
  x2: "22.96",
  y2: "12"
}));

GitCommit.propTypes = propTypes;
GitCommit.defaultProps = defaultProps;

const GitMerge = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "18",
  cy: "18",
  r: "3"
}), React.createElement("circle", {
  cx: "6",
  cy: "6",
  r: "3"
}), React.createElement("path", {
  d: "M6 21V9a9 9 0 0 0 9 9"
}));

GitMerge.propTypes = propTypes;
GitMerge.defaultProps = defaultProps;

const GitPullRequest = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "18",
  cy: "18",
  r: "3"
}), React.createElement("circle", {
  cx: "6",
  cy: "6",
  r: "3"
}), React.createElement("path", {
  d: "M13 6h3a2 2 0 0 1 2 2v7"
}), React.createElement("line", {
  x1: "6",
  y1: "9",
  x2: "6",
  y2: "21"
}));

GitPullRequest.propTypes = propTypes;
GitPullRequest.defaultProps = defaultProps;

const GitHub = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
}));

GitHub.propTypes = propTypes;
GitHub.defaultProps = defaultProps;

const Gitlab = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"
}));

Gitlab.propTypes = propTypes;
Gitlab.defaultProps = defaultProps;

const Globe = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), React.createElement("line", {
  x1: "2",
  y1: "12",
  x2: "22",
  y2: "12"
}), React.createElement("path", {
  d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
}));

Globe.propTypes = propTypes;
Globe.defaultProps = defaultProps;

const Grid = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("rect", {
  x: "3",
  y: "3",
  width: "7",
  height: "7"
}), React.createElement("rect", {
  x: "14",
  y: "3",
  width: "7",
  height: "7"
}), React.createElement("rect", {
  x: "14",
  y: "14",
  width: "7",
  height: "7"
}), React.createElement("rect", {
  x: "3",
  y: "14",
  width: "7",
  height: "7"
}));

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

const HardDrive = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("line", {
  x1: "22",
  y1: "12",
  x2: "2",
  y2: "12"
}), React.createElement("path", {
  d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
}), React.createElement("line", {
  x1: "6",
  y1: "16",
  x2: "6",
  y2: "16"
}), React.createElement("line", {
  x1: "10",
  y1: "16",
  x2: "10",
  y2: "16"
}));

HardDrive.propTypes = propTypes;
HardDrive.defaultProps = defaultProps;

const Hash = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("line", {
  x1: "4",
  y1: "9",
  x2: "20",
  y2: "9"
}), React.createElement("line", {
  x1: "4",
  y1: "15",
  x2: "20",
  y2: "15"
}), React.createElement("line", {
  x1: "10",
  y1: "3",
  x2: "8",
  y2: "21"
}), React.createElement("line", {
  x1: "16",
  y1: "3",
  x2: "14",
  y2: "21"
}));

Hash.propTypes = propTypes;
Hash.defaultProps = defaultProps;

const Headphones = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M3 18v-6a9 9 0 0 1 18 0v6"
}), React.createElement("path", {
  d: "M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"
}));

Headphones.propTypes = propTypes;
Headphones.defaultProps = defaultProps;

const Heart = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
}));

Heart.propTypes = propTypes;
Heart.defaultProps = defaultProps;

const HelpCircle = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), React.createElement("path", {
  d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
}), React.createElement("line", {
  x1: "12",
  y1: "17",
  x2: "12",
  y2: "17"
}));

HelpCircle.propTypes = propTypes;
HelpCircle.defaultProps = defaultProps;

const Hexagon = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
}));

Hexagon.propTypes = propTypes;
Hexagon.defaultProps = defaultProps;

const Home = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
}), React.createElement("polyline", {
  points: "9 22 9 12 15 12 15 22"
}));

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

const Image = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("rect", {
  x: "3",
  y: "3",
  width: "18",
  height: "18",
  rx: "2",
  ry: "2"
}), React.createElement("circle", {
  cx: "8.5",
  cy: "8.5",
  r: "1.5"
}), React.createElement("polyline", {
  points: "21 15 16 10 5 21"
}));

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

const Inbox = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "22 12 16 12 14 15 10 15 8 12 2 12"
}), React.createElement("path", {
  d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
}));

Inbox.propTypes = propTypes;
Inbox.defaultProps = defaultProps;

const Info = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), React.createElement("line", {
  x1: "12",
  y1: "16",
  x2: "12",
  y2: "12"
}), React.createElement("line", {
  x1: "12",
  y1: "8",
  x2: "12",
  y2: "8"
}));

Info.propTypes = propTypes;
Info.defaultProps = defaultProps;

const Instagram = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("rect", {
  x: "2",
  y: "2",
  width: "20",
  height: "20",
  rx: "5",
  ry: "5"
}), React.createElement("path", {
  d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
}), React.createElement("line", {
  x1: "17.5",
  y1: "6.5",
  x2: "17.5",
  y2: "6.5"
}));

Instagram.propTypes = propTypes;
Instagram.defaultProps = defaultProps;

const Italic = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("line", {
  x1: "19",
  y1: "4",
  x2: "10",
  y2: "4"
}), React.createElement("line", {
  x1: "14",
  y1: "20",
  x2: "5",
  y2: "20"
}), React.createElement("line", {
  x1: "15",
  y1: "4",
  x2: "9",
  y2: "20"
}));

Italic.propTypes = propTypes;
Italic.defaultProps = defaultProps;

const Key = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"
}));

Key.propTypes = propTypes;
Key.defaultProps = defaultProps;

const Layers = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polygon", {
  points: "12 2 2 7 12 12 22 7 12 2"
}), React.createElement("polyline", {
  points: "2 17 12 22 22 17"
}), React.createElement("polyline", {
  points: "2 12 12 17 22 12"
}));

Layers.propTypes = propTypes;
Layers.defaultProps = defaultProps;

const Layout = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("rect", {
  x: "3",
  y: "3",
  width: "18",
  height: "18",
  rx: "2",
  ry: "2"
}), React.createElement("line", {
  x1: "3",
  y1: "9",
  x2: "21",
  y2: "9"
}), React.createElement("line", {
  x1: "9",
  y1: "21",
  x2: "9",
  y2: "9"
}));

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

const LifeBuoy = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4"
}), React.createElement("line", {
  x1: "4.93",
  y1: "4.93",
  x2: "9.17",
  y2: "9.17"
}), React.createElement("line", {
  x1: "14.83",
  y1: "14.83",
  x2: "19.07",
  y2: "19.07"
}), React.createElement("line", {
  x1: "14.83",
  y1: "9.17",
  x2: "19.07",
  y2: "4.93"
}), React.createElement("line", {
  x1: "14.83",
  y1: "9.17",
  x2: "18.36",
  y2: "5.64"
}), React.createElement("line", {
  x1: "4.93",
  y1: "19.07",
  x2: "9.17",
  y2: "14.83"
}));

LifeBuoy.propTypes = propTypes;
LifeBuoy.defaultProps = defaultProps;

const Link2 = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"
}), React.createElement("line", {
  x1: "8",
  y1: "12",
  x2: "16",
  y2: "12"
}));

Link2.propTypes = propTypes;
Link2.defaultProps = defaultProps;

const Link = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
}), React.createElement("path", {
  d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
}));

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

const Linkedin = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
}), React.createElement("rect", {
  x: "2",
  y: "9",
  width: "4",
  height: "12"
}), React.createElement("circle", {
  cx: "4",
  cy: "4",
  r: "2"
}));

Linkedin.propTypes = propTypes;
Linkedin.defaultProps = defaultProps;

const List = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("line", {
  x1: "8",
  y1: "6",
  x2: "21",
  y2: "6"
}), React.createElement("line", {
  x1: "8",
  y1: "12",
  x2: "21",
  y2: "12"
}), React.createElement("line", {
  x1: "8",
  y1: "18",
  x2: "21",
  y2: "18"
}), React.createElement("line", {
  x1: "3",
  y1: "6",
  x2: "3",
  y2: "6"
}), React.createElement("line", {
  x1: "3",
  y1: "12",
  x2: "3",
  y2: "12"
}), React.createElement("line", {
  x1: "3",
  y1: "18",
  x2: "3",
  y2: "18"
}));

List.propTypes = propTypes;
List.defaultProps = defaultProps;

const Loader = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("line", {
  x1: "12",
  y1: "2",
  x2: "12",
  y2: "6"
}), React.createElement("line", {
  x1: "12",
  y1: "18",
  x2: "12",
  y2: "22"
}), React.createElement("line", {
  x1: "4.93",
  y1: "4.93",
  x2: "7.76",
  y2: "7.76"
}), React.createElement("line", {
  x1: "16.24",
  y1: "16.24",
  x2: "19.07",
  y2: "19.07"
}), React.createElement("line", {
  x1: "2",
  y1: "12",
  x2: "6",
  y2: "12"
}), React.createElement("line", {
  x1: "18",
  y1: "12",
  x2: "22",
  y2: "12"
}), React.createElement("line", {
  x1: "4.93",
  y1: "19.07",
  x2: "7.76",
  y2: "16.24"
}), React.createElement("line", {
  x1: "16.24",
  y1: "7.76",
  x2: "19.07",
  y2: "4.93"
}));

Loader.propTypes = propTypes;
Loader.defaultProps = defaultProps;

const Lock = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("rect", {
  x: "3",
  y: "11",
  width: "18",
  height: "11",
  rx: "2",
  ry: "2"
}), React.createElement("path", {
  d: "M7 11V7a5 5 0 0 1 10 0v4"
}));

Lock.propTypes = propTypes;
Lock.defaultProps = defaultProps;

const LogIn = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
}), React.createElement("polyline", {
  points: "10 17 15 12 10 7"
}), React.createElement("line", {
  x1: "15",
  y1: "12",
  x2: "3",
  y2: "12"
}));

LogIn.propTypes = propTypes;
LogIn.defaultProps = defaultProps;

const LogOut = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
}), React.createElement("polyline", {
  points: "16 17 21 12 16 7"
}), React.createElement("line", {
  x1: "21",
  y1: "12",
  x2: "9",
  y2: "12"
}));

LogOut.propTypes = propTypes;
LogOut.defaultProps = defaultProps;

const Mail = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
}), React.createElement("polyline", {
  points: "22,6 12,13 2,6"
}));

Mail.propTypes = propTypes;
Mail.defaultProps = defaultProps;

const MapPin = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
}), React.createElement("circle", {
  cx: "12",
  cy: "10",
  r: "3"
}));

MapPin.propTypes = propTypes;
MapPin.defaultProps = defaultProps;

const Map = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polygon", {
  points: "1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"
}), React.createElement("line", {
  x1: "8",
  y1: "2",
  x2: "8",
  y2: "18"
}), React.createElement("line", {
  x1: "16",
  y1: "6",
  x2: "16",
  y2: "22"
}));

Map.propTypes = propTypes;
Map.defaultProps = defaultProps;

const Maximize2 = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "15 3 21 3 21 9"
}), React.createElement("polyline", {
  points: "9 21 3 21 3 15"
}), React.createElement("line", {
  x1: "21",
  y1: "3",
  x2: "14",
  y2: "10"
}), React.createElement("line", {
  x1: "3",
  y1: "21",
  x2: "10",
  y2: "14"
}));

Maximize2.propTypes = propTypes;
Maximize2.defaultProps = defaultProps;

const Maximize = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
}));

Maximize.propTypes = propTypes;
Maximize.defaultProps = defaultProps;

const Meh = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  viewBox: "0 0 24 24",
  width: size,
  height: size,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), React.createElement("line", {
  x1: "8",
  y1: "15",
  x2: "16",
  y2: "15"
}), React.createElement("line", {
  x1: "9",
  y1: "9",
  x2: "9.01",
  y2: "9"
}), React.createElement("line", {
  x1: "15",
  y1: "9",
  x2: "15.01",
  y2: "9"
}));

Meh.propTypes = propTypes;
Meh.defaultProps = defaultProps;

const Menu = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("line", {
  x1: "3",
  y1: "12",
  x2: "21",
  y2: "12"
}), React.createElement("line", {
  x1: "3",
  y1: "6",
  x2: "21",
  y2: "6"
}), React.createElement("line", {
  x1: "3",
  y1: "18",
  x2: "21",
  y2: "18"
}));

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

const MessageCircle = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
}));

MessageCircle.propTypes = propTypes;
MessageCircle.defaultProps = defaultProps;

const MessageSquare = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
}));

MessageSquare.propTypes = propTypes;
MessageSquare.defaultProps = defaultProps;

const MicOff = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("line", {
  x1: "1",
  y1: "1",
  x2: "23",
  y2: "23"
}), React.createElement("path", {
  d: "M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"
}), React.createElement("path", {
  d: "M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"
}), React.createElement("line", {
  x1: "12",
  y1: "19",
  x2: "12",
  y2: "23"
}), React.createElement("line", {
  x1: "8",
  y1: "23",
  x2: "16",
  y2: "23"
}));

MicOff.propTypes = propTypes;
MicOff.defaultProps = defaultProps;

const Mic = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"
}), React.createElement("path", {
  d: "M19 10v2a7 7 0 0 1-14 0v-2"
}), React.createElement("line", {
  x1: "12",
  y1: "19",
  x2: "12",
  y2: "23"
}), React.createElement("line", {
  x1: "8",
  y1: "23",
  x2: "16",
  y2: "23"
}));

Mic.propTypes = propTypes;
Mic.defaultProps = defaultProps;

const Minimize2 = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "4 14 10 14 10 20"
}), React.createElement("polyline", {
  points: "20 10 14 10 14 4"
}), React.createElement("line", {
  x1: "14",
  y1: "10",
  x2: "21",
  y2: "3"
}), React.createElement("line", {
  x1: "3",
  y1: "21",
  x2: "10",
  y2: "14"
}));

Minimize2.propTypes = propTypes;
Minimize2.defaultProps = defaultProps;

const Minimize = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"
}));

Minimize.propTypes = propTypes;
Minimize.defaultProps = defaultProps;

const MinusCircle = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), React.createElement("line", {
  x1: "8",
  y1: "12",
  x2: "16",
  y2: "12"
}));

MinusCircle.propTypes = propTypes;
MinusCircle.defaultProps = defaultProps;

const MinusSquare = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("rect", {
  x: "3",
  y: "3",
  width: "18",
  height: "18",
  rx: "2",
  ry: "2"
}), React.createElement("line", {
  x1: "8",
  y1: "12",
  x2: "16",
  y2: "12"
}));

MinusSquare.propTypes = propTypes;
MinusSquare.defaultProps = defaultProps;

const Minus = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("line", {
  x1: "5",
  y1: "12",
  x2: "19",
  y2: "12"
}));

Minus.propTypes = propTypes;
Minus.defaultProps = defaultProps;

const Monitor = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("rect", {
  x: "2",
  y: "3",
  width: "20",
  height: "14",
  rx: "2",
  ry: "2"
}), React.createElement("line", {
  x1: "8",
  y1: "21",
  x2: "16",
  y2: "21"
}), React.createElement("line", {
  x1: "12",
  y1: "17",
  x2: "12",
  y2: "21"
}));

Monitor.propTypes = propTypes;
Monitor.defaultProps = defaultProps;

const Moon = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
}));

Moon.propTypes = propTypes;
Moon.defaultProps = defaultProps;

const MoreHorizontal = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "1"
}), React.createElement("circle", {
  cx: "19",
  cy: "12",
  r: "1"
}), React.createElement("circle", {
  cx: "5",
  cy: "12",
  r: "1"
}));

MoreHorizontal.propTypes = propTypes;
MoreHorizontal.defaultProps = defaultProps;

const MoreVertical = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "1"
}), React.createElement("circle", {
  cx: "12",
  cy: "5",
  r: "1"
}), React.createElement("circle", {
  cx: "12",
  cy: "19",
  r: "1"
}));

MoreVertical.propTypes = propTypes;
MoreVertical.defaultProps = defaultProps;

const MousePointer = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"
}), React.createElement("path", {
  d: "M13 13l6 6"
}));

MousePointer.propTypes = propTypes;
MousePointer.defaultProps = defaultProps;

const Move = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "5 9 2 12 5 15"
}), React.createElement("polyline", {
  points: "9 5 12 2 15 5"
}), React.createElement("polyline", {
  points: "15 19 12 22 9 19"
}), React.createElement("polyline", {
  points: "19 9 22 12 19 15"
}), React.createElement("line", {
  x1: "2",
  y1: "12",
  x2: "22",
  y2: "12"
}), React.createElement("line", {
  x1: "12",
  y1: "2",
  x2: "12",
  y2: "22"
}));

Move.propTypes = propTypes;
Move.defaultProps = defaultProps;

const Music = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M9 18V5l12-2v13"
}), React.createElement("circle", {
  cx: "6",
  cy: "18",
  r: "3"
}), React.createElement("circle", {
  cx: "18",
  cy: "16",
  r: "3"
}));

Music.propTypes = propTypes;
Music.defaultProps = defaultProps;

const Navigation2 = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polygon", {
  points: "12 2 19 21 12 17 5 21 12 2"
}));

Navigation2.propTypes = propTypes;
Navigation2.defaultProps = defaultProps;

const Navigation = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polygon", {
  points: "3 11 22 2 13 21 11 13 3 11"
}));

Navigation.propTypes = propTypes;
Navigation.defaultProps = defaultProps;

const Octagon = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polygon", {
  points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
}));

Octagon.propTypes = propTypes;
Octagon.defaultProps = defaultProps;

const Package = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("line", {
  x1: "16.5",
  y1: "9.4",
  x2: "7.5",
  y2: "4.21"
}), React.createElement("path", {
  d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
}), React.createElement("polyline", {
  points: "3.27 6.96 12 12.01 20.73 6.96"
}), React.createElement("line", {
  x1: "12",
  y1: "22.08",
  x2: "12",
  y2: "12"
}));

Package.propTypes = propTypes;
Package.defaultProps = defaultProps;

const Paperclip = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"
}));

Paperclip.propTypes = propTypes;
Paperclip.defaultProps = defaultProps;

const PauseCircle = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), React.createElement("line", {
  x1: "10",
  y1: "15",
  x2: "10",
  y2: "9"
}), React.createElement("line", {
  x1: "14",
  y1: "15",
  x2: "14",
  y2: "9"
}));

PauseCircle.propTypes = propTypes;
PauseCircle.defaultProps = defaultProps;

const Pause = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("rect", {
  x: "6",
  y: "4",
  width: "4",
  height: "16"
}), React.createElement("rect", {
  x: "14",
  y: "4",
  width: "4",
  height: "16"
}));

Pause.propTypes = propTypes;
Pause.defaultProps = defaultProps;

const PenTool = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  width: size,
  height: size,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M12 19l7-7 3 3-7 7-3-3z"
}), React.createElement("path", {
  d: "M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"
}), React.createElement("path", {
  d: "M2 2l7.586 7.586"
}), React.createElement("circle", {
  cx: "11",
  cy: "11",
  r: "2"
}));

PenTool.propTypes = propTypes;
PenTool.defaultProps = defaultProps;

const Percent = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("line", {
  x1: "19",
  y1: "5",
  x2: "5",
  y2: "19"
}), React.createElement("circle", {
  cx: "6.5",
  cy: "6.5",
  r: "2.5"
}), React.createElement("circle", {
  cx: "17.5",
  cy: "17.5",
  r: "2.5"
}));

Percent.propTypes = propTypes;
Percent.defaultProps = defaultProps;

const PhoneCall = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
}));

PhoneCall.propTypes = propTypes;
PhoneCall.defaultProps = defaultProps;

const PhoneForwarded = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "19 1 23 5 19 9"
}), React.createElement("line", {
  x1: "15",
  y1: "5",
  x2: "23",
  y2: "5"
}), React.createElement("path", {
  d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
}));

PhoneForwarded.propTypes = propTypes;
PhoneForwarded.defaultProps = defaultProps;

const PhoneIncoming = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "16 2 16 8 22 8"
}), React.createElement("line", {
  x1: "23",
  y1: "1",
  x2: "16",
  y2: "8"
}), React.createElement("path", {
  d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
}));

PhoneIncoming.propTypes = propTypes;
PhoneIncoming.defaultProps = defaultProps;

const PhoneMissed = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("line", {
  x1: "23",
  y1: "1",
  x2: "17",
  y2: "7"
}), React.createElement("line", {
  x1: "17",
  y1: "1",
  x2: "23",
  y2: "7"
}), React.createElement("path", {
  d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
}));

PhoneMissed.propTypes = propTypes;
PhoneMissed.defaultProps = defaultProps;

const PhoneOff = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"
}), React.createElement("line", {
  x1: "23",
  y1: "1",
  x2: "1",
  y2: "23"
}));

PhoneOff.propTypes = propTypes;
PhoneOff.defaultProps = defaultProps;

const PhoneOutgoing = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "23 7 23 1 17 1"
}), React.createElement("line", {
  x1: "16",
  y1: "8",
  x2: "23",
  y2: "1"
}), React.createElement("path", {
  d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
}));

PhoneOutgoing.propTypes = propTypes;
PhoneOutgoing.defaultProps = defaultProps;

const Phone = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
}));

Phone.propTypes = propTypes;
Phone.defaultProps = defaultProps;

const PieChart = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M21.21 15.89A10 10 0 1 1 8 2.83"
}), React.createElement("path", {
  d: "M22 12A10 10 0 0 0 12 2v10z"
}));

PieChart.propTypes = propTypes;
PieChart.defaultProps = defaultProps;

const PlayCircle = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), React.createElement("polygon", {
  points: "10 8 16 12 10 16 10 8"
}));

PlayCircle.propTypes = propTypes;
PlayCircle.defaultProps = defaultProps;

const Play = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polygon", {
  points: "5 3 19 12 5 21 5 3"
}));

Play.propTypes = propTypes;
Play.defaultProps = defaultProps;

const PlusCircle = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), React.createElement("line", {
  x1: "12",
  y1: "8",
  x2: "12",
  y2: "16"
}), React.createElement("line", {
  x1: "8",
  y1: "12",
  x2: "16",
  y2: "12"
}));

PlusCircle.propTypes = propTypes;
PlusCircle.defaultProps = defaultProps;

const PlusSquare = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("rect", {
  x: "3",
  y: "3",
  width: "18",
  height: "18",
  rx: "2",
  ry: "2"
}), React.createElement("line", {
  x1: "12",
  y1: "8",
  x2: "12",
  y2: "16"
}), React.createElement("line", {
  x1: "8",
  y1: "12",
  x2: "16",
  y2: "12"
}));

PlusSquare.propTypes = propTypes;
PlusSquare.defaultProps = defaultProps;

const Plus = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("line", {
  x1: "12",
  y1: "5",
  x2: "12",
  y2: "19"
}), React.createElement("line", {
  x1: "5",
  y1: "12",
  x2: "19",
  y2: "12"
}));

Plus.propTypes = propTypes;
Plus.defaultProps = defaultProps;

const Pocket = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"
}), React.createElement("polyline", {
  points: "8 10 12 14 16 10"
}));

Pocket.propTypes = propTypes;
Pocket.defaultProps = defaultProps;

const Power = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M18.36 6.64a9 9 0 1 1-12.73 0"
}), React.createElement("line", {
  x1: "12",
  y1: "2",
  x2: "12",
  y2: "12"
}));

Power.propTypes = propTypes;
Power.defaultProps = defaultProps;

const Printer = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "6 9 6 2 18 2 18 9"
}), React.createElement("path", {
  d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
}), React.createElement("rect", {
  x: "6",
  y: "14",
  width: "12",
  height: "8"
}));

Printer.propTypes = propTypes;
Printer.defaultProps = defaultProps;

const Radio = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "2"
}), React.createElement("path", {
  d: "M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"
}));

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;

const RefreshCcw = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "1 4 1 10 7 10"
}), React.createElement("polyline", {
  points: "23 20 23 14 17 14"
}), React.createElement("path", {
  d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"
}));

RefreshCcw.propTypes = propTypes;
RefreshCcw.defaultProps = defaultProps;

const RefreshCw = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "23 4 23 10 17 10"
}), React.createElement("polyline", {
  points: "1 20 1 14 7 14"
}), React.createElement("path", {
  d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
}));

RefreshCw.propTypes = propTypes;
RefreshCw.defaultProps = defaultProps;

const Repeat = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "17 1 21 5 17 9"
}), React.createElement("path", {
  d: "M3 11V9a4 4 0 0 1 4-4h14"
}), React.createElement("polyline", {
  points: "7 23 3 19 7 15"
}), React.createElement("path", {
  d: "M21 13v2a4 4 0 0 1-4 4H3"
}));

Repeat.propTypes = propTypes;
Repeat.defaultProps = defaultProps;

const Rewind = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polygon", {
  points: "11 19 2 12 11 5 11 19"
}), React.createElement("polygon", {
  points: "22 19 13 12 22 5 22 19"
}));

Rewind.propTypes = propTypes;
Rewind.defaultProps = defaultProps;

const RotateCcw = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "1 4 1 10 7 10"
}), React.createElement("path", {
  d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"
}));

RotateCcw.propTypes = propTypes;
RotateCcw.defaultProps = defaultProps;

const RotateCw = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "23 4 23 10 17 10"
}), React.createElement("path", {
  d: "M20.49 15a9 9 0 1 1-2.12-9.36L23 10"
}));

RotateCw.propTypes = propTypes;
RotateCw.defaultProps = defaultProps;

const Rss = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M4 11a9 9 0 0 1 9 9"
}), React.createElement("path", {
  d: "M4 4a16 16 0 0 1 16 16"
}), React.createElement("circle", {
  cx: "5",
  cy: "19",
  r: "1"
}));

Rss.propTypes = propTypes;
Rss.defaultProps = defaultProps;

const Save = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
}), React.createElement("polyline", {
  points: "17 21 17 13 7 13 7 21"
}), React.createElement("polyline", {
  points: "7 3 7 8 15 8"
}));

Save.propTypes = propTypes;
Save.defaultProps = defaultProps;

const Scissors = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "6",
  cy: "6",
  r: "3"
}), React.createElement("circle", {
  cx: "6",
  cy: "18",
  r: "3"
}), React.createElement("line", {
  x1: "20",
  y1: "4",
  x2: "8.12",
  y2: "15.88"
}), React.createElement("line", {
  x1: "14.47",
  y1: "14.48",
  x2: "20",
  y2: "20"
}), React.createElement("line", {
  x1: "8.12",
  y1: "8.12",
  x2: "12",
  y2: "12"
}));

Scissors.propTypes = propTypes;
Scissors.defaultProps = defaultProps;

const Search = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "11",
  cy: "11",
  r: "8"
}), React.createElement("line", {
  x1: "21",
  y1: "21",
  x2: "16.65",
  y2: "16.65"
}));

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

const Send = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("line", {
  x1: "22",
  y1: "2",
  x2: "11",
  y2: "13"
}), React.createElement("polygon", {
  points: "22 2 15 22 11 13 2 9 22 2"
}));

Send.propTypes = propTypes;
Send.defaultProps = defaultProps;

const Server = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("rect", {
  x: "2",
  y: "2",
  width: "20",
  height: "8",
  rx: "2",
  ry: "2"
}), React.createElement("rect", {
  x: "2",
  y: "14",
  width: "20",
  height: "8",
  rx: "2",
  ry: "2"
}), React.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "6",
  y2: "6"
}), React.createElement("line", {
  x1: "6",
  y1: "18",
  x2: "6",
  y2: "18"
}));

Server.propTypes = propTypes;
Server.defaultProps = defaultProps;

const Settings = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}), React.createElement("path", {
  d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
}));

Settings.propTypes = propTypes;
Settings.defaultProps = defaultProps;

const Share2 = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "18",
  cy: "5",
  r: "3"
}), React.createElement("circle", {
  cx: "6",
  cy: "12",
  r: "3"
}), React.createElement("circle", {
  cx: "18",
  cy: "19",
  r: "3"
}), React.createElement("line", {
  x1: "8.59",
  y1: "13.51",
  x2: "15.42",
  y2: "17.49"
}), React.createElement("line", {
  x1: "15.41",
  y1: "6.51",
  x2: "8.59",
  y2: "10.49"
}));

Share2.propTypes = propTypes;
Share2.defaultProps = defaultProps;

const Share = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
}), React.createElement("polyline", {
  points: "16 6 12 2 8 6"
}), React.createElement("line", {
  x1: "12",
  y1: "2",
  x2: "12",
  y2: "15"
}));

Share.propTypes = propTypes;
Share.defaultProps = defaultProps;

const ShieldOff = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"
}), React.createElement("path", {
  d: "M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"
}), React.createElement("line", {
  x1: "1",
  y1: "1",
  x2: "23",
  y2: "23"
}));

ShieldOff.propTypes = propTypes;
ShieldOff.defaultProps = defaultProps;

const Shield = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
}));

Shield.propTypes = propTypes;
Shield.defaultProps = defaultProps;

const ShoppingBag = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
}), React.createElement("line", {
  x1: "3",
  y1: "6",
  x2: "21",
  y2: "6"
}), React.createElement("path", {
  d: "M16 10a4 4 0 0 1-8 0"
}));

ShoppingBag.propTypes = propTypes;
ShoppingBag.defaultProps = defaultProps;

const ShoppingCart = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "9",
  cy: "21",
  r: "1"
}), React.createElement("circle", {
  cx: "20",
  cy: "21",
  r: "1"
}), React.createElement("path", {
  d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
}));

ShoppingCart.propTypes = propTypes;
ShoppingCart.defaultProps = defaultProps;

const Shuffle = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "16 3 21 3 21 8"
}), React.createElement("line", {
  x1: "4",
  y1: "20",
  x2: "21",
  y2: "3"
}), React.createElement("polyline", {
  points: "21 16 21 21 16 21"
}), React.createElement("line", {
  x1: "15",
  y1: "15",
  x2: "21",
  y2: "21"
}), React.createElement("line", {
  x1: "4",
  y1: "4",
  x2: "9",
  y2: "9"
}));

Shuffle.propTypes = propTypes;
Shuffle.defaultProps = defaultProps;

const Sidebar = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("rect", {
  x: "3",
  y: "3",
  width: "18",
  height: "18",
  rx: "2",
  ry: "2"
}), React.createElement("line", {
  x1: "9",
  y1: "3",
  x2: "9",
  y2: "21"
}));

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;

const SkipBack = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polygon", {
  points: "19 20 9 12 19 4 19 20"
}), React.createElement("line", {
  x1: "5",
  y1: "19",
  x2: "5",
  y2: "5"
}));

SkipBack.propTypes = propTypes;
SkipBack.defaultProps = defaultProps;

const SkipForward = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polygon", {
  points: "5 4 15 12 5 20 5 4"
}), React.createElement("line", {
  x1: "19",
  y1: "5",
  x2: "19",
  y2: "19"
}));

SkipForward.propTypes = propTypes;
SkipForward.defaultProps = defaultProps;

const Slack = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
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

Slack.propTypes = propTypes;
Slack.defaultProps = defaultProps;

const Slash = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), React.createElement("line", {
  x1: "4.93",
  y1: "4.93",
  x2: "19.07",
  y2: "19.07"
}));

Slash.propTypes = propTypes;
Slash.defaultProps = defaultProps;

const Sliders = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("line", {
  x1: "4",
  y1: "21",
  x2: "4",
  y2: "14"
}), React.createElement("line", {
  x1: "4",
  y1: "10",
  x2: "4",
  y2: "3"
}), React.createElement("line", {
  x1: "12",
  y1: "21",
  x2: "12",
  y2: "12"
}), React.createElement("line", {
  x1: "12",
  y1: "8",
  x2: "12",
  y2: "3"
}), React.createElement("line", {
  x1: "20",
  y1: "21",
  x2: "20",
  y2: "16"
}), React.createElement("line", {
  x1: "20",
  y1: "12",
  x2: "20",
  y2: "3"
}), React.createElement("line", {
  x1: "1",
  y1: "14",
  x2: "7",
  y2: "14"
}), React.createElement("line", {
  x1: "9",
  y1: "8",
  x2: "15",
  y2: "8"
}), React.createElement("line", {
  x1: "17",
  y1: "16",
  x2: "23",
  y2: "16"
}));

Sliders.propTypes = propTypes;
Sliders.defaultProps = defaultProps;

const Smartphone = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("rect", {
  x: "5",
  y: "2",
  width: "14",
  height: "20",
  rx: "2",
  ry: "2"
}), React.createElement("line", {
  x1: "12",
  y1: "18",
  x2: "12",
  y2: "18"
}));

Smartphone.propTypes = propTypes;
Smartphone.defaultProps = defaultProps;

const Smile = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  viewBox: "0 0 24 24",
  width: size,
  height: size,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), React.createElement("path", {
  d: "M8 14s1.5 2 4 2 4-2 4-2"
}), React.createElement("line", {
  x1: "9",
  y1: "9",
  x2: "9.01",
  y2: "9"
}), React.createElement("line", {
  x1: "15",
  y1: "9",
  x2: "15.01",
  y2: "9"
}));

Smile.propTypes = propTypes;
Smile.defaultProps = defaultProps;

const Speaker = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("rect", {
  x: "4",
  y: "2",
  width: "16",
  height: "20",
  rx: "2",
  ry: "2"
}), React.createElement("circle", {
  cx: "12",
  cy: "14",
  r: "4"
}), React.createElement("line", {
  x1: "12",
  y1: "6",
  x2: "12",
  y2: "6"
}));

Speaker.propTypes = propTypes;
Speaker.defaultProps = defaultProps;

const Square = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("rect", {
  x: "3",
  y: "3",
  width: "18",
  height: "18",
  rx: "2",
  ry: "2"
}));

Square.propTypes = propTypes;
Square.defaultProps = defaultProps;

const Star = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polygon", {
  points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
}));

Star.propTypes = propTypes;
Star.defaultProps = defaultProps;

const StopCircle = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), React.createElement("rect", {
  x: "9",
  y: "9",
  width: "6",
  height: "6"
}));

StopCircle.propTypes = propTypes;
StopCircle.defaultProps = defaultProps;

const Sun = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "5"
}), React.createElement("line", {
  x1: "12",
  y1: "1",
  x2: "12",
  y2: "3"
}), React.createElement("line", {
  x1: "12",
  y1: "21",
  x2: "12",
  y2: "23"
}), React.createElement("line", {
  x1: "4.22",
  y1: "4.22",
  x2: "5.64",
  y2: "5.64"
}), React.createElement("line", {
  x1: "18.36",
  y1: "18.36",
  x2: "19.78",
  y2: "19.78"
}), React.createElement("line", {
  x1: "1",
  y1: "12",
  x2: "3",
  y2: "12"
}), React.createElement("line", {
  x1: "21",
  y1: "12",
  x2: "23",
  y2: "12"
}), React.createElement("line", {
  x1: "4.22",
  y1: "19.78",
  x2: "5.64",
  y2: "18.36"
}), React.createElement("line", {
  x1: "18.36",
  y1: "5.64",
  x2: "19.78",
  y2: "4.22"
}));

Sun.propTypes = propTypes;
Sun.defaultProps = defaultProps;

const Sunrise = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M17 18a5 5 0 0 0-10 0"
}), React.createElement("line", {
  x1: "12",
  y1: "2",
  x2: "12",
  y2: "9"
}), React.createElement("line", {
  x1: "4.22",
  y1: "10.22",
  x2: "5.64",
  y2: "11.64"
}), React.createElement("line", {
  x1: "1",
  y1: "18",
  x2: "3",
  y2: "18"
}), React.createElement("line", {
  x1: "21",
  y1: "18",
  x2: "23",
  y2: "18"
}), React.createElement("line", {
  x1: "18.36",
  y1: "11.64",
  x2: "19.78",
  y2: "10.22"
}), React.createElement("line", {
  x1: "23",
  y1: "22",
  x2: "1",
  y2: "22"
}), React.createElement("polyline", {
  points: "8 6 12 2 16 6"
}));

Sunrise.propTypes = propTypes;
Sunrise.defaultProps = defaultProps;

const Sunset = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M17 18a5 5 0 0 0-10 0"
}), React.createElement("line", {
  x1: "12",
  y1: "9",
  x2: "12",
  y2: "2"
}), React.createElement("line", {
  x1: "4.22",
  y1: "10.22",
  x2: "5.64",
  y2: "11.64"
}), React.createElement("line", {
  x1: "1",
  y1: "18",
  x2: "3",
  y2: "18"
}), React.createElement("line", {
  x1: "21",
  y1: "18",
  x2: "23",
  y2: "18"
}), React.createElement("line", {
  x1: "18.36",
  y1: "11.64",
  x2: "19.78",
  y2: "10.22"
}), React.createElement("line", {
  x1: "23",
  y1: "22",
  x2: "1",
  y2: "22"
}), React.createElement("polyline", {
  points: "16 5 12 9 8 5"
}));

Sunset.propTypes = propTypes;
Sunset.defaultProps = defaultProps;

const Tablet = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("rect", {
  x: "4",
  y: "2",
  width: "16",
  height: "20",
  rx: "2",
  ry: "2",
  transform: "rotate(180 12 12)"
}), React.createElement("line", {
  x1: "12",
  y1: "18",
  x2: "12",
  y2: "18"
}));

Tablet.propTypes = propTypes;
Tablet.defaultProps = defaultProps;

const Tag = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
}), React.createElement("line", {
  x1: "7",
  y1: "7",
  x2: "7",
  y2: "7"
}));

Tag.propTypes = propTypes;
Tag.defaultProps = defaultProps;

const Target = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "6"
}), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "2"
}));

Target.propTypes = propTypes;
Target.defaultProps = defaultProps;

const Terminal = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "4 17 10 11 4 5"
}), React.createElement("line", {
  x1: "12",
  y1: "19",
  x2: "20",
  y2: "19"
}));

Terminal.propTypes = propTypes;
Terminal.defaultProps = defaultProps;

const Thermometer = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"
}));

Thermometer.propTypes = propTypes;
Thermometer.defaultProps = defaultProps;

const ThumbsDown = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
}));

ThumbsDown.propTypes = propTypes;
ThumbsDown.defaultProps = defaultProps;

const ThumbsUp = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
}));

ThumbsUp.propTypes = propTypes;
ThumbsUp.defaultProps = defaultProps;

const ToggleLeft = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("rect", {
  x: "1",
  y: "5",
  width: "22",
  height: "14",
  rx: "7",
  ry: "7"
}), React.createElement("circle", {
  cx: "8",
  cy: "12",
  r: "3"
}));

ToggleLeft.propTypes = propTypes;
ToggleLeft.defaultProps = defaultProps;

const ToggleRight = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("rect", {
  x: "1",
  y: "5",
  width: "22",
  height: "14",
  rx: "7",
  ry: "7"
}), React.createElement("circle", {
  cx: "16",
  cy: "12",
  r: "3"
}));

ToggleRight.propTypes = propTypes;
ToggleRight.defaultProps = defaultProps;

const Trash2 = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "3 6 5 6 21 6"
}), React.createElement("path", {
  d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
}), React.createElement("line", {
  x1: "10",
  y1: "11",
  x2: "10",
  y2: "17"
}), React.createElement("line", {
  x1: "14",
  y1: "11",
  x2: "14",
  y2: "17"
}));

Trash2.propTypes = propTypes;
Trash2.defaultProps = defaultProps;

const Trash = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "3 6 5 6 21 6"
}), React.createElement("path", {
  d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
}));

Trash.propTypes = propTypes;
Trash.defaultProps = defaultProps;

const Trello = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  viewBox: "0 0 24 24",
  width: size,
  height: size,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("rect", {
  x: "3",
  y: "3",
  width: "18",
  height: "18",
  rx: "2",
  ry: "2"
}), React.createElement("rect", {
  x: "7",
  y: "7",
  width: "3",
  height: "9"
}), React.createElement("rect", {
  x: "14",
  y: "7",
  width: "3",
  height: "5"
}));

Trello.propTypes = propTypes;
Trello.defaultProps = defaultProps;

const TrendingDown = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "23 18 13.5 8.5 8.5 13.5 1 6"
}), React.createElement("polyline", {
  points: "17 18 23 18 23 12"
}));

TrendingDown.propTypes = propTypes;
TrendingDown.defaultProps = defaultProps;

const TrendingUp = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "23 6 13.5 15.5 8.5 10.5 1 18"
}), React.createElement("polyline", {
  points: "17 6 23 6 23 12"
}));

TrendingUp.propTypes = propTypes;
TrendingUp.defaultProps = defaultProps;

const Triangle = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
}));

Triangle.propTypes = propTypes;
Triangle.defaultProps = defaultProps;

const Truck = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("rect", {
  x: "1",
  y: "3",
  width: "15",
  height: "13"
}), React.createElement("polygon", {
  points: "16 8 20 8 23 11 23 16 16 16 16 8"
}), React.createElement("circle", {
  cx: "5.5",
  cy: "18.5",
  r: "2.5"
}), React.createElement("circle", {
  cx: "18.5",
  cy: "18.5",
  r: "2.5"
}));

Truck.propTypes = propTypes;
Truck.defaultProps = defaultProps;

const Tv = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("rect", {
  x: "2",
  y: "7",
  width: "20",
  height: "15",
  rx: "2",
  ry: "2"
}), React.createElement("polyline", {
  points: "17 2 12 7 7 2"
}));

Tv.propTypes = propTypes;
Tv.defaultProps = defaultProps;

const Twitter = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
}));

Twitter.propTypes = propTypes;
Twitter.defaultProps = defaultProps;

const Type = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "4 7 4 4 20 4 20 7"
}), React.createElement("line", {
  x1: "9",
  y1: "20",
  x2: "15",
  y2: "20"
}), React.createElement("line", {
  x1: "12",
  y1: "4",
  x2: "12",
  y2: "20"
}));

Type.propTypes = propTypes;
Type.defaultProps = defaultProps;

const Umbrella = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"
}));

Umbrella.propTypes = propTypes;
Umbrella.defaultProps = defaultProps;

const Underline = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"
}), React.createElement("line", {
  x1: "4",
  y1: "21",
  x2: "20",
  y2: "21"
}));

Underline.propTypes = propTypes;
Underline.defaultProps = defaultProps;

const Unlock = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("rect", {
  x: "3",
  y: "11",
  width: "18",
  height: "11",
  rx: "2",
  ry: "2"
}), React.createElement("path", {
  d: "M7 11V7a5 5 0 0 1 9.9-1"
}));

Unlock.propTypes = propTypes;
Unlock.defaultProps = defaultProps;

const UploadCloud = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "16 16 12 12 8 16"
}), React.createElement("line", {
  x1: "12",
  y1: "12",
  x2: "12",
  y2: "21"
}), React.createElement("path", {
  d: "M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"
}), React.createElement("polyline", {
  points: "16 16 12 12 8 16"
}));

UploadCloud.propTypes = propTypes;
UploadCloud.defaultProps = defaultProps;

const Upload = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
}), React.createElement("polyline", {
  points: "17 8 12 3 7 8"
}), React.createElement("line", {
  x1: "12",
  y1: "3",
  x2: "12",
  y2: "15"
}));

Upload.propTypes = propTypes;
Upload.defaultProps = defaultProps;

const UserCheck = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
}), React.createElement("circle", {
  cx: "8.5",
  cy: "7",
  r: "4"
}), React.createElement("polyline", {
  points: "17 11 19 13 23 9"
}));

UserCheck.propTypes = propTypes;
UserCheck.defaultProps = defaultProps;

const UserMinus = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
}), React.createElement("circle", {
  cx: "8.5",
  cy: "7",
  r: "4"
}), React.createElement("line", {
  x1: "23",
  y1: "11",
  x2: "17",
  y2: "11"
}));

UserMinus.propTypes = propTypes;
UserMinus.defaultProps = defaultProps;

const UserPlus = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
}), React.createElement("circle", {
  cx: "8.5",
  cy: "7",
  r: "4"
}), React.createElement("line", {
  x1: "20",
  y1: "8",
  x2: "20",
  y2: "14"
}), React.createElement("line", {
  x1: "23",
  y1: "11",
  x2: "17",
  y2: "11"
}));

UserPlus.propTypes = propTypes;
UserPlus.defaultProps = defaultProps;

const UserX = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
}), React.createElement("circle", {
  cx: "8.5",
  cy: "7",
  r: "4"
}), React.createElement("line", {
  x1: "18",
  y1: "8",
  x2: "23",
  y2: "13"
}), React.createElement("line", {
  x1: "23",
  y1: "8",
  x2: "18",
  y2: "13"
}));

UserX.propTypes = propTypes;
UserX.defaultProps = defaultProps;

const User = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
}), React.createElement("circle", {
  cx: "12",
  cy: "7",
  r: "4"
}));

User.propTypes = propTypes;
User.defaultProps = defaultProps;

const Users = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
}), React.createElement("circle", {
  cx: "9",
  cy: "7",
  r: "4"
}), React.createElement("path", {
  d: "M23 21v-2a4 4 0 0 0-3-3.87"
}), React.createElement("path", {
  d: "M16 3.13a4 4 0 0 1 0 7.75"
}));

Users.propTypes = propTypes;
Users.defaultProps = defaultProps;

const VideoOff = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"
}), React.createElement("line", {
  x1: "1",
  y1: "1",
  x2: "23",
  y2: "23"
}));

VideoOff.propTypes = propTypes;
VideoOff.defaultProps = defaultProps;

const Video = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polygon", {
  points: "23 7 16 12 23 17 23 7"
}), React.createElement("rect", {
  x: "1",
  y: "5",
  width: "15",
  height: "14",
  rx: "2",
  ry: "2"
}));

Video.propTypes = propTypes;
Video.defaultProps = defaultProps;

const Voicemail = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "5.5",
  cy: "11.5",
  r: "4.5"
}), React.createElement("circle", {
  cx: "18.5",
  cy: "11.5",
  r: "4.5"
}), React.createElement("line", {
  x1: "5.5",
  y1: "16",
  x2: "18.5",
  y2: "16"
}));

Voicemail.propTypes = propTypes;
Voicemail.defaultProps = defaultProps;

const Volume1 = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polygon", {
  points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
}), React.createElement("path", {
  d: "M15.54 8.46a5 5 0 0 1 0 7.07"
}));

Volume1.propTypes = propTypes;
Volume1.defaultProps = defaultProps;

const Volume2 = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polygon", {
  points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
}), React.createElement("path", {
  d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"
}));

Volume2.propTypes = propTypes;
Volume2.defaultProps = defaultProps;

const VolumeX = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polygon", {
  points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
}), React.createElement("line", {
  x1: "23",
  y1: "9",
  x2: "17",
  y2: "15"
}), React.createElement("line", {
  x1: "17",
  y1: "9",
  x2: "23",
  y2: "15"
}));

VolumeX.propTypes = propTypes;
VolumeX.defaultProps = defaultProps;

const Volume = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polygon", {
  points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
}));

Volume.propTypes = propTypes;
Volume.defaultProps = defaultProps;

const Watch = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "7"
}), React.createElement("polyline", {
  points: "12 9 12 12 13.5 13.5"
}), React.createElement("path", {
  d: "M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"
}));

Watch.propTypes = propTypes;
Watch.defaultProps = defaultProps;

const WifiOff = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("line", {
  x1: "1",
  y1: "1",
  x2: "23",
  y2: "23"
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
  x1: "12",
  y1: "20",
  x2: "12",
  y2: "20"
}));

WifiOff.propTypes = propTypes;
WifiOff.defaultProps = defaultProps;

const Wifi = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M5 12.55a11 11 0 0 1 14.08 0"
}), React.createElement("path", {
  d: "M1.42 9a16 16 0 0 1 21.16 0"
}), React.createElement("path", {
  d: "M8.53 16.11a6 6 0 0 1 6.95 0"
}), React.createElement("line", {
  x1: "12",
  y1: "20",
  x2: "12",
  y2: "20"
}));

Wifi.propTypes = propTypes;
Wifi.defaultProps = defaultProps;

const Wind = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"
}));

Wind.propTypes = propTypes;
Wind.defaultProps = defaultProps;

const XCircle = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), React.createElement("line", {
  x1: "15",
  y1: "9",
  x2: "9",
  y2: "15"
}), React.createElement("line", {
  x1: "9",
  y1: "9",
  x2: "15",
  y2: "15"
}));

XCircle.propTypes = propTypes;
XCircle.defaultProps = defaultProps;

const XOctagon = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polygon", {
  points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
}), React.createElement("line", {
  x1: "15",
  y1: "9",
  x2: "9",
  y2: "15"
}), React.createElement("line", {
  x1: "9",
  y1: "9",
  x2: "15",
  y2: "15"
}));

XOctagon.propTypes = propTypes;
XOctagon.defaultProps = defaultProps;

const XSquare = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("rect", {
  x: "3",
  y: "3",
  width: "18",
  height: "18",
  rx: "2",
  ry: "2"
}), React.createElement("line", {
  x1: "9",
  y1: "9",
  x2: "15",
  y2: "15"
}), React.createElement("line", {
  x1: "15",
  y1: "9",
  x2: "9",
  y2: "15"
}));

XSquare.propTypes = propTypes;
XSquare.defaultProps = defaultProps;

const X = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), React.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
}));

X.propTypes = propTypes;
X.defaultProps = defaultProps;

const Youtube = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("path", {
  d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
}), React.createElement("polygon", {
  points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
}));

Youtube.propTypes = propTypes;
Youtube.defaultProps = defaultProps;

const ZapOff = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polyline", {
  points: "12.41 6.75 13 2 10.57 4.92"
}), React.createElement("polyline", {
  points: "18.57 12.91 21 10 15.66 10"
}), React.createElement("polyline", {
  points: "8 8 3 14 12 14 11 22 16 16"
}), React.createElement("line", {
  x1: "1",
  y1: "1",
  x2: "23",
  y2: "23"
}));

ZapOff.propTypes = propTypes;
ZapOff.defaultProps = defaultProps;

const Zap = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("polygon", {
  points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
}));

Zap.propTypes = propTypes;
Zap.defaultProps = defaultProps;

const ZoomIn = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "11",
  cy: "11",
  r: "8"
}), React.createElement("line", {
  x1: "21",
  y1: "21",
  x2: "16.65",
  y2: "16.65"
}), React.createElement("line", {
  x1: "11",
  y1: "8",
  x2: "11",
  y2: "14"
}), React.createElement("line", {
  x1: "8",
  y1: "11",
  x2: "14",
  y2: "11"
}));

ZoomIn.propTypes = propTypes;
ZoomIn.defaultProps = defaultProps;

const ZoomOut = ({
  color,
  size,
  ...otherProps
}) => React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, otherProps), React.createElement("circle", {
  cx: "11",
  cy: "11",
  r: "8"
}), React.createElement("line", {
  x1: "21",
  y1: "21",
  x2: "16.65",
  y2: "16.65"
}), React.createElement("line", {
  x1: "8",
  y1: "11",
  x2: "14",
  y2: "11"
}));

ZoomOut.propTypes = propTypes;
ZoomOut.defaultProps = defaultProps;

export { Activity, Airplay, AlertCircle, AlertOctagon, AlertTriangle, AlignCenter, AlignJustify, AlignLeft, AlignRight, Anchor, Aperture, Archive, ArrowDown, ArrowDownCircle, ArrowDownLeft, ArrowDownRight, ArrowLeft, ArrowLeftCircle, ArrowRight, ArrowRightCircle, ArrowUp, ArrowUpCircle, ArrowUpLeft, ArrowUpRight, AtSign, Award, BarChart, BarChart2, Battery, BatteryCharging, Bell, BellOff, Bluetooth, Bold, Book, BookOpen, Bookmark, Box, Briefcase, Calendar, Camera, CameraOff, Cast, Check, CheckCircle, CheckSquare, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, ChevronsDown, ChevronsLeft, ChevronsRight, ChevronsUp, Chrome, Circle, Clipboard, Clock, Cloud, CloudDrizzle, CloudLightning, CloudOff, CloudRain, CloudSnow, Code, Codepen, Codesandbox, Coffee, Columns, Command, Compass, Copy, CornerDownLeft, CornerDownRight, CornerLeftDown, CornerLeftUp, CornerRightDown, CornerRightUp, CornerUpLeft, CornerUpRight, Cpu, CreditCard, Crop, Crosshair, Database, Delete, Disc, DollarSign, Download, DownloadCloud, Droplet, Edit, Edit2, Edit3, ExternalLink, Eye, EyeOff, Facebook, FastForward, Feather, Figma, File, FileMinus, FilePlus, FileText, Film, Filter, Flag, Folder, FolderMinus, FolderPlus, Frown, Gift, GitBranch, GitCommit, GitHub, GitMerge, GitPullRequest, Gitlab, Globe, Grid, HardDrive, Hash, Headphones, Heart, HelpCircle, Hexagon, Home, Image, Inbox, Info, Instagram, Italic, Key, Layers, Layout, LifeBuoy, Link, Link2, Linkedin, List, Loader, Lock, LogIn, LogOut, Mail, Map, MapPin, Maximize, Maximize2, Meh, Menu, MessageCircle, MessageSquare, Mic, MicOff, Minimize, Minimize2, Minus, MinusCircle, MinusSquare, Monitor, Moon, MoreHorizontal, MoreVertical, MousePointer, Move, Music, Navigation, Navigation2, Octagon, Package, Paperclip, Pause, PauseCircle, PenTool, Percent, Phone, PhoneCall, PhoneForwarded, PhoneIncoming, PhoneMissed, PhoneOff, PhoneOutgoing, PieChart, Play, PlayCircle, Plus, PlusCircle, PlusSquare, Pocket, Power, Printer, Radio, RefreshCcw, RefreshCw, Repeat, Rewind, RotateCcw, RotateCw, Rss, Save, Scissors, Search, Send, Server, Settings, Share, Share2, Shield, ShieldOff, ShoppingBag, ShoppingCart, Shuffle, Sidebar, SkipBack, SkipForward, Slack, Slash, Sliders, Smartphone, Smile, Speaker, Square, Star, StopCircle, Sun, Sunrise, Sunset, Tablet, Tag, Target, Terminal, Thermometer, ThumbsDown, ThumbsUp, ToggleLeft, ToggleRight, Trash, Trash2, Trello, TrendingDown, TrendingUp, Triangle, Truck, Tv, Twitter, Type, Umbrella, Underline, Unlock, Upload, UploadCloud, User, UserCheck, UserMinus, UserPlus, UserX, Users, Video, VideoOff, Voicemail, Volume, Volume1, Volume2, VolumeX, Watch, Wifi, WifiOff, Wind, X, XCircle, XOctagon, XSquare, Youtube, Zap, ZapOff, ZoomIn, ZoomOut };

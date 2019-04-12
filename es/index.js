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

const Activity = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Activity.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Activity.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Airplay = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Airplay.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Airplay.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const AlertCircle = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

AlertCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
AlertCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const AlertOctagon = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

AlertOctagon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
AlertOctagon.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const AlertTriangle = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

AlertTriangle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
AlertTriangle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const AlignCenter = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

AlignCenter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
AlignCenter.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const AlignJustify = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

AlignJustify.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
AlignJustify.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const AlignLeft = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

AlignLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
AlignLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const AlignRight = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

AlignRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
AlignRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Anchor = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Anchor.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Anchor.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Aperture = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Aperture.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Aperture.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Archive = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Archive.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Archive.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const ArrowDownCircle = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

ArrowDownCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ArrowDownCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const ArrowDownLeft = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

ArrowDownLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ArrowDownLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const ArrowDownRight = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

ArrowDownRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ArrowDownRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const ArrowDown = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

ArrowDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ArrowDown.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const ArrowLeftCircle = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

ArrowLeftCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ArrowLeftCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const ArrowLeft = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

ArrowLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ArrowLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const ArrowRightCircle = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

ArrowRightCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ArrowRightCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const ArrowRight = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

ArrowRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ArrowRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const ArrowUpCircle = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

ArrowUpCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ArrowUpCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const ArrowUpLeft = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

ArrowUpLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ArrowUpLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const ArrowUpRight = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

ArrowUpRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ArrowUpRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const ArrowUp = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

ArrowUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ArrowUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const AtSign = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

AtSign.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
AtSign.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Award = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Award.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Award.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const BarChart2 = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

BarChart2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
BarChart2.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const BarChart = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

BarChart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
BarChart.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const BatteryCharging = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

BatteryCharging.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
BatteryCharging.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Battery = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Battery.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Battery.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const BellOff = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

BellOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
BellOff.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Bell = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Bell.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Bell.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Bluetooth = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Bluetooth.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Bluetooth.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Bold = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Bold.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Bold.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const BookOpen = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

BookOpen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
BookOpen.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Book = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Book.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Book.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Bookmark = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Bookmark.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Bookmark.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Box = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Box.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Box.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Briefcase = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Briefcase.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Briefcase.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Calendar = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Calendar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Calendar.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const CameraOff = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

CameraOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CameraOff.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Camera = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Camera.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Camera.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Cast = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Cast.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Cast.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const CheckCircle = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

CheckCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CheckCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const CheckSquare = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

CheckSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CheckSquare.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Check = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Check.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Check.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const ChevronDown = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

ChevronDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ChevronDown.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const ChevronLeft = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

ChevronLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ChevronLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const ChevronRight = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

ChevronRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ChevronRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const ChevronUp = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

ChevronUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ChevronUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const ChevronsDown = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

ChevronsDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ChevronsDown.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const ChevronsLeft = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

ChevronsLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ChevronsLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const ChevronsRight = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

ChevronsRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ChevronsRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const ChevronsUp = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

ChevronsUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ChevronsUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Chrome = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Chrome.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Chrome.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Circle = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Circle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Circle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Clipboard = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Clipboard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Clipboard.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Clock = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Clock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Clock.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const CloudDrizzle = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

CloudDrizzle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CloudDrizzle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const CloudLightning = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

CloudLightning.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CloudLightning.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const CloudOff = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

CloudOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CloudOff.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const CloudRain = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

CloudRain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CloudRain.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const CloudSnow = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

CloudSnow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CloudSnow.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Cloud = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Cloud.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Cloud.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Code = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Code.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Code.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Codepen = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Codepen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Codepen.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Codesandbox = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Codesandbox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Codesandbox.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Coffee = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Coffee.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Coffee.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Columns = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Columns.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Columns.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Command = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Command.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Command.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Compass = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Compass.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Compass.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Copy = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Copy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Copy.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const CornerDownLeft = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

CornerDownLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CornerDownLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const CornerDownRight = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

CornerDownRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CornerDownRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const CornerLeftDown = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

CornerLeftDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CornerLeftDown.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const CornerLeftUp = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

CornerLeftUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CornerLeftUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const CornerRightDown = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

CornerRightDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CornerRightDown.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const CornerRightUp = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

CornerRightUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CornerRightUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const CornerUpLeft = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

CornerUpLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CornerUpLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const CornerUpRight = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

CornerUpRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CornerUpRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Cpu = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Cpu.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Cpu.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const CreditCard = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

CreditCard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CreditCard.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Crop = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Crop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Crop.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Crosshair = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Crosshair.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Crosshair.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Database = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Database.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Database.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Delete = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Delete.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Delete.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Disc = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Disc.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Disc.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const DollarSign = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

DollarSign.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
DollarSign.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const DownloadCloud = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

DownloadCloud.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
DownloadCloud.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Download = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Download.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Download.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Droplet = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Droplet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Droplet.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Edit2 = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Edit2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Edit2.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Edit3 = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Edit3.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Edit3.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Edit = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Edit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Edit.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const ExternalLink = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

ExternalLink.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ExternalLink.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const EyeOff = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

EyeOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
EyeOff.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Eye = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Eye.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Eye.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Facebook = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Facebook.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Facebook.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const FastForward = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

FastForward.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
FastForward.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Feather = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Feather.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Feather.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Figma = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Figma.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Figma.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const FileMinus = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

FileMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
FileMinus.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const FilePlus = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

FilePlus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
FilePlus.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const FileText = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

FileText.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
FileText.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const File = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

File.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
File.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Film = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Film.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Film.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Filter = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Filter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Filter.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Flag = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Flag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Flag.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const FolderMinus = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

FolderMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
FolderMinus.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const FolderPlus = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

FolderPlus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
FolderPlus.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Folder = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Folder.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Folder.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Frown = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Frown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Frown.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Gift = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Gift.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Gift.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const GitBranch = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

GitBranch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
GitBranch.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const GitCommit = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

GitCommit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
GitCommit.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const GitMerge = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

GitMerge.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
GitMerge.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const GitPullRequest = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

GitPullRequest.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
GitPullRequest.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const GitHub = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

GitHub.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
GitHub.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Gitlab = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Gitlab.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Gitlab.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Globe = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Globe.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Globe.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Grid = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Grid.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Grid.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const HardDrive = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

HardDrive.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
HardDrive.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Hash = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Hash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Hash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Headphones = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Headphones.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Headphones.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Heart = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Heart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Heart.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const HelpCircle = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

HelpCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
HelpCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Hexagon = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Hexagon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Hexagon.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Home = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Home.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Home.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Image = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Image.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Image.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Inbox = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Inbox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Inbox.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Info = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Info.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Info.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Instagram = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Instagram.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Instagram.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Italic = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Italic.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Italic.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Key = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Key.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Key.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Layers = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Layers.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Layers.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Layout = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Layout.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Layout.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const LifeBuoy = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

LifeBuoy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
LifeBuoy.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Link2 = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Link2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Link2.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Link = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Link.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Link.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Linkedin = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Linkedin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Linkedin.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const List = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

List.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
List.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Loader = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Loader.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Loader.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Lock = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Lock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Lock.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const LogIn = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

LogIn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
LogIn.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const LogOut = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

LogOut.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
LogOut.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Mail = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Mail.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Mail.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const MapPin = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

MapPin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
MapPin.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Map = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Map.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Map.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Maximize2 = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Maximize2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Maximize2.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Maximize = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Maximize.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Maximize.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Meh = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Meh.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Meh.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Menu = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Menu.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Menu.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const MessageCircle = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

MessageCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
MessageCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const MessageSquare = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

MessageSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
MessageSquare.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const MicOff = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

MicOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
MicOff.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Mic = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Mic.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Mic.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Minimize2 = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Minimize2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Minimize2.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Minimize = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Minimize.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Minimize.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const MinusCircle = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

MinusCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
MinusCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const MinusSquare = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

MinusSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
MinusSquare.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Minus = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Minus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Minus.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Monitor = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Monitor.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Monitor.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Moon = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Moon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Moon.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const MoreHorizontal = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

MoreHorizontal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
MoreHorizontal.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const MoreVertical = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

MoreVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
MoreVertical.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const MousePointer = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

MousePointer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
MousePointer.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Move = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Move.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Move.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Music = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Music.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Music.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Navigation2 = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Navigation2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Navigation2.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Navigation = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Navigation.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Navigation.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Octagon = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Octagon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Octagon.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Package = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Package.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Package.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Paperclip = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Paperclip.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Paperclip.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const PauseCircle = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

PauseCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
PauseCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Pause = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Pause.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Pause.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const PenTool = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

PenTool.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
PenTool.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Percent = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Percent.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Percent.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const PhoneCall = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

PhoneCall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
PhoneCall.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const PhoneForwarded = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

PhoneForwarded.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
PhoneForwarded.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const PhoneIncoming = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

PhoneIncoming.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
PhoneIncoming.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const PhoneMissed = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

PhoneMissed.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
PhoneMissed.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const PhoneOff = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

PhoneOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
PhoneOff.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const PhoneOutgoing = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

PhoneOutgoing.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
PhoneOutgoing.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Phone = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Phone.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Phone.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const PieChart = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

PieChart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
PieChart.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const PlayCircle = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

PlayCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
PlayCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Play = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Play.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Play.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const PlusCircle = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

PlusCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
PlusCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const PlusSquare = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

PlusSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
PlusSquare.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Plus = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Plus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Plus.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Pocket = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Pocket.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Pocket.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Power = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Power.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Power.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Printer = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Printer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Printer.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Radio = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Radio.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Radio.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const RefreshCcw = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

RefreshCcw.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
RefreshCcw.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const RefreshCw = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

RefreshCw.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
RefreshCw.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Repeat = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Repeat.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Repeat.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Rewind = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Rewind.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Rewind.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const RotateCcw = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

RotateCcw.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
RotateCcw.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const RotateCw = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

RotateCw.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
RotateCw.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Rss = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Rss.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Rss.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Save = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Save.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Save.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Scissors = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Scissors.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Scissors.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Search = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Search.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Search.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Send = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Send.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Send.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Server = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Server.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Server.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Settings = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Settings.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Settings.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Share2 = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Share2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Share2.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Share = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Share.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Share.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const ShieldOff = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

ShieldOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ShieldOff.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Shield = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Shield.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Shield.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const ShoppingBag = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

ShoppingBag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ShoppingBag.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const ShoppingCart = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

ShoppingCart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ShoppingCart.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Shuffle = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Shuffle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Shuffle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Sidebar = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Sidebar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Sidebar.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const SkipBack = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

SkipBack.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
SkipBack.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const SkipForward = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

SkipForward.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
SkipForward.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Slack = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Slack.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Slack.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Slash = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Slash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Slash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Sliders = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Sliders.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Sliders.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Smartphone = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Smartphone.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Smartphone.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Smile = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Smile.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Smile.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Speaker = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Speaker.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Speaker.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Square = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Square.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Square.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Star = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Star.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Star.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const StopCircle = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

StopCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
StopCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Sun = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Sun.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Sun.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Sunrise = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Sunrise.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Sunrise.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Sunset = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Sunset.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Sunset.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Tablet = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Tablet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Tablet.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Tag = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Tag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Tag.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Target = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Target.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Target.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Terminal = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Terminal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Terminal.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Thermometer = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Thermometer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Thermometer.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const ThumbsDown = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

ThumbsDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ThumbsDown.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const ThumbsUp = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

ThumbsUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ThumbsUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const ToggleLeft = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

ToggleLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ToggleLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const ToggleRight = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

ToggleRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ToggleRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Trash2 = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Trash2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Trash2.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Trash = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Trash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Trash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Trello = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Trello.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Trello.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const TrendingDown = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

TrendingDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
TrendingDown.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const TrendingUp = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

TrendingUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
TrendingUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Triangle = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Triangle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Triangle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Truck = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Truck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Truck.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Tv = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Tv.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Tv.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Twitter = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Twitter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Twitter.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Type = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Type.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Type.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Umbrella = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Umbrella.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Umbrella.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Underline = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Underline.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Underline.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Unlock = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Unlock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Unlock.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const UploadCloud = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

UploadCloud.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
UploadCloud.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Upload = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Upload.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Upload.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const UserCheck = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

UserCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
UserCheck.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const UserMinus = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

UserMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
UserMinus.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const UserPlus = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

UserPlus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
UserPlus.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const UserX = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

UserX.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
UserX.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const User = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

User.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
User.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Users = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Users.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Users.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const VideoOff = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

VideoOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
VideoOff.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Video = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Video.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Video.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Voicemail = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Voicemail.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Voicemail.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Volume1 = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Volume1.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Volume1.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Volume2 = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Volume2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Volume2.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const VolumeX = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

VolumeX.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
VolumeX.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Volume = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Volume.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Volume.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Watch = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Watch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Watch.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const WifiOff = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

WifiOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
WifiOff.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Wifi = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Wifi.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Wifi.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Wind = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Wind.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Wind.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const XCircle = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

XCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
XCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const XOctagon = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

XOctagon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
XOctagon.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const XSquare = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

XSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
XSquare.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const X = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

X.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
X.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Youtube = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Youtube.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Youtube.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const ZapOff = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

ZapOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ZapOff.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const Zap = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

Zap.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Zap.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const ZoomIn = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

ZoomIn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ZoomIn.defaultProps = {
  color: 'currentColor',
  size: '24'
};

const ZoomOut = props => {
  const {
    color,
    size,
    ...otherProps
  } = props;
  return React.createElement("svg", _extends({
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
};

ZoomOut.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ZoomOut.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export { Activity, Airplay, AlertCircle, AlertOctagon, AlertTriangle, AlignCenter, AlignJustify, AlignLeft, AlignRight, Anchor, Aperture, Archive, ArrowDown, ArrowDownCircle, ArrowDownLeft, ArrowDownRight, ArrowLeft, ArrowLeftCircle, ArrowRight, ArrowRightCircle, ArrowUp, ArrowUpCircle, ArrowUpLeft, ArrowUpRight, AtSign, Award, BarChart, BarChart2, Battery, BatteryCharging, Bell, BellOff, Bluetooth, Bold, Book, BookOpen, Bookmark, Box, Briefcase, Calendar, Camera, CameraOff, Cast, Check, CheckCircle, CheckSquare, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, ChevronsDown, ChevronsLeft, ChevronsRight, ChevronsUp, Chrome, Circle, Clipboard, Clock, Cloud, CloudDrizzle, CloudLightning, CloudOff, CloudRain, CloudSnow, Code, Codepen, Codesandbox, Coffee, Columns, Command, Compass, Copy, CornerDownLeft, CornerDownRight, CornerLeftDown, CornerLeftUp, CornerRightDown, CornerRightUp, CornerUpLeft, CornerUpRight, Cpu, CreditCard, Crop, Crosshair, Database, Delete, Disc, DollarSign, Download, DownloadCloud, Droplet, Edit, Edit2, Edit3, ExternalLink, Eye, EyeOff, Facebook, FastForward, Feather, Figma, File, FileMinus, FilePlus, FileText, Film, Filter, Flag, Folder, FolderMinus, FolderPlus, Frown, Gift, GitBranch, GitCommit, GitHub, GitMerge, GitPullRequest, Gitlab, Globe, Grid, HardDrive, Hash, Headphones, Heart, HelpCircle, Hexagon, Home, Image, Inbox, Info, Instagram, Italic, Key, Layers, Layout, LifeBuoy, Link, Link2, Linkedin, List, Loader, Lock, LogIn, LogOut, Mail, Map, MapPin, Maximize, Maximize2, Meh, Menu, MessageCircle, MessageSquare, Mic, MicOff, Minimize, Minimize2, Minus, MinusCircle, MinusSquare, Monitor, Moon, MoreHorizontal, MoreVertical, MousePointer, Move, Music, Navigation, Navigation2, Octagon, Package, Paperclip, Pause, PauseCircle, PenTool, Percent, Phone, PhoneCall, PhoneForwarded, PhoneIncoming, PhoneMissed, PhoneOff, PhoneOutgoing, PieChart, Play, PlayCircle, Plus, PlusCircle, PlusSquare, Pocket, Power, Printer, Radio, RefreshCcw, RefreshCw, Repeat, Rewind, RotateCcw, RotateCw, Rss, Save, Scissors, Search, Send, Server, Settings, Share, Share2, Shield, ShieldOff, ShoppingBag, ShoppingCart, Shuffle, Sidebar, SkipBack, SkipForward, Slack, Slash, Sliders, Smartphone, Smile, Speaker, Square, Star, StopCircle, Sun, Sunrise, Sunset, Tablet, Tag, Target, Terminal, Thermometer, ThumbsDown, ThumbsUp, ToggleLeft, ToggleRight, Trash, Trash2, Trello, TrendingDown, TrendingUp, Triangle, Truck, Tv, Twitter, Type, Umbrella, Underline, Unlock, Upload, UploadCloud, User, UserCheck, UserMinus, UserPlus, UserX, Users, Video, VideoOff, Voicemail, Volume, Volume1, Volume2, VolumeX, Watch, Wifi, WifiOff, Wind, X, XCircle, XOctagon, XSquare, Youtube, Zap, ZapOff, ZoomIn, ZoomOut };

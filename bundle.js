'use strict';

const stepScale = (min, max, numberOfSteps) => {
  const _numberOfSteps = numberOfSteps - 1;
  const scaleBy = (max - min) / _numberOfSteps;

  const arr = [];
  for (let i = 0; i <= _numberOfSteps; i += 1) {
    arr.push(min + scaleBy * i);
  }
  return arr
};

module.exports = stepScale;

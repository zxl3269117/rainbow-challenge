const _ = require("underscore");

module.exports.convertDataForState = (data) => {
  var total = 0;
  var colorCount = {
    red: 0,
    orange: 0,
    yellow: 0,
    green: 0,
    ['blue/purple/black']: 0,
    white: 0,
    tan: 0
  };

  // conver data ===> {red: [], orange: [], ...}
  var convertedData = _.reduce(data, (accumulator, item) => {
    var color = item.color;
    var count = item.count;

    // count total
    total += count;
    // count color
    colorCount[color] += count;

    if(accumulator[color]) {
      accumulator[color].push(item);
    } else {
      accumulator[color] = [item];
    }
    return accumulator;
  }, {})

  return {
    data: convertedData,
    total,
    colorCount
  };
}

module.exports.missedColors = (colorCount) => {
  var missed = [];
  _.each(colorCount, (count, color) => {
    if (!count) {
      missed.push(color)
    }
  });
  return missed;
}
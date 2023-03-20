var add= function add(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return ('Invalid arguments: both must be numbers');
  }
  return a + b;
}

var sub = function sub(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return ('Invalid arguments: both must be numbers');
  }
  return a - b;
}

var multi = function multi(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return ('Invalid arguments: both must be numbers');
  }
  return a * b;
}

module.exports = {
    add:add ,
    sub: sub,
    multi: multi 
  };
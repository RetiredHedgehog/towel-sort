
module.exports = function towelSort (matrix) {
  if ( !matrix || matrix.length === 0 ) return [];

  return ('' + matrix.map((elem, index) => {
    if ( index % 2 === 0 ) return elem;
    return elem.reverse();
  })).split(',').map(elem => parseInt(elem, 10));
}

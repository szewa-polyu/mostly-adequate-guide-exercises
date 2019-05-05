// Refactor `fastestCar` using `compose()` and other functions in pointfree-style.
// Hint, the `flip` function may come in handy.

// fastestCar :: [Car] -> String
// const fastestCar = (cars) => {
//   const sorted = sortBy(car => car.horsepower, cars);
//   const fastest = last(sorted);
//   return concat(fastest.name, ' is the fastest');
// };

// for debugging
const trace = curry((tag, x) => {
  console.log(tag, x);
  return x;
});

const fastestCar = compose(flip(concat)(' is the fastest'), trace('after prop("name"):'), prop('name'), last, sortBy(prop('horsepower')));

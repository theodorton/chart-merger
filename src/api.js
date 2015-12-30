function indexStreams(streamA, ...otherStreams) {
  const streamsIndexedByKey = {};

  streamA.forEach(function(dataPoint){
    streamsIndexedByKey[dataPoint.x] = [dataPoint.y];
  });

  otherStreams.forEach(function(streamB){
    streamB.forEach(function(dataPoint){
      const obj = streamsIndexedByKey[dataPoint.x];
      if (obj) {
        obj.push(dataPoint.y);
      };
    });
  });

  return streamsIndexedByKey;
}

function processIndexedStreams(indexedStreams, fn) {
  const newStream = [];

  const keys = Object.keys(indexedStreams);
  keys.forEach(function(key){
    const arr = indexedStreams[key];
    const x = parseFloat(key, 10);
    const y = fn(...arr);
    newStream.push({ x, y });
  });

  return newStream;
}

function sumOf(numbers) {
  let sum = 0;
  numbers.forEach(function(number){
    sum += number;
  })
  return sum;
}

function generateStreamFunction(fn) {
  return function(...streams) {
    const indexedStreams = indexStreams(...streams);
    return processIndexedStreams(indexedStreams, fn);
  };
}

export const multiply = generateStreamFunction(function(product, ...numbers){
  numbers.forEach(function(number){
    product *= number;
  });
  return product;
});

export const divide = generateStreamFunction(function(dividend, ...divisors){
  divisors.forEach(function(divisor) {
    dividend /= divisor;
  });
  return Math.round(dividend * 100) / 100;
});

export const sum = generateStreamFunction(function(...numbers){
  return sumOf(numbers);
});

export const average = generateStreamFunction(function(...numbers){
  return sumOf(numbers) / numbers.length;
});

export default {
  multiply,
  divide,
  sum,
  average
}
